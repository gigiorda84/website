import type { SiteCopy } from "@/content/site-copy";

export function WhyAlphaSection({ copy }: { copy: SiteCopy["why"] }) {
  return (
    <section id="about" className="section-spacing px-6 md:px-12 lg:px-16 bg-black">
      <div className="container mx-auto max-w-7xl">
        {/* Caroselling-style repeating header */}
        <div className="mb-16">
          <h2 className="text-[32px] md:text-[36px] font-normal text-white mb-8 lowercase">
            <span className="text-[#0087ca]">{copy.headerRepeating}</span>
          </h2>
          <div className="max-w-4xl">
            <h3 className="text-[24px] md:text-[28px] lg:text-[32px] font-normal text-white mb-8 leading-tight lowercase">
              <strong className="font-medium">{copy.title}</strong>
            </h3>
            <div className="space-y-6">
              {copy.paragraphs.map((p) => (
                <p
                  key={p}
                  className="text-[16px] md:text-[18px] text-white/90 leading-relaxed lowercase"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/*
          Caroselling-inspired numbered list section (hidden for now)

          <div className="max-w-4xl mb-20">
            <h3 className="text-[18px] md:text-[20px] font-normal text-white mb-12 lowercase">
              {copy.listIntro}
            </h3>

            <div className="space-y-8">
              {copy.listItems.map((text, idx) => {
                const n = String(idx + 1).padStart(2, "0");
                return (
                  <div key={text} className="flex gap-6">
                    <div className="text-[36px] md:text-[42px] font-normal text-white/30 flex-shrink-0">
                      {n}
                    </div>
                    <p className="text-[16px] md:text-[18px] text-white/80 pt-2 lowercase leading-relaxed">
                      {text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        */}
      </div>
    </section>
  );
}
