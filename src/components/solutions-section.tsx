import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function SolutionsSection() {
  return (
    <section id="solutions" className="section-spacing px-6 md:px-12 lg:px-16 bg-black border-t border-white/10">
      <div className="container mx-auto max-w-7xl">
        {/* Exact Caroselling layout - "servizi" on left, 3 columns on right */}
        <div className="grid lg:grid-cols-[200px_1fr] gap-12 lg:gap-20 items-start">
          {/* Left side - "servizi" title */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white lowercase">
              <span className="opacity-40">(services)</span>
            </h2>
          </div>

          {/* Right side - 3 columns */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {/* Business Automation */}
          <div className="group">
            <h3 className="text-2xl md:text-3xl font-light text-white mb-6 lowercase underline-blue">
              business automation
            </h3>
            <div className="space-y-3 text-white/80">
              <p className="text-sm md:text-base lowercase">ai agents for admin, hr, finance & customer service</p>
              <p className="text-sm md:text-base lowercase">erp/crm integration (sap, salesforce, dynamics)</p>
              <p className="text-sm md:text-base lowercase">intelligent workflows for document management</p>
              <p className="text-sm md:text-base lowercase">ai-powered decision support systems</p>
            </div>
          </div>

          {/* Industrial Automation */}
          <div className="group">
            <h3 className="text-2xl md:text-3xl font-light text-white mb-6 lowercase underline-blue">
              industrial automation
            </h3>
            <div className="space-y-3 text-white/80">
              <p className="text-sm md:text-base lowercase">predictive maintenance algorithms</p>
              <p className="text-sm md:text-base lowercase">production line optimization</p>
              <p className="text-sm md:text-base lowercase">computer vision for quality control & safety</p>
              <p className="text-sm md:text-base lowercase">iot integration for energy efficiency</p>
            </div>
          </div>

          {/* Custom AI Solutions */}
          <div className="group">
            <h3 className="text-2xl md:text-3xl font-light text-white mb-6 lowercase underline-blue">
              custom ai solutions
            </h3>
            <div className="space-y-3 text-white/80">
              <p className="text-sm md:text-base lowercase">custom ml/ai model development</p>
              <p className="text-sm md:text-base lowercase">multi-step ai agent implementation</p>
              <p className="text-sm md:text-base lowercase">strategic digital transformation consulting</p>
              <p className="text-sm md:text-base lowercase">end-to-end solution architecture</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
