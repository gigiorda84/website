import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Cookie Policy for Alpha Technology (alphatechnology.ai): what cookies are, what we use, and how to manage preferences.",
};

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-black px-6 md:px-12 lg:px-16 pt-28 pb-20">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-[32px] md:text-[42px] font-normal lowercase mb-10">
          <span className="text-[#0087ca]">(cookie policy)</span>
        </h1>

        <div className="space-y-8 text-white/85">
          <section className="space-y-3">
            <h2 className="text-[18px] text-white lowercase">what cookies are</h2>
            <p className="leading-relaxed lowercase">
              Cookies are small text files stored on your device when you visit a website. They are used to make sites
              work, improve performance, and understand usage.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[18px] text-white lowercase">cookies we use</h2>
            <ul className="list-disc pl-5 space-y-2 lowercase">
              <li>
                <strong className="font-medium text-white">strictly necessary</strong>: required for basic site delivery
                and security.
              </li>
              <li>
                <strong className="font-medium text-white">preferences</strong>: remember choices where applicable.
              </li>
              <li>
                <strong className="font-medium text-white">analytics</strong>: only if enabled/added by us (for example,
                Google Analytics or similar). If we add analytics, we will update this page accordingly.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-[18px] text-white lowercase">third-party services</h2>
            <p className="leading-relaxed lowercase">
              Our homepage includes a third-party script for an interactive background (Unicorn Studio) and may load
              external images (e.g., from Unsplash). Third parties may set cookies or collect technical data according to
              their policies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[18px] text-white lowercase">how to manage cookies</h2>
            <p className="leading-relaxed lowercase">
              You can control cookies through your browser settings (block, delete, or restrict). Note that disabling
              certain cookies may impact site functionality.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[18px] text-white lowercase">contact</h2>
            <p className="leading-relaxed lowercase">
              If you have questions, contact{" "}
              <a className="underline hover:text-white" href="mailto:info@alphatechnology.ai">
                info@alphatechnology.ai
              </a>
              . For how we handle personal data, see our{" "}
              <Link className="underline hover:text-white" href="/privacy">
                privacy policy
              </Link>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[18px] text-white lowercase">updates</h2>
            <p className="leading-relaxed lowercase">
              We may update this policy from time to time. Last updated:{" "}
              <strong className="font-medium text-white">2026-01-05</strong>.
            </p>
          </section>

          <div className="pt-8 border-t border-white/10">
            <Link href="/" className="text-white/70 hover:text-white transition-colors lowercase underline-blue">
              back to home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}


