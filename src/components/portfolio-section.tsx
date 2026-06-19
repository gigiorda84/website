import Link from "next/link";
import type { SiteCopy } from "@/content/site-copy";

export function PortfolioSection({
  basePath = "",
  copy,
}: {
  basePath?: "" | "/it";
  copy: SiteCopy["portfolio"];
}) {
  return (
    <section id="portfolio" className="section-spacing px-6 md:px-12 lg:px-16 bg-black border-t border-white/5">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-[32px] md:text-[36px] font-normal text-white mb-6 lowercase">
            <span className="text-[#0087ca]">{copy.label}</span>
          </h2>
          <p className="text-[20px] md:text-[24px] font-normal text-white mb-4 lowercase">
            {copy.title}
          </p>
          <p className="text-[14px] md:text-[16px] text-white/60 lowercase leading-relaxed max-w-2xl">
            {copy.intro}
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {copy.projects.map((p) => (
            <Link
              key={p.slug}
              href={`${basePath}/portfolio/${p.slug}`}
              className="group block border-t-2 border-white/10 pt-6 transition-colors hover:border-[#0087ca]"
            >
              <h3 className="text-[20px] font-medium text-white mb-2 lowercase group-hover:text-[#0087ca] transition-colors">{p.name}</h3>
              <p className="text-[14px] text-white/60 lowercase leading-relaxed">{p.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
