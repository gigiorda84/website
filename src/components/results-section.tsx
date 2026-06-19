import type { SiteCopy } from "@/content/site-copy";
import { SectionLabel } from "@/components/section-label";
import { AbstractVisual } from "@/components/abstract-visual";

export function ResultsSection({ copy }: { copy: SiteCopy["results"] }) {
  return (
    <section
      id="case-studies"
      className="section-spacing px-6 md:px-12 lg:px-16 bg-black border-t border-white/10"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Pull-quote with abstract visual at half-screen */}
        <div className="relative mb-24 grid lg:grid-cols-2 gap-10 items-center">
          <blockquote className="text-[30px] md:text-[44px] lg:text-[56px] font-medium text-white leading-[1.05]">
            {copy.quotePrefix}{" "}
            <span className="hl">{copy.quoteHighlight}</span>
            <footer className="mt-8 text-[16px] md:text-[18px] font-normal text-white/60 lowercase">
              — {copy.quoteAuthor}
            </footer>
          </blockquote>

          <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
            <AbstractVisual variant="arcs" className="w-full h-full" />
          </div>
        </div>

        {/* Metrics */}
        <SectionLabel label={copy.label} />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mt-12 mb-24">
          {copy.metrics.map((m) => (
            <div key={m.title} className="border-t border-white/10 pt-6">
              <div className="text-[52px] md:text-[64px] font-medium text-white leading-none mb-4">
                {m.value}
              </div>
              <h4 className="text-[18px] font-medium text-white mb-2 lowercase">{m.title}</h4>
              <p className="text-[14px] text-white/60 lowercase leading-relaxed">{m.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Industries */}
        <h3 className="display-lg text-white mb-12 lowercase">
          {copy.industriesTitle}{" "}
          {copy.industriesHighlight ? (
            <span className="underline-blue">{copy.industriesHighlight}</span>
          ) : null}
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {copy.industries.map((i) => (
            <div key={i.title} className="border-t border-white/10 pt-6">
              <h4 className="text-[18px] font-medium text-white mb-2 lowercase">{i.title}</h4>
              <p className="text-[14px] text-white/60 lowercase leading-relaxed">{i.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
