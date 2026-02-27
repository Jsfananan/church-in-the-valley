"use client";

import { clsx } from "clsx";
import { CONTACT, SERVICE_TIMES } from "@/lib/constants";
import { useIntersection } from "@/hooks/use-intersection";

export function VisitInfo() {
  const { ref, isVisible } = useIntersection();

  return (
    <div
      ref={ref}
      className={clsx(
        "grid lg:grid-cols-2 gap-10 lg:gap-16 transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
    >
      <div>
        <div className="bg-church-white rounded-2xl p-6 sm:p-8 border border-church-border shadow-sm">
          <h3 className="text-xl font-semibold text-church-maroon mb-6">Service Times</h3>
          <div>
            {SERVICE_TIMES.map((item, i) => (
              <div
                key={i}
                className={clsx(
                  "flex justify-between items-center py-3 border-b border-church-border",
                  i === SERVICE_TIMES.length - 1 && "border-0"
                )}
              >
                <div>
                  <div className="text-xs uppercase tracking-wider text-church-gold">{item.day}</div>
                  <div className="text-base font-medium text-church-text">{item.service}</div>
                </div>
                <div className="font-heading text-2xl text-church-burgundy">{item.time}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold text-church-maroon mb-4">Get In Touch</h3>
          <div className="space-y-3">
            <a
              href={`https://maps.google.com/maps?q=${CONTACT.mapQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-church-muted hover:text-church-text transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 text-church-gold flex-shrink-0"
                aria-hidden="true"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>{CONTACT.fullAddress}</span>
            </a>

            <a
              href={`tel:${CONTACT.phone.replace(/[^\d]/g, "")}`}
              className="flex items-center gap-3 text-church-muted hover:text-church-text transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 text-church-gold flex-shrink-0"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.45 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 5.55 5.55l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" />
              </svg>
              <span>{CONTACT.phone}</span>
            </a>

            <a
              href={CONTACT.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-church-muted hover:text-church-text transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-church-gold flex-shrink-0"
                aria-hidden="true"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span>Facebook</span>
            </a>
          </div>
        </div>
      </div>

      <div className="rounded-2xl overflow-hidden shadow-sm border border-church-border aspect-video lg:aspect-auto lg:h-full min-h-[400px]">
        <iframe
          src={`https://maps.google.com/maps?q=${CONTACT.mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
          className="w-full h-full border-0"
          title="Church In The Valley location map"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
