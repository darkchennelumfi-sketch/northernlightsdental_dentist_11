import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Download,
  FileText,
  HelpCircle,
  Phone,
} from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal, StaggerItem, StaggerReveal } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";
import { patientForms, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Patient Forms",
  description:
    "Download and print patient forms for Northern Lights Dental, including medical history, registration, release of records, consent for treatment, and financial agreement.",
  alternates: { canonical: "/patient-forms" },
};

export default function PatientFormsPage() {
  return (
    <>
      <PageHero
        eyebrow="Patient forms"
        title={
          <>
            A little paperwork,
            <span className="aurora-text italic"> made easier.</span>
          </>
        }
        description="Click a button below to download and print patient forms. Bring the completed pages to your visit, and we will take it from there."
        breadcrumb={[{ label: "Patient Forms" }]}
      >
        <div className="rounded-2xl border border-white/12 bg-white/[0.04] p-5 backdrop-blur-md">
          <div className="flex items-center gap-2 text-[0.6rem] font-bold uppercase tracking-[0.16em] text-aurora">
            <HelpCircle className="h-3.5 w-3.5" />
            Need a hand?
          </div>
          <p className="mt-2 max-w-[17rem] text-sm leading-relaxed text-cream/65">
            If a form will not open or you are not sure which one you need, give
            us a call.
          </p>
          <a
            href={site.phoneHref}
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-aurora transition-colors hover:text-aurora-2"
          >
            <Phone className="h-4 w-4" />
            {site.phone}
          </a>
        </div>
      </PageHero>

      <section className="py-16 sm:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow="Downloadable forms"
            title={
              <>
                Everything you need
                <span className="gold-text italic"> before you arrive.</span>
              </>
            }
            description="Each form opens as a PDF in a new tab. Print it, complete it, and bring it with you."
          />

          <StaggerReveal className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {patientForms.map((form, index) => (
              <StaggerItem key={form.title} className="h-full">
                <a
                  href={form.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-full flex-col rounded-[1.5rem] border border-ink/10 bg-white/55 p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-aurora-3/40 hover:bg-white hover:shadow-[0_30px_60px_-40px_rgba(6,24,29,0.35)]"
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-aurora/15 text-aurora-4">
                      <FileText className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                    <span className="font-display text-xs italic text-ink/65">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 text-[1.3rem] leading-[1.1] text-ink">
                    {form.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[0.84rem] leading-relaxed text-ink/65">
                    {form.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-aurora-4">
                    Download PDF
                    <Download className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
                  </span>
                </a>
              </StaggerItem>
            ))}
          </StaggerReveal>

          <Reveal delay={0.08}>
            <div className="mt-10 grid gap-6 rounded-[1.75rem] border border-ink/10 bg-cream-2/70 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="eyebrow text-ink/60">A note for new patients</p>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink/60">
                  If you are visiting us for the first time, the Medical History
                  Form and Patient Registration are the best place to start. If
                  you have records from another office, the Release of Records
                  Form lets us request them.
                </p>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Button asChild variant="dark">
                  <Link href="/new-patients">
                    New patient guide
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">Contact us</Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
