import { NextResponse } from "next/server";

type ContactPayload = {
  topic?: string;
  budget?: string;
  discovery?: string;
  name?: string;
  company?: string;
  email?: string;
  message?: string;
  consent?: boolean;
  // simple anti-spam honeypot
  website?: string;
};

function isValidEmail(email: string) {
  // pragmatic email check; avoids extra deps
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function trimOrUndefined(v: unknown) {
  if (typeof v !== "string") return undefined;
  const t = v.trim();
  return t.length ? t : undefined;
}

export async function POST(req: Request) {
  let body: ContactPayload | null = null;
  try {
    body = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body." },
      { status: 400 }
    );
  }

  const website = trimOrUndefined(body?.website);
  // If the honeypot is filled, treat as spam and pretend success.
  if (website) return NextResponse.json({ ok: true });

  const name = trimOrUndefined(body?.name);
  const email = trimOrUndefined(body?.email);
  const message = trimOrUndefined(body?.message);
  const consent = Boolean(body?.consent);

  const topic = trimOrUndefined(body?.topic);
  const budget = trimOrUndefined(body?.budget);
  const discovery = trimOrUndefined(body?.discovery);
  const company = trimOrUndefined(body?.company);

  if (!name) {
    return NextResponse.json(
      { ok: false, field: "name", error: "Name is required." },
      { status: 400 }
    );
  }
  if (!email || !isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, field: "email", error: "A valid email is required." },
      { status: 400 }
    );
  }
  if (!message) {
    return NextResponse.json(
      { ok: false, field: "message", error: "Message is required." },
      { status: 400 }
    );
  }
  if (!consent) {
    return NextResponse.json(
      {
        ok: false,
        field: "consent",
        error: "Consent is required to submit the form.",
      },
      { status: 400 }
    );
  }

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  const webhookSecret = process.env.CONTACT_WEBHOOK_SECRET;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  const submittedAt = new Date().toISOString();
  const userAgent = req.headers.get("user-agent") ?? undefined;
  const referrer = req.headers.get("referer") ?? undefined;

  // This is the canonical event we emit; even if we don't forward anywhere,
  // the server logs will still contain it.
  const event = {
    submittedAt,
    name,
    email,
    message,
    topic,
    budget,
    discovery,
    company,
    meta: { userAgent, referrer },
  };

  // Forward strategy:
  // - Prefer webhook if configured (Zapier/Make/Slack/etc).
  // - Otherwise, if CONTACT_TO_EMAIL is configured but no webhook, we can't
  //   send without an email provider in deps, so we log a warning.
  if (webhookUrl) {
    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          ...(webhookSecret ? { "x-alpha-signature": webhookSecret } : {}),
        },
        body: JSON.stringify(event),
      });

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        console.error("[contact] webhook non-2xx", res.status, text);
        return NextResponse.json(
          { ok: false, error: "Failed to submit. Please try again later." },
          { status: 502 }
        );
      }
    } catch (err) {
      console.error("[contact] webhook error", err);
      return NextResponse.json(
        { ok: false, error: "Failed to submit. Please try again later." },
        { status: 502 }
      );
    }
  } else if (toEmail) {
    console.warn(
      "[contact] CONTACT_TO_EMAIL is set but CONTACT_WEBHOOK_URL is not. Lead captured in logs only.",
      event
    );
  } else {
    console.warn(
      "[contact] No CONTACT_WEBHOOK_URL configured. Lead captured in logs only.",
      event
    );
  }

  return NextResponse.json({ ok: true });
}


