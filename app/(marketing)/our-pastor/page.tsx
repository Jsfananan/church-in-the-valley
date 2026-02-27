import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Our Pastor | ${SITE_NAME}`,
  description:
    "Meet Pastor Troy Nicely, head pastor at The Church In The Valley in Milton, West Virginia.",
};

export default function OurPastorPage() {
  return (
    <>
      <div className="bg-gradient-to-b from-church-maroon to-church-burgundy pt-32 sm:pt-40 pb-16 sm:pb-24 text-center px-6">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-church-cream mb-4">
          Our Pastor
        </h1>
        <p className="text-base sm:text-lg text-church-cream/80 max-w-xl mx-auto">
          Meet the shepherd of our church family.
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16 sm:py-24">
        <div className="bg-church-white rounded-2xl overflow-hidden border border-church-border shadow-sm">
          <div className="bg-church-warm-gray aspect-[3/2] sm:aspect-[2/1] flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-20 h-20 text-church-gold/30"
              aria-hidden="true"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>

          <div className="p-8 sm:p-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold text-church-text mb-1">
              Troy Nicely
            </h2>
            <p className="text-sm uppercase tracking-wider text-church-gold font-medium mb-6">
              Head Pastor
            </p>
            <p className="text-church-muted leading-relaxed mb-8 max-w-xl mx-auto">
              Pastor Troy leads our church family with a heart for God&apos;s
              Word and a deep passion for the Milton community. His preaching is
              rooted in Scripture, and his ministry is focused on helping every
              believer grow in faith and discover their God-given purpose.
            </p>

            <div className="bg-church-warm-gray rounded-xl p-6 sm:p-8 max-w-lg mx-auto">
              <h3 className="text-lg font-semibold text-church-text mb-2">
                Weekly Encouragement from Pastor Troy
              </h3>
              <p className="text-sm text-church-muted leading-relaxed mb-5">
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
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
