import Link from "next/link";
import type { SiteCopy } from "@/content/site-copy";

type Project = SiteCopy["portfolio"]["projects"][number];

export function ProjectDetail({
  basePath = "",
  project,
  detail,
}: {
  basePath?: "" | "/it";
  project: Project;
  detail: SiteCopy["portfolio"]["detail"];
}) {
  return (
    <section className="section-spacing px-6 md:px-12 lg:px-16 bg-black min-h-screen">
      <div className="container mx-auto max-w-4xl pt-24 md:pt-28">
        {/* Back link */}
        <Link
          href={`${basePath}/#portfolio`}
          className="text-[14px] text-white/50 lowercase underline-blue hover:text-white transition-colors"
        >
          ← {detail.back}
        </Link>

        {/* Header */}
        <div className="mt-10 mb-12">
          <span className="text-[#0087ca] text-[14px] lowercase">(portfolio)</span>
          <h1 className="text-[32px] md:text-[44px] font-normal text-white mt-3 mb-4 lowercase">
            {project.name}
          </h1>
          <p className="text-[16px] md:text-[18px] text-white/60 lowercase leading-relaxed max-w-2xl">
            {project.description}
          </p>
        </div>

        {/* Business need + value proposition */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 border-t-2 border-white/10 pt-10">
          <div>
            <h2 className="text-[#0087ca] text-[14px] lowercase mb-3">{detail.businessNeed}</h2>
            <p className="text-[15px] text-white/70 lowercase leading-relaxed">{project.businessNeed}</p>
          </div>
          <div>
            <h2 className="text-[#0087ca] text-[14px] lowercase mb-3">{detail.valueProposition}</h2>
            <p className="text-[15px] text-white/70 lowercase leading-relaxed">{project.valueProposition}</p>
          </div>
        </div>

        {/* Features */}
        <div className="border-t-2 border-white/10 pt-10 mt-10">
          <h2 className="text-[#0087ca] text-[14px] lowercase mb-5">{detail.features}</h2>
          <ul className="grid md:grid-cols-2 gap-x-12 gap-y-3">
            {project.features.map((f) => (
              <li key={f} className="text-[15px] text-white/70 lowercase leading-relaxed flex gap-3">
                <span className="text-[#0087ca]">—</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Sector + technologies */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 border-t-2 border-white/10 pt-10 mt-10">
          <div>
            <h2 className="text-[#0087ca] text-[14px] lowercase mb-3">{detail.sector}</h2>
            <p className="text-[15px] text-white/70 lowercase leading-relaxed">{project.sector}</p>
          </div>
          <div>
            <h2 className="text-[#0087ca] text-[14px] lowercase mb-4">{detail.technologies}</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="text-[13px] text-white/60 lowercase border border-white/15 rounded-full px-3 py-1"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="border-t-2 border-white/10 pt-10 mt-10 mb-10">
          <p className="text-[20px] md:text-[24px] font-normal text-white mb-6 lowercase">
            {detail.ctaTitle}
          </p>
          <Link
            href={`${basePath}/#contact`}
            className="inline-block text-[15px] text-[#0087ca] lowercase underline-blue hover:text-white transition-colors"
          >
            {detail.ctaButton} →
          </Link>
        </div>
      </div>
    </section>
  );
}
