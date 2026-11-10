import * as React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { AuroraBackdrop } from "@/components/site/aurora-backdrop";
import { Reveal } from "@/components/site/reveal";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
  children,
  className,
  align = "left",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  breadcrumb?: { label: string; href?: string }[];
  children?: React.ReactNode;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden bg-ink pb-16 pt-12 text-cream sm:pb-20 sm:pt-16",
        className,
      )}
    >
      <AuroraBackdrop />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-aurora/40 to-transparent" />
      <div className="shell relative">
        {breadcrumb && (
          <Reveal y={12}>
            <nav
              aria-label="Breadcrumb"
              className="mb-8 flex flex-wrap items-center gap-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-cream/55"
            >
              <Link href="/" className="transition-colors hover:text-aurora">
                Home
              </Link>
              {breadcrumb.map((item) => (
                <React.Fragment key={item.label}>
                  <ChevronRight className="h-3 w-3 text-cream/20" />
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="transition-colors hover:text-aurora"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-cream/60">{item.label}</span>
                  )}
                </React.Fragment>
              ))}
            </nav>
          </Reveal>
        )}
        <div
          className={cn(
            "grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end",
            align === "center" && "mx-auto max-w-4xl text-center",
          )}
        >
          <div>
            {eyebrow && (
              <Reveal y={14}>
                <div
                  className={cn(
                    "mb-5 flex items-center gap-3",
                    align === "center" && "justify-center",
                  )}
                >
                  <span className="h-px w-8 bg-aurora/70" />
                  <span className="eyebrow text-aurora">{eyebrow}</span>
                </div>
              </Reveal>
            )}
            <Reveal delay={0.05}>
              <h1 className="max-w-4xl text-balance text-[2.8rem] leading-[0.96] tracking-[-0.05em] sm:text-[4rem] lg:text-[4.8rem]">
                {title}
              </h1>
            </Reveal>
            {description && (
              <Reveal delay={0.12}>
                <p
                  className={cn(
                    "mt-6 max-w-2xl text-[1.02rem] leading-relaxed text-cream/60 sm:text-[1.1rem]",
                    align === "center" && "mx-auto",
                  )}
                >
                  {description}
                </p>
              </Reveal>
            )}
          </div>
          {children && (
            <Reveal delay={0.18} className="lg:justify-self-end">
              {children}
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
