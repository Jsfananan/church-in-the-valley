"use client";

import { clsx } from "clsx";
import { useIntersection } from "@/hooks/use-intersection";

const PLACEHOLDER_SERVICES = [
  { title: "Walking in Faith", speaker: "Pastor", date: "Coming Soon", scripture: "Hebrews 11:1" },
  {
    title: "The Power of Prayer",
    speaker: "Pastor",
    date: "Coming Soon",
    scripture: "Philippians 4:6-7",
  },
  {
    title: "Finding Your Purpose",
    speaker: "Pastor",
    date: "Coming Soon",
    scripture: "Jeremiah 29:11",
  },
];

export function ServicesList() {
  const { ref, isVisible } = useIntersection();

  return (
    <div
      ref={ref}
      className={clsx(
        "grid sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0 stagger-children" : "opacity-0 translate-y-6"
      )}
    >
      {PLACEHOLDER_SERVICES.map((service, i) => (
        <div
          key={i}
          className="bg-church-white rounded-2xl overflow-hidden border border-church-border shadow-sm"
        >
          <div className="aspect-video bg-church-maroon flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-16 h-16 text-church-gold/40"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <polygon points="10 8 16 12 10 16 10 8" />
            </svg>
          </div>
          <div className="p-5">
            <h3 className="text-base font-semibold text-church-maroon mb-1">{service.title}</h3>
            <p className="text-sm text-church-gold italic mb-2">{service.scripture}</p>
            <p className="text-xs text-church-muted">
              {service.speaker} · {service.date}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
