"use client";

import { clsx } from "clsx";
import { SectionHeader } from "@/components/ui/section-header";
import { SERVICE_TIMES, CONTACT } from "@/lib/constants";
import { useIntersection } from "@/hooks/use-intersection";

export function ServiceTimesSection() {
  const { ref, isVisible } = useIntersection(0.1);

  return (
    <section className="bg-church-maroon py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Join Us"
          title="Come Worship With Us"
          theme="dark"
        />

        <div
          ref={ref}
          className="grid sm:grid-cols-3 gap-6 mt-10 sm:mt-14"
        >
          {SERVICE_TIMES.map((item, i) => (
            <div
              key={`${item.day}-${item.service}`}
              className={clsx(
                "bg-church-burgundy/40 border border-church-gold/20 rounded-2xl p-6 sm:p-8 text-center",
                isVisible && "animate-fade-in"
              )}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-church-gold/70 mb-2">
                {item.day}
              </p>
              <p className="text-lg sm:text-xl font-semibold text-church-cream mb-3">
                {item.service}
              </p>
              <p className="font-heading text-3xl sm:text-4xl text-church-gold">
                {item.time}
              </p>
            </div>
          ))}
        </div>

        <div
          className={clsx(
            "mt-8 text-center",
            isVisible && "animate-fade-in [animation-delay:400ms]"
          )}
        >
          <p className="text-church-cream/70 mb-3">
            {CONTACT.fullAddress}
          </p>
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${CONTACT.mapQuery}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-church-gold hover:text-church-gold-light font-semibold transition-colors duration-200 underline-offset-4 hover:underline"
          >
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
