import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { BandiSection } from "@/components/bandi-section";
import { ContactSection } from "@/components/contact-section";
import { SITE_COPY } from "@/content/site-copy";

const copy = SITE_COPY.it;

export const metadata: Metadata = {
  title: "Bandi digitalizzazione PMI Piemonte | Alpha Technology",
  description:
    "Software su misura, AI e automazione come spesa ammissibile sui bandi di digitalizzazione del Piemonte (Voucher Digitalizzazione PMI 2026, Digitalizzazione e Efficientamento 2026). Individuiamo il bando e ti accompagniamo lungo tutto il grant, inclusi i bandi europei come Horizon 2020.",
  alternates: {
    canonical: "https://alphatechnology.ai/it/bandi",
    languages: {
      en: "https://alphatechnology.ai/bandi",
      it: "https://alphatechnology.ai/it/bandi",
    },
  },
};

export default function BandiPageIt() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar copy={copy.navbar} />
      <BandiSection basePath="/it" copy={copy.bandi} />
      <ContactSection basePath="/it" copy={copy.contact} />
    </div>
  );
}
