import Link from "next/link";
import type { SiteCopy } from "@/content/site-copy";

export function BandiTeaser({
  basePath = "",
  copy,
}: {
  basePath?: "" | "/it";
  copy: SiteCopy["bandi"]["teaser"];
}) {
  return (
    <section id="bandi" className="section-spacing px-6 md:px-12 lg:px-16 bg-black border-t border-white/5">
      <div className="container mx-auto max-w-7xl">
        <div className="border border-[#0087ca]/30 rounded-2xl p-8 md:p-12 bg-[#0087ca]/[0.04]">
          <span className="text-[#0087ca] text-[14px] lowercase">{copy.eyebrow}</span>
          <h2 className="text-[26px] md:text-[34px] font-normal text-white mt-3 mb-4 lowercase leading-tight max-w-3xl">
            {copy.title}
          </h2>
          <p className="text-[14px] md:text-[16px] text-white/60 lowercase leading-relaxed max-w-2xl mb-8">
            {copy.text}
          </p>
          <Link
            href={`${basePath}/bandi`}
            className="inline-block text-[15px] text-[#0087ca] lowercase underline-blue hover:text-white transition-colors"
          >
            {copy.button} →
          </Link>
        </div>
      </div>
    </section>
  );
}
