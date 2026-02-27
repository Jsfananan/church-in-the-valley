"use client";

import { clsx } from "clsx";
import { PLACEHOLDER_LEADERS } from "@/lib/constants";
import { useIntersection } from "@/hooks/use-intersection";

export function TeamGrid() {
  const { ref, isVisible } = useIntersection();

  return (
    <div
      ref={ref}
      className={clsx(
        "grid sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0 stagger-children" : "opacity-0 translate-y-6"
      )}
    >
      {PLACEHOLDER_LEADERS.map((leader, i) => (
        <div
          key={i}
          className="bg-church-white rounded-2xl overflow-hidden border border-church-border shadow-sm text-center"
        >
          <div className="bg-church-warm-gray aspect-square flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-16 h-16 text-church-gold/30"
              aria-hidden="true"
            >
              <path d="M12 2v20M2 12h20" />
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2" />
            </svg>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-semibold text-church-maroon mb-1">{leader.name}</h3>
            <p className="text-sm uppercase tracking-wider text-church-gold mb-3">{leader.title}</p>
            <p className="text-sm text-church-muted leading-relaxed">{leader.bio}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
