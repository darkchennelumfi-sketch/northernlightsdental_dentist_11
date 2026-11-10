import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Phone } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { ServicesExplorer } from "@/components/site/services-explorer";
import { FaqAccordion } from "@/components/site/faq-accordion";
import { Button } from "@/components/ui/button";
import { services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dental Services in Fargo, ND",
  description:
    "General exams and cleanings, sealants and fillings, dentures, same-day crowns, implants, root canals, gum disease treatment, whitening, and kid-friendly dentistry in Fargo, ND.",
  alternates: { canonical: "/services" },
};

const promises = [
  "A clear explanation of what we see",
  "Options, not pressure",
  "Conservative care whenever possible",
  "A plan that fits your life",
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title={
          <>
            Modern care for
            <span className="aurora-text italic"> every smile.</span>
          </>
        }
        description="We view each visit from the mind of our patients. By staying up to date on research and education, we can correctly diagnose, assess risk, and thoroughly consider options with you."
        breadcrumb={[{ label: "Services" }]}
      >
        <div className="rounded-2xl border border-white/12 bg-white/[0.04] p-5 backdrop-blur-md">
          <p className="eyebrow text-cream/55">Not sure where to begin?</p>
          <p className="mt-2 max-w-[16rem] text-sm leading-relaxed text-cream/65">
            Tell us what is on your mind. We will help you find the right next
            step.
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
          <Reveal>
            <div className="grid gap-8 rounded-[2rem] border border-ink/10 bg-white/50 p-6 sm:p-9 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div>
                <p className="eyebrow text-ink/60">A considered approach</p>
                <h2 className="mt-3 max-w-xl text-balance text-[2rem] leading-[1.02] tracking-[-0.04em] text-ink sm:text-[2.6rem]">
                  We strongly believe in electing for conservative approaches
                  whenever possible.
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink/65">
                  That means we look before we leap, explain before we treat,
                  and choose the least invasive option that genuinely serves
                  your health.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {promises.map((item) => (
                  <span
                    key={item}
                    className="flex items-start gap-2.5 rounded-xl border border-ink/10 bg-cream/70 px-3.5 py-3 text-xs font-medium leading-snug text-ink/65"
                  >
                    <span className="mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-aurora/15">
                      <Check className="h-2.5 w-2.5 text-aurora-4" />
                    </span>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="mt-14">
            <ServicesExplorer services={services} />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cream-2/70 py-16 sm:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow="What to expect"
            title={
              <>
                A simple rhythm for
                <span className="gold-text italic"> better care.</span>
              </>
            }
            description="No two mouths are the same, but our approach stays consistent: listen, look closely, and make a plan together."
            align="center"
          />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Listen",
                text: "Your concerns and goals come first. We want to understand what brought you in and what would make the visit feel good.",
              },
              {
                step: "02",
                title: "Look closely",
                text: "We examine your teeth, gums, and bite, and use modern diagnostics to understand what is happening beneath the surface.",
              },
              {
                step: "03",
                title: "Plan together",
                text: "You leave knowing what we found, what your options are, and what we recommend — in plain language.",
              },
            ].map((item) => (
              <Reveal key={item.step} delay={Number(item.step) * 0.04}>
                <div className="relative h-full rounded-[1.5rem] border border-ink/10 bg-white/60 p-6">
                  <span className="font-display text-sm italic text-aurora-4">
                    {item.step}
                  </span>
                  <h3 className="mt-5 text-2xl text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/65">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeading
            eyebrow="Service questions"
            title={
              <>
                The details,
                <span className="aurora-text-ink italic"> answered.</span>
              </>
            }
            description="A few common questions about treatment at Northern Lights Dental. If yours is not here, call us."
          />
          <Reveal delay={0.08}>
            <div className="rounded-[1.75rem] border border-ink/10 bg-white/55 px-6 py-2 sm:px-8">
              <FaqAccordion items={services.flatMap((service) => service.faqs).slice(0, 6)} />
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
