import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Clock,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { ContactForm } from "@/components/site/contact-form";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Appointments",
  description:
    "Call 701-551-2000 or request an appointment online at Northern Lights Dental in Fargo, ND. Find our address, office hours, and contact details.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s get you
            <span className="aurora-text italic"> scheduled.</span>
          </>
        }
        description="Scheduling a visit is the first step toward a healthy smile. Please give us a call at 701-551-2000 or fill out the form below and we will get in touch with you soon."
        breadcrumb={[{ label: "Contact" }]}
      >
        <div className="rounded-2xl border border-white/12 bg-white/[0.04] p-5 backdrop-blur-md">
          <div className="flex items-center gap-2 text-[0.6rem] font-bold uppercase tracking-[0.16em] text-aurora">
            <Sparkles className="h-3.5 w-3.5" />
            New patients welcome
          </div>
          <p className="mt-2 max-w-[17rem] text-sm leading-relaxed text-cream/65">
            Ages 1 to 101+. We look forward to serving you.
          </p>
          <a
            href={site.phoneHref}
            className="mt-4 flex items-center gap-2 font-display text-2xl tracking-[-0.03em] text-cream transition-colors hover:text-aurora"
          >
            <Phone className="h-5 w-5 text-aurora" />
            {site.phone}
          </a>
        </div>
      </PageHero>

      <section className="py-16 sm:py-24">
        <div className="shell grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <ContactForm />

          <div className="space-y-4">
            <Reveal>
              <a
                href={site.phoneHref}
                className="flex items-start gap-4 rounded-[1.5rem] border border-ink/10 bg-white/55 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-aurora-3/40 hover:bg-white"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-aurora/15 text-aurora-4">
                  <Phone className="h-5 w-5" />
                </span>
                <span>
                  <span className="eyebrow text-ink/60">Call us</span>
                  <span className="mt-1 block font-display text-2xl tracking-[-0.03em] text-ink">
                    {site.phone}
                  </span>
                  <span className="mt-1 block text-xs text-ink/60">
                    The fastest way to reach the office
                  </span>
                </span>
              </a>
            </Reveal>
            <Reveal delay={0.05}>
              <a
                href={site.emailHref}
                className="flex items-start gap-4 rounded-[1.5rem] border border-ink/10 bg-white/55 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-aurora-3/40 hover:bg-white"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-aurora/15 text-aurora-4">
                  <Mail className="h-5 w-5" />
                </span>
                <span>
                  <span className="eyebrow text-ink/60">Email</span>
                  <span className="mt-1 block text-sm font-semibold text-ink">
                    {site.email}
                  </span>
                  <span className="mt-1 block text-xs text-ink/60">
                    For general questions — not urgent dental needs
                  </span>
                </span>
              </a>
            </Reveal>
            <Reveal delay={0.1}>
              <a
                href={site.mapLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-4 rounded-[1.5rem] border border-ink/10 bg-white/55 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-aurora-3/40 hover:bg-white"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-aurora/15 text-aurora-4">
                  <MapPin className="h-5 w-5" />
                </span>
                <span>
                  <span className="eyebrow text-ink/60">Visit</span>
                  <span className="mt-1 block text-sm leading-relaxed text-ink/70">
                    {site.address.street}
                    <br />
                    {site.address.city}, {site.address.state} {site.address.zip}
                  </span>
                  <span className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-aurora-4">
                    Open in maps
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                </span>
              </a>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="rounded-[1.5rem] border border-ink/10 bg-cream-2/70 p-5">
                <div className="flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-ink/60">
                  <Clock className="h-3.5 w-3.5 text-aurora-4" />
                  Office hours
                </div>
                <div className="mt-4 space-y-2">
                  {site.hours.map((row) => (
                    <div
                      key={row.days}
                      className="flex items-baseline justify-between gap-6 border-b border-ink/8 pb-2 text-xs last:border-0 last:pb-0"
                    >
                      <span className="text-ink/65">{row.days}</span>
                      <span className="font-semibold text-ink/75">
                        {row.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-cream-2/70 py-16 sm:py-24">
        <div className="shell">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div>
              <p className="eyebrow text-ink/60">Find the office</p>
              <h2 className="mt-3 text-[2.2rem] leading-[1] tracking-[-0.045em] text-ink sm:text-[2.8rem]">
                Easy to reach,
                <span className="gold-text italic"> easy to find.</span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-ink/65">
                We are located at 4150 19th Ave S, Suite 301, Fargo, ND 58103.
                Call us if you need help finding the suite.
              </p>
              <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                <Button asChild variant="dark">
                  <a href={site.mapLink} target="_blank" rel="noreferrer">
                    Get directions
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/virtual-tour">Virtual tour</Link>
                </Button>
              </div>
            </div>
            <Reveal className="overflow-hidden rounded-[1.75rem] border border-ink/10 bg-white">
              <div className="relative aspect-[16/10] w-full">
                <iframe
                  src={site.mapEmbed}
                  title="Map to Northern Lights Dental"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full border-0"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
