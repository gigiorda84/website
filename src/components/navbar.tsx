import Link from "next/link";
import type { SiteCopy } from "@/content/site-copy";

export function Navbar({
  copy,
}: {
  copy: SiteCopy["navbar"];
}) {
  const bandiHref = copy.homeHref === "/" ? "/bandi" : `${copy.homeHref}/bandi`;
  const links = [
    { label: copy.links.solutions, href: "#solutions" },
    { label: copy.links.industries, href: "#case-studies" },
    { label: copy.links.about, href: "#about" },
    { label: copy.links.bandi, href: bandiHref },
    { label: copy.links.contact, href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 py-5">
        <div className="flex items-center justify-between">
          {/* Logo — mark + wordmark */}
          <Link href={copy.homeHref} className="flex items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/alpha_logo_white.svg" alt="Alpha Technology" className="h-8 w-auto" />
            <span className="text-2xl md:text-[28px] font-medium text-white lowercase tracking-tight">
              {copy.logoText}
            </span>
          </Link>

          {/* Primary navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-[14px] text-white/80 lowercase hover-underline hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            ))}

            <Link
              href={copy.languageToggle.href}
              className="text-[14px] text-[#0045FF] lowercase border border-[#0045FF]/40 rounded-pill px-3 py-1 hover:bg-[#0045FF] hover:text-white transition-colors"
              aria-label={`Switch language to ${copy.languageToggle.label}`}
            >
              {copy.languageToggle.label}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-white text-[14px] lowercase tracking-wide">
            {copy.mobileMenu}
          </button>
        </div>
      </div>
    </nav>
  );
}
