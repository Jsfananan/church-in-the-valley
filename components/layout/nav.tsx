"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { NAV_LINKS, CONTACT } from "@/lib/constants";

const GIVING_URL = CONTACT.giving;

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useScrollPosition(50);
  const pathname = usePathname();

  return (
    <>
      <nav
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300",
          isScrolled
            ? "bg-church-maroon shadow-lg"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex flex-col gap-0.5">
            <div className="font-heading text-xl text-church-cream">
              The Church In The Valley
            </div>
            <div className="text-xs text-church-cream/70">Milton, WV</div>
          </Link>

          <div className="hidden lg:flex items-center gap-5">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    "text-sm transition-colors duration-300",
                    isActive
                      ? "text-church-cream"
                      : "text-church-cream/80 hover:text-church-cream"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href={GIVING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(
                "inline-flex items-center justify-center px-5 py-2.5 text-sm rounded-xl",
                "bg-church-gold text-church-maroon hover:bg-church-gold-light font-semibold",
                "shadow-md hover:shadow-lg transition-all duration-200"
              )}
            >
              Give
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={clsx(
                "block h-0.5 w-6 bg-church-cream transition-all duration-300 origin-center",
                isMenuOpen && "rotate-45 translate-y-2"
              )}
            />
            <span
              className={clsx(
                "block h-0.5 w-6 bg-church-cream transition-all duration-300",
                isMenuOpen && "opacity-0"
              )}
            />
            <span
              className={clsx(
                "block h-0.5 w-6 bg-church-cream transition-all duration-300 origin-center",
                isMenuOpen && "-rotate-45 -translate-y-2"
              )}
            />
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-church-maroon/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="absolute top-0 left-0 right-0 bg-church-maroon/95 backdrop-blur-md border-b border-church-burgundy/30 shadow-lg">
            <div className="flex flex-col gap-1 p-6">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={clsx(
                      "px-4 py-3 rounded-lg transition-colors duration-300",
                      isActive
                        ? "bg-church-burgundy/50 text-church-cream"
                        : "text-church-cream/80 hover:bg-church-burgundy/50 hover:text-church-cream"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <a
                href={GIVING_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className={clsx(
                  "inline-flex items-center justify-center w-full mt-2 px-6 py-3 text-sm rounded-xl",
                  "bg-church-gold text-church-maroon hover:bg-church-gold-light font-semibold",
                  "shadow-md hover:shadow-lg transition-all duration-200"
                )}
              >
                Give
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
