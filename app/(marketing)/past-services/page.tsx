import type { Metadata } from "next";
import { SITE_NAME, CONTACT } from "@/lib/constants";
import { getLatestSermons } from "@/lib/vimeo";

export const metadata: Metadata = {
  title: `Past Services | ${SITE_NAME}`,
  description:
    "Watch and listen to past sermons from The Church In The Valley.",
};

export default async function PastServicesPage() {
  const sermons = await getLatestSermons(6);

  return (
    <>
      <div className="bg-gradient-to-b from-church-maroon to-church-burgundy pt-32 sm:pt-40 pb-16 sm:pb-24 text-center px-6">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-church-cream mb-4">
          Past Services
        </h1>
        <p className="text-base sm:text-lg text-church-cream/80 max-w-xl mx-auto">
          Missed a service? Catch up on recent sermons and messages.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-24">
        {sermons.length > 0 ? (
          <div className="grid gap-8">
            {sermons.map((sermon) => (
              <div
                key={sermon.id}
                className="bg-church-white rounded-2xl overflow-hidden border border-church-border shadow-sm"
              >
                <div className="aspect-video w-full">
                  <iframe
                    src={`${sermon.embedUrl}?color=D97706&title=0&byline=0&portrait=0`}
                    className="w-full h-full"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title={sermon.title}
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <h2 className="text-lg sm:text-xl font-semibold text-church-text mb-1">
                    {sermon.title}
                  </h2>
                  {sermon.date && (
                    <p className="text-sm text-church-gold font-medium mb-2">
                      {sermon.date}
                    </p>
                  )}
                  {sermon.description && (
                    <p className="text-sm text-church-muted leading-relaxed">
                      {sermon.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-church-muted text-lg mb-4">
              Sermons are loading from our Vimeo channel.
            </p>
            <a
              href={CONTACT.vimeo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-church-burgundy text-church-cream hover:bg-church-burgundy-light font-semibold transition-all duration-200"
            >
              Watch on Vimeo
            </a>
          </div>
        )}

        <div className="mt-12 text-center">
          <a
            href={CONTACT.vimeo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-church-burgundy text-church-cream hover:bg-church-burgundy-light font-semibold text-base transition-all duration-200 shadow-md hover:shadow-lg"
          >
            View All Services on Vimeo
          </a>
        </div>
      </div>
    </>
  );
}
