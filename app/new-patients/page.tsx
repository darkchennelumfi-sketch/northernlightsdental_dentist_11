import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarCheck,
  Check,
  Clock,
  Download,
  FileText,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal, StaggerItem, StaggerReveal } from "@/components/site/reveal";
import { FaqAccordion } from "@/components/site/faq-accordion";
import { Button } from "@/components/ui/button";
import { faqs, patientForms, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "New Patients & Your First Visit",
  description:
    "New patients are welcome at Northern Lights Dental in Fargo. Learn what to expect, download patient forms, and ask about the NLD Star Discount Plan and 1st visit Trial Run.",
  alternates: { canonical: "/new-patients" },
};

const firstVisit = [
  {
    step: "01",
    title: "Get in touch",
    text: "Call 701-551-2000 or send an appointment request. Scheduling a visit is the first step toward a healthy smile.",
  },
  {
    step: "02",
    title: "Ask about the Trial Run",
    text: "Ask our staff about your 1st visit Trial Run to evaluate your risk at a substantially discounted rate and see if you like our clinic.",
  },
  {
    step: "03",
    title: "Meet your dentist",
    text: "We will review your history, examine your teeth and gums, and talk through what we find — with time for your questions.",
  },
];

export default function NewPatientsPage() {
  return (
    <>
      <PageHero
        eyebrow="New patients"
        title={
          <>
            Your first visit,
            <span className="aurora-text italic"> made simple.</span>
          </>
        }
        description="Scheduling a visit is the first step toward a healthy smile. Please give us a call at 701-551-2000 or fill out the appointment form and we will get in touch with you soon."
        breadcrumb={[{ label: "New Patients" }]}
      >
        <div className="rounded-2xl border border-white/12 bg-white/[0.04] p-5 backdrop-blur-md">
          <div className="flex items-center gap-2 text-[0.6rem] font-bold uppercase tracking-[0.16em] text-aurora">
            <CalendarCheck className="h-3.5 w-3.5" />
            Accepting new patients
          </div>
          <p className="mt-2 max-w-[17rem] text-sm leading-relaxed text-cream/65">
            Ages 1 to 101+. Call us and we will help you find a time.
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
            eyebrow="What to expect"
            title={
              <>
                A calm, clear
                <span className="gold-text italic"> first visit.</span>
              </>
            }
            description="We want you to know what is happening and why. Here is how a first visit tends to go."
            align="center"
          />
          <StaggerReveal className="mt-12 grid gap-4 md:grid-cols-3">
            {firstVisit.map((item) => (
              <StaggerItem key={item.step} className="h-full">
                <div className="relative h-full rounded-[1.5rem] border border-ink/10 bg-white/55 p-6">
                  <span className="font-display text-sm italic text-aurora-4">
                    {item.step}
                  </span>
                  <h3 className="mt-5 text-2xl text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/65">
                    {item.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>

          <Reveal delay={0.08}>
            <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-aurora-3/25 bg-aurora/10 px-6 py-5 sm:flex-row sm:items-center">
              <div className="flex items-start gap-3">
                <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-aurora-4" />
                <p className="max-w-2xl text-sm leading-relaxed text-ink/70">
                  <span className="font-semibold text-ink">
                    Ask about your 1st visit Trial Run.
                  </span>{" "}
                  It is a substantially discounted way to evaluate your risk and
                  see if you like our clinic.
                </p>
              </div>
              <Button asChild variant="dark" size="sm">
                <Link href="/contact">Request a visit</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cream-2/70 py-16 sm:py-24">
        <div className="shell">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Before you arrive"
              title={
                <>
                  Download and print
                  <span className="aurora-text-ink italic"> your forms.</span>
                </>
              }
              description="Save a little time at the office. Click a button below to download and print patient forms."
            />
            <Reveal delay={0.1} className="shrink-0">
              <Button asChild variant="outline" size="lg">
                <Link href="/patient-forms">
                  All patient forms
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {patientForms.slice(0, 3).map((form) => (
              <a
                key={form.title}
                href={form.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-4 rounded-[1.25rem] border border-ink/10 bg-white/55 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-aurora-3/40 hover:bg-white"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-aurora/15 text-aurora-4">
                  <FileText className="h-4 w-4" />
                </span>
                <span className="flex-1">
                  <span className="block text-sm font-semibold text-ink">
                    {form.title}
                  </span>
                  <span className="mt-1 block text-xs leading-relaxed text-ink/65">
                    {form.description}
                  </span>
                </span>
                <Download className="h-4 w-4 text-ink/65 transition-colors group-hover:text-aurora-4" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal className="relative">
            <div className="overflow-hidden rounded-[2.2rem] border border-ink/10 bg-white/60 p-3">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[1.65rem] bg-cream-2">
                <Image
                  src="/images/star-plan.jpg"
                  alt="NLD Star Discount Plan information"
                  fill
                  className="object-contain object-top p-2"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
            <div className="absolute -bottom-5 right-5 rounded-2xl border border-ink/10 bg-cream px-4 py-3 shadow-[0_20px_50px_-30px_rgba(6,24,29,0.35)]">
              <p className="text-[0.58rem] font-bold uppercase tracking-[0.18em] text-ink/60">
                No insurance?
              </p>
              <p className="mt-1 font-display text-lg tracking-[-0.03em] text-ink">
                Ask about the Star Plan.
              </p>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="The NLD Star Discount Plan"
              title={
                <>
                  Straightforward savings
                  <span className="gold-text italic"> for loyal patients.</span>
                </>
              }
              description="Dental insurance can be a hassle and confusing for patients. We have made this as straight forward and as affordable as possible so you can see how to save by being a loyal patient of Northern Lights Dental."
            />
            <Reveal delay={0.1}>
              <div className="mt-7 space-y-3">
                {[
                  "Ask us about the 1st visit Trial Run",
                  "A substantially discounted way to evaluate your risk",
                  "A simple way to see if our clinic feels right for you",
                ].map((item) => (
                  <span
                    key={item}
                    className="flex items-start gap-2.5 text-sm leading-snug text-ink/65"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-aurora/15">
                      <Check className="h-3 w-3 text-aurora-4" />
                    </span>
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="dark" size="lg">
                  <Link href="/contact">
                    Ask about the plan
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/blog/star-discount-plan-for-patients-without-dental-insurance">
                    Read the announcement
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink py-16 text-cream sm:py-24">
        <div className="pointer-events-none absolute inset-0 aurora-grid opacity-40" />
        <div className="shell relative grid gap-10 lg:grid-cols-3">
          <Reveal>
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-aurora/15 text-aurora">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="eyebrow text-cream/55">Our office</p>
                <a
                  href={site.mapLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 block text-sm leading-relaxed text-cream/70 transition-colors hover:text-cream"
                >
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.state} {site.address.zip}
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-aurora/15 text-aurora">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <p className="eyebrow text-cream/55">Clinic hours</p>
                <p className="mt-2 text-sm leading-relaxed text-cream/70">
                  Monday–Thursday 8:00 am–5:00 pm
                  <br />
                  Friday 8:00 am–noon
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-aurora/15 text-aurora">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="eyebrow text-cream/55">Talk to us</p>
                <a
                  href={site.phoneHref}
                  className="mt-2 block font-display text-2xl tracking-[-0.03em] text-cream transition-colors hover:text-aurora"
                >
                  {site.phone}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeading
            eyebrow="New-patient questions"
            title={
              <>
                A little more
                <span className="aurora-text-ink italic"> clarity.</span>
              </>
            }
            description="If your question is not here, call us. We are happy to talk it through."
          />
          <Reveal delay={0.08}>
            <div className="rounded-[1.75rem] border border-ink/10 bg-white/55 px-6 py-2 sm:px-8">
              <FaqAccordion items={faqs.slice(0, 7)} />
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Button asChild variant="dark">
                <Link href="/contact">
                  Book an appointment
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href="/faq" className="link-underline">
                  All questions
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
