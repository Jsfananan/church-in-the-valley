import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Salvation Plan | ${SITE_NAME}`,
  description:
    "God loves you and has a plan for your life. Learn about the gift of salvation through Jesus Christ.",
};

export default function SalvationPlanPage() {
  return (
    <>
      <div className="bg-gradient-to-b from-church-maroon to-church-burgundy pt-32 sm:pt-40 pb-16 sm:pb-24 text-center px-6">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-church-cream mb-4">
          God&apos;s Plan of Salvation
        </h1>
        <p className="text-base sm:text-lg text-church-cream/80 max-w-xl mx-auto">
          The greatest gift ever given — and it is for you.
        </p>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-16 sm:py-24">
        <div className="space-y-12">
          <section>
            <div className="flex items-center gap-4 mb-4">
              <span className="flex-shrink-0 w-12 h-12 rounded-full bg-church-gold flex items-center justify-center font-heading text-2xl text-church-maroon">
                1
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl text-church-maroon">
                God Loves You
              </h2>
            </div>
            <div className="border-l-4 border-church-gold pl-6 mb-4">
              <p className="text-church-muted italic">
                &ldquo;For God so loved the world that he gave his one and only Son, that whoever
                believes in him shall not perish but have eternal life.&rdquo;
              </p>
              <p className="text-sm text-church-gold mt-2">— John 3:16</p>
            </div>
            <p className="text-church-text leading-relaxed">
              God created you with a purpose and loves you more than you can imagine. He desires a
              personal relationship with you.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-4">
              <span className="flex-shrink-0 w-12 h-12 rounded-full bg-church-gold flex items-center justify-center font-heading text-2xl text-church-maroon">
                2
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl text-church-maroon">
                We All Have Sinned
              </h2>
            </div>
            <div className="border-l-4 border-church-gold pl-6 mb-4">
              <p className="text-church-muted italic">
                &ldquo;For all have sinned and fall short of the glory of God.&rdquo;
              </p>
              <p className="text-sm text-church-gold mt-2">— Romans 3:23</p>
            </div>
            <p className="text-church-text leading-relaxed">
              Sin separates us from God. Every person has sinned and fallen short of God&apos;s
              perfect standard. But God did not leave us without hope.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-4">
              <span className="flex-shrink-0 w-12 h-12 rounded-full bg-church-gold flex items-center justify-center font-heading text-2xl text-church-maroon">
                3
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl text-church-maroon">
                Jesus Paid the Price
              </h2>
            </div>
            <div className="border-l-4 border-church-gold pl-6 mb-4">
              <p className="text-church-muted italic">
                &ldquo;But God demonstrates his own love for us in this: While we were still
                sinners, Christ died for us.&rdquo;
              </p>
              <p className="text-sm text-church-gold mt-2">— Romans 5:8</p>
            </div>
            <p className="text-church-text leading-relaxed">
              Jesus Christ, the Son of God, took your place on the cross. He paid the penalty for
              your sins so that you could be forgiven and have eternal life.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-4">
              <span className="flex-shrink-0 w-12 h-12 rounded-full bg-church-gold flex items-center justify-center font-heading text-2xl text-church-maroon">
                4
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl text-church-maroon">
                Receive the Gift
              </h2>
            </div>
            <div className="border-l-4 border-church-gold pl-6 mb-4">
              <p className="text-church-muted italic">
                &ldquo;If you declare with your mouth, &apos;Jesus is Lord,&apos; and believe in
                your heart that God raised him from the dead, you will be saved.&rdquo;
              </p>
              <p className="text-sm text-church-gold mt-2">— Romans 10:9</p>
            </div>
            <p className="text-church-text leading-relaxed">
              Salvation is a free gift from God. You receive it by faith — believing in Jesus
              Christ, confessing your sins, and accepting Him as your Lord and Savior.
            </p>
          </section>

          <div className="bg-church-burgundy rounded-2xl p-8 sm:p-12 text-center">
            <h3 className="font-heading text-2xl sm:text-3xl text-church-cream mb-4">
              Ready to Take the Next Step?
            </h3>
            <p className="text-church-cream/80 mb-6 max-w-lg mx-auto">
              We would love to walk with you on this journey. Visit us this Sunday or give us a
              call — we are here for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/visit"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-base bg-church-gold text-church-maroon hover:bg-church-gold-light transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Plan a Visit
              </Link>
              <a
                href={`tel:${CONTACT.phone.replace(/[^\d]/g, "")}`}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-base border-2 border-church-cream/40 text-church-cream hover:bg-church-cream/10 transition-all duration-200"
              >
                Call {CONTACT.phone}
              </a>
            </div>
          </div>

          <div className="bg-church-warm-gray rounded-2xl p-8 text-center">
            <p className="text-church-muted">
              Content for this page is being updated with our church&apos;s specific salvation
              message. Please check back soon.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
