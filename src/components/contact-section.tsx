"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { SiteCopy } from "@/content/site-copy";
import { SITE_COPY } from "@/content/site-copy";

export function ContactSection({
  basePath = "",
  copy = SITE_COPY.en.contact,
}: {
  basePath?: "" | "/it";
  copy?: SiteCopy["contact"];
}) {
  const c = copy;
  const privacyHref = `${basePath}/privacy`;
  const cookiesHref = `${basePath}/cookies`;

  const [status, setStatus] = useState<
    | { type: "idle" }
    | { type: "loading" }
    | { type: "success" }
    | { type: "error"; message: string }
  >({ type: "idle" });

  const isLoading = status.type === "loading";
  const statusMessage = useMemo(() => {
    if (status.type === "success") return c.form.success;
    if (status.type === "error") return status.message;
    return null;
  }, [status, c.form.success]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus({ type: "loading" });

    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload = {
      topic: String(fd.get("topic") ?? ""),
      budget: String(fd.get("budget") ?? ""),
      discovery: String(fd.get("discovery") ?? ""),
      name: String(fd.get("name") ?? ""),
      company: String(fd.get("company") ?? ""),
      email: String(fd.get("email") ?? ""),
      message: String(fd.get("message") ?? ""),
      consent: fd.get("consent") === "on",
      website: String(fd.get("website") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await res.json().catch(() => null)) as
        | { ok: true }
        | { ok: false; error?: string };

      if (!res.ok || !data || (data as any).ok !== true) {
        setStatus({
          type: "error",
          message:
            (data && "error" in data && data.error) ||
            c.form.genericError,
        });
        return;
      }

      setStatus({ type: "success" });
      form.reset();
    } catch {
      setStatus({
        type: "error",
        message: c.form.networkError,
      });
    }
  }

  return (
    <section id="contact" className="section-spacing px-6 md:px-12 lg:px-16 bg-black border-t border-white/5">
      <div className="container mx-auto max-w-7xl">
        {/* Header with social links */}
        <div className="flex justify-between items-start mb-16">
          <h2 className="text-[32px] md:text-[36px] font-normal lowercase">
            <span className="text-[#0087ca]">{c.label}</span>
          </h2>
          <div className="flex gap-8">
            {c.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-[16px] lowercase underline-blue hover:opacity-70 transition-opacity"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Contact Form - Caroselling exact layout */}
        <form className="ml-auto max-w-4xl" onSubmit={onSubmit}>
          {/* Honeypot anti-spam (should remain empty) */}
          <div className="sr-only" aria-hidden="true">
            <label>
              Website
              <input tabIndex={-1} autoComplete="off" name="website" />
            </label>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* First row */}
            <div className="relative">
              <select
                name="topic"
                className="w-full bg-transparent border-b-2 border-white/30 text-white text-[16px] py-4 pr-8 appearance-none focus:outline-none focus:border-[#0087ca] transition-colors"
                disabled={isLoading}
              >
                <option value="">{c.form.topicPlaceholder}</option>
                {c.form.topicOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
              <span className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-xl">+</span>
            </div>

            <div className="relative">
              <select
                name="budget"
                className="w-full bg-transparent border-b-2 border-white/30 text-white text-[16px] py-4 pr-8 appearance-none focus:outline-none focus:border-[#0087ca] transition-colors"
                disabled={isLoading}
              >
                <option value="">{c.form.budgetPlaceholder}</option>
                {c.form.budgetOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
              <span className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-xl">+</span>
            </div>

            {/* Second row */}
            <div className="relative">
              <select
                name="discovery"
                className="w-full bg-transparent border-b-2 border-white/30 text-white text-[16px] py-4 pr-8 appearance-none focus:outline-none focus:border-[#0087ca] transition-colors"
                disabled={isLoading}
              >
                <option value="">{c.form.discoveryPlaceholder}</option>
                {c.form.discoveryOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
              <span className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-xl">+</span>
            </div>

            <div>
              <input
                type="text"
                placeholder={c.form.namePlaceholder}
                name="name"
                required
                disabled={isLoading}
                className="w-full bg-transparent border-b-2 border-white/30 text-white placeholder:text-white/50 text-[16px] py-4 focus:outline-none focus:border-[#0087ca] transition-colors"
              />
            </div>

            {/* Third row */}
            <div>
              <input
                type="text"
                placeholder={c.form.companyPlaceholder}
                name="company"
                disabled={isLoading}
                className="w-full bg-transparent border-b-2 border-white/30 text-white placeholder:text-white/50 text-[16px] py-4 focus:outline-none focus:border-[#0087ca] transition-colors"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder={c.form.emailPlaceholder}
                name="email"
                required
                disabled={isLoading}
                className="w-full bg-transparent border-b-2 border-white/30 text-white placeholder:text-white/50 text-[16px] py-4 focus:outline-none focus:border-[#0087ca] transition-colors"
              />
            </div>
          </div>

          {/* Message textarea */}
          <div className="mb-8">
            <textarea
              placeholder={c.form.messagePlaceholder}
              rows={4}
              name="message"
              required
              disabled={isLoading}
              className="w-full bg-transparent border-b-2 border-white/30 text-white placeholder:text-white/50 text-[16px] py-4 resize-none focus:outline-none focus:border-[#0087ca] transition-colors"
            ></textarea>
          </div>

          {/* Checkbox and submit */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <label className="flex items-start gap-3 text-[13px] text-white/60 max-w-md cursor-pointer">
              <input
                type="checkbox"
                name="consent"
                required
                disabled={isLoading}
                className="mt-1 w-4 h-4 border-2 border-white/20 bg-transparent"
              />
              <span>
                {c.form.consentPrefix}{" "}
                <Link href={privacyHref} className="underline hover:text-[#0087ca]">
                  {c.form.consentLinkText}
                </Link>
                .
              </span>
            </label>

            <button
              type="submit"
              disabled={isLoading}
              className="px-12 py-4 border-2 border-white/20 text-white text-[14px] lowercase rounded-pill hover:bg-white/5 transition-all self-start md:self-auto disabled:opacity-50"
            >
              {isLoading ? c.form.sending : c.form.send}
            </button>
          </div>

          {/* Status */}
          {statusMessage ? (
            <p
              className={`mt-6 text-[14px] lowercase ${
                status.type === "success" ? "text-white/70" : "text-red-300"
              }`}
              role={status.type === "error" ? "alert" : undefined}
            >
              {statusMessage}
            </p>
          ) : null}
        </form>

        {/* Footer - Caroselling style */}
        <div className="pt-8 mt-16 border-t-2 border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-[14px] text-white/60 lowercase">
              {c.footer.copyright}
            </p>
            <div className="flex flex-wrap gap-4 text-[14px]">
              <Link href={privacyHref} className="text-white/60 hover:text-white transition-colors">
                {c.footer.privacy}
              </Link>
              <span className="text-white/30">|</span>
              <Link href={cookiesHref} className="text-white/60 hover:text-white transition-colors">
                {c.footer.cookies}
              </Link>
              <span className="text-white/30">|</span>
              <Link href={cookiesHref} className="text-white/60 hover:text-white transition-colors">
                {c.footer.updateCookies}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
