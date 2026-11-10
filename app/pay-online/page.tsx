import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CreditCard,
  Lock,
  Phone,
} from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pay Online",
  description:
    "Make a payment to Northern Lights Dental through our secure online payment portal, or call the office at 701-551-2000 for help with a bill.",
  alternates: { canonical: "/pay-online" },
};

export default function PayOnlinePage() {
  return (
    <>
      <PageHero
        eyebrow="Pay online"
        title={
          <>
            A simple way to
            <span className="aurora-text italic"> settle your bill.</span>
          </>
        }
        description="Use our secure online payment portal to make a payment at your convenience. If you have a question about a bill, call us and we will help."
        breadcrumb={[{ label: "Pay Online" }]}
      >
        <div className="rounded-2xl border border-white/12 bg-white/[0.04] p-5 backdrop-blur-md">
          <div className="flex items-center gap-2 text-[0.6rem] font-bold uppercase tracking-[0.16em] text-aurora">
            <Lock className="h-3.5 w-3.5" />
            Secure portal
          </div>
          <p className="mt-2 max-w-[17rem] text-sm leading-relaxed text-cream/65">
            Payments are handled through our online payment provider.
          </p>
          <Button asChild className="mt-4 w-full">
            <a href={site.payOnline} target="_blank" rel="noreferrer">
              Open payment portal
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </PageHero>

      <section className="py-16 sm:py-24">
        <div className="shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Payments"
              title={
                <>
                  Convenient, secure,
                  <span className="gold-text italic"> straightforward.</span>
                </>
              }
              description="We know dental bills can feel confusing. If anything about your statement is unclear, please ask. We would rather answer a question than leave you guessing."
            />
            <Reveal delay={0.1}>
              <div className="mt-7 space-y-3">
                {[
                  "Use the secure online payment portal",
                  "Call the office for help with a statement",
                  "Ask us about insurance and the NLD Star Discount Plan",
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
                <Button asChild size="lg" variant="dark">
                  <Link href="/contact">
                    Ask a billing question
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={site.phoneHref}>
                    <Phone className="h-4 w-4" />
                    {site.phone}
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <div className="relative overflow-hidden rounded-[2rem] border border-ink/10 bg-ink p-7 text-cream sm:p-9">
              <div className="pointer-events-none absolute inset-0 aurora-grid opacity-50" />
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(95,224,191,0.2),transparent_65%)]" />
              <div className="relative">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-aurora/25 bg-aurora/10 text-aurora">
                  <CreditCard className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <p className="mt-6 eyebrow text-cream/55">Online payment</p>
                <h2 className="mt-2 text-[2rem] leading-[1.02] tracking-[-0.04em] text-cream">
                  Pay through our secure portal.
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-cream/55">
                  You will be taken to our payment provider to complete the
                  transaction. Keep your statement nearby in case you need your
                  account details.
                </p>
                <Button asChild className="mt-6 w-full" size="lg">
                  <a href={site.payOnline} target="_blank" rel="noreferrer">
                    Make a payment
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
                <p className="mt-4 flex items-center justify-center gap-2 text-[0.68rem] text-cream/55">
                  <Lock className="h-3 w-3" />
                  Opens in a new window
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
