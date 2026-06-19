import Link from "next/link";
import type { SiteCopy } from "@/content/site-copy";

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
        <div className="mb-14">
          <span className="text-[#0087ca] text-[14px] lowercase">{copy.label}</span>
          <h1 className="text-[32px] md:text-[44px] font-normal text-white mt-3 mb-5 lowercase leading-tight">
            {copy.title}
          </h1>
          <p className="text-[16px] md:text-[18px] text-white/60 lowercase leading-relaxed max-w-3xl">
            {copy.intro}
          </p>
        </div>

        {/* Measures */}
        <div className="grid md:grid-cols-2 gap-8">
          {copy.measures.map((m) => (
            <div key={m.name} className="border-t-2 border-white/10 pt-6">
              <span className="inline-block text-[12px] text-[#0087ca] lowercase border border-[#0087ca]/40 rounded-full px-3 py-1 mb-4">
                {m.tag}
              </span>
              <h2 className="text-[20px] font-medium text-white mb-3 lowercase">{m.name}</h2>
              <p className="text-[14px] text-white/60 lowercase leading-relaxed mb-5">{m.summary}</p>
              <ul className="space-y-2">
                {m.facts.map((f) => (
                  <li key={f} className="text-[14px] text-white/70 lowercase leading-relaxed flex gap-3">
                    <span className="text-[#0087ca]">—</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[13px] text-white/40 lowercase mt-5">{m.note}</p>
            </div>
          ))}
        </div>

        {/* Track record */}
        <div className="border-t-2 border-white/10 pt-10 mt-14">
          <h2 className="text-[#0087ca] text-[14px] lowercase mb-3">{copy.track.title}</h2>
          <p className="text-[16px] md:text-[18px] text-white/80 lowercase leading-relaxed max-w-3xl">
            {copy.track.text}
          </p>
        </div>

        {/* How we help */}
        <div className="border-t-2 border-white/10 pt-10 mt-14">
          <h2 className="text-[20px] md:text-[24px] font-normal text-white mb-2 lowercase">{copy.help.title}</h2>
          <p className="text-[14px] text-white/60 lowercase leading-relaxed mb-8 max-w-2xl">{copy.help.intro}</p>
          <ol className="grid md:grid-cols-2 gap-x-12 gap-y-5">
            {copy.help.steps.map((s, i) => (
              <li key={s} className="flex gap-4 items-start">
                <span className="text-[#0087ca] text-[14px] font-medium shrink-0 w-6">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-[15px] text-white/70 lowercase leading-relaxed">{s}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* FAQ */}
        <div className="border-t-2 border-white/10 pt-10 mt-14">
          <h2 className="text-[20px] md:text-[24px] font-normal text-white mb-8 lowercase">{copy.faqTitle}</h2>
          <dl className="space-y-6">
            {copy.faq.map((f) => (
              <div key={f.q}>
                <dt className="text-[15px] md:text-[16px] text-white font-medium lowercase mb-2">{f.q}</dt>
                <dd className="text-[14px] md:text-[15px] text-white/60 lowercase leading-relaxed max-w-3xl">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* CTA */}
        <div className="border-t-2 border-white/10 pt-10 mt-14">
          <p className="text-[20px] md:text-[24px] font-normal text-white mb-6 lowercase">{copy.cta.title}</p>
          <Link
            href={`${basePath}/#contact`}
            className="inline-block text-[15px] text-[#0087ca] lowercase underline-blue hover:text-white transition-colors"
          >
            {copy.cta.button} →
          </Link>
        </div>

        {/* Reference programmes / logos */}
        <div className="border-t border-white/10 pt-8 mt-14">
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
