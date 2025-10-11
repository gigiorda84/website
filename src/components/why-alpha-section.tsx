export function WhyAlphaSection() {
  return (
    <section id="about" className="section-spacing px-6 md:px-12 lg:px-16 bg-black">
      <div className="container mx-auto max-w-7xl">
        {/* Caroselling-style repeating header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-8 lowercase">
            <span className="opacity-40">(about) (about) (about)</span>
          </h2>
          <div className="max-w-4xl">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-8 leading-tight lowercase">
              big things, like small ones, <strong className="font-semibold">everything excites us.</strong>
            </h3>
            <div className="space-y-4">
              <p className="text-base md:text-lg text-white/90 leading-relaxed lowercase">
                every day we nurture the ambition to <strong className="font-semibold">simplify complexity.</strong>
              </p>
              <p className="text-base md:text-lg text-white/90 leading-relaxed lowercase">
                we don't like compromises, standard answers for any problem, but only <strong className="font-semibold">the right solution for you.</strong>
              </p>
              <p className="text-base md:text-lg text-white/90 leading-relaxed lowercase">
                we believe in ideas that embrace a strategic vision.
              </p>
              <p className="text-base md:text-lg text-white/90 leading-relaxed lowercase">
                we'll tell you we'll do things, and then we'll <strong className="font-semibold">actually do them.</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Caroselling-inspired numbered list section */}
        <div className="max-w-4xl mb-20">
          <h3 className="text-xl md:text-2xl font-light text-white mb-12 lowercase">
            we design for the future. in chaotic moments, language and communication can do small great things, like leaving <strong className="font-semibold">5 messages</strong> in the time capsule.
          </h3>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="text-4xl md:text-5xl font-light text-white/30 flex-shrink-0">01</div>
              <p className="text-base md:text-lg text-white/80 pt-2 lowercase">
                design content as if you worked for the <strong className="font-semibold text-white">fisher price.</strong>
              </p>
            </div>

            <div className="flex gap-6">
              <div className="text-4xl md:text-5xl font-light text-white/30 flex-shrink-0">02</div>
              <p className="text-base md:text-lg text-white/80 pt-2 lowercase">
                respect the <strong className="font-semibold text-white">emotions</strong> of those who read and enjoy your content.
              </p>
            </div>

            <div className="flex gap-6">
              <div className="text-4xl md:text-5xl font-light text-white/30 flex-shrink-0">03</div>
              <p className="text-base md:text-lg text-white/80 pt-2 lowercase">
                use a <strong className="font-semibold text-white">human voice</strong>, not a tone of voice.
              </p>
            </div>

            <div className="flex gap-6">
              <div className="text-4xl md:text-5xl font-light text-white/30 flex-shrink-0">04</div>
              <p className="text-base md:text-lg text-white/80 pt-2 lowercase">
                convey closeness, <strong className="font-semibold text-white">ethics and values.</strong>
              </p>
            </div>

            <div className="flex gap-6">
              <div className="text-4xl md:text-5xl font-light text-white/30 flex-shrink-0">05</div>
              <p className="text-base md:text-lg text-white/80 pt-2 lowercase">
                guide people's actions, solve their problems and <strong className="font-semibold text-white">change their lives for the better.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
