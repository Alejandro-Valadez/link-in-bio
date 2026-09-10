import {
  Globe,
  Briefcase,
  Code,
  Camera,
  Music2,
  FileText,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type LinkItem = {
  href: string;
  label: string;
  note?: string;
  icon: LucideIcon;
};

const LINKS: LinkItem[] = [
  {
    href: "https://portfolio-site-omega-two-79.vercel.app",
    label: "Portfolio",
    icon: Globe,
  },
  {
    href: "https://www.linkedin.com/in/alejandro-valadez",
    label: "LinkedIn",
    note: "Connect with me!",
    icon: Briefcase,
  },
  {
    href: "https://github.com/f1alej",
    label: "Github",
    note: "Check out my MCPs!",
    icon: Code,
  },
  {
    href: "https://www.instagram.com/f1alej",
    label: "Instagram",
    icon: Camera,
  },
  {
    href: "https://www.tiktok.com/@f1alej?_r=1&_t=ZT-99RIok6wpCA",
    label: "TikTok",
    icon: Music2,
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 py-16">
      <div className="sky" aria-hidden>
        <div className="stars stars-sm" />
        <div className="stars stars-md" />
        <div className="stars stars-lg" />
        <div className="exhaust" />
      </div>

      <Card className="rise-in w-full max-w-sm border-border/80 shadow-sm">
        <CardHeader className="flex flex-col items-center gap-4 text-center">
          <Avatar className="size-20 border border-border">
            <AvatarFallback className="bg-secondary font-heading text-lg text-secondary-foreground">
              AV
            </AvatarFallback>
          </Avatar>
          <div className="space-y-2">
            <h1 className="font-heading text-lg font-bold">Alejandro Valadez</h1>
            <p className="text-sm text-muted-foreground">
              Illinois Mathematics &amp; Science Academy
            </p>
            <div className="flex flex-wrap justify-center gap-1.5">
              <Badge variant="secondary">IMSA &apos;29</Badge>
              <Badge variant="secondary">Aurora, IL</Badge>
            </div>
          </div>
        </CardHeader>

        <CardContent className="flex flex-col gap-2.5">
          {LINKS.map(({ href, label, note, icon: Icon }, i) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener"
              style={{ animationDelay: `${120 + i * 70}ms` }}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "rise-in min-h-12 justify-start gap-3 px-4 py-2.5 text-left text-sm leading-snug font-medium whitespace-normal",
                "hover:-translate-y-0.5"
              )}
            >
              <Icon className="size-4.5 shrink-0 text-primary" />
              <span className="min-w-0 whitespace-normal">{label}</span>
              {note ? (
                <span className="ml-auto pl-3 text-right text-xs whitespace-normal text-muted-foreground italic">
                  {note}
                </span>
              ) : null}
            </a>
          ))}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener"
            style={{ animationDelay: `${120 + LINKS.length * 70}ms` }}
            className={cn(
              buttonVariants({ size: "lg" }),
              "rise-in min-h-12 justify-start gap-3 px-4 py-2.5 text-left text-sm leading-snug font-medium whitespace-normal",
              "hover:-translate-y-0.5"
            )}
          >
            <FileText className="size-4.5 shrink-0" />
            <span className="min-w-0 whitespace-normal">Resume</span>
          </a>
        </CardContent>
      </Card>

      <footer className="flex flex-col items-center gap-2 text-sm text-muted-foreground">
        <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
          <Link
            href="/privacy"
            className="underline-offset-2 hover:text-foreground hover:underline"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="underline-offset-2 hover:text-foreground hover:underline"
          >
            Terms of Use
          </Link>
        </nav>
        <p>&copy; {new Date().getFullYear()} Alejandro Valadez</p>
      </footer>
    </main>
  );
}
