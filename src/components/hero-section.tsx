"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";

export function HeroSection() {
  useEffect(() => {
    // Load Unicorn Studio script
    if (!window.UnicornStudio) {
      window.UnicornStudio = { isInitialized: false };
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.33/dist/unicornStudio.umd.js";
      script.onload = function() {
        if (!window.UnicornStudio.isInitialized) {
          window.UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
        }
      };
      (document.head || document.body).appendChild(script);
    }
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-tight mb-8">
              <br />
              AI solutions for{" "}
              <strong className="font-semibold underline-blue">business</strong><br />
              &{" "}
              <strong className="font-semibold underline-blue">industrial automation</strong><br />
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
        <button className="bg-black border border-white/20 text-white text-sm md:text-base lowercase px-8 py-4 rounded-full cursor-pointer">
          scroll & discover more
        </button>
      </div>
    </section>
  );
}
