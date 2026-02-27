"use client";

import { clsx } from "clsx";
import { PLACEHOLDER_EVENTS } from "@/lib/constants";
import { useIntersection } from "@/hooks/use-intersection";

export function EventsGrid() {
  const { ref, isVisible } = useIntersection();

  return (
    <div
      ref={ref}
      className={clsx(
        "grid sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0 stagger-children" : "opacity-0 translate-y-6"
      )}
    >
      {PLACEHOLDER_EVENTS.map((event, i) => (
        <div
          key={i}
          className="bg-church-white rounded-2xl p-6 border border-church-border shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
        >
          <span className="inline-flex bg-church-burgundy text-church-cream text-xs font-semibold px-3 py-1 rounded-full mb-4">
            {event.date}
          </span>
          <h3 className="text-lg font-semibold text-church-maroon mb-2">{event.title}</h3>
          <div className="flex items-center gap-2 text-sm text-church-gold mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 flex-shrink-0"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>
              {event.time} · {event.location}
            </span>
          </div>
          <p className="text-sm text-church-muted leading-relaxed">{event.description}</p>
        </div>
      ))}
    </div>
  );
}
