"use client";

import { clsx } from "clsx";
import { useIntersection } from "@/hooks/use-intersection";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  theme = "light",
}: SectionHeaderProps) {
  const { ref, isVisible } = useIntersection(0.2);

  return (
    <div
      ref={ref}
      className={clsx(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        !isVisible && "opacity-0"
      )}
    >
      {eyebrow && (
        <p
          className={clsx(
            "text-xs font-semibold uppercase tracking-[0.2em] mb-3",
            "text-church-gold",
            isVisible && "animate-fade-in"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={clsx(
          "font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl",
          theme === "dark" ? "text-church-cream" : "text-church-maroon",
          isVisible && "animate-fade-in",
          isVisible && "[animation-delay:100ms]"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={clsx(
            "mt-3 sm:mt-4 text-base sm:text-lg leading-relaxed",
            theme === "dark" ? "text-church-cream/70" : "text-church-muted",
            isVisible && "animate-fade-in",
            isVisible && "[animation-delay:200ms]"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
