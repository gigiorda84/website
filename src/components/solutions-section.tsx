import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { SiteCopy } from "@/content/site-copy";

export function SolutionsSection({ copy }: { copy: SiteCopy["solutions"] }) {
  return (
    <section id="solutions" className="section-spacing px-6 md:px-12 lg:px-16 bg-black border-t border-white/10">
      <div className="container mx-auto max-w-7xl">
        {/* Exact Caroselling layout - "servizi" on left, 3 columns on right */}
        <div className="grid lg:grid-cols-[200px_1fr] gap-12 lg:gap-20 items-start">
          {/* Left side - "services" label */}
          <div>
            <h2 className="text-[32px] md:text-[36px] font-normal lowercase sticky top-32">
              <span className="text-[#0087ca]">{copy.label}</span>
            </h2>
          </div>

          {/* Right side - 3 columns */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {copy.columns.map((col) => (
            <div key={col.title} className="group">
              <h3 className="text-[22px] md:text-[24px] font-normal text-white mb-6 lowercase underline-blue">
                {col.title}
              </h3>
              <div className="space-y-4 text-white/80">
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
      </div>
    </section>
  );
}
