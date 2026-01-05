export type Locale = "en" | "it";

export type SiteCopy = {
  navbar: {
    logoText: string;
    homeHref: string;
    links: {
      solutions: string;
      industries: string;
      about: string;
      contact: string;
    };
    mobileMenu: string;
    languageToggle: { label: string; href: string };
  };
  hero: {
    line1: string;
    highlight1: string;
    and: string;
    highlight2: string;
    scrollCta: string;
  };
  aboutIntro: {
    label: string;
    title: string;
    paragraphs: string[];
  };
  solutions: {
    label: string;
    columns: Array<{ title: string; items: string[] }>;
  };
  why: {
    headerRepeating: string;
    title: string;
    paragraphs: string[];
    listIntro: string;
    listItems: string[];
  };
  results: {
    quotePrefix: string;
    quoteHighlight: string;
    quoteAuthor: string;
    label: string;
    metrics: Array<{ value: string; title: string; subtitle: string }>;
    industriesTitle: string;
    industriesHighlight?: string;
    industries: Array<{ title: string; subtitle: string }>;
  };
  contact: {
    label: string;
    socials: Array<{ label: string; href: string }>;
    form: {
      topicPlaceholder: string;
      topicOptions: Array<{ value: string; label: string }>;
      budgetPlaceholder: string;
      budgetOptions: Array<{ value: string; label: string }>;
      discoveryPlaceholder: string;
      discoveryOptions: Array<{ value: string; label: string }>;
      namePlaceholder: string;
      companyPlaceholder: string;
      emailPlaceholder: string;
      messagePlaceholder: string;
      consentPrefix: string;
      consentLinkText: string;
      send: string;
      sending: string;
      success: string;
      genericError: string;
      networkError: string;
    };
    footer: {
      copyright: string;
      privacy: string;
      cookies: string;
      updateCookies: string;
    };
  };
  legal: {
    privacyTitle: string;
    cookiesTitle: string;
    backToHome: string;
    updatedOn: string;
  };
};

export const SITE_COPY: Record<Locale, SiteCopy> = {
  en: {
    navbar: {
      logoText: "alpha",
      homeHref: "/",
      links: {
        solutions: "solutions",
        industries: "industries",
        about: "about",
        contact: "contact",
      },
      mobileMenu: "menu",
      languageToggle: { label: "it", href: "/it" },
    },
    hero: {
      line1: "AI solutions for",
      highlight1: "business",
      and: "&",
      highlight2: "industrial automation",
      scrollCta: "scroll & discover more",
    },
    aboutIntro: {
      label: "(us)",
      title: "big things, like small ones, everything excites us.",
      paragraphs: [
        "every day we nurture the ambition to simplify complexity.",
        "we don't like compromises or standard answers — only the solution studied for you.",
        "we believe in ideas that embrace a strategic vision.",
        "we'll tell you we'll do things, and then we'll do them really.",
      ],
    },
    solutions: {
      label: "(services)",
      columns: [
        {
          title: "business automation",
          items: [
            "ai agents for admin, hr, finance & customer service",
            "erp/crm integration (sap, salesforce, dynamics)",
            "intelligent workflows for document management",
            "ai-powered decision support systems",
          ],
        },
        {
          title: "industrial automation",
          items: [
            "predictive maintenance algorithms",
            "production line optimization",
            "computer vision for quality control & safety",
            "iot integration for energy efficiency",
          ],
        },
        {
          title: "custom ai solutions",
          items: [
            "custom ml/ai model development",
            "multi-step ai agent implementation",
            "strategic digital transformation consulting",
            "end-to-end solution architecture",
          ],
        },
      ],
    },
    why: {
      headerRepeating: "(about)",
      title: "big things, like small ones, everything excites us.",
      paragraphs: [
        "every day we nurture the ambition to simplify complexity.",
        "we don't like compromises or standard answers — only the right solution for you.",
        "we believe in ideas that embrace a strategic vision.",
        "we'll tell you we'll do things, and then we'll actually do them.",
      ],
      listIntro:
        "we design for the future. in chaotic moments, language and communication can do small great things, like leaving 5 messages in the time capsule.",
      listItems: [
        "design content as if you worked for the fisher price.",
        "respect the emotions of those who read and enjoy your content.",
        "use a human voice, not a tone of voice.",
        "convey closeness, ethics and values.",
        "guide people's actions, solve their problems and change their lives for the better.",
      ],
    },
    results: {
      quotePrefix:
        "Qualunque tecnologia sufficientemente avanzata è indistinguibile dalla",
      quoteHighlight: "magia.",
      quoteAuthor: "Arthur C. Clarke",
      label: "(results)",
      metrics: [
        { value: "-40%", title: "human tickets", subtitle: "ai agent for customer support" },
        { value: "-25%", title: "machine downtime", subtitle: "predictive maintenance on industrial plants" },
        { value: "-15%", title: "energy consumption", subtitle: "industrial hvac optimization" },
        { value: "-70%", title: "processing time", subtitle: "finance document automation" },
      ],
      industriesTitle: "industries we",
      industriesHighlight: "serve",
      industries: [
        { title: "manufacturing", subtitle: "operational efficiency & predictive maintenance" },
        { title: "energy & utilities", subtitle: "consumption optimization & demand forecasting" },
        { title: "corporate & sme", subtitle: "process automation & customer experience" },
        { title: "smart cities", subtitle: "energy management & environmental monitoring" },
      ],
    },
    contact: {
      label: "(contact)",
      socials: [
        { label: "linkedin", href: "https://linkedin.com/company/alpha-technology-ai" },
        { label: "email", href: "mailto:info@alphatechnology.ai" },
      ],
      form: {
        topicPlaceholder: "I would like to discuss",
        topicOptions: [
          { value: "business-automation", label: "Business automation" },
          { value: "industrial-automation", label: "Industrial automation" },
          { value: "ai-agents", label: "AI agents" },
          { value: "data-platform", label: "Data / ML platform" },
          { value: "other", label: "Other" },
        ],
        budgetPlaceholder: "Budget",
        budgetOptions: [
          { value: "0-2000", label: "0-2.000" },
          { value: "2000-5000", label: "2.000-5.000" },
          { value: "5000-20000", label: "5.000-20.000" },
          { value: "other", label: "Other / I don't know" },
        ],
        discoveryPlaceholder: "How did you find us?",
        discoveryOptions: [
          { value: "google", label: "Google search" },
          { value: "social", label: "Social media" },
          { value: "referral", label: "Someone told me about you" },
          { value: "event", label: "Event / conference" },
        ],
        namePlaceholder: "Name and Surname",
        companyPlaceholder: "Company (optional)",
        emailPlaceholder: "Your email",
        messagePlaceholder: "Tell us briefly about your project",
        consentPrefix: "By checking this box you authorize us to",
        consentLinkText: "process your personal data",
        send: "send",
        sending: "sending...",
        success: "Thanks — we received your message. We’ll get back to you soon.",
        genericError: "Something went wrong. Please try again.",
        networkError: "Network error. Please try again.",
      },
      footer: {
        copyright: "Alpha | Copyright 2026 | P.IVA",
        privacy: "Privacy Policy",
        cookies: "Cookie Policy",
        updateCookies: "Update cookie preferences",
      },
    },
    legal: {
      privacyTitle: "(privacy policy)",
      cookiesTitle: "(cookie policy)",
      backToHome: "back to home",
      updatedOn: "Last updated",
    },
  },
  it: {
    navbar: {
      logoText: "alpha",
      homeHref: "/it",
      links: {
        solutions: "soluzioni",
        industries: "settori",
        about: "chi siamo",
        contact: "contatti",
      },
      mobileMenu: "menu",
      languageToggle: { label: "en", href: "/" },
    },
    hero: {
      line1: "Soluzioni AI per",
      highlight1: "il business",
      and: "e",
      highlight2: "l’automazione industriale",
      scrollCta: "scorri & scopri di più",
    },
    aboutIntro: {
      label: "(noi)",
      title: "le grandi cose, come le piccole, ci entusiasmano.",
      paragraphs: [
        "ogni giorno coltiviamo l’ambizione di semplificare la complessità.",
        "non amiamo i compromessi o risposte standard — solo la soluzione pensata per te.",
        "crediamo in idee che abbracciano una visione strategica.",
        "ti diremo che faremo le cose, e poi le faremo davvero.",
      ],
    },
    solutions: {
      label: "(servizi)",
      columns: [
        {
          title: "automazione business",
          items: [
            "ai agent per amministrazione, hr, finance e customer service",
            "integrazione erp/crm (sap, salesforce, dynamics)",
            "workflow intelligenti per gestione documentale",
            "sistemi di supporto decisionale basati su ai",
          ],
        },
        {
          title: "automazione industriale",
          items: [
            "algoritmi di manutenzione predittiva",
            "ottimizzazione linee di produzione",
            "computer vision per qualità e sicurezza",
            "integrazione iot per efficienza energetica",
          ],
        },
        {
          title: "soluzioni ai su misura",
          items: [
            "sviluppo modelli ml/ai custom",
            "implementazione ai agent multi-step",
            "consulenza per trasformazione digitale",
            "architettura end-to-end",
          ],
        },
      ],
    },
    why: {
      headerRepeating: "(chi siamo)",
      title: "le grandi cose, come le piccole, ci entusiasmano.",
      paragraphs: [
        "ogni giorno coltiviamo l’ambizione di semplificare la complessità.",
        "non amiamo i compromessi o risposte standard — solo la soluzione giusta per te.",
        "crediamo in idee che abbracciano una visione strategica.",
        "ti diremo che faremo le cose, e poi le faremo davvero.",
      ],
      listIntro:
        "progettiamo per il futuro. nei momenti caotici, il linguaggio e la comunicazione possono fare piccole grandi cose, come lasciare 5 messaggi nella capsula del tempo.",
      listItems: [
        "progetta contenuti come se lavorassi per fisher price.",
        "rispetta le emozioni di chi legge e fruisce i contenuti.",
        "usa una voce umana, non un tono di voce.",
        "trasmetti vicinanza, etica e valori.",
        "guida le azioni delle persone, risolvi problemi e migliora la loro vita.",
      ],
    },
    results: {
      quotePrefix:
        "Qualunque tecnologia sufficientemente avanzata è indistinguibile dalla",
      quoteHighlight: "magia.",
      quoteAuthor: "Arthur C. Clarke",
      label: "(risultati)",
      metrics: [
        { value: "-40%", title: "ticket umani", subtitle: "ai agent per customer support" },
        { value: "-25%", title: "fermi macchina", subtitle: "manutenzione predittiva su impianti industriali" },
        { value: "-15%", title: "consumo energetico", subtitle: "ottimizzazione hvac industriale" },
        { value: "-70%", title: "tempi di lavorazione", subtitle: "automazione documenti finance" },
      ],
      industriesTitle: "settori che",
      industriesHighlight: "serviamo",
      industries: [
        { title: "manifatturiero", subtitle: "efficienza operativa e manutenzione predittiva" },
        { title: "energia & utilities", subtitle: "ottimizzazione consumi e demand forecasting" },
        { title: "corporate & pmi", subtitle: "automazione processi e customer experience" },
        { title: "smart cities", subtitle: "energy management e monitoraggio ambientale" },
      ],
    },
    contact: {
      label: "(contatti)",
      socials: [
        { label: "linkedin", href: "https://linkedin.com/company/alpha-technology-ai" },
        { label: "email", href: "mailto:info@alphatechnology.ai" },
      ],
      form: {
        topicPlaceholder: "Vorrei parlare di",
        topicOptions: [
          { value: "business-automation", label: "Automazione business" },
          { value: "industrial-automation", label: "Automazione industriale" },
          { value: "ai-agents", label: "AI agent" },
          { value: "data-platform", label: "Piattaforma dati / ML" },
          { value: "other", label: "Altro" },
        ],
        budgetPlaceholder: "Budget",
        budgetOptions: [
          { value: "0-2000", label: "0-2.000" },
          { value: "2000-5000", label: "2.000-5.000" },
          { value: "5000-20000", label: "5.000-20.000" },
          { value: "other", label: "Altro / Non lo so" },
        ],
        discoveryPlaceholder: "Come ci hai trovati?",
        discoveryOptions: [
          { value: "google", label: "Ricerca Google" },
          { value: "social", label: "Social media" },
          { value: "referral", label: "Passaparola" },
          { value: "event", label: "Evento / conferenza" },
        ],
        namePlaceholder: "Nome e cognome",
        companyPlaceholder: "Azienda (opzionale)",
        emailPlaceholder: "La tua email",
        messagePlaceholder: "Raccontaci brevemente il tuo progetto",
        consentPrefix: "Spuntando questa casella ci autorizzi a",
        consentLinkText: "trattare i tuoi dati personali",
        send: "invia",
        sending: "invio...",
        success: "Grazie — abbiamo ricevuto il messaggio. Ti ricontatteremo presto.",
        genericError: "Qualcosa è andato storto. Riprova.",
        networkError: "Errore di rete. Riprova.",
      },
      footer: {
        copyright: "Alpha | Copyright 2026 | P.IVA",
        privacy: "Privacy Policy",
        cookies: "Cookie Policy",
        updateCookies: "Aggiorna preferenze cookie",
      },
    },
    legal: {
      privacyTitle: "(privacy policy)",
      cookiesTitle: "(cookie policy)",
      backToHome: "torna alla home",
      updatedOn: "Ultimo aggiornamento",
    },
  },
};


