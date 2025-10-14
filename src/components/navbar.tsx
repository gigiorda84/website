import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm border-b border-white/5">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-xl md:text-2xl font-light text-white lowercase tracking-tight">
              alpha
            </Link>
          </div>

          {/* Primary Navigation - Caroselling style with underlines */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            <Link
              href="#solutions"
              className="text-sm font-light text-white lowercase underline-blue hover:opacity-70 transition-opacity"
            >
              solutions
            </Link>
            <Link
              href="#industries"
              className="text-sm font-light text-white lowercase underline-blue hover:opacity-70 transition-opacity"
            >
              industries
            </Link>
            <Link
              href="#about"
              className="text-sm font-light text-white lowercase underline-blue hover:opacity-70 transition-opacity"
            >
              about
            </Link>
            <Link
              href="#contact"
              className="text-sm font-light text-white lowercase underline-blue hover:opacity-70 transition-opacity"
            >
              contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-white text-sm lowercase">
            menu
          </button>
        </div>
      </div>
    </nav>
  );
}
