import type { Metadata } from "next";
import { VisitInfo } from "@/components/visit/visit-info";
import { SITE_NAME, CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Visit Us | ${SITE_NAME}`,
  description:
    "Plan your visit to The Church In The Valley in Milton, West Virginia. Find service times, directions, and contact information.",
};

export default function VisitPage() {
  return (
    <>
      <div className="bg-gradient-to-b from-church-maroon to-church-burgundy pt-32 sm:pt-40 pb-16 sm:pb-24 text-center px-6">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-church-cream mb-4">
          Visit Us
        </h1>
        <p className="text-base sm:text-lg text-church-cream/80 max-w-xl mx-auto">
          We would love to meet you. Come experience the warmth and fellowship of our church family.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-24">
        <VisitInfo />
        <div className="mt-16 sm:mt-24 max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-church-maroon mb-2">
            Get In Touch
          </h2>
          <p className="text-church-muted mb-8">
            Have a question or prayer request? We would love to hear from you.
          </p>
          <a
            href={`mailto:${CONTACT.email}`}
            className="inline-flex items-center justify-center gap-2 bg-church-gold text-church-maroon hover:bg-church-gold-light px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            Email Us
          </a>
          <p className="mt-4 text-sm text-church-muted">
            {CONTACT.email}
          </p>
        </div>
      </div>
    </>
  );
}
