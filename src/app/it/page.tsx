import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutIntroSection } from "@/components/about-intro-section";
import { SolutionsSection } from "@/components/solutions-section";
import { WhyAlphaSection } from "@/components/why-alpha-section";
import { ResultsSection } from "@/components/results-section";
import { ContactSection } from "@/components/contact-section";
import { SITE_COPY } from "@/content/site-copy";

export const metadata: Metadata = {
  title: "Alpha Technology | Soluzioni AI per il business e l’automazione industriale",
  description:
    "Consulenza e sviluppo AI di Giuseppe Giordano & Marco Martellacci. -40% ticket, -25% downtime, -15% costi energetici. Soluzioni AI per business e industria.",
  alternates: {
    canonical: "https://alphatechnology.ai/it",
    languages: {
      en: "https://alphatechnology.ai",
      it: "https://alphatechnology.ai/it",
    },
  },
};

export default function ItalianHome() {
  const copy = SITE_COPY.it;
  return (
    <div className="min-h-screen bg-black">
      <Navbar copy={copy.navbar} />
      <HeroSection copy={copy.hero} />
      <AboutIntroSection copy={copy.aboutIntro} />
      <SolutionsSection copy={copy.solutions} />
      <WhyAlphaSection copy={copy.why} />
      <ResultsSection copy={copy.results} />
      <ContactSection basePath="/it" copy={copy.contact} />
    </div>
  );
}


