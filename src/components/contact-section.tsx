import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export function ContactSection() {
  return (
    <section id="contact" className="section-spacing px-6 md:px-12 lg:px-16 bg-black border-t border-white/5">
      <div className="container mx-auto max-w-7xl">
        {/* Caroselling-inspired header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 lowercase">
            <span className="text-[#0087ca]">(contact)</span>
          </h2>
          <div className="max-w-3xl space-y-4 mb-12">
            <p className="text-base md:text-lg text-white/90 leading-relaxed lowercase">
              we have a need for <strong className="font-semibold">words that say things.</strong> and then things that turn into reality.
            </p>
            <p className="text-base md:text-lg text-white/90 leading-relaxed lowercase">
              we'll tell you we'll do things, <strong className="font-semibold">and then we'll actually do them.</strong>
            </p>
          </div>
        </div>

        {/* Minimalist contact info */}
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <div>
            <h3 className="text-xl font-light text-white mb-6 lowercase">get in touch</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-white/50 mb-1 lowercase">email</p>
                <a
                  href="mailto:info@alphatechnology.ai"
                  className="text-base md:text-lg text-white underline-blue hover:opacity-70 transition-opacity lowercase"
                >
                  info@alphatechnology.ai
                </a>
              </div>
              <div>
                <p className="text-sm text-white/50 mb-1 lowercase">phone</p>
                <a
                  href="tel:+393492112515"
                  className="text-base md:text-lg text-white underline-blue hover:opacity-70 transition-opacity"
                >
                  +39 349 2112515
                </a>
              </div>
              <div>
                <p className="text-sm text-white/50 mb-1 lowercase">locations</p>
                <p className="text-base md:text-lg text-white lowercase">torino / milano</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-light text-white mb-6 lowercase">how we work</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-base font-semibold text-white mb-2 lowercase">strategic consulting</h4>
                <p className="text-sm text-white/70 lowercase">
                  ai assessment and roadmap development tailored to your business goals
                </p>
              </div>
              <div>
                <h4 className="text-base font-semibold text-white mb-2 lowercase">end-to-end development</h4>
                <p className="text-sm text-white/70 lowercase">
                  custom ai solutions built from the ground up for your specific needs
                </p>
              </div>
              <div>
                <h4 className="text-base font-semibold text-white mb-2 lowercase">ongoing support</h4>
                <p className="text-sm text-white/70 lowercase">
                  subscription-based maintenance, model retraining, and continuous optimization
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-sm text-white/40 lowercase">
            alpha © 2025
          </p>
        </div>
      </div>
    </section>
  );
}
