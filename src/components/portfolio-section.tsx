import Link from "next/link";
import type { SiteCopy } from "@/content/site-copy";
import { SectionLabel } from "@/components/section-label";

export function PortfolioSection({
  basePath = "",
  copy,
}: {
  basePath?: "" | "/it";
  copy: SiteCopy["portfolio"];
}) {
  return (
    <section
      id="portfolio"
      className="section-spacing px-6 md:px-12 lg:px-16 bg-black border-t border-white/10"
    >
      <div className="container mx-auto max-w-7xl">
        <SectionLabel label={copy.label} />

        <div className="mt-12 mb-16 max-w-3xl">
          <h2 className="display-lg text-white mb-4 lowercase">{copy.title}</h2>
          <p className="text-[16px] md:text-[18px] text-white/60 lowercase leading-relaxed">
            {copy.intro}
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {copy.projects.map((p, idx) => (
            <Link
              key={p.slug}
              href={`${basePath}/portfolio/${p.slug}`}
              className="group block border-t border-white/15 pt-6 transition-colors hover:border-[#0045FF]"
            >
              <span className="text-[13px] text-white/40 group-hover:text-[#0045FF] transition-colors">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[22px] md:text-[24px] font-medium text-white mt-3 mb-2 lowercase group-hover:text-[#0045FF] transition-colors">
                {p.name}
              </h3>
              <p className="text-[14px] text-white/60 lowercase leading-relaxed">
                {p.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
