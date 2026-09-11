import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Terms of Use — Alejandro Valadez",
  description:
    "Terms of use for Alejandro Valadez's personal link-in-bio page.",
};

export default function TermsOfUse() {
  return (
    <main className="flex min-h-screen justify-center px-6 py-16">
      <Card className="w-full max-w-2xl border-border/80 shadow-sm">
        <CardHeader>
          <h1 className="font-heading text-2xl font-bold">Terms of Use</h1>
          <p className="text-sm text-muted-foreground">
            Last updated: September 10, 2026
          </p>
        </CardHeader>
        <CardContent className="flex flex-col gap-6 text-sm leading-relaxed">
          <section className="flex flex-col gap-2">
            <h2 className="font-heading text-base font-semibold">
              About this site
            </h2>
            <p>
              This site is a personal, non-commercial page maintained by
              Alejandro Valadez to share links to his portfolio, professional
              profiles, social media, and resume. It does not sell any
              product or service, does not process payments or orders, and
              does not accept purchases — so no refund policy applies.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="font-heading text-base font-semibold">
              Acceptable use
            </h2>
            <p>
              You&apos;re welcome to browse and share this page. Please
              don&apos;t attempt to disrupt, scrape at scale, or otherwise
              interfere with how the site operates.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="font-heading text-base font-semibold">
              Content &amp; ownership
            </h2>
            <p>
              The text, layout, and resume content on this page belong to
              Alejandro Valadez unless otherwise noted. Linked third-party
              sites and social profiles (portfolio, LinkedIn, GitHub,
              Facebook) are owned and operated by their respective platforms
              or parties, not by this site.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="font-heading text-base font-semibold">
              No warranty
            </h2>
            <p>
              This site, including the resume made available here, is
              provided &quot;as is&quot; without warranties of any kind. It
              is kept reasonably up to date, but accuracy at any given moment
              is not guaranteed.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="font-heading text-base font-semibold">
              Third-party links
            </h2>
            <p>
              External links are provided for convenience. Visiting them is
              at your own discretion, and their content, terms, and privacy
              practices are outside this site&apos;s control.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="font-heading text-base font-semibold">
              Limitation of liability
            </h2>
            <p>
              To the fullest extent permitted by law, the owner of this site
              is not liable for any damages arising from your use of, or
              inability to use, this site or any site it links to.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="font-heading text-base font-semibold">
              Governing law
            </h2>
            <p>
              These terms are governed by the laws of the State of Illinois,
              USA, without regard to conflict-of-law principles.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="font-heading text-base font-semibold">Changes</h2>
            <p>
              These terms may be updated occasionally. Continued use of the
              site after a change means you accept the updated terms.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="font-heading text-base font-semibold">Contact</h2>
            <p>
              Questions about these terms can be sent via{" "}
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
