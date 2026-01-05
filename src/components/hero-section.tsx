"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";
import type { SiteCopy } from "@/content/site-copy";

export function HeroSection({ copy }: { copy: SiteCopy["hero"] }) {
  useEffect(() => {
    // Ensure Unicorn Studio script is loaded, then (re)initialize on every mount.
    // This fixes the animation disappearing after client-side navigation (e.g. language switch).
    const scriptSrc =
      "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.33/dist/unicornStudio.umd.js";
    const scriptId = "unicorn-studio-script";

    const ensureLoaded = () =>
      new Promise<void>((resolve) => {
        // If already available, we're good.
        if (window.UnicornStudio?.init) {
          resolve();
          return;
        }

        // Ensure placeholder exists (prevents undefined checks elsewhere)
        if (!window.UnicornStudio) window.UnicornStudio = { isInitialized: false };

        // If script tag already exists, wait briefly for it to populate window.UnicornStudio.
        const existing = document.getElementById(scriptId) as HTMLScriptElement | null;
        if (existing) {
          const t = window.setTimeout(() => resolve(), 50);
          return () => window.clearTimeout(t);
        }

        const script = document.createElement("script");
        script.id = scriptId;
        script.src = scriptSrc;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => resolve(); // fail open: don't block rendering
        (document.head || document.body).appendChild(script);
      });

    let cancelled = false;
    void ensureLoaded().then(() => {
      if (cancelled) return;
      // Re-scan DOM for Unicorn Studio elements on every mount.
      window.UnicornStudio?.init?.();
      if (window.UnicornStudio) window.UnicornStudio.isInitialized = true;
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background container for unicorn.studio integration */}
      <div
        id="unicorn-background"
        className="absolute inset-0 z-0 opacity-65"
        data-purpose="unicorn-studio-interactive-background"
      >
        <div
          data-us-project="wozaeJ9arTXLA3ASkKvX"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Content - Caroselling inspired */}
      <div className="relative z-10 h-full flex items-center justify-start">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-5xl">
            <h1 className="text-[42px] md:text-[52px] lg:text-[62px] xl:text-[72px] font-normal text-white leading-tight mb-8">
              <br />
              {copy.line1}{" "}
              <strong className="font-medium underline-blue">{copy.highlight1}</strong>
              <br />
              {copy.and}{" "}
              <strong className="font-medium underline-blue">{copy.highlight2}</strong>
              <br />
            </h1>
                  {/* 
            <div className="space-y-4 max-w-3xl">
              <p className="text-base md:text-lg text-white/90 leading-relaxed">
                we use <strong className="font-semibold">ai and automation</strong> to transform how businesses operate.
              </p>
              <p className="text-base md:text-lg text-white/90 leading-relaxed">
                we build <strong className="font-semibold underline-blue">intelligent systems</strong>, streamlined workflows, and cutting-edge solutions that take your business into the future.
              </p>
            </div>
            */}
          </div>
        </div>
      </div>

      {/* Scroll indicator - Large black button */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
        <button className="bg-black border-2 border-white/20 text-white text-sm md:text-base lowercase px-8 py-4 rounded-pill cursor-pointer hover:bg-white/5 transition-all">
          {copy.scrollCta}
        </button>
      </div>
    </section>
  );
}
