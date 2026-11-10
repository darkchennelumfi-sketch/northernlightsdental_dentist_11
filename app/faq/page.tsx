import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { FaqAccordion } from "@/components/site/faq-accordion";
import { Button } from "@/components/ui/button";
import { faqs, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about Northern Lights Dental in Fargo — appointments, new patients, insurance, the NLD Star Discount Plan, hours, and more.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title={
          <>
            Good questions,
            <span className="aurora-text italic"> honest answers.</span>
          </>
        }
        description="Everything we hear most often, in one place. If your question is not here, call the office — we are happy to talk it through."
        breadcrumb={[{ label: "FAQ" }]}
      >
        <div className="rounded-2xl border border-white/12 bg-white/[0.04] p-5 backdrop-blur-md">
          <div className="flex items-center gap-2 text-[0.6rem] font-bold uppercase tracking-[0.16em] text-aurora">
            <MessageCircle className="h-3.5 w-3.5" />
            Still curious?
          </div>
          <p className="mt-2 max-w-[17rem] text-sm leading-relaxed text-cream/65">
            A real person will be glad to help you find an answer.
          </p>
          <a
            href={site.phoneHref}
            className="mt-4 flex items-center gap-2 text-sm font-semibold text-aurora transition-colors hover:text-aurora-2"
          >
            <Phone className="h-4 w-4" />
            {site.phone}
          </a>
        </div>
      </PageHero>

      <section className="py-16 sm:py-24">
        <div className="shell grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div>
            <p className="eyebrow text-ink/60">At a glance</p>
            <h2 className="mt-3 text-[2.2rem] leading-[1] tracking-[-0.045em] text-ink sm:text-[2.8rem]">
              The things people
              <span className="gold-text italic"> ask us most.</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink/65">
              New patients, insurance, office hours, and what to expect — all in
              one place.
            </p>
            <div className="mt-6 rounded-2xl border border-ink/10 bg-white/55 p-5">
              <p className="eyebrow text-ink/60">Prefer to call?</p>
              <a
                href={site.phoneHref}
                className="mt-1 block font-display text-2xl tracking-[-0.03em] text-ink transition-colors hover:text-aurora-4"
              >
                {site.phone}
              </a>
              <p className="mt-2 text-xs leading-relaxed text-ink/60">
                Mon–Thu 8–5 · Fri 8–12
              </p>
            </div>
            <Button asChild variant="dark" className="mt-5">
              <Link href="/contact">
                Book an appointment
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <Reveal delay={0.08}>
            <div className="rounded-[1.75rem] border border-ink/10 bg-white/55 px-6 py-2 sm:px-8">
              <FaqAccordion items={faqs} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream-2/70 py-16 sm:py-24">
        <div className="shell">
          <div className="grid gap-8 rounded-[2rem] bg-ink px-6 py-10 text-cream sm:px-10 sm:py-12 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="eyebrow text-aurora">One more thing</p>
              <h2 className="mt-3 max-w-2xl text-balance text-[2rem] leading-[1] tracking-[-0.045em] sm:text-[3rem]">
                The best answer is often
                <span className="aurora-text italic"> a conversation.</span>
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-cream/55">
                Tell us what is on your mind and we will help you figure out the
                next step.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button asChild size="lg">
                <Link href="/contact">Send a request</Link>
              </Button>
              <Button asChild size="lg" variant="outline-light">
                <a href={site.phoneHref}>
                  <Phone className="h-4 w-4" />
                  {site.phone}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
