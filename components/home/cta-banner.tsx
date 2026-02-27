"use client";

import Link from "next/link";
import { clsx } from "clsx";
import { useIntersection } from "@/hooks/use-intersection";
import { CONTACT } from "@/lib/constants";

export function CtaBanner() {
  const { ref, isVisible } = useIntersection(0.2);

  return (
    <section className="bg-church-burgundy py-14 sm:py-24">
      <div ref={ref} className="max-w-3xl mx-auto px-6 text-center">
        <h2
          className={clsx(
            "font-heading text-3xl sm:text-4xl md:text-5xl text-church-cream mb-4",
            isVisible && "animate-fade-in"
          )}
        >
          You Are Welcome Here
        </h2>

        <p
          className={clsx(
            "text-base sm:text-lg text-church-cream/70 mb-8 sm:mb-10",
            isVisible && "animate-fade-in [animation-delay:100ms]"
          )}
        >
          No matter where you've been or where you're coming from, there's a
          place for you at The Church In The Valley.
        </p>

        <div
          className={clsx(
            "flex flex-col sm:flex-row gap-3 justify-center",
            isVisible && "animate-fade-in [animation-delay:200ms]"
          )}
        >
          <Link
            href="/visit"
            className="inline-flex items-center justify-center bg-church-gold text-church-maroon hover:bg-church-gold-light px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 shadow-md"
          >
            Plan a Visit
          </Link>

          <a
            href={CONTACT.giving}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border-2 border-church-cream/40 text-church-cream hover:bg-church-cream/10 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200"
          >
            Give Online
          </a>
        </div>

        <div
          className={clsx(
            "mt-10 sm:mt-12 pt-8 border-t border-church-cream/15",
            isVisible && "animate-fade-in [animation-delay:300ms]"
          )}
        >
          <p className="text-church-cream/90 font-semibold mb-1">
            {CONTACT.fullAddress}
          </p>
          <p className="text-church-cream/60 text-sm mb-3">
            {CONTACT.phone}
          </p>
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${CONTACT.mapQuery}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-church-gold hover:text-church-gold-light text-sm font-semibold transition-colors duration-200 underline-offset-4 hover:underline"
          >
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
