import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutIntroSection } from "@/components/about-intro-section";
import { SolutionsSection } from "@/components/solutions-section";
import { WhyAlphaSection } from "@/components/why-alpha-section";
import { ResultsSection } from "@/components/results-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { ContactSection } from "@/components/contact-section";
import { SITE_COPY } from "@/content/site-copy";

export default function Home() {
  const copy = SITE_COPY.en;
  return (
    <div className="min-h-screen bg-black">
      <Navbar copy={copy.navbar} />
      <HeroSection copy={copy.hero} />
      <AboutIntroSection copy={copy.aboutIntro} />
      <SolutionsSection copy={copy.solutions} />
      <WhyAlphaSection copy={copy.why} />
      <ResultsSection copy={copy.results} />
      <PortfolioSection copy={copy.portfolio} />
      <ContactSection basePath="" copy={copy.contact} />
    </div>
  );
}
