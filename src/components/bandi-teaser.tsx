import Link from "next/link";
import type { SiteCopy } from "@/content/site-copy";
import { SectionLabel } from "@/components/section-label";

export function BandiTeaser({
  basePath = "",
  copy,
}: {
  basePath?: "" | "/it";
  copy: SiteCopy["bandi"]["teaser"];
}) {
  return (
    <section
      id="bandi"
      className="section-spacing px-6 md:px-12 lg:px-16 bg-black border-t border-white/10"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="border border-[#0045FF]/30 rounded-3xl p-8 md:p-14 bg-[#0045FF]/[0.05]">
          <SectionLabel label={copy.eyebrow} />
          <h2 className="display-lg text-white mt-8 mb-5 lowercase max-w-3xl">
            {copy.title}
          </h2>
          <p className="text-[16px] md:text-[18px] text-white/70 lowercase leading-relaxed max-w-2xl mb-10">
            {copy.text}
          </p>
          <Link
            href={`${basePath}/bandi`}
            className="inline-block text-[15px] text-white lowercase border-b-2 border-[#0045FF] pb-1 hover:text-[#0045FF] transition-colors"
          >
            {copy.button} →
          </Link>
        </div>
      </div>
    </section>
  );
}
