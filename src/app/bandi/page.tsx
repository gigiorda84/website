import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { BandiSection } from "@/components/bandi-section";
import { ContactSection } from "@/components/contact-section";
import { SITE_COPY } from "@/content/site-copy";

const copy = SITE_COPY.en;

export const metadata: Metadata = {
  title: "Piedmont SME digitalization grants | Alpha Technology",
  description:
    "Custom software, AI and automation eligible for Piedmont's digitalization grants (Voucher Digitalizzazione PMI 2026, Digitalizzazione e Efficientamento 2026). We identify the call and accompany you through the whole grant — including Horizon.",
  alternates: {
    canonical: "https://alphatechnology.ai/bandi",
    languages: {
      en: "https://alphatechnology.ai/bandi",
      it: "https://alphatechnology.ai/it/bandi",
    },
  },
};

export default function BandiPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar copy={copy.navbar} />
      <BandiSection basePath="" copy={copy.bandi} />
      <ContactSection basePath="" copy={copy.contact} />
    </div>
  );
}
