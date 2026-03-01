import { Resend } from "resend";
import { contactSchema } from "@/lib/contact-schema";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = "churchinthevalley.info@gmail.com";
const FROM_EMAIL = "Contact Form <onboarding@resend.dev>";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validated = contactSchema.parse(body);

    const subjectMap: Record<string, string> = {
      general: "General Question",
      prayer: "Prayer Request",
      visit: "Planning a Visit",
      other: "Other",
    };

    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: `[Website] ${subjectMap[validated.subject] || validated.subject} — from ${validated.name}`,
      replyTo: validated.email,
      text: [
        `Name: ${validated.name}`,
        `Email: ${validated.email}`,
        validated.phone ? `Phone: ${validated.phone}` : null,
        `Subject: ${subjectMap[validated.subject] || validated.subject}`,
        "",
        validated.message,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    return Response.json(
      { success: true, message: "Thank you! We'll be in touch soon." },
      { status: 200 }
    );
  } catch (error: unknown) {
    if (error && typeof error === "object" && "errors" in error) {
      const zodError = error as { errors: Array<{ path: (string | number)[]; message: string }> };
      const fieldErrors: Record<string, string> = {};
      zodError.errors.forEach((err) => {
        fieldErrors[String(err.path[0])] = err.message;
      });
      return Response.json({ success: false, errors: fieldErrors }, { status: 400 });
    }
    console.error("Contact form error:", error);
    return Response.json({ success: false, message: "Something went wrong. Please try again." }, { status: 500 });
  }
}
