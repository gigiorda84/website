import type { SiteCopy } from "@/content/site-copy";
import { SectionLabel } from "@/components/section-label";

export function SolutionsSection({ copy }: { copy: SiteCopy["solutions"] }) {
  return (
    <section
      id="solutions"
      className="section-spacing px-6 md:px-12 lg:px-16 bg-black border-t border-white/10"
    >
      <div className="container mx-auto max-w-7xl">
        <SectionLabel label={copy.label} />

        {/* Three service columns */}
        <div className="grid md:grid-cols-3 gap-10 md:gap-12 lg:gap-16 mt-14">
          {copy.columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-[24px] md:text-[28px] font-medium text-white mb-6 lowercase">
                <span className="underline-blue">{col.title}</span>
              </h3>
              <div className="space-y-4 text-white/70">
                {col.items.map((item) => (
                  <p
                    key={item}
                    className="text-[15px] md:text-[16px] lowercase leading-relaxed"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
