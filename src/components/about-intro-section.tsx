import type { SiteCopy } from "@/content/site-copy";
import { SectionLabel } from "@/components/section-label";

export function AboutIntroSection({ copy }: { copy: SiteCopy["aboutIntro"] }) {
  return (
    <section className="section-spacing px-6 md:px-12 lg:px-16 bg-black">
      <div className="container mx-auto max-w-7xl">
        <SectionLabel label={copy.label} />

        {/* Offset layout — content sits on the right half */}
        <div className="grid lg:grid-cols-12 gap-12 mt-12">
          <div className="lg:col-span-5">
            <h2 className="display-lg text-white leading-tight lowercase">
              {copy.title}
            </h2>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 space-y-6">
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
            <p className="text-[14px] md:text-[15px] text-white/50 lowercase pt-2">
              {copy.founders}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
