import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Cookie Policy di Alpha Technology (alphatechnology.ai): cosa sono i cookie, cosa utilizziamo e come gestire le preferenze.",
  alternates: {
    canonical: "https://alphatechnology.ai/it/cookies",
    languages: {
      en: "https://alphatechnology.ai/cookies",
      it: "https://alphatechnology.ai/it/cookies",
    },
  },
};

export default function CookiesPageIt() {
  return (
    <main className="min-h-screen bg-black px-6 md:px-12 lg:px-16 pt-28 pb-20">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-[32px] md:text-[42px] font-normal lowercase mb-10">
          <span className="text-[#0087ca]">(cookie policy)</span>
        </h1>

        <div className="space-y-8 text-white/85">
          <section className="space-y-3">
            <h2 className="text-[18px] text-white lowercase">cosa sono i cookie</h2>
            <p className="leading-relaxed lowercase">
              I cookie sono piccoli file di testo salvati sul tuo dispositivo quando visiti un sito. Servono a far
              funzionare il sito, migliorare le prestazioni e capire l’utilizzo.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[18px] text-white lowercase">cookie che utilizziamo</h2>
            <ul className="list-disc pl-5 space-y-2 lowercase">
              <li>
                <strong className="font-medium text-white">strettamente necessari</strong>: indispensabili per
                erogazione e sicurezza del sito.
              </li>
              <li>
                <strong className="font-medium text-white">preferenze</strong>: memorizzano alcune scelte quando
                applicabile.
              </li>
              <li>
                <strong className="font-medium text-white">analytics</strong>: solo se abilitati/aggiunti da noi (ad
                esempio Google Analytics o simili). In caso di aggiunta, aggiorneremo questa pagina.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-[18px] text-white lowercase">servizi di terze parti</h2>
            <p className="leading-relaxed lowercase">
              La home include uno script di terze parti per lo sfondo interattivo (Unicorn Studio) e può caricare immagini
              esterne (ad esempio da Unsplash). Le terze parti possono impostare cookie o raccogliere dati tecnici secondo
              le proprie policy.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[18px] text-white lowercase">come gestire i cookie</h2>
            <p className="leading-relaxed lowercase">
              Puoi gestire i cookie dalle impostazioni del browser (bloccare, eliminare o limitare). Disabilitare alcuni
              cookie può impattare il funzionamento del sito.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[18px] text-white lowercase">contatti</h2>
            <p className="leading-relaxed lowercase">
              Per domande, scrivi a{" "}
              <a className="underline hover:text-white" href="mailto:info@alphatechnology.ai">
                info@alphatechnology.ai
              </a>
              . Per il trattamento dei dati personali, vedi la{" "}
              <Link className="underline hover:text-white" href="/it/privacy">
                privacy policy
              </Link>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[18px] text-white lowercase">aggiornamenti</h2>
            <p className="leading-relaxed lowercase">
              Possiamo aggiornare questa policy. Ultimo aggiornamento:{" "}
              <strong className="font-medium text-white">2026-01-05</strong>.
            </p>
          </section>

          <div className="pt-8 border-t border-white/10">
            <Link href="/it" className="text-white/70 hover:text-white transition-colors lowercase underline-blue">
              torna alla home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}


