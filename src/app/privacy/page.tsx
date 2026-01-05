import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Alpha Technology (alphatechnology.ai): how we collect, use, and protect personal data from website visitors and contact requests.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black px-6 md:px-12 lg:px-16 pt-28 pb-20">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-[32px] md:text-[42px] font-normal lowercase mb-10">
          <span className="text-[#0087ca]">(privacy policy)</span>
        </h1>

        <div className="space-y-8 text-white/85">
          <section className="space-y-3">
            <h2 className="text-[18px] text-white lowercase">who we are</h2>
            <p className="leading-relaxed lowercase">
              This website is operated by <strong className="font-medium text-white">Alpha Technology</strong> (“Alpha”,
              “we”, “us”). We provide AI solutions for business and industrial automation.
            </p>
            <p className="leading-relaxed lowercase">
              Contact: <a className="underline hover:text-white" href="mailto:info@alphatechnology.ai">info@alphatechnology.ai</a>{" "}
              · Phone: <a className="underline hover:text-white" href="tel:+393492112515">+39 349 2112515</a>
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[18px] text-white lowercase">what data we collect</h2>
            <ul className="list-disc pl-5 space-y-2 lowercase">
              <li>
                <strong className="font-medium text-white">contact data</strong>: name, email, company (optional), and the
                message you send through our contact form.
              </li>
              <li>
                <strong className="font-medium text-white">basic technical data</strong>: browser user agent and referrer
                information that may be sent with the request.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-[18px] text-white lowercase">why we process your data</h2>
            <ul className="list-disc pl-5 space-y-2 lowercase">
              <li>To respond to your request and communicate with you about potential collaboration.</li>
              <li>To protect the website from spam and abuse (e.g., basic anti-spam checks).</li>
              <li>To comply with legal obligations when applicable.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-[18px] text-white lowercase">legal basis (gdpr)</h2>
            <ul className="list-disc pl-5 space-y-2 lowercase">
              <li>
                <strong className="font-medium text-white">consent</strong>: when you submit the contact form and check
                the consent box.
              </li>
              <li>
                <strong className="font-medium text-white">legitimate interests</strong>: securing and operating our
                website.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-[18px] text-white lowercase">how long we keep it</h2>
            <p className="leading-relaxed lowercase">
              We keep contact requests for as long as needed to handle your request and for reasonable follow-up, unless
              a longer retention period is required by law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[18px] text-white lowercase">sharing & processors</h2>
            <p className="leading-relaxed lowercase">
              We may use service providers to process contact submissions (for example, an automation webhook or CRM).
              We only share what is necessary to deliver the service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[18px] text-white lowercase">your rights</h2>
            <p className="leading-relaxed lowercase">
              Depending on your location, you may have rights to access, correct, delete, or restrict processing of your
              personal data, or to object to processing. To exercise your rights, contact{" "}
              <a className="underline hover:text-white" href="mailto:info@alphatechnology.ai">info@alphatechnology.ai</a>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[18px] text-white lowercase">cookies</h2>
            <p className="leading-relaxed lowercase">
              For information about cookies and similar technologies, see our{" "}
              <Link className="underline hover:text-white" href="/cookies">
                cookie policy
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


