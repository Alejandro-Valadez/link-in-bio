import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Privacy Policy — Alejandro Valadez",
  description:
    "Privacy policy for Alejandro Valadez's personal link-in-bio page.",
};

export default function PrivacyPolicy() {
  return (
    <main className="flex min-h-screen justify-center px-6 py-16">
      <Card className="w-full max-w-2xl border-border/80 shadow-sm">
        <CardHeader>
          <h1 className="font-heading text-2xl font-bold">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground">
            Last updated: September 10, 2026
          </p>
        </CardHeader>
        <CardContent className="flex flex-col gap-6 text-sm leading-relaxed">
          <section className="flex flex-col gap-2">
            <h2 className="font-heading text-base font-semibold">
              Overview
            </h2>
            <p>
              This page is a personal, non-commercial link-in-bio site for
              Alejandro Valadez. It exists to share a few outbound links (a
              portfolio, LinkedIn, GitHub, Facebook), an email option, and a
              resume. It does not have any sign-up, login, contact form,
              comment section, or checkout — and it does not collect, store,
              sell, or share any personal information about visitors.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="font-heading text-base font-semibold">
              What this site does not do
            </h2>
            <ul className="list-disc space-y-1 pl-5">
              <li>No cookies are set by this site&apos;s own code.</li>
              <li>
                No analytics, advertising, or tracking scripts run on this
                site.
              </li>
              <li>No forms, so nothing is submitted or stored.</li>
              <li>No accounts, and no browser storage is used to identify you.</li>
            </ul>
            <p>
              Because nothing is collected, there is nothing to consent to
              and no cookie banner is shown.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="font-heading text-base font-semibold">
              Hosting &amp; server logs
            </h2>
            <p>
              This site is hosted on Vercel. Like virtually all web hosts,
              Vercel&apos;s infrastructure may automatically record standard
              technical request data (such as IP address, browser type, and
              timestamps) for security, abuse prevention, and reliability —
              independent of anything this site&apos;s code does. That
              processing is governed by{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-2"
              >
                Vercel&apos;s Privacy Policy
              </a>
              .
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="font-heading text-base font-semibold">
              Links to other sites
            </h2>
            <p>
              This page links out to third-party sites and platforms
              (including a personal portfolio site, LinkedIn, GitHub, and
              Facebook). Once you click through, that destination&apos;s own
              privacy policy and terms apply — this site has no control over,
              and no responsibility for, how those third parties handle your
              data. Please review their policies separately.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="font-heading text-base font-semibold">
              Children&apos;s privacy
            </h2>
            <p>
              This site does not knowingly collect personal information from
              anyone, including children, and is not directed at children.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="font-heading text-base font-semibold">
              Changes to this policy
            </h2>
            <p>
              This policy may be updated occasionally to stay accurate as the
              site changes. The &quot;Last updated&quot; date above will
              reflect the most recent revision.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="font-heading text-base font-semibold">Contact</h2>
            <p>
              Questions about this policy can be sent via{" "}
              <a
                href="https://www.linkedin.com/in/alejandro-valadez"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-2"
              >
                LinkedIn
              </a>
              .
            </p>
          </section>

          <Link
            href="/"
            className="text-sm font-medium text-primary underline underline-offset-2"
          >
            ← Back to home
          </Link>
        </CardContent>
      </Card>
    </main>
  );
}
