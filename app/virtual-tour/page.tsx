import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { PhotoTour } from "@/components/site/photo-tour";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Virtual Tour",
  description:
    "Take a photo tour of Northern Lights Dental in Fargo, ND. Explore our reception, treatment rooms, and family-friendly spaces, then come visit us for the real experience.",
  alternates: { canonical: "/virtual-tour" },
};

export default function VirtualTourPage() {
  return (
    <>
      <PageHero
        eyebrow="Virtual tour"
        title={
          <>
            Step inside
            <span className="aurora-text italic"> our office.</span>
          </>
        }
        description="A quiet look around the spaces where we care for Fargo smiles. Explore each stop below, then come visit us for the real experience."
        breadcrumb={[{ label: "Virtual Tour" }]}
      >
        <div className="rounded-2xl border border-white/12 bg-white/[0.04] p-5 backdrop-blur-md">
          <div className="flex items-center gap-2 text-[0.6rem] font-bold uppercase tracking-[0.16em] text-aurora">
            <CalendarDays className="h-3.5 w-3.5" />
            Photo tour · 4 stops
          </div>
          <p className="mt-2 max-w-[17rem] text-sm leading-relaxed text-cream/65">
            Reception, treatment rooms, family care, and the people who make it
            feel like home.
          </p>
          <Button asChild className="mt-4 w-full">
            <a href={site.phoneHref}>
              <Phone className="h-4 w-4" />
              {site.phone}
            </a>
          </Button>
        </div>
      </PageHero>

      <section className="py-16 sm:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow="A look around"
            title={
              <>
                Comfort in
                <span className="gold-text italic"> every corner.</span>
              </>
            }
            description="Click through the stops to see where your visit begins and the spaces where we care for smiles of every age."
          />
          <Reveal delay={0.06}>
            <div className="mt-10">
              <PhotoTour />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream-2/70 py-16 sm:py-24">
        <div className="shell">
          <div className="grid gap-4 md:grid-cols-3">
            <Reveal>
              <div className="flex h-full flex-col rounded-[1.5rem] border border-ink/10 bg-white/60 p-6">
                <MapPin className="h-5 w-5 text-aurora-4" />
                <h2 className="mt-4 font-display text-xl tracking-[-0.02em] text-ink">
                  Find us
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">
                  {site.address.full}
                </p>
                <a
                  href={site.mapLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto flex items-center gap-1.5 pt-4 text-xs font-semibold text-aurora-4 transition-colors hover:text-ink"
                >
                  Open in Google Maps
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="flex h-full flex-col rounded-[1.5rem] border border-ink/10 bg-white/60 p-6">
                <Clock className="h-5 w-5 text-aurora-4" />
                <h2 className="mt-4 font-display text-xl tracking-[-0.02em] text-ink">
                  Office hours
                </h2>
                <ul className="mt-2 space-y-1 text-sm leading-relaxed text-ink/65">
                  {site.hours.map((entry) => (
                    <li key={entry.days} className="flex justify-between gap-4">
                      <span>{entry.days}</span>
                      <span className="shrink-0 text-ink/70">{entry.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex h-full flex-col rounded-[1.5rem] border border-aurora-3/25 bg-ink p-6 text-cream">
                <span className="text-[0.6rem] font-bold uppercase tracking-[0.18em] text-aurora">
                  Prefer the real thing?
                </span>
                <h2 className="mt-3 font-display text-2xl leading-tight tracking-[-0.02em]">
                  Come see us in person.
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-cream/60">
                  Call the office or send a request and we will help you find a
                  time that works for your family.
                </p>
                <Button asChild className="mt-auto w-full">
                  <Link href="/contact">
                    Schedule a visit
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <p className="mt-10 text-center text-sm leading-relaxed text-ink/65">
              Questions before your first visit?{" "}
              <Link
                href="/new-patients"
                className="font-semibold text-aurora-4 underline-offset-2 hover:underline"
              >
                See what to expect as a new patient
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
