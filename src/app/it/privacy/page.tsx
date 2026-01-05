import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy di Alpha Technology (alphatechnology.ai): come raccogliamo, utilizziamo e proteggiamo i dati personali dei visitatori e dei contatti.",
  alternates: {
    canonical: "https://alphatechnology.ai/it/privacy",
    languages: {
      en: "https://alphatechnology.ai/privacy",
      it: "https://alphatechnology.ai/it/privacy",
    },
  },
};

export default function PrivacyPageIt() {
  return (
    <main className="min-h-screen bg-black px-6 md:px-12 lg:px-16 pt-28 pb-20">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-[32px] md:text-[42px] font-normal lowercase mb-10">
          <span className="text-[#0087ca]">(privacy policy)</span>
        </h1>

        <div className="space-y-8 text-white/85">
          <section className="space-y-3">
            <h2 className="text-[18px] text-white lowercase">chi siamo</h2>
            <p className="leading-relaxed lowercase">
              Questo sito è gestito da <strong className="font-medium text-white">Alpha Technology</strong> (“Alpha”,
              “noi”). Realizziamo soluzioni AI per il business e l’automazione industriale.
            </p>
            <p className="leading-relaxed lowercase">
              Contatto:{" "}
              <a className="underline hover:text-white" href="mailto:info@alphatechnology.ai">
                info@alphatechnology.ai
              </a>{" "}
              · Telefono:{" "}
              <a className="underline hover:text-white" href="tel:+393492112515">
                +39 349 2112515
              </a>
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[18px] text-white lowercase">quali dati raccogliamo</h2>
            <ul className="list-disc pl-5 space-y-2 lowercase">
              <li>
                <strong className="font-medium text-white">dati di contatto</strong>: nome, email, azienda (opzionale) e
                messaggio inviato tramite il form.
              </li>
              <li>
                <strong className="font-medium text-white">dati tecnici</strong>: user agent del browser e referrer
                associati alla richiesta.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-[18px] text-white lowercase">perché trattiamo i tuoi dati</h2>
            <ul className="list-disc pl-5 space-y-2 lowercase">
              <li>Per rispondere alla tua richiesta e comunicare in merito a una collaborazione.</li>
              <li>Per proteggere il sito da spam e abusi (ad esempio controlli anti-spam).</li>
              <li>Per adempiere ad obblighi legali quando applicabile.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-[18px] text-white lowercase">base giuridica (gdpr)</h2>
            <ul className="list-disc pl-5 space-y-2 lowercase">
              <li>
                <strong className="font-medium text-white">consenso</strong>: quando invii il form e spunti la casella di
                consenso.
              </li>
              <li>
                <strong className="font-medium text-white">legittimo interesse</strong>: per sicurezza e funzionamento
                del sito.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-[18px] text-white lowercase">tempi di conservazione</h2>
            <p className="leading-relaxed lowercase">
              Conserviamo le richieste di contatto per il tempo necessario a gestire la richiesta e per un ragionevole
              follow-up, salvo obblighi di conservazione più lunghi previsti dalla legge.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[18px] text-white lowercase">condivisione & responsabili</h2>
            <p className="leading-relaxed lowercase">
              Possiamo utilizzare fornitori (ad esempio webhook o CRM) per gestire le richieste. Condividiamo solo i dati
              necessari all’erogazione del servizio.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[18px] text-white lowercase">i tuoi diritti</h2>
            <p className="leading-relaxed lowercase">
              In base alla tua giurisdizione, potresti avere diritti di accesso, rettifica, cancellazione, limitazione o
              opposizione al trattamento. Per esercitare i tuoi diritti scrivi a{" "}
              <a className="underline hover:text-white" href="mailto:info@alphatechnology.ai">
                info@alphatechnology.ai
              </a>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[18px] text-white lowercase">cookie</h2>
            <p className="leading-relaxed lowercase">
              Per informazioni sui cookie, consulta la{" "}
              <Link className="underline hover:text-white" href="/it/cookies">
                cookie policy
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


