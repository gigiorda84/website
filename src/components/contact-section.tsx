import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export function ContactSection() {
  return (
    <section id="contact" className="section-spacing px-6 md:px-12 lg:px-16 bg-black border-t border-white/5">
      <div className="container mx-auto max-w-7xl">
        {/* Header with social links */}
        <div className="flex justify-between items-start mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 lowercase">
            <span className="text-[#0087ca]">(contact)</span>
          </h2>
          <div className="flex gap-8">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white text-base lowercase underline-blue hover:opacity-70 transition-opacity">
              facebook
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white text-base lowercase underline-blue hover:opacity-70 transition-opacity">
              instagram
            </a>
          </div>
        </div>

        {/* Contact Form - Caroselling exact layout */}
        <form className="ml-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* First row */}
            <div className="relative">
              <select className="w-full bg-transparent border-b border-white/30 text-white text-base py-4 pr-8 appearance-none focus:outline-none focus:border-[#0087ca] transition-colors">
                <option value="">I would like to discuss</option>
                <option value="collaboration">Collaborate on my project</option>
                <option value="website">Create my new website</option>
                <option value="branding">Work on my brand identity</option>
                <option value="other">Other</option>
              </select>
              <span className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-xl">+</span>
            </div>

            <div className="relative">
              <select className="w-full bg-transparent border-b border-white/30 text-white text-base py-4 pr-8 appearance-none focus:outline-none focus:border-[#0087ca] transition-colors">
                <option value="">Budget</option>
                <option value="0-2000">0-2.000</option>
                <option value="2000-5000">2.000-5.000</option>
                <option value="5000-20000">5.000-20.000</option>
                <option value="other">Other / I don't know</option>
              </select>
              <span className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-xl">+</span>
            </div>

            {/* Second row */}
            <div className="relative">
              <select className="w-full bg-transparent border-b border-white/30 text-white text-base py-4 pr-8 appearance-none focus:outline-none focus:border-[#0087ca] transition-colors">
                <option value="">How did you find us?</option>
                <option value="google">Google search</option>
                <option value="social">Social media</option>
                <option value="referral">Someone told me about you</option>
                <option value="design">Design websites</option>
              </select>
              <span className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-xl">+</span>
            </div>

            <div>
              <input
                type="text"
                placeholder="Name and Surname"
                className="w-full bg-transparent border-b border-white/30 text-white placeholder:text-white/50 text-base py-4 focus:outline-none focus:border-[#0087ca] transition-colors"
              />
            </div>

            {/* Third row */}
            <div>
              <input
                type="text"
                placeholder="Company (optional)"
                className="w-full bg-transparent border-b border-white/30 text-white placeholder:text-white/50 text-base py-4 focus:outline-none focus:border-[#0087ca] transition-colors"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-transparent border-b border-white/30 text-white placeholder:text-white/50 text-base py-4 focus:outline-none focus:border-[#0087ca] transition-colors"
              />
            </div>
          </div>

          {/* Message textarea */}
          <div className="mb-8">
            <textarea
              placeholder="Tell us briefly about your project"
              rows={4}
              className="w-full bg-transparent border-b border-white/30 text-white placeholder:text-white/50 text-base py-4 resize-none focus:outline-none focus:border-[#0087ca] transition-colors"
            ></textarea>
          </div>

          {/* Checkbox and submit */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <label className="flex items-start gap-3 text-xs text-white/60 max-w-md cursor-pointer">
              <input type="checkbox" className="mt-1 w-4 h-4 border border-white/20 bg-transparent" />
              <span>
                By checking this box you authorize us to <a href="#" className="underline hover:text-[#0087ca]">process your personal data</a>, we will take care of it.
              </span>
            </label>

            <button
              type="submit"
              className="px-12 py-4 border border-white/20 text-white text-sm lowercase rounded-full hover:bg-white/5 transition-all self-start md:self-auto"
            >
              invia
            </button>
          </div>
        </form>

        {/* Footer - Caroselling style */}
        <div className="pt-8 mt-16 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-sm text-white/60 lowercase">
              Alpha | Copyright 2025 | P.IVA
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <span className="text-white/30">|</span>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Cookie Policy
              </a>
              <span className="text-white/30">|</span>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Update cookie preferences
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
