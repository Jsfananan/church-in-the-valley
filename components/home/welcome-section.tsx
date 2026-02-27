"use client";

import { clsx } from "clsx";
import { SectionHeader } from "@/components/ui/section-header";
import { MISSION_TEXT } from "@/lib/constants";
import { useIntersection } from "@/hooks/use-intersection";

function MusicNoteIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-church-gold shrink-0"
      aria-hidden="true"
    >
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-church-gold shrink-0"
      aria-hidden="true"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function CompassIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-church-gold shrink-0"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  );
}

const VALUES = [
  {
    Icon: MusicNoteIcon,
    title: "Lift the Name of Jesus",
    description: "Worship is at the heart of everything we do.",
  },
  {
    Icon: HeartIcon,
    title: "Serve the Lost",
    description:
      "We are commissioned to tell people a loving God is calling them home.",
  },
  {
    Icon: CompassIcon,
    title: "Activate Your Purpose",
    description: "Discover the God-given purpose inside you.",
  },
];

export function WelcomeSection() {
  const { ref, isVisible } = useIntersection(0.1);

  return (
    <section className="bg-church-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader eyebrow="Our Heart" title="A Large Vision, A Warm Welcome" />

        <div
          ref={ref}
          className="grid md:grid-cols-2 gap-10 lg:gap-16 mt-10 sm:mt-14 items-center"
        >
          <div>
            <p
              className={clsx(
                "text-base sm:text-lg text-church-text leading-relaxed mb-4",
                isVisible && "animate-fade-in"
              )}
            >
              {MISSION_TEXT.intro}
            </p>
            <p
              className={clsx(
                "text-base sm:text-lg text-church-muted leading-relaxed mb-4",
                isVisible && "animate-fade-in [animation-delay:100ms]"
              )}
            >
              {MISSION_TEXT.mission}
            </p>
            <p
              className={clsx(
                "text-base sm:text-lg text-church-muted leading-relaxed",
                isVisible && "animate-fade-in [animation-delay:200ms]"
              )}
            >
              {MISSION_TEXT.belief}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {VALUES.map(({ Icon, title, description }, i) => (
              <div
                key={title}
                className={clsx(
                  "flex items-start gap-4 p-5 rounded-xl bg-church-warm-gray/50 border border-church-border",
                  isVisible && "animate-fade-in"
                )}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="mt-0.5">
                  <Icon />
                </div>
                <div>
                  <h3 className="font-semibold text-church-text mb-1">{title}</h3>
                  <p className="text-sm text-church-muted leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
