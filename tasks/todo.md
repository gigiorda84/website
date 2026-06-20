# Migliorie copy/conversion — piano

Obiettivo: aumentare le conversioni mostrando competenza e professionalità.
Tutte le modifiche in parità **IT + EN** in `src/content/site-copy.ts`.

## Todo

### 1. Hero → CTA "prenota una call" (pulsante nero)
- [ ] `hero-section.tsx`: trasformare il pulsante nero (oggi `scrollCta` inerte) in un CTA cliccabile "prenota una call" che porta alla prenotazione.
- [ ] Copy: `hero.scrollCta` → "prenota una call" / "book a call".
- [ ] Destinazione = vedi decisione cal.com (DOMANDA aperta sotto).

### 2. Rimuovere budget dal form
- [ ] `contact-section.tsx`: rimuovere il `<select name="budget">` (righe 134-148) e `budget` dal payload (riga 42).
- [ ] `site-copy.ts`: rimuovere `budgetPlaceholder` + `budgetOptions` (IT+EN) e dal type `SiteCopy`.
- [ ] `api/contact/route.ts`: rimuovere `budget` (righe 5, 48, 97).

### 5. About — credibilità founder
- [ ] Riscrivere `aboutIntro.paragraphs` (IT+EN) sostituendo i passaggi più astratti con credibilità concreta:
  - 40 anni di esperienza combinata dei fondatori.
  - background come **CEO e CTO di Enerbrain**.
  - collaborazioni con **Politecnico di Torino, Università di Torino, Collegio Carlo Alberto**.
- [ ] Bio fondatori: aggiungere in forma sintetica (Giuseppe Giordano – CEO; Marco Martellacci – CTO) come riga credenziali, senza appesantire la sezione. (da confermare)

### 6. Prenota una call (cal.com)
- [ ] Implementare la prenotazione. Approccio da decidere (DOMANDA sotto).
- [ ] CTA "prenota una call" usata sia nell'hero sia in fondo (contatti).

### 7. "prima call senza impegno"
- [ ] Aggiungere come riga di rassicurazione vicino al CTA prenotazione / header contatti (IT+EN).

### 8. Bandi — track record forte (+ fix Horizon 2020)
- [ ] `bandi.track.text` e FAQ (IT+EN): "abbiamo gestito **oltre 10 bandi nazionali ed europei per importi superiori a €5M** (incluso **Horizon 2020**)".
- [ ] Sostituire ogni altra menzione "horizon" → "Horizon 2020".

### Trust — università (cross-site)
- [ ] Inserire menzione collaborazioni con Politecnico di Torino, Università di Torino, Collegio Carlo Alberto (in About; valutare anche una riga "collaboriamo con" vicino ai risultati).

## DOMANDA aperta (blocca punti 1 e 6)
Come implementiamo "prenota una call"?
- A) Link a cal.com (serve l'URL del vostro cal.com)
- B) Widget cal.com embeddato inline (serve URL + dipendenza @calcom/embed-react)
- C) Per ora il CTA punta al form contatti (#contact) e colleghiamo cal.com dopo

## Review

Tutte le modifiche applicate in parità IT + EN. Build `npm run build` ok, nessun errore TS.

- **1. Hero CTA**: il pulsante nero (prima inerte) ora è un CTA "prenota una call" / "book a call" che apre il popup cal.com. Rinominato copy `hero.scrollCta` → `hero.bookCall`; rimossi import inutilizzati (`Button`, `Link`) da hero-section.
- **2. Budget rimosso**: tolto il `<select name="budget">` dal form, `budget` dal payload, `budgetPlaceholder`/`budgetOptions` dal copy e dal type, e `budget` da `api/contact/route.ts`.
- **5. About**: sostituiti 2 paragrafi astratti con credibilità concreta (40+ anni esperienza combinata, background CEO/CTO Enerbrain, collaborazioni Politecnico di Torino / Università di Torino / Collegio Carlo Alberto). Aggiunta riga credenziali founder (`aboutIntro.founders`) + reso nel componente About.
- **6. Cal.com**: nuovo componente `book-call-button.tsx` (popup `@calcom/embed-react`, namespace `30min`, link `brokerbrain/30min`). Usato in hero e contatti. Aggiunta dipendenza `@calcom/embed-react`.
- **7. "prima call senza impegno"**: nota di rassicurazione accanto al CTA nei contatti (`contact.bookCallNote`).
- **8. Bandi track record**: "oltre 10 bandi nazionali ed europei per importi superiori a €5M (incluso Horizon 2020)" in `track.text` + FAQ (IT+EN). Tutte le menzioni "horizon" → "Horizon 2020" (copy + teaser + meta-description pagine bandi).
- **Trust università**: inserite in About (Politecnico di Torino, Università di Torino, Collegio Carlo Alberto).

### Da verificare lato vostro
- Il link cal.com `brokerbrain/30min` deve essere pubblico/attivo.
- Numeri dichiarati (40 anni, >10 bandi, >€5M) da confermare per accuratezza.
