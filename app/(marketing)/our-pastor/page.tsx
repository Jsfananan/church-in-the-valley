import type { Metadata } from "next";
import Image from "next/image";
import { SITE_NAME, CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Our Pastor | ${SITE_NAME}`,
  description:
    "Meet Pastor Troy Nicely, head pastor at The Church In The Valley in Milton, West Virginia.",
};

export default function OurPastorPage() {
  return (
    <>
      {/* Full-bleed hero with photo background */}
      <div className="relative min-h-[85vh] flex items-end overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/pastor-troy.jpg"
          alt="Pastor Troy Nicely"
          fill
          className="object-cover object-top"
          priority
          sizes="100vw"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-church-maroon via-church-maroon/60 to-transparent" />

        {/* Content overlay */}
        <div className="relative z-10 w-full pb-16 sm:pb-24 pt-40">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-church-gold mb-4">
              Our Pastor
            </p>
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-church-cream mb-3">
              Troy Nicely
            </h1>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-church-gold" />
              <p className="text-lg sm:text-xl text-church-gold font-medium">
                Head Pastor
              </p>
            </div>
            <p className="text-base sm:text-lg text-church-cream/80 leading-relaxed max-w-xl">
              Leading our church family with a heart for God&apos;s Word and a
              deep passion for the Milton community.
            </p>
          </div>
        </div>
      </div>

      {/* Bio section with pull quote */}
      <div className="bg-church-cream">
        <div className="max-w-5xl mx-auto px-6 py-16 sm:py-24">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Pull quote — left column */}
            <div className="lg:col-span-2 flex items-start">
              <div className="border-l-4 border-church-gold pl-6">
                <blockquote className="font-heading text-2xl sm:text-3xl text-church-maroon leading-snug">
                  &ldquo;We are His voice, hands, arms, and feet.&rdquo;
                </blockquote>
                <p className="mt-3 text-sm text-church-gold font-semibold uppercase tracking-wider">
                  Pastor Troy Nicely
                </p>
              </div>
            </div>

            {/* Bio text — right column */}
            <div className="lg:col-span-3 space-y-6 text-base sm:text-lg text-church-muted leading-relaxed">
              <p>
                Pastor Troy leads our church family with a heart for God&apos;s
                Word and a deep passion for the Milton community. His preaching
                is rooted in Scripture, and his ministry is focused on helping
                every believer grow in faith and discover their God-given
                purpose.
              </p>
              <p>
                It is the mission of our church to lift the name of Jesus and
                praise Him. We invite everyone to visit and feel the love that
                only God&apos;s people can share.
              </p>
              <p>
                The members of the Church In The Valley believe that we are the
                earthen vessels filled with God&apos;s Holy Spirit. We are
                honored to speak, touch, hold, and work for God with every
                talent we possess.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cards row */}
      <div className="bg-church-white">
        <div className="max-w-5xl mx-auto px-6 py-16 sm:py-24">
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Contact card */}
            <div className="bg-church-cream rounded-2xl p-6 sm:p-8 border border-church-border">
              <h2 className="text-lg font-semibold text-church-maroon mb-5">
                Connect with Pastor Troy
              </h2>
              <div className="space-y-4 text-sm">
                <a
                  href={`mailto:${CONTACT.pastorEmail}`}
                  className="flex items-center gap-3 text-church-muted hover:text-church-text transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-church-gold/10 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-church-gold" aria-hidden="true">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <span>{CONTACT.pastorEmail}</span>
                </a>
                <a
                  href={`tel:${CONTACT.pastorPhone.replace(/[^\d]/g, "")}`}
                  className="flex items-center gap-3 text-church-muted hover:text-church-text transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-church-gold/10 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-church-gold" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.45 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 5.55 5.55l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" />
                    </svg>
                  </div>
                  <span>{CONTACT.pastorPhone}</span>
                </a>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-3 text-church-muted hover:text-church-text transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-church-gold/10 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-church-gold" aria-hidden="true">
                      <path d="M3 9l9 6 9-6" />
                      <path d="M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-xs text-church-gold font-medium">Church Office</span>
                    <span>{CONTACT.email}</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Substack card */}
            <div className="bg-church-maroon rounded-2xl p-6 sm:p-8 text-church-cream">
              <h2 className="text-lg font-semibold mb-2">
                Weekly Encouragement
              </h2>
              <p className="text-sm text-church-cream/70 leading-relaxed mb-6">
                Pastor Troy writes uplifting, encouraging, and Bible-based
                content once or twice a week on Substack. Subscribe to receive
                encouragement straight to your inbox.
              </p>
              <a
                href="https://troynicely.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-church-gold text-church-maroon hover:bg-church-gold-light px-6 py-3 rounded-xl font-semibold text-base transition-all duration-200 shadow-md"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Read on Substack
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
