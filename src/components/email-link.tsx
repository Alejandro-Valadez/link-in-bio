"use client";

import { useState, type CSSProperties } from "react";
import { Check, ChevronDown, Copy, Mail } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const EMAILS = [
  { label: "Personal", address: "alejandrovaladezmail@gmail.com" },
  { label: "School", address: "avaladez@imsa.edu" },
];

export function EmailLink({ style }: { style?: CSSProperties }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  async function handleCopy(address: string) {
    try {
      await navigator.clipboard.writeText(address);
    } catch {
      return;
    }
    setCopied(address);
    setTimeout(() => setCopied((current) => (current === address ? null : current)), 1500);
  }

  return (
    <div className="rise-in flex flex-col gap-1.5" style={style}>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          buttonVariants({ variant: "outline", size: "lg" }),
          "min-h-12 justify-start gap-3 px-4 py-2.5 text-left text-sm leading-snug font-medium whitespace-normal",
          "hover:-translate-y-0.5"
        )}
      >
        <Mail className="size-4.5 shrink-0 text-primary" />
        <span className="min-w-0 whitespace-normal">Email</span>
        <span className="ml-auto flex items-center gap-1 pl-3 text-right text-xs whitespace-normal text-muted-foreground italic">
          Get In Touch
          <ChevronDown
            className={cn(
              "size-3.5 shrink-0 not-italic transition-transform",
              open && "rotate-180"
            )}
          />
        </span>
      </button>

      {open ? (
        <div className="flex flex-col gap-1.5 pl-2">
          {EMAILS.map(({ label, address }) => {
            const isCopied = copied === address;
            return (
              <button
                key={address}
                type="button"
                onClick={() => handleCopy(address)}
                className={cn(
                  buttonVariants({ variant: "secondary", size: "default" }),
                  "min-h-9 justify-start gap-2 px-3 py-2 text-left text-xs font-normal whitespace-normal"
                )}
              >
                <span className="font-medium">{label}</span>
                <span className="min-w-0 truncate text-muted-foreground">{address}</span>
                <span className="ml-auto flex shrink-0 items-center gap-1 pl-2 text-muted-foreground">
                  {isCopied ? (
                    <>
                      <Check className="size-3.5 shrink-0" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="size-3.5 shrink-0" />
                      Copy
                    </>
                  )}
                </span>
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
