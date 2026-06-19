import type { SiteCopy } from "@/content/site-copy";
import { SectionLabel } from "@/components/section-label";

export function WhyAlphaSection({ copy }: { copy: SiteCopy["why"] }) {
  return (
    <section id="about" className="section-spacing px-6 md:px-12 lg:px-16 bg-black">
      <div className="container mx-auto max-w-7xl">
        <SectionLabel label={copy.headerRepeating} />

        {/* Statement + body */}
        <div className="grid lg:grid-cols-12 gap-12 mt-12 mb-20">
          <div className="lg:col-span-6">
            <h3 className="display-lg text-white leading-tight lowercase">
              {copy.title}
            </h3>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 space-y-6">
            {copy.paragraphs.map((p, i) => (
              <p
                key={p}
                className={`text-[18px] md:text-[20px] leading-relaxed lowercase ${
                  i === 0 ? "text-white font-medium" : "text-white/70"
                }`}
              >
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* Numbered principles 01–0n */}
        <div className="max-w-4xl">
          <h4 className="text-[18px] md:text-[20px] font-normal text-white/80 mb-12 lowercase leading-relaxed">
            {copy.listIntro}
          </h4>

          <div className="divide-y divide-white/10 border-t border-white/10">
            {copy.listItems.map((text, idx) => {
              const n = String(idx + 1).padStart(2, "0");
              return (
                <div key={text} className="flex gap-6 md:gap-10 py-8">
                  <div className="text-[36px] md:text-[48px] font-medium text-[#0045FF] leading-none flex-shrink-0 w-16">
                    {n}
                  </div>
                  <p className="text-[16px] md:text-[20px] text-white/80 pt-1 lowercase leading-relaxed">
                    {text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
