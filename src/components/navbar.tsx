import Link from "next/link";
import type { SiteCopy } from "@/content/site-copy";

export function Navbar({
  copy,
}: {
  copy: SiteCopy["navbar"];
}) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm border-b border-white/5">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href={copy.homeHref} className="text-xl md:text-2xl font-light text-white lowercase tracking-tight">
              {copy.logoText}
            </Link>
          </div>

          {/* Primary Navigation - Caroselling style with underlines */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            <Link
              href="#solutions"
              className="text-sm font-light text-white lowercase underline-blue hover:opacity-70 transition-opacity"
            >
              {copy.links.solutions}
            </Link>
            <Link
              href="#case-studies"
              className="text-sm font-light text-white lowercase underline-blue hover:opacity-70 transition-opacity"
            >
              {copy.links.industries}
            </Link>
            <Link
              href="#about"
              className="text-sm font-light text-white lowercase underline-blue hover:opacity-70 transition-opacity"
            >
              {copy.links.about}
            </Link>
            <Link
              href="#contact"
              className="text-sm font-light text-white lowercase underline-blue hover:opacity-70 transition-opacity"
            >
              {copy.links.contact}
            </Link>

            <Link
              href={copy.languageToggle.href}
              className="text-sm font-light text-white lowercase underline-blue hover:opacity-70 transition-opacity"
              aria-label={`Switch language to ${copy.languageToggle.label}`}
            >
              {copy.languageToggle.label}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-white text-sm lowercase">
            {copy.mobileMenu}
          </button>
        </div>
      </div>
    </nav>
  );
}
