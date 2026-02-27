import type { Metadata } from "next";
import { EventsGrid } from "@/components/events/events-grid";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Events | ${SITE_NAME}`,
  description: "Upcoming events and activities at The Church In The Valley.",
};

export default function EventsPage() {
  return (
    <>
      <div className="bg-gradient-to-b from-church-maroon to-church-burgundy pt-32 sm:pt-40 pb-16 sm:pb-24 text-center px-6">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-church-cream mb-4">
          Events
        </h1>
        <p className="text-base sm:text-lg text-church-cream/80 max-w-xl mx-auto">
          Stay connected with what is happening at our church.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-24">
        <EventsGrid />
      </div>
    </>
  );
}
