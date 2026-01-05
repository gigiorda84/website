import type { SiteCopy } from "@/content/site-copy";

export function ResultsSection({ copy }: { copy: SiteCopy["results"] }) {
  return (
    <section id="case-studies" className="section-spacing px-6 md:px-12 lg:px-16 bg-black border-t border-white/5">
      <div className="container mx-auto max-w-7xl">
        {/* Quote section - Exact Caroselling layout with overlapping text and image */}
        <div className="relative mb-20 py-12 lg:py-20 overflow-hidden">
          {/* Background statue image - visible on all devices */}
          <div className="absolute right-0 top-0 bottom-0 w-full md:w-[60%] lg:w-[50%] h-full">
            <div
              className="w-full h-full bg-cover bg-center opacity-20 md:opacity-30 grayscale"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=800&q=80')",
                backgroundPosition: 'center right'
              }}
            ></div>
          </div>

          {/* Text content overlapping the image */}
          <div className="relative z-10 max-w-7xl grid lg:grid-cols-[1fr_auto] gap-12 items-center">
            <blockquote className="text-[28px] md:text-[36px] lg:text-[42px] xl:text-[52px] font-normal text-white leading-[1.1]">
              {copy.quotePrefix}{" "}
              <strong className="font-medium underline-blue">{copy.quoteHighlight}</strong>
            </blockquote>

            {/* Author name on the right, vertically centered */}
            <div className="hidden lg:block">
              <p className="text-[18px] md:text-[20px] text-white whitespace-nowrap">{copy.quoteAuthor}</p>
            </div>
          </div>
        </div>

        {/* Repeating header */}
        <div className="mb-16">
          <h2 className="text-[32px] md:text-[36px] font-normal text-white mb-8 lowercase">
            <span className="text-[#0087ca]">{copy.label}</span>
          </h2>
        </div>

        {/* Minimalist results grid - Caroselling style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {copy.metrics.map((m) => (
            <div key={m.title}>
              <div className="text-[48px] md:text-[56px] font-normal text-white mb-4">{m.value}</div>
              <h4 className="text-[18px] font-medium text-white mb-2 lowercase">{m.title}</h4>
              <p className="text-[14px] text-white/60 lowercase leading-relaxed">{m.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Industries section */}
        <div className="mb-20">
          <h3 className="text-[24px] md:text-[28px] font-normal text-white mb-12 lowercase">
            {copy.industriesTitle}{" "}
            {copy.industriesHighlight ? (
              <strong className="font-medium underline-blue">
                {copy.industriesHighlight}
              </strong>
            ) : null}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {copy.industries.map((i) => (
              <div key={i.title}>
                <h4 className="text-[18px] font-medium text-white mb-2 lowercase">{i.title}</h4>
                <p className="text-[14px] text-white/60 lowercase leading-relaxed">{i.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
