"use client";

import Link from "next/link";
import { clsx } from "clsx";
import { SectionHeader } from "@/components/ui/section-header";
import { useIntersection } from "@/hooks/use-intersection";
import type { VimeoVideo } from "@/lib/vimeo";

interface LatestSermonSectionProps {
  sermon: VimeoVideo;
}

export function LatestSermonSection({ sermon }: LatestSermonSectionProps) {
  const { ref, isVisible } = useIntersection(0.1);

  return (
    <section className="bg-church-cream py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader
          eyebrow="Watch"
          title="Latest Message"
          subtitle="Missed last Sunday? Watch the most recent service right here."
        />

        <div
          ref={ref}
          className={clsx(
            "mt-10 sm:mt-14 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          <div className="bg-church-white rounded-2xl overflow-hidden border border-church-border shadow-sm">
            <div className="aspect-video w-full">
              <iframe
                src={`${sermon.embedUrl}?color=C5963A&title=0&byline=0&portrait=0`}
                className="w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={sermon.title}
              />
            </div>
            <div className="p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-church-text mb-1">
                {sermon.title}
              </h3>
              {sermon.date && (
                <p className="text-sm text-church-gold font-medium">
                  {sermon.date}
                </p>
              )}
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/past-services"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-church-burgundy text-church-cream hover:bg-church-burgundy-light font-semibold text-base transition-all duration-200 shadow-md hover:shadow-lg"
            >
              View All Past Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
