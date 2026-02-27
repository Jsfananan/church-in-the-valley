"use client";

import Link from "next/link";
import { clsx } from "clsx";
import { SectionHeader } from "@/components/ui/section-header";
import { MINISTRY_CARDS } from "@/lib/constants";
import { useIntersection } from "@/hooks/use-intersection";

function MusicIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function CompassIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  );
}

const CARD_GRADIENTS: Record<string, string> = {
  music: "from-[#4A8DC2] to-[#2E6B9C]",
  users: "from-[#6AADD8] to-[#4A8DC2]",
  compass: "from-[#E8A317] to-[#C78E14]",
};

function CardIcon({ icon }: { icon: string }) {
  if (icon === "music") return <MusicIcon />;
  if (icon === "users") return <UsersIcon />;
  return <CompassIcon />;
}

export function MinistryCards() {
  const { ref, isVisible } = useIntersection(0.1);

  return (
    <section className="bg-church-warm-gray py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Get Involved"
          title="Find Your Place"
          subtitle="Whether through worship, community, or personal growth — there's a place for you here."
        />

        <div
          ref={ref}
          className="grid sm:grid-cols-3 gap-6 mt-10 sm:mt-14"
        >
          {MINISTRY_CARDS.map((card, i) => (
            <Link
              key={card.title}
              href={card.href}
              className={clsx(
                "group relative overflow-hidden rounded-2xl aspect-[3/4] sm:aspect-[2/3]",
                "hover:-translate-y-1 hover:shadow-2xl transition-all duration-300",
                isVisible && "animate-fade-in"
              )}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div
                className={clsx(
                  "absolute inset-0 bg-gradient-to-b",
                  CARD_GRADIENTS[card.icon]
                )}
              />

              <div className="absolute inset-0 flex items-center justify-center opacity-50 text-white">
                <CardIcon icon={card.icon} />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
