import Link from "next/link";
import type { SiteCopy } from "@/content/site-copy";
import { SectionLabel } from "@/components/section-label";
import { AbstractVisual } from "@/components/abstract-visual";

type Project = SiteCopy["portfolio"]["projects"][number];

const VARIANTS = ["arcs", "grid", "mesh"] as const;

export function ProjectDetail({
  basePath = "",
  project,
  detail,
}: {
  basePath?: "" | "/it";
  project: Project;
  detail: SiteCopy["portfolio"]["detail"];
}) {
  const variant = VARIANTS[project.slug.length % VARIANTS.length];

  return (
    <section className="section-spacing px-6 md:px-12 lg:px-16 bg-black min-h-screen">
      <div className="container mx-auto max-w-5xl pt-24 md:pt-28">
        {/* Back link */}
        <Link
          href={`${basePath}/#portfolio`}
          className="text-[14px] text-white/50 lowercase hover-underline hover:text-white transition-colors"
        >
          ← {detail.back}
        </Link>

        {/* Header */}
        <div className="mt-10 mb-12">
          <SectionLabel label="(portfolio)" />
          <h1 className="display-xl text-white mt-8 mb-5 lowercase leading-none">
            {project.name}
          </h1>
          <p className="text-[18px] md:text-[20px] text-white/70 lowercase leading-relaxed max-w-2xl">
            {project.description}
          </p>
        </div>

        {/* Visual band */}
        <div className="relative h-44 md:h-56 w-full overflow-hidden rounded-2xl mb-14">
          <AbstractVisual variant={variant} className="w-full h-full" />
        </div>

        {/* Business need + value proposition */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 border-t border-white/10 pt-10">
          <div>
            <h2 className="eyebrow lowercase mb-4">{detail.businessNeed}</h2>
            <p className="text-[16px] text-white/70 lowercase leading-relaxed">{project.businessNeed}</p>
          </div>
          <div>
            <h2 className="eyebrow lowercase mb-4">{detail.valueProposition}</h2>
            <p className="text-[16px] text-white/70 lowercase leading-relaxed">{project.valueProposition}</p>
          </div>
        </div>

        {/* Features */}
        <div className="border-t border-white/10 pt-10 mt-10">
          <h2 className="eyebrow lowercase mb-6">{detail.features}</h2>
          <ul className="grid md:grid-cols-2 gap-x-14 gap-y-4">
            {project.features.map((f) => (
              <li key={f} className="text-[16px] text-white/70 lowercase leading-relaxed flex gap-3">
                <span className="text-[#0045FF]">—</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Sector + technologies */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 border-t border-white/10 pt-10 mt-10">
          <div>
            <h2 className="eyebrow lowercase mb-4">{detail.sector}</h2>
            <p className="text-[16px] text-white/70 lowercase leading-relaxed">{project.sector}</p>
          </div>
          <div>
            <h2 className="eyebrow lowercase mb-5">{detail.technologies}</h2>
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
        <div className="border-t border-white/10 pt-12 mt-12 mb-10">
          <p className="display-lg text-white mb-8 lowercase max-w-2xl">
            {detail.ctaTitle}
          </p>
          <Link
            href={`${basePath}/#contact`}
            className="inline-block text-[15px] text-white lowercase border-b-2 border-[#0045FF] pb-1 hover:text-[#0045FF] transition-colors"
          >
            {detail.ctaButton} →
          </Link>
        </div>
      </div>
    </section>
  );
}
