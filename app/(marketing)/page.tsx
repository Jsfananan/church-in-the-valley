import type { Metadata } from "next";
import { HeroSection } from "@/components/home/hero-section";
import { WelcomeSection } from "@/components/home/welcome-section";
import { ServiceTimesSection } from "@/components/home/service-times-section";
import { LatestSermonSection } from "@/components/home/latest-sermon-section";
import { MinistryCards } from "@/components/home/ministry-cards";
import { DirectionsSection } from "@/components/home/directions-section";
import { CtaBanner } from "@/components/home/cta-banner";
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";
import { getLatestSermons } from "@/lib/vimeo";

export const metadata: Metadata = {
  title: `Home | ${SITE_NAME}`,
  description: SITE_DESCRIPTION,
};

export default async function HomePage() {
  const sermons = await getLatestSermons(1);
  const latestSermon = sermons[0] ?? null;

  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <ServiceTimesSection />
      {latestSermon && <LatestSermonSection sermon={latestSermon} />}
      <MinistryCards />
      <DirectionsSection />
      <CtaBanner />
    </>
  );
}
