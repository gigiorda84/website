export function ResultsSection() {
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
            <blockquote className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white leading-[1.1]">
              Qualunque tecnologia sufficientemente avanzata è indistinguibile <strong className="font-semibold underline-blue">dalla magia.</strong>
            </blockquote>

            {/* Author name on the right, vertically centered */}
            <div className="hidden lg:block">
              <p className="text-lg md:text-xl text-white whitespace-nowrap">Arthur C. Clarke</p>
            </div>
          </div>
        </div>

        {/* Repeating header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-8 lowercase">
            <span className="opacity-40">(results)</span>
          </h2>
        </div>

        {/* Minimalist results grid - Caroselling style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div>
            <div className="text-5xl md:text-6xl font-light text-white mb-4">-40%</div>
            <h4 className="text-lg font-semibold text-white mb-2 lowercase">human tickets</h4>
            <p className="text-sm text-white/60 lowercase">ai agent for customer support</p>
          </div>

          <div>
            <div className="text-5xl md:text-6xl font-light text-white mb-4">-25%</div>
            <h4 className="text-lg font-semibold text-white mb-2 lowercase">machine downtime</h4>
            <p className="text-sm text-white/60 lowercase">predictive maintenance on industrial plants</p>
          </div>

          <div>
            <div className="text-5xl md:text-6xl font-light text-white mb-4">-15%</div>
            <h4 className="text-lg font-semibold text-white mb-2 lowercase">energy consumption</h4>
            <p className="text-sm text-white/60 lowercase">industrial hvac optimization</p>
          </div>

          <div>
            <div className="text-5xl md:text-6xl font-light text-white mb-4">-70%</div>
            <h4 className="text-lg font-semibold text-white mb-2 lowercase">processing time</h4>
            <p className="text-sm text-white/60 lowercase">finance document automation</p>
          </div>
        </div>

        {/* Industries section */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-light text-white mb-12 lowercase">
            industries we <strong className="font-semibold underline-blue">serve</strong>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-white mb-2 lowercase">manufacturing</h4>
              <p className="text-sm text-white/60 lowercase">operational efficiency & predictive maintenance</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-2 lowercase">energy & utilities</h4>
              <p className="text-sm text-white/60 lowercase">consumption optimization & demand forecasting</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-2 lowercase">corporate & sme</h4>
              <p className="text-sm text-white/60 lowercase">process automation & customer experience</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-2 lowercase">smart cities</h4>
              <p className="text-sm text-white/60 lowercase">energy management & environmental monitoring</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
