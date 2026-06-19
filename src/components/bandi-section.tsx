import Link from "next/link";
import type { SiteCopy } from "@/content/site-copy";
import { SectionLabel } from "@/components/section-label";

export function BandiSection({
  basePath = "",
  copy,
}: {
  basePath?: "" | "/it";
  copy: SiteCopy["bandi"];
}) {
  // JSON-LD FAQ schema. Content is fully static (own site copy), and `<` is
  // escaped so the serialized string can never break out of the <script> tag.
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: copy.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const faqJsonLd = JSON.stringify(faqSchema).replace(/</g, "\\u003c");
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd }} />
    <section className="section-spacing px-6 md:px-12 lg:px-16 bg-black">
      <div className="container mx-auto max-w-5xl pt-24 md:pt-28">
        {/* Header */}
        <div className="mb-16">
          <SectionLabel label={copy.label} />
          <h1 className="display-lg text-white mt-8 mb-5 lowercase">
            {copy.title}
          </h1>
          <p className="text-[18px] md:text-[20px] text-white/70 lowercase leading-relaxed max-w-3xl">
            {copy.intro}
          </p>
        </div>

        {/* Measures */}
        <div className="grid md:grid-cols-2 gap-6">
          {copy.measures.map((m) => (
            <div
              key={m.name}
              className="border border-white/10 rounded-2xl p-7 md:p-8 bg-white/[0.02]"
            >
              <span className="inline-block text-[12px] text-[#0045FF] lowercase border border-[#0045FF]/40 rounded-full px-3 py-1 mb-5">
                {m.tag}
              </span>
              <h2 className="text-[22px] font-medium text-white mb-3 lowercase">{m.name}</h2>
              <p className="text-[14px] text-white/60 lowercase leading-relaxed mb-6">{m.summary}</p>
              <ul className="space-y-2.5">
                {m.facts.map((f) => (
                  <li key={f} className="text-[14px] text-white/70 lowercase leading-relaxed flex gap-3">
                    <span className="text-[#0045FF]">—</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[13px] text-white/40 lowercase mt-6">{m.note}</p>
            </div>
          ))}
        </div>

        {/* Track record */}
        <div className="border-t border-white/10 pt-12 mt-16">
          <h2 className="eyebrow lowercase mb-4">{copy.track.title}</h2>
          <p className="text-[18px] md:text-[20px] text-white/80 lowercase leading-relaxed max-w-3xl">
            {copy.track.text}
          </p>
        </div>

        {/* How we help */}
        <div className="border-t border-white/10 pt-12 mt-16">
          <h2 className="display-lg text-white mb-3 lowercase">{copy.help.title}</h2>
          <p className="text-[15px] text-white/60 lowercase leading-relaxed mb-10 max-w-2xl">{copy.help.intro}</p>
          <ol className="grid md:grid-cols-2 gap-x-14 gap-y-7">
            {copy.help.steps.map((s, i) => (
              <li key={s} className="flex gap-5 items-start">
                <span className="text-[28px] md:text-[32px] font-medium text-[#0045FF] leading-none shrink-0 w-12">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[16px] text-white/70 lowercase leading-relaxed pt-1">{s}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* FAQ */}
        <div className="border-t border-white/10 pt-12 mt-16">
          <h2 className="display-lg text-white mb-10 lowercase">{copy.faqTitle}</h2>
          <dl className="divide-y divide-white/10 border-t border-white/10">
            {copy.faq.map((f) => (
              <div key={f.q} className="py-6">
                <dt className="text-[16px] md:text-[18px] text-white font-medium lowercase mb-2">{f.q}</dt>
                <dd className="text-[14px] md:text-[15px] text-white/60 lowercase leading-relaxed max-w-3xl">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* CTA */}
        <div className="border-t border-white/10 pt-12 mt-16">
          <p className="display-lg text-white mb-8 lowercase max-w-2xl">{copy.cta.title}</p>
          <Link
            href={`${basePath}/#contact`}
            className="inline-block text-[15px] text-white lowercase border-b-2 border-[#0045FF] pb-1 hover:text-[#0045FF] transition-colors"
          >
            {copy.cta.button} →
          </Link>
        </div>

        {/* Reference programmes / logos */}
        <div className="border-t border-white/10 pt-8 mt-16">
          <p className="text-[12px] text-white/40 lowercase mb-5">{copy.logos.caption}</p>
          <div className="flex flex-wrap items-center gap-5 md:gap-8">
            <span className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/loghi/ue-flag.svg" alt="Unione europea" width={42} height={28} className="rounded-[2px]" />
              <span className="text-[13px] text-white/60 lowercase leading-tight">cofinanziato dall&apos;<br className="hidden sm:block" />unione europea</span>
            </span>
            <span className="text-[13px] text-white/60 lowercase">{copy.logos.region}</span>
            <span className="text-[13px] text-white/60 lowercase">{copy.logos.programme}</span>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-[12px] text-white/35 lowercase leading-relaxed mt-8 max-w-3xl">
          {copy.disclaimer}
        </p>
      </div>
    </section>
    </>
  );
}
