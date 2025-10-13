export function AboutIntroSection() {
  return (
    <section className="section-spacing px-6 md:px-12 lg:px-16 bg-black">
      <div className="container mx-auto max-w-7xl">
        <div className="relative">
          {/* Left side - Repeating text (absolute positioning) */}
          <div className="hidden lg:block absolute left-0 top-0">
            <div className="sticky top-32 space-y-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 lowercase">
                <span className="text-[#0087ca]">(us)</span>
              </h2>
            </div>
          </div>

          {/* Grid with 2 equal columns - content starts at 50% */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Empty left half */}
            <div className="hidden lg:block"></div>

            {/* Right half - Main content */}
            <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-8 leading-tight lowercase">
              big things, like small ones, <strong className="font-semibold">everything excites us.</strong>
            </h2>

            <div className="space-y-4">
              <p className="text-base md:text-lg text-white/90 leading-relaxed lowercase">
                every day we nurture the ambition to <strong className="font-semibold">simplify complexity.</strong>
              </p>

              <p className="text-base md:text-lg text-white/90 leading-relaxed lowercase">
                we don't love compromises, standard answers for any problem, but only <strong className="font-semibold">the solution studied for you.</strong>
              </p>

              <p className="text-base md:text-lg text-white/90 leading-relaxed lowercase">
                we believe in ideas that know how to embrace a strategic vision.
              </p>

              <p className="text-base md:text-lg text-white/90 leading-relaxed lowercase">
                we'll tell you we'll do things, <br />
                and then we'll do them <strong className="font-semibold">really.</strong>
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
