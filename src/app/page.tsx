import {
  Globe,
  Briefcase,
  Code,
  Camera,
  Music2,
  FileText,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const LINKS = [
  {
    href: "https://portfolio-site-omega-two-79.vercel.app",
    label: "Portfolio",
    icon: Globe,
  },
  {
    href: "https://www.linkedin.com/in/alejandro-valadez",
    label: "LinkedIn",
    icon: Briefcase,
  },
  {
    href: "https://github.com/f1alej",
    label: "GitHub",
    icon: Code,
  },
  {
    href: "https://www.instagram.com/f1alej",
    label: "Instagram",
    icon: Camera,
  },
  {
    href: "https://www.tiktok.com/@f1alej",
    label: "TikTok",
    icon: Music2,
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-16">
      <Card className="w-full max-w-sm border-border/80 shadow-sm">
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
          {LINKS.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-12 justify-start gap-3 px-4 text-[0.95rem] font-medium"
              )}
            >
              <Icon className="size-4.5 text-primary" />
              {label}
            </a>
          ))}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-12 justify-start gap-3 px-4 text-[0.95rem] font-medium"
            )}
          >
            <FileText className="size-4.5" />
            Resume
          </a>
        </CardContent>
      </Card>

      <p className="fixed bottom-6 text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Alejandro Valadez
      </p>
    </main>
  );
}
