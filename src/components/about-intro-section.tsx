import type { SiteCopy } from "@/content/site-copy";

export function AboutIntroSection({ copy }: { copy: SiteCopy["aboutIntro"] }) {
  return (
    <section className="section-spacing px-6 md:px-12 lg:px-16 bg-black">
      <div className="container mx-auto max-w-7xl">
        <div className="relative">
          {/* Left side - Label (absolute positioning) */}
          <div className="hidden lg:block absolute left-0 top-0">
            <div className="sticky top-32">
              <h2 className="text-[32px] md:text-[36px] font-normal lowercase">
                <span className="text-[#0087ca]">{copy.label}</span>
              </h2>
            </div>
          </div>

          {/* Grid with 2 equal columns - content starts at 50% */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Empty left half */}
            <div className="hidden lg:block"></div>

            {/* Right half - Main content */}
            <div>
            <h2 className="text-[24px] md:text-[28px] lg:text-[32px] font-normal text-white mb-8 leading-tight lowercase">
              <strong className="font-medium">{copy.title}</strong>
            </h2>

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
        </div>
      </div>
    </section>
  );
}
