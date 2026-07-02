export type Locale = "en" | "it";

export type SiteCopy = {
  navbar: {
    logoText: string;
    homeHref: string;
    links: {
      solutions: string;
      industries: string;
      about: string;
      bandi: string;
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
    bookCall: string;
  };
  aboutIntro: {
    label: string;
    title: string;
    paragraphs: string[];
    founders: string;
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
  portfolio: {
    label: string;
    title: string;
    intro: string;
    detail: {
      businessNeed: string;
      valueProposition: string;
      features: string;
      sector: string;
      technologies: string;
      back: string;
      ctaTitle: string;
      ctaButton: string;
    };
    projects: Array<{
      slug: string;
      name: string;
      description: string;
      sector: string;
      technologies: string[];
      businessNeed: string;
      valueProposition: string;
      features: string[];
    }>;
  };
  bandi: {
    label: string;
    title: string;
    intro: string;
    measures: Array<{ name: string; tag: string; summary: string; facts: string[]; note: string }>;
    track: { title: string; text: string };
    help: { title: string; intro: string; steps: string[] };
    faqTitle: string;
    faq: Array<{ q: string; a: string }>;
    logos: { caption: string; region: string; programme: string };
    cta: { title: string; button: string };
    disclaimer: string;
    teaser: { eyebrow: string; title: string; text: string; button: string };
  };
  contact: {
    label: string;
    bookCall: string;
    bookCallNote: string;
    socials: Array<{ label: string; href: string }>;
    form: {
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
    brokerBrain: {
      eyebrow: string;
      name: string;
      claim: string;
      legal: string[];
    };
    footer: {
      copyrightPrefix: string;
      company: string;
      companyHref: string;
      copyrightSuffix: string;
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
        bandi: "funding",
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
      bookCall: "book a call",
    },
    aboutIntro: {
      label: "(us)",
      title: "big things, like small ones, everything excites us.",
      paragraphs: [
        "every day we nurture the ambition to simplify complexity.",
        "over 40 years of combined experience: we come from leading enerbrain as ceo and cto, where we took ai and automation from research to industry.",
        "we collaborate with politecnico di torino, università di torino and collegio carlo alberto.",
        "we'll tell you we'll do things, and then we'll do them — for real.",
      ],
      founders: "giuseppe giordano — ceo · marco martellacci — cto",
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
      headerRepeating: "(why alpha)",
      title: "we turn ai and automation into measurable business outcomes.",
      paragraphs: [
        "we don't sell models — we deliver systems that cut tickets, downtime and cost.",
        "strategy, engineering and delivery sit in one team, so nothing gets lost in hand-offs.",
      ],
      listIntro: "how we work",
      listItems: [
        "we start from your process, not from the technology.",
        "every solution is built for you — no off-the-shelf compromises.",
        "we make impact measurable: fewer tickets, less downtime, lower costs.",
        "we ship working software fast, then refine it with you.",
        "one team for strategy, build and delivery — end to end.",
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
    portfolio: {
      label: "(portfolio)",
      title: "tools we've built",
      intro:
        "custom software we designed and shipped — the kind of tool we can build for your business too.",
      detail: {
        businessNeed: "business need",
        valueProposition: "value proposition",
        features: "features",
        sector: "sector",
        technologies: "technologies",
        back: "back to portfolio",
        ctaTitle: "want a tool like this for your business?",
        ctaButton: "let's talk",
      },
      projects: [
        {
          slug: "lead-forno",
          name: "lead forno",
          description: "lead generation and qualification management.",
          sector: "b2b sales intelligence / lead generation (italian market)",
          technologies: ["python", "playwright", "next.js 16", "react 19", "postgres (neon, rls)", "redis", "anthropic claude", "stripe", "vercel"],
          businessNeed:
            "italian sales teams and agencies need accurate, verified, gdpr-compliant b2b contact lists — data that today is scattered across uneven directories with high bounce rates.",
          valueProposition:
            "verified lead lists, cross-referenced from multiple sources, deduplicated, enriched and email-validated, organised by industry and province — ready for outreach.",
          features: [
            "multi-source scraping with automatic deduplication",
            "cascading enrichment (website, email, vat number, revenue)",
            "email verification chain and lead scoring",
            "cold-outreach engine with a/b sequences",
            "multi-tenant saas dashboard with crm pipeline",
            "ai-assisted lead classification and content generation",
          ],
        },
        {
          slug: "backoffice-ai",
          name: "backoffice ai",
          description: "ai automation for back-office processes and document workflows.",
          sector: "fintech / consumer credit (salary-backed lending, italy)",
          technologies: ["next.js 16", "react 19", "typescript", "tailwind", "clerk", "neon postgres", "drizzle", "anthropic claude (vision)", "playwright", "vercel"],
          businessNeed:
            "salary-backed credit brokering is manual — agents read payslips by hand, log into dozens of bank portals to fetch creditworthiness ratings, and compare offers one by one.",
          valueProposition:
            "ai extracts payslip data, eligibility rules are transparent (every 'no' has a reason), offers are aggregated in real time and portal ratings are centralised with screenshot evidence — faster, auditable decisions.",
          features: [
            "pre-sales wizard with ai payslip extraction and confidence scoring",
            "eligibility and calculation engine (assignable quota, severance, tax-id checks)",
            "product routing with explicit reason codes",
            "creditworthiness rating aggregation across many lender portals",
            "real-time offer comparator across partner banks and insurers",
            "multi-tenant agent area with full audit log",
          ],
        },
        {
          slug: "determina-ai",
          name: "determina ai",
          description: "ai for drafting public-administration decrees, with a dedicated app.",
          sector: "govtech / italian local public administration",
          technologies: ["next.js 16", "react 19", "typescript", "tailwind", "clerk (organizations)", "neon postgres (rls)", "anthropic claude", "whisper", "docx generation", "vercel"],
          businessNeed:
            "in small municipalities a single officer drafts hundreds of decrees a year by hand in word, copying old documents — slow, error-prone and a compliance risk under the 2023 procurement code.",
          valueProposition:
            "auto-generates the legal boilerplate from a handful of variable fields, with automated conformity checks and modern ux — assisting, not replacing, the municipal system. ~10–15 minutes instead of 30–60.",
          features: [
            "ai chat and guided wizard that extract fields from natural language",
            "template engine with automatic legal citations and docx export",
            "conformity guardrails with pass / warn / fail verdicts",
            "ai-drafted reasoning for the decree",
            "ai extraction from supplier quote pdfs",
            "voice dictation and multi-tenant isolation per municipality",
          ],
        },
        {
          slug: "valuengyne",
          name: "valuengyne",
          description: "positioning and go-to-market platform for startups.",
          sector: "startup advisory / venture & accelerator portfolio support",
          technologies: ["proprietary digital platform", "multi-model ai (llm, predictive, vertical)", "startup & sector benchmark databases", "crm & workflow automation", "data-driven decision systems"],
          businessNeed:
            "most startups fail not on execution but on value creation — they scale before validating a unique, reachable and defensible market position, burning runway without a clear go-to-market strategy.",
          valueProposition:
            "turns early promise into sustainable revenue: a validated, defensible positioning and a focused 12-month go-to-market plan, executed and iterated with data — so founders grow on the right vertical instead of guessing.",
          features: [
            "market-vertical and value-creation analysis",
            "competitive positioning mapping",
            "technology and scalability assessment",
            "12-month go-to-market plan with revenue focus areas",
            "execution support with progress monitoring and iteration",
            "portfolio-wide reporting dashboard for funds and accelerators",
          ],
        },
        {
          slug: "reelificio-pm",
          name: "reelificio pm",
          description: "production and management tool for short-form video reels.",
          sector: "social content production / short-form video (instagram reels)",
          technologies: ["next.js 16", "react 19", "typescript", "tailwind", "supabase (postgres, auth, rls)", "google drive api", "resend", "telegram bot api", "vercel cron"],
          businessNeed:
            "a reel-production studio coordinated work over chats and calls, with no visibility into pipeline status, ownership, deadlines or buffer levels.",
          valueProposition:
            "turns each monthly script doc into a structured batch of reel cards (zero data entry), with an explicit raci-governed pipeline and coordination via tasks, comments and multi-channel notifications — assets stay on google drive.",
          features: [
            "google-doc parser with non-destructive re-sync",
            "kanban pipeline with traffic-light status per phase",
            "raci ownership per phase with approval flow",
            "threaded comments with mentions and drive attachments",
            "magic-link invites for external collaborators",
            "alert engine and digests with email + telegram notifications",
          ],
        },
        {
          slug: "sonic-walkscape",
          name: "sonic walkscape",
          description: "gps-triggered sonic walking-tour app for nonprofits.",
          sector: "nonprofit / cultural tourism / heritage",
          technologies: ["swift / swiftui", "mapkit", "corelocation", "kotlin / jetpack compose", "nestjs", "postgresql", "prisma", "aws s3"],
          businessNeed:
            "a nonprofit wanted a branded app to distribute geolocated sonic walks across several cities, with self-service content management, on-site offline reliability and voucher-gated access.",
          valueProposition:
            "turns physical walks into hands-free, location-aware audio narratives that play automatically by position and work offline, while the artistic team manages multilingual tours through a web cms.",
          features: [
            "gps geofence triggering with event queueing",
            "background audio playback with point replay",
            "offline mode (audio, images, subtitles, map tiles)",
            "dark map with route and live position",
            "multilingual content with subtitles",
            "voucher redemption, donations and a web cms with analytics",
          ],
        },
      ],
    },
    bandi: {
      label: "(funding)",
      title: "your digital project can be funded up to 70%",
      intro:
        "the custom software, ai and automation we build are eligible expenses under piedmont's digitalization grants. we help you identify the right call and we accompany you through the entire grant journey.",
      measures: [
        {
          name: "voucher digitalizzazione pmi 2026",
          tag: "non-repayable grant",
          summary:
            "regione piemonte voucher (3rd edition, pr fesr 2021-2027) for the digital transition of smaller companies.",
          facts: [
            "for smes, micro-enterprises and self-employed professionals",
            "40–70% non-repayable grant on eligible expenses",
            "covers digital goods and services + consulting and training",
            "€18m budget · expected to open october 2026",
          ],
          note: "managed by regione piemonte.",
        },
        {
          name: "digitalizzazione e efficientamento produttivo 2026",
          tag: "zero-interest financing",
          summary:
            "larger regional measure (pr fesr 2021-2027) for digitalization and production efficiency projects.",
          facts: [
            "for smes and mid-cap companies",
            "70% zero-interest financing + a non-repayable share",
            "€80m budget (€37m digitalization + €41m efficiency)",
            "line b open from 7 jul 2026, line a from 13 oct 2026, closing 29 oct 2028",
          ],
          note: "managed by finpiemonte.",
        },
      ],
      track: {
        title: "a track record with grants",
        text:
          "we have managed over 10 national and european grants worth more than €5m, including horizon 2020. we know how a call is read, scored and reported — and we put that experience to work on your project.",
      },
      help: {
        title: "how we support you, end to end",
        intro: "one team for both the technology and the funding — no hand-offs.",
        steps: [
          "we identify the right call for your project",
          "we design the solution (custom software / ai / automation = eligible expense)",
          "we support you through the application",
          "we build and deliver the solution",
          "we handle reporting and follow you until the grant is closed",
        ],
      },
      faqTitle: "frequently asked questions",
      faq: [
        {
          q: "who can apply for the digitalization grants?",
          a: "depending on the call, smes, micro-enterprises, self-employed professionals and mid-cap companies based in piedmont.",
        },
        {
          q: "is custom software an eligible expense?",
          a: "yes. custom software, ai and automation projects, plus related consulting and training, typically fall among the eligible expenses for digitalization calls.",
        },
        {
          q: "how much can i get?",
          a: "up to 70% — as a non-repayable grant (voucher digitalizzazione pmi) or as zero-interest financing plus a non-repayable share (digitalizzazione e efficientamento).",
        },
        {
          q: "do you also handle the application?",
          a: "yes. one team takes care of both the technology and the funding: we identify the call, design the eligible solution, support the application, build it and handle reporting until the grant is closed.",
        },
        {
          q: "have you managed european grants?",
          a: "yes — we have managed over 10 national and european grants worth more than €5m, including horizon 2020. we know how a call is read, scored and reported.",
        },
        {
          q: "when do the calls open?",
          a: "the digitalizzazione e efficientamento measure is already opening in 2026 (line b from july, line a from october); the voucher digitalizzazione pmi is expected to open in october 2026. dates may change — talk to us to plan ahead.",
        },
      ],
      logos: {
        caption: "reference programmes",
        region: "regione piemonte",
        programme: "pr fesr 2021-2027",
      },
      cta: { title: "find out if your project can be funded", button: "talk to us" },
      disclaimer:
        "indicative information, subject to the official call documents.",
      teaser: {
        eyebrow: "(funding)",
        title: "up to 70% funding on your digital project",
        text:
          "the software, ai and automation we build can be eligible expenses under piedmont's digitalization grants — and we accompany you through the whole grant journey, including european calls like horizon 2020.",
        button: "discover the grants",
      },
    },
    contact: {
      label: "(contact)",
      bookCall: "book a call",
      bookCallNote: "first call, no commitment",
      socials: [
        { label: "linkedin", href: "https://linkedin.com/company/alpha-technology-ai" },
        { label: "email", href: "mailto:info@alphatechnology.ai" },
      ],
      form: {
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
      brokerBrain: {
        eyebrow: "alpha technology is the software division of",
        name: "BrokerBrain S.r.l.",
        claim:
          "we build custom tools for businesses. have a process to automate or an idea to ship? let's build it together.",
        legal: [
          "BrokerBrain S.r.l.",
          "Via Vela 42, 10128 Torino",
          "P.IVA 13423640013 · REA 1361882",
          "Cap. soc. €10.000 i.v.",
          "partner@brokerbrain.it · +39 011 188 36088",
        ],
      },
      footer: {
        copyrightPrefix: "Alpha Technology | ©",
        company: "BrokerBrain S.r.l.",
        companyHref: "https://www.brokerbrain.it",
        copyrightSuffix: "2026 | P.IVA 13423640013",
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
        bandi: "bandi",
        contact: "contatti",
      },
      mobileMenu: "menu",
      languageToggle: { label: "en", href: "/" },
    },
    hero: {
      line1: "Soluzioni AI per",
      highlight1: "il business",
      and: "e",
      highlight2: "l’automazione industriale",
      bookCall: "prenota una call",
    },
    aboutIntro: {
      label: "(noi)",
      title: "le grandi cose, come le piccole, ci entusiasmano.",
      paragraphs: [
        "ogni giorno coltiviamo l’ambizione di semplificare la complessità.",
        "oltre 40 anni di esperienza combinata: veniamo dalla guida di enerbrain come ceo e cto, dove abbiamo portato l’ai e l’automazione dalla ricerca all’industria.",
        "collaboriamo con politecnico di torino, università di torino e collegio carlo alberto.",
        "ti diremo che faremo le cose, e poi le faremo davvero.",
      ],
      founders: "giuseppe giordano — ceo · marco martellacci — cto",
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
      headerRepeating: "(perché alpha)",
      title: "trasformiamo ai e automazione in risultati di business misurabili.",
      paragraphs: [
        "non vendiamo modelli — rilasciamo sistemi che riducono ticket, fermi macchina e costi.",
        "strategia, sviluppo e rilascio in un unico team: niente si perde nei passaggi di mano.",
      ],
      listIntro: "come lavoriamo",
      listItems: [
        "partiamo dal tuo processo, non dalla tecnologia.",
        "ogni soluzione è costruita su misura — nessun compromesso preconfezionato.",
        "rendiamo l’impatto misurabile: meno ticket, meno fermi macchina, meno costi.",
        "rilasciamo software funzionante in fretta, poi lo perfezioniamo con te.",
        "un unico team per strategia, sviluppo e rilascio — end to end.",
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
    portfolio: {
      label: "(portfolio)",
      title: "tool che abbiamo realizzato",
      intro:
        "software su misura che abbiamo progettato e rilasciato — lo stesso tipo di tool che possiamo costruire per la tua azienda.",
      detail: {
        businessNeed: "business need",
        valueProposition: "value proposition",
        features: "funzionalità",
        sector: "settore",
        technologies: "tecnologie",
        back: "torna al portfolio",
        ctaTitle: "vuoi un tool come questo per la tua azienda?",
        ctaButton: "parliamone",
      },
      projects: [
        {
          slug: "lead-forno",
          name: "lead forno",
          description: "gestione e qualificazione della lead generation.",
          sector: "sales intelligence b2b / lead generation (mercato italiano)",
          technologies: ["python", "playwright", "next.js 16", "react 19", "postgres (neon, rls)", "redis", "anthropic claude", "stripe", "vercel"],
          businessNeed:
            "i team sales e le agenzie italiane hanno bisogno di liste contatti b2b accurate, verificate e gdpr-compliant — dati oggi sparsi su directory disomogenee con alto tasso di bounce.",
          valueProposition:
            "liste lead verificate, incrociate da più fonti, deduplicate, arricchite e con email validate, organizzate per settore e provincia — pronte per l'outreach.",
          features: [
            "scraping multi-fonte con deduplica automatica",
            "enrichment a cascata (sito, email, p.iva, fatturato)",
            "catena di verifica email e lead scoring",
            "motore di cold outreach con sequenze a/b",
            "dashboard saas multi-tenant con pipeline crm",
            "funzioni ai di classificazione lead e generazione contenuti",
          ],
        },
        {
          slug: "backoffice-ai",
          name: "backoffice ai",
          description: "automazione ai dei processi di backoffice e dei flussi documentali.",
          sector: "fintech / credito al consumo (cessione del quinto, italia)",
          technologies: ["next.js 16", "react 19", "typescript", "tailwind", "clerk", "neon postgres", "drizzle", "anthropic claude (vision)", "playwright", "vercel"],
          businessNeed:
            "il brokeraggio della cessione del quinto è manuale — gli agenti leggono le buste paga a mano, accedono a decine di portali bancari per i rating di affidabilità e confrontano le offerte una per una.",
          valueProposition:
            "l'ai estrae i dati della busta paga, le regole di eleggibilità sono trasparenti (ogni 'no' ha una motivazione), le offerte sono aggregate in tempo reale e i rating dei portali sono centralizzati con evidenza screenshot — decisioni più rapide e auditabili.",
          features: [
            "wizard pre-vendita con estrazione ai della busta paga e confidence score",
            "motore di eleggibilità e calcolo (quota cedibile, tfr, controlli codice fiscale)",
            "routing prodotto con motivazioni esplicite",
            "aggregazione dei rating di affidabilità da numerosi portali bancari",
            "comparatore offerte in tempo reale tra banche e compagnie partner",
            "area agente multi-tenant con audit log completo",
          ],
        },
        {
          slug: "determina-ai",
          name: "determina ai",
          description: "ai per la redazione di determine della pubblica amministrazione, con app dedicata.",
          sector: "govtech / pubblica amministrazione locale (comuni)",
          technologies: ["next.js 16", "react 19", "typescript", "tailwind", "clerk (organizations)", "neon postgres (rls)", "anthropic claude", "whisper", "generazione docx", "vercel"],
          businessNeed:
            "nei piccoli comuni un singolo funzionario redige centinaia di determine l'anno a mano in word, copiando atti precedenti — lento, soggetto a errori e con rischi di conformità rispetto al codice appalti 2023.",
          valueProposition:
            "genera in automatico la parte normativa a partire da pochi campi variabili, con controlli di conformità automatici e ux moderna — affianca, non sostituisce, il gestionale comunale. ~10–15 minuti invece di 30–60.",
          features: [
            "chat ai e wizard guidato che estraggono i campi dal linguaggio naturale",
            "motore template con citazioni normative automatiche ed export docx",
            "guardrail di conformità con verdetto pass / warn / fail",
            "bozza ai della motivazione della determina",
            "estrazione ai dai pdf dei preventivi fornitore",
            "dettatura vocale e isolamento multi-tenant per comune",
          ],
        },
        {
          slug: "valuengyne",
          name: "valuengyne",
          description: "piattaforma di posizionamento e go-to-market per startup.",
          sector: "advisory startup / supporto al portfolio di fondi e acceleratori",
          technologies: ["piattaforma digitale proprietaria", "ai multi-modello (llm, predittiva, verticale)", "database di startup e benchmark di settore", "crm e automazione dei workflow", "sistemi decisionali data-driven"],
          businessNeed:
            "la maggior parte delle startup non fallisce sull'esecuzione ma sulla creazione di valore — scalano prima di validare un posizionamento di mercato unico, raggiungibile e difendibile, bruciando runway senza una go-to-market chiara.",
          valueProposition:
            "trasforma la promessa iniziale in crescita di ricavi sostenibile: un posizionamento validato e difendibile e un piano go-to-market a 12 mesi, eseguito e iterato con i dati — così i founder crescono sul verticale giusto invece di andare a tentativi.",
          features: [
            "analisi dei verticali di mercato e della creazione di valore",
            "mappatura del posizionamento competitivo",
            "valutazione di tecnologia e scalabilità",
            "piano go-to-market a 12 mesi con aree di focus sui ricavi",
            "supporto all'esecuzione con monitoraggio dei progressi e iterazione",
            "dashboard di reporting sull'intero portfolio per fondi e acceleratori",
          ],
        },
        {
          slug: "reelificio-pm",
          name: "reelificio pm",
          description: "tool di produzione e gestione di reel e contenuti video brevi.",
          sector: "produzione contenuti social / video short-form (reel instagram)",
          technologies: ["next.js 16", "react 19", "typescript", "tailwind", "supabase (postgres, auth, rls)", "google drive api", "resend", "telegram bot api", "vercel cron"],
          businessNeed:
            "uno studio di produzione reel coordinava il lavoro tra chat e chiamate, senza visibilità su stato della pipeline, responsabilità, scadenze e livelli di buffer.",
          valueProposition:
            "trasforma ogni doc mensile di script in un batch strutturato di card reel (zero data entry), con pipeline esplicita governata da raci e coordinamento via task, commenti e notifiche multicanale — gli asset restano su google drive.",
          features: [
            "parser di google doc con re-sync non distruttivo",
            "pipeline kanban con stato a semaforo per fase",
            "responsabilità raci per fase con flusso di approvazione",
            "commenti con @menzioni e allegati da drive",
            "inviti magic-link per collaboratori esterni",
            "alert engine e digest con notifiche email + telegram",
          ],
        },
        {
          slug: "sonic-walkscape",
          name: "sonic walkscape",
          description: "app di tour audio a piedi attivati via gps, per il non profit.",
          sector: "non profit / turismo culturale / heritage",
          technologies: ["swift / swiftui", "mapkit", "corelocation", "kotlin / jetpack compose", "nestjs", "postgresql", "prisma", "aws s3"],
          businessNeed:
            "una nonprofit voleva un'app brandizzata per distribuire passeggiate sonore geolocalizzate in più città, con gestione contenuti self-service, affidabilità offline sul posto e accesso tramite voucher.",
          valueProposition:
            "trasforma le passeggiate fisiche in narrazioni audio hands-free e location-aware, che partono in automatico in base alla posizione e funzionano offline, mentre il team artistico gestisce tour multilingua da un cms web.",
          features: [
            "trigger geofence gps con coda eventi",
            "audio in background con replay del punto",
            "modalità offline (audio, immagini, sottotitoli, mappe)",
            "mappa dark con percorso e posizione live",
            "contenuti multilingua con sottotitoli",
            "redenzione voucher, donazioni e cms web con analytics",
          ],
        },
      ],
    },
    bandi: {
      label: "(bandi)",
      title: "il tuo progetto digitale può essere finanziato fino al 70%",
      intro:
        "lo sviluppo software su misura, l'ai e l'automazione che realizziamo rientrano tra le spese ammissibili dei bandi di digitalizzazione del piemonte. ti aiutiamo a individuare il bando giusto e ti accompagniamo lungo tutto il percorso del grant.",
      measures: [
        {
          name: "voucher digitalizzazione pmi 2026",
          tag: "fondo perduto",
          summary:
            "voucher di regione piemonte (3ª edizione, pr fesr 2021-2027) per la transizione digitale delle imprese di minori dimensioni.",
          facts: [
            "per pmi, micro imprese e liberi professionisti",
            "contributo a fondo perduto dal 40 al 70% delle spese ammissibili",
            "copre beni e servizi digitali + consulenza e formazione",
            "dotazione €18 mln · apertura prevista ottobre 2026",
          ],
          note: "gestito da regione piemonte.",
        },
        {
          name: "digitalizzazione e efficientamento produttivo 2026",
          tag: "tasso zero",
          summary:
            "misura regionale più ampia (pr fesr 2021-2027) per progetti di digitalizzazione ed efficientamento produttivo.",
          facts: [
            "per pmi e imprese a media capitalizzazione (mid-cap)",
            "finanziamento al 70% a tasso zero + quota a fondo perduto",
            "dotazione €80 mln (€37 mln digitalizzazione + €41 mln efficientamento)",
            "linea b dal 7 lug 2026, linea a dal 13 ott 2026, chiusura 29 ott 2028",
          ],
          note: "gestito da finpiemonte.",
        },
      ],
      track: {
        title: "un track record sui bandi",
        text:
          "abbiamo gestito oltre 10 bandi nazionali ed europei per importi superiori a €5m, incluso horizon 2020. sappiamo come si legge, si valuta e si rendiconta un bando — e mettiamo questa esperienza al servizio del tuo progetto.",
      },
      help: {
        title: "come ti affianchiamo, dall'inizio alla fine",
        intro: "un unico team per la tecnologia e per il finanziamento — senza passaggi di mano.",
        steps: [
          "individuiamo il bando giusto per il tuo progetto",
          "progettiamo la soluzione (software su misura / ai / automazione = spesa ammissibile)",
          "ti affianchiamo nella presentazione della domanda",
          "sviluppiamo e rilasciamo la soluzione",
          "gestiamo la rendicontazione e ti seguiamo fino alla chiusura del grant",
        ],
      },
      faqTitle: "domande frequenti",
      faq: [
        {
          q: "chi può accedere ai bandi di digitalizzazione?",
          a: "a seconda del bando: pmi, micro imprese, liberi professionisti e imprese a media capitalizzazione con sede in piemonte.",
        },
        {
          q: "lo sviluppo software è una spesa ammissibile?",
          a: "sì. i progetti di software su misura, ai e automazione, insieme a consulenza e formazione collegate, rientrano di norma tra le spese ammissibili dei bandi di digitalizzazione.",
        },
        {
          q: "quanto posso ottenere?",
          a: "fino al 70% — a fondo perduto (voucher digitalizzazione pmi) oppure come finanziamento a tasso zero più una quota a fondo perduto (digitalizzazione e efficientamento).",
        },
        {
          q: "vi occupate anche della domanda?",
          a: "sì. un unico team segue tecnologia e finanziamento: individuiamo il bando, progettiamo la soluzione ammissibile, ti affianchiamo nella domanda, sviluppiamo e gestiamo la rendicontazione fino alla chiusura del grant.",
        },
        {
          q: "avete già gestito bandi europei?",
          a: "sì — abbiamo gestito oltre 10 bandi nazionali ed europei per importi superiori a €5m, incluso horizon 2020. sappiamo come si legge, si valuta e si rendiconta un bando.",
        },
        {
          q: "quando aprono i bandi?",
          a: "la misura digitalizzazione e efficientamento apre già nel 2026 (linea b da luglio, linea a da ottobre); il voucher digitalizzazione pmi è atteso per ottobre 2026. le date possono variare — scrivici per pianificare in anticipo.",
        },
      ],
      logos: {
        caption: "programmi di riferimento",
        region: "regione piemonte",
        programme: "pr fesr 2021-2027",
      },
      cta: { title: "scopri se il tuo progetto è finanziabile", button: "parliamone" },
      disclaimer:
        "informazioni indicative, soggette ai testi ufficiali dei bandi.",
      teaser: {
        eyebrow: "(bandi)",
        title: "fino al 70% di finanziamento sul tuo progetto digitale",
        text:
          "il software, l'ai e l'automazione che realizziamo possono essere spese ammissibili sui bandi di digitalizzazione del piemonte — e ti accompagniamo lungo tutto il percorso del grant, inclusi i bandi europei come horizon 2020.",
        button: "scopri i bandi",
      },
    },
    contact: {
      label: "(contatti)",
      bookCall: "prenota una call",
      bookCallNote: "prima call senza impegno",
      socials: [
        { label: "linkedin", href: "https://linkedin.com/company/alpha-technology-ai" },
        { label: "email", href: "mailto:info@alphatechnology.ai" },
      ],
      form: {
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
      brokerBrain: {
        eyebrow: "alpha technology è la divisione software di",
        name: "BrokerBrain S.r.l.",
        claim:
          "sviluppiamo tool su misura per le aziende. hai un processo da automatizzare o un'idea da realizzare? costruiamola insieme.",
        legal: [
          "BrokerBrain S.r.l.",
          "Via Vela 42, 10128 Torino",
          "P.IVA 13423640013 · REA 1361882",
          "Cap. soc. €10.000 i.v.",
          "partner@brokerbrain.it · +39 011 188 36088",
        ],
      },
      footer: {
        copyrightPrefix: "Alpha Technology | ©",
        company: "BrokerBrain S.r.l.",
        companyHref: "https://www.brokerbrain.it",
        copyrightSuffix: "2026 | P.IVA 13423640013",
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


