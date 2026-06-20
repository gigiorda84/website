"use client";

import { useEffect } from "react";
import { BookCallButton } from "@/components/book-call-button";
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
      {/* Unicorn Studio — visible animated background */}
      <div
        id="unicorn-background"
        className="absolute inset-0 z-0 opacity-90"
        data-purpose="unicorn-studio-interactive-background"
      >
        <div
          data-us-project="wozaeJ9arTXLA3ASkKvX"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      {/* Light legibility gradient — keeps the headline readable on the left */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />

      {/* Content — oversized editorial headline */}
      <div className="relative z-10 h-full flex items-center justify-start">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-6xl">
            <h1 className="display-xl text-white lowercase mb-10">
              {copy.line1}{" "}
              <span className="hl">{copy.highlight1}</span>
              <br />
              {copy.and}{" "}
              <span className="underline-blue">{copy.highlight2}</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Primary CTA — solid black button, centered to cover the unicorn.studio badge */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20">
        <BookCallButton
          label={copy.bookCall}
          className="bg-black border-2 border-white/20 text-white text-sm md:text-base lowercase min-w-[300px] px-8 py-4 rounded-pill cursor-pointer hover:bg-[#0045FF] hover:border-[#0045FF] transition-colors"
        />
      </div>
    </section>
  );
}
