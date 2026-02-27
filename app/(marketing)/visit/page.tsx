import type { Metadata } from "next";
import { VisitInfo } from "@/components/visit/visit-info";
import { ContactForm } from "@/components/visit/contact-form";
import { SITE_NAME } from "@/lib/constants";

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
        <div className="mt-16 sm:mt-24 max-w-2xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-church-maroon text-center mb-2">
            Send Us a Message
          </h2>
          <p className="text-church-muted text-center mb-8">
            Have a question or prayer request? We are here for you.
          </p>
          <ContactForm />
        </div>
      </div>
    </>
  );
}
