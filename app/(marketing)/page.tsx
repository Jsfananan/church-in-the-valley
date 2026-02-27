import type { Metadata } from "next";
import { HeroSection } from "@/components/home/hero-section";
import { WelcomeSection } from "@/components/home/welcome-section";
import { ServiceTimesSection } from "@/components/home/service-times-section";
import { MinistryCards } from "@/components/home/ministry-cards";
import { CtaBanner } from "@/components/home/cta-banner";
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Home | ${SITE_NAME}`,
  description: SITE_DESCRIPTION,
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <ServiceTimesSection />
      <MinistryCards />
      <CtaBanner />
    </>
  );
}
