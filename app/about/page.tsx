import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Heart,
  Leaf,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal, StaggerItem, StaggerReveal } from "@/components/site/reveal";
import { DoctorCard } from "@/components/site/doctor-card";
import { Button } from "@/components/ui/button";
import { doctors, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Our Fargo Dental Practice",
  description:
    "Meet the doctors and team behind Northern Lights Dental in Fargo, ND. Top-of-the-line technology, abundant services, and compassionate care for ages 1 to 101+.",
  alternates: { canonical: "/about" },
};

const principles = [
  {
    icon: ShieldCheck,
    title: "Quality you can trust",
    text: "We are committed to providing excellent quality dental care to you and your family in and around Fargo, North Dakota.",
  },
  {
    icon: Sparkles,
    title: "Technology with a purpose",
    text: "You can expect top-of-the-line technology and abundant services in a comfortable, friendly environment.",
  },
  {
    icon: Heart,
    title: "Compassion, always",
    text: "We treat our patients with the utmost compassion and will ensure you achieve and maintain a bright, healthy smile.",
  },
  {
    icon: Leaf,
    title: "Conservative by choice",
    text: "We strongly believe in electing for conservative approaches whenever possible, so care stays proportionate to what you need.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the practice"
        title={
          <>
            A Fargo dental home for
            <span className="aurora-text italic"> every generation.</span>
          </>
        }
        description="At Northern Lights Dental, we are committed to providing excellent quality dental care to you and your families in and around Fargo, North Dakota."
        breadcrumb={[{ label: "About" }]}
      >
        <div className="relative w-full max-w-sm overflow-hidden rounded-[1.75rem] border border-white/12">
          <div className="relative aspect-[4/3]">
            <Image
              src="/images/team.jpg"
              alt="The team at Northern Lights Dental"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-[0.58rem] font-bold uppercase tracking-[0.18em] text-aurora">
              Fargo, North Dakota
            </p>
            <p className="mt-1 font-display text-xl tracking-[-0.03em] text-cream">
              Care for ages 1 to 101+
            </p>
          </div>
        </div>
      </PageHero>

      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="pointer-events-none absolute -right-40 top-20 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(95,224,191,0.1),transparent_65%)]" />
        <div className="shell relative grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Our story"
              title={
                <>
                  Excellent care,
                  <span className="gold-text italic"> human first.</span>
                </>
              }
            />
            <Reveal delay={0.08}>
              <p className="mt-6 max-w-xl text-[1.02rem] leading-relaxed text-ink/60">
                At Northern Lights Dental, we are committed to providing
                excellent quality dental care to you and your families in and
                around Fargo, North Dakota. You can expect top of the line
                technology and abundant services in a comfortable, friendly
                environment. We treat our patients with the utmost compassion
                and will ensure you achieve and maintain a bright, healthy
                smile.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <blockquote className="mt-8 border-l-2 border-aurora-3/50 pl-5">
                <p className="font-display text-[1.5rem] leading-snug tracking-[-0.025em] text-ink/85">
                  “We view each visit from the mind of our patients.”
                </p>
              </blockquote>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Book a visit
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/services">Explore care</Link>
                </Button>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.12} className="relative">
            <div className="absolute -right-4 -top-4 h-full w-full rounded-[2.2rem] border border-aurora-3/25" />
            <div className="relative overflow-hidden rounded-[2.2rem] border border-ink/10">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/clinic-chair.jpg"
                  alt="Inside the Northern Lights Dental office"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-5 left-5 rounded-2xl border border-white/25 bg-cream/85 px-4 py-3 backdrop-blur-xl">
                <p className="text-[0.58rem] font-bold uppercase tracking-[0.18em] text-ink/60">
                  Our promise
                </p>
                <p className="mt-1 font-display text-lg tracking-[-0.03em] text-ink">
                  Comfort, honesty, and care.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cream-2/70 py-20 sm:py-28">
        <div className="shell">
          <SectionHeading
            eyebrow="What guides us"
            title={
              <>
                Four things we
                <span className="aurora-text-ink italic"> never rush.</span>
              </>
            }
            align="center"
          />
          <StaggerReveal className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle) => (
              <StaggerItem key={principle.title} className="h-full">
                <div className="h-full rounded-[1.5rem] border border-ink/10 bg-white/60 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-aurora-3/35 hover:bg-white">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-aurora/15 text-aurora-4">
                    <principle.icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-6 text-[1.3rem] leading-[1.1] text-ink">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-[0.84rem] leading-relaxed text-ink/65">
                    {principle.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="shell">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Meet the doctors"
              title={
                <>
                  The people behind
                  <span className="gold-text italic"> the smiles.</span>
                </>
              }
              description="Get to know the dentists who will listen, explain, and care for your family."
            />
            <Reveal delay={0.1} className="shrink-0">
              <div className="rounded-2xl border border-ink/10 bg-white/55 p-4">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-ink/60">
                  Prefer to call?
                </p>
                <a
                  href={site.phoneHref}
                  className="mt-1 flex items-center gap-2 font-display text-xl tracking-[-0.03em] text-ink transition-colors hover:text-aurora-4"
                >
                  <Phone className="h-4 w-4 text-aurora-4" />
                  {site.phone}
                </a>
              </div>
            </Reveal>
          </div>

          <StaggerReveal className="mt-12 grid gap-5 md:grid-cols-3">
            {doctors.map((doctor) => (
              <StaggerItem key={doctor.slug} className="h-full">
                <DoctorCard doctor={doctor} className="h-full" />
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink py-16 text-cream sm:py-24">
        <div className="pointer-events-none absolute inset-0 aurora-grid opacity-40" />
        <div className="shell relative grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="eyebrow text-aurora">Come say hello</p>
            <h2 className="mt-4 max-w-2xl text-balance text-[2.4rem] leading-[0.98] tracking-[-0.045em] sm:text-[3.4rem]">
              We would love to meet
              <span className="aurora-text italic"> your family.</span>
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-cream/55">
              New patients are always welcome. Call us or send a note, and we
              will help you find a time that works.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">Book an appointment</Link>
              </Button>
              <Button asChild size="lg" variant="outline-light">
                <a href={site.phoneHref}>
                  <Phone className="h-4 w-4" />
                  {site.phone}
                </a>
              </Button>
            </div>
          </div>
          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-md">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-aurora" />
              <div>
                <p className="eyebrow text-cream/55">Find us</p>
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
                <Link
                  href="/virtual-tour"
                  className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-aurora transition-colors hover:text-aurora-2"
                >
                  Take the virtual tour
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
