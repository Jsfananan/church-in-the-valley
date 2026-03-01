"use client";

import { clsx } from "clsx";
import { SectionHeader } from "@/components/ui/section-header";
import { CONTACT } from "@/lib/constants";
import { useIntersection } from "@/hooks/use-intersection";

export function DirectionsSection() {
  const { ref, isVisible } = useIntersection(0.1);

  return (
    <section className="bg-church-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Find Us"
          title="Come Visit Us"
          subtitle={CONTACT.fullAddress}
        />

        <div
          ref={ref}
          className={clsx(
            "mt-10 sm:mt-14 grid lg:grid-cols-5 gap-8 items-stretch transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          <div className="lg:col-span-3 rounded-2xl overflow-hidden border border-church-border shadow-sm min-h-[350px]">
            <iframe
              src={`https://maps.google.com/maps?q=${CONTACT.mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              className="w-full h-full border-0 min-h-[350px]"
              title="Church In The Valley location map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="lg:col-span-2 flex flex-col justify-center gap-6">
            <div className="bg-church-cream rounded-2xl p-6 sm:p-8 border border-church-border">
              <h3 className="font-semibold text-church-maroon mb-4 text-lg">
                Service Times
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-church-text">Sunday School</span>
                  <span className="font-semibold text-church-burgundy">10:10 AM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-church-text">Sunday Service</span>
                  <span className="font-semibold text-church-burgundy">11:00 AM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-church-text">Wednesday Night</span>
                  <span className="font-semibold text-church-burgundy">6:00 PM</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${CONTACT.mapQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-church-gold text-church-maroon hover:bg-church-gold-light px-6 py-4 rounded-xl font-semibold text-base transition-all duration-200 shadow-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Get Directions
              </a>

              <a
                href={`tel:${CONTACT.phone.replace(/[^\d]/g, "")}`}
                className="inline-flex items-center justify-center gap-2 border-2 border-church-burgundy/20 text-church-burgundy hover:bg-church-burgundy/5 px-6 py-4 rounded-xl font-semibold text-base transition-all duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.45 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 5.55 5.55l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" />
                </svg>
                Call {CONTACT.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
