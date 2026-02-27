"use client";

import Link from "next/link";
import Image from "next/image";
import { clsx } from "clsx";
import { CONTACT } from "@/lib/constants";

export function HeroSection() {
  return (
    <div className="relative min-h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-church-maroon via-church-burgundy to-church-maroon" />

      <Image
        src="/images/church-exterior.jpg"
        alt="Aerial view of The Church In The Valley in Milton, West Virginia"
        fill
        priority
        quality={85}
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/70" />

      <div className="relative z-10 min-h-[100svh] flex flex-col items-center justify-center px-6 py-24">
        <div className="w-full max-w-3xl text-center">
          <p
            className={clsx(
              "text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-church-gold mb-5 sm:mb-6",
              "opacity-0 animate-fade-in"
            )}
            style={{ animationDelay: "0ms" }}
          >
            Milton, West Virginia
          </p>

          <h1
            className={clsx(
              "font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-6 sm:mb-8 leading-[1.1]",
              "opacity-0 animate-fade-in drop-shadow"
            )}
            style={{ animationDelay: "150ms" }}
          >
            Where Every Soul Belongs
          </h1>

          <p
            className={clsx(
              "text-base sm:text-lg text-white/85 max-w-xl mx-auto mb-4",
              "opacity-0 animate-fade-in"
            )}
            style={{ animationDelay: "300ms" }}
          >
            A small church with a large vision for the lost and a passion to
            help every believer achieve their God-given purpose.
          </p>

          <div
            className={clsx(
              "inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 text-sm text-white/90 mb-10 sm:mb-12",
              "opacity-0 animate-fade-in"
            )}
            style={{ animationDelay: "400ms" }}
          >
            Sundays 10:10 &amp; 11 AM · Wednesdays 6 PM
          </div>

          <div
            className={clsx(
              "flex flex-col sm:flex-row gap-3 justify-center",
              "opacity-0 animate-fade-in"
            )}
            style={{ animationDelay: "450ms" }}
          >
            <Link
              href="/visit"
              className="inline-flex items-center justify-center bg-church-gold text-church-maroon hover:bg-church-gold-light rounded-xl px-7 py-3.5 font-semibold text-base shadow-md transition-all duration-200"
            >
              Plan a Visit
            </Link>

            <a
              href={CONTACT.giving}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white hover:bg-white/10 rounded-xl px-7 py-3.5 font-semibold text-base transition-all duration-200"
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
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              Give
            </a>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animate-pulse-soft"
        style={{ animationDelay: "600ms" }}
        aria-hidden="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white/30"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </div>
  );
}
