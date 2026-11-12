import type { Metadata } from "next";
import AboutMotion from "@/components/about/AboutMotion";
import AboutHero from "@/components/about/AboutHero";
import CompanyStory from "@/components/about/CompanyStory";
import CoreValues from "@/components/about/CoreValues";
import VisionMission from "@/components/about/VisionMission";
import GlobalPresence from "@/components/about/GlobalPresence";
import QualitySection from "@/components/about/QualitySection";
import AwardsSection from "@/components/about/AwardsSection";
import AboutClosing from "@/components/about/AboutClosing";
import { awards } from "@/data/about";

export const dynamic = "force-static";

const title = "About Us | KEW Electricals — Kusum Engineering Works since 1961";
const description = "Established in Mumbai in 1961, Kusum Engineering Works manufactures and exports KEW electrical switchgear, fusegear, controlgear and distribution products from four manufacturing units in Maharashtra and Gujarat.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, type: "website" },
};

export default function AboutPage() {
  return <AboutMotion>
    <AboutHero />
    <CompanyStory />
    <CoreValues />
    <VisionMission />
    <GlobalPresence />
    <QualitySection />
    <AwardsSection awards={awards} />
    <AboutClosing />
  </AboutMotion>;
}
