import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutIntroSection } from "@/components/about-intro-section";
import { SolutionsSection } from "@/components/solutions-section";
import { WhyAlphaSection } from "@/components/why-alpha-section";
import { ResultsSection } from "@/components/results-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <AboutIntroSection />
      <SolutionsSection />
      <WhyAlphaSection />
      <ResultsSection />
      <ContactSection />
    </div>
  );
}
