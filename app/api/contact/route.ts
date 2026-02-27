import { contactSchema } from "@/lib/contact-schema";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validated = contactSchema.parse(body);
    console.log("Contact form submission:", validated);
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
    return Response.json({ success: false, message: "An unexpected error occurred." }, { status: 500 });
  }
}
