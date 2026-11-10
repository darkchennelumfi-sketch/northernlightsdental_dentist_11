import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CalendarCheck,
  Check,
  Clock,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { ServiceIcon } from "@/components/site/service-icon";
import { ServiceCard } from "@/components/site/service-card";
import { FaqAccordion } from "@/components/site/faq-accordion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { services, site } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) return {};

  return {
    title: `${service.title} in Fargo, ND`,
    description: `${service.excerpt} ${service.description}`.slice(0, 158),
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} | Northern Lights Dental`,
      description: service.excerpt,
      url: `/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) notFound();

  const related = services.filter((item) =>
    service.related.includes(item.slug),
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: service.title,
    description: service.description,
    performedBy: {
      "@type": "Dentist",
      name: site.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        addressLocality: site.address.city,
        addressRegion: site.address.state,
        postalCode: site.address.zip,
        addressCountry: "US",
      },
    },
  };

  return (
    <>
      <PageHero
        eyebrow={service.category.join(" · ")}
        title={
          <>
            {service.title.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="aurora-text italic">
              {service.title.split(" ").slice(-1)}
            </span>
          </>
        }
        description={service.excerpt}
        breadcrumb={[
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      >
        <div className="aurora-border w-full max-w-sm rounded-[1.75rem] border border-white/12 bg-white/[0.04] p-5 backdrop-blur-md">
          <div className="flex items-center justify-between">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-aurora/20 bg-aurora/10 text-aurora">
              <ServiceIcon icon={service.icon} className="h-5 w-5" />
            </span>
            <Badge variant="light">Care at NLD</Badge>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-cream/60">
            {service.description.split(". ")[0]}.
          </p>
          <Button asChild className="mt-5 w-full">
            <Link href="/contact">
              Ask about this care
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </PageHero>

      <section className="py-16 sm:py-24">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_22rem] lg:items-start">
          <div>
            <Reveal>
              <p className="eyebrow text-ink/60">The overview</p>
              <h2 className="mt-3 max-w-2xl text-balance text-[2.2rem] leading-[1] tracking-[-0.045em] text-ink sm:text-[2.9rem]">
                What this care is
                <span className="gold-text italic"> all about.</span>
              </h2>
              <p className="mt-5 max-w-2xl text-[1rem] leading-relaxed text-ink/60">
                {service.description}
              </p>
            </Reveal>

            <Reveal delay={0.08} className="mt-10">
              <div className="rounded-[1.75rem] border border-ink/10 bg-white/55 p-6 sm:p-8">
                <div className="flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-aurora-4">
                  <Sparkles className="h-3.5 w-3.5" />
                  What is included
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {service.includes.map((item) => (
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
              </div>
            </Reveal>

            <div className="mt-14">
              <Reveal>
                <p className="eyebrow text-ink/60">How it works</p>
                <h2 className="mt-3 text-[2rem] leading-[1] tracking-[-0.04em] text-ink sm:text-[2.6rem]">
                  A calm, clear process.
                </h2>
              </Reveal>
              <div className="mt-7 space-y-4">
                {service.process.map((step, index) => (
                  <Reveal key={step.title} delay={index * 0.05}>
                    <div className="flex gap-5 rounded-[1.5rem] border border-ink/10 bg-white/40 p-5 sm:p-6">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-aurora-3/30 bg-aurora/10 font-display text-sm italic text-aurora-4">
                        0{index + 1}
                      </span>
                      <div>
                        <h3 className="text-xl text-ink">{step.title}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-ink/65">
                          {step.text}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal delay={0.06} className="mt-8">
              <div className="rounded-[1.5rem] border border-gold/30 bg-gold/10 p-6">
                <p className="eyebrow text-ink/60">Good to know</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">
                  {service.note}
                </p>
              </div>
            </Reveal>

            <div className="mt-14">
              <Reveal>
                <p className="eyebrow text-ink/60">Questions</p>
                <h2 className="mt-3 text-[2rem] leading-[1] tracking-[-0.04em] text-ink sm:text-[2.6rem]">
                  You might be wondering…
                </h2>
              </Reveal>
              <Reveal delay={0.06}>
                <div className="mt-6 rounded-[1.5rem] border border-ink/10 bg-white/50 px-6 py-2 sm:px-8">
                  <FaqAccordion items={service.faqs} />
                </div>
              </Reveal>
            </div>

            <div className="mt-14">
              <Reveal>
                <div className="flex flex-col gap-4 rounded-[1.75rem] bg-ink p-7 text-cream sm:flex-row sm:items-center sm:justify-between sm:p-8">
                  <div>
                    <p className="eyebrow text-aurora/70">Ready when you are</p>
                    <h2 className="mt-2 max-w-md text-[1.8rem] leading-[1.05] tracking-[-0.04em] sm:text-[2.2rem]">
                      Let&apos;s talk about your smile.
                    </h2>
                  </div>
                  <div className="flex flex-col gap-2 sm:flex-row">
                    <Button asChild>
                      <Link href="/contact">Book a visit</Link>
                    </Button>
                    <Button asChild variant="outline-light">
                      <a href={site.phoneHref}>
                        <Phone className="h-4 w-4" />
                        {site.phone}
                      </a>
                    </Button>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28">
            <Reveal delay={0.1}>
              <div className="rounded-[1.75rem] border border-ink/10 bg-white/60 p-6">
                <p className="eyebrow text-ink/60">At a glance</p>
                <div className="mt-5 space-y-4 text-sm">
                  <a
                    href={site.phoneHref}
                    className="flex items-center gap-3 text-ink/65 transition-colors hover:text-aurora-4"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-aurora/15 text-aurora-4">
                      <Phone className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-[0.6rem] font-bold uppercase tracking-[0.16em] text-ink/60">
                        Call
                      </span>
                      <span className="font-semibold">{site.phone}</span>
                    </span>
                  </a>
                  <a
                    href={site.mapLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-start gap-3 text-ink/65 transition-colors hover:text-aurora-4"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-aurora/15 text-aurora-4">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-[0.6rem] font-bold uppercase tracking-[0.16em] text-ink/60">
                        Visit
                      </span>
                      <span className="leading-relaxed">
                        {site.address.street}
                        <br />
                        {site.address.city}, {site.address.state}{" "}
                        {site.address.zip}
                      </span>
                    </span>
                  </a>
                  <div className="flex items-start gap-3 text-ink/65">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-aurora/15 text-aurora-4">
                      <Clock className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-[0.6rem] font-bold uppercase tracking-[0.16em] text-ink/60">
                        Hours
                      </span>
                      <span className="leading-relaxed">
                        Mon–Thu 8–5
                        <br />
                        Fri 8–12
                      </span>
                    </span>
                  </div>
                </div>
                <Button asChild className="mt-6 w-full">
                  <Link href="/contact">
                    <CalendarCheck className="h-4 w-4" />
                    Book an appointment
                  </Link>
                </Button>
                <div className="mt-4 rounded-xl bg-aurora/10 px-3 py-2.5 text-center text-[0.68rem] font-semibold text-ink/60">
                  Accepting new patients
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-cream-2/70 py-16 sm:py-24">
          <div className="shell">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeading
                eyebrow="Keep exploring"
                title={
                  <>
                    Related
                    <span className="aurora-text-ink italic"> care.</span>
                  </>
                }
              />
              <Button asChild variant="ghost">
                <Link href="/services" className="link-underline">
                  <ArrowLeft className="h-4 w-4" />
                  All services
                </Link>
              </Button>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item, index) => (
                <ServiceCard
                  key={item.slug}
                  service={item}
                  index={index}
                  tone="light"
                  className="h-full"
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
