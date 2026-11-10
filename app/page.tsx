import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock,
  Eye,
  Heart,
  Leaf,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { AuroraBackdrop } from "@/components/site/aurora-backdrop";
import { Marquee } from "@/components/site/marquee";
import { Reveal, StaggerItem, StaggerReveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { ServiceCard } from "@/components/site/service-card";
import { DoctorCard } from "@/components/site/doctor-card";
import { PostCard } from "@/components/site/post-card";
import { FaqAccordion } from "@/components/site/faq-accordion";
import { ContactForm } from "@/components/site/contact-form";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { doctors, faqs, posts, services, site, values } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Northern Lights Dental — Family Dentistry in Fargo, ND",
  },
  description: site.description,
  alternates: { canonical: "/" },
};

const valueIcons = { eye: Eye, leaf: Leaf, heart: Heart } as const;

const trustItems = [
  "General exams & cleanings",
  "Same-day crowns",
  "Kid-friendly care",
  "Implants & root canals",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-ink text-cream">
        <AuroraBackdrop />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-aurora/40 to-transparent" />
        <div className="shell relative grid gap-14 pb-16 pt-12 sm:pb-20 sm:pt-16 lg:min-h-[40rem] lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:pb-24 lg:pt-20">
          <div>
            <Reveal y={18}>
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="light">
                  <span className="h-1.5 w-1.5 rounded-full bg-aurora" />
                  Fargo, North Dakota
                </Badge>
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-cream/55">
                  Family dentistry · Ages 1–101+
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-7 text-balance text-[3.4rem] leading-[0.9] tracking-[-0.055em] sm:text-[4.6rem] lg:text-[5.1rem] xl:text-[5.6rem]">
                We love to see you
                <span className="aurora-text italic"> smile.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-7 max-w-xl text-[1.05rem] leading-relaxed text-cream/60 sm:text-[1.15rem]">
                Professional dental care in a warm, welcoming environment for
                ages 1 to 101+. Modern dentistry, thoughtful people, and a
                practice that feels like home.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Schedule your appointment
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline-light">
                  <Link href="/services">Explore our services</Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-6">
                {trustItems.map((item) => (
                  <span
                    key={item}
                    className="flex items-center gap-2 text-[0.72rem] font-semibold text-cream/50"
                  >
                    <Check className="h-3.5 w-3.5 text-aurora" />
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="relative mx-auto w-full max-w-[34rem] lg:mx-0">
            <div className="absolute -inset-6 rounded-[3rem] bg-[radial-gradient(circle_at_60%_20%,rgba(95,224,191,0.2),transparent_65%)] blur-2xl" />
            <div className="aurora-border relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-ink-2">
              <div className="relative aspect-[4/5] sm:aspect-[5/5.4]">
                <Image
                  src="/images/clinic-reception.jpg"
                  alt="The welcoming treatment space at Northern Lights Dental"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent opacity-80" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_15%,rgba(95,224,191,0.18),transparent_55%)]" />
              </div>

              <div className="absolute left-5 top-5 rounded-2xl border border-white/15 bg-ink/55 px-4 py-3 backdrop-blur-xl">
                <div className="flex items-center gap-2 text-[0.58rem] font-bold uppercase tracking-[0.18em] text-aurora">
                  <Sparkles className="h-3.5 w-3.5" />
                  Same-day crowns
                </div>
                <p className="mt-1 text-xs text-cream/60">
                  Many restorations, one visit.
                </p>
              </div>

              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/15 bg-ink/55 p-4 backdrop-blur-xl sm:left-auto sm:w-[17rem]">
                <div className="flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-aurora/20 text-aurora">
                    <Heart className="h-4 w-4" />
                  </span>
                  <span className="rounded-full border border-aurora/25 bg-aurora/10 px-2.5 py-1 text-[0.55rem] font-bold uppercase tracking-[0.16em] text-aurora">
                    Open
                  </span>
                </div>
                <p className="mt-3 text-sm font-semibold text-cream">
                  Accepting new patients
                </p>
                <p className="mt-1 text-[0.68rem] leading-relaxed text-cream/50">
                  Mon–Thu 8–5 · Fri 8–12
                  <br />
                  4150 19th Ave S, Suite 301
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="shell relative pb-10">
          <div className="grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">
            {[
              { value: "1–101+", label: "Ages we care for" },
              { value: "8", label: "Service areas" },
              { value: "3", label: "Dentists on the team" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-baseline gap-3">
                <span className="font-display text-3xl tracking-[-0.04em] text-aurora">
                  {stat.value}
                </span>
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-cream/55">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Marquee items={services.map((service) => service.title)} />

      {/* Welcome */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="pointer-events-none absolute -right-40 top-20 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(95,224,191,0.12),transparent_65%)]" />
        <div className="shell relative grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <Reveal>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-aurora-3/60" />
                <span className="eyebrow text-ink/65">
                  Welcome to Northern Lights Dental
                </span>
              </div>
              <h2 className="text-balance text-[2.6rem] leading-[0.98] tracking-[-0.045em] sm:text-[3.4rem] lg:text-[4rem]">
                We love to see you
                <span className="gold-text italic"> smile!</span>
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-6 max-w-xl text-[1.02rem] leading-relaxed text-ink/60">
                We at Northern Lights Dental offer professional dental care in a
                warm, welcoming environment for ages 1 to 101+. Our team
                believes great care starts with listening, and that the best
                dentistry is the kind you never dread.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <blockquote className="mt-8 border-l-2 border-aurora-3/50 pl-5">
                <p className="font-display text-[1.45rem] leading-snug tracking-[-0.025em] text-ink/85">
                  “We view each visit from the mind of our patients.”
                </p>
              </blockquote>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Up-to-date research and education",
                  "Conservative approaches when possible",
                  "Top-of-the-line technology",
                  "A comfortable, friendly environment",
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
            <Reveal delay={0.26}>
              <Button asChild variant="dark" size="lg" className="mt-9">
                <Link href="/about">
                  Meet our team
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </Reveal>
          </div>

          <Reveal delay={0.12} className="relative">
            <div className="absolute -left-5 -top-5 h-full w-full rounded-[2.2rem] border border-aurora-3/25" />
            <div className="relative overflow-hidden rounded-[2.2rem] border border-ink/10 bg-cream-2">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/clinic-chair.jpg"
                  alt="A comfortable dental treatment room at Northern Lights Dental"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/25 bg-cream/80 p-4 backdrop-blur-xl">
                <p className="eyebrow text-ink/60">A different kind of dental visit</p>
                <p className="mt-2 font-display text-[1.35rem] leading-tight tracking-[-0.03em] text-ink">
                  Calm, considered, and built around you.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="grain relative isolate overflow-hidden bg-ink py-20 text-cream sm:py-28">
        <AuroraBackdrop />
        <div className="shell relative">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="What we offer"
              title={
                <>
                  Care for every chapter of
                  <span className="aurora-text italic"> your smile.</span>
                </>
              }
              description="From routine cleanings to same-day restorations, our services are designed to meet you where you are — and to keep care conservative whenever possible."
              tone="light"
            />
            <Reveal delay={0.1} className="shrink-0">
              <Button asChild variant="outline-light" size="lg">
                <Link href="/services">
                  All services
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </Reveal>
          </div>

          <StaggerReveal className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <StaggerItem key={service.slug} className="h-full">
                <ServiceCard
                  service={service}
                  index={index}
                  tone="dark"
                  className="h-full"
                />
              </StaggerItem>
            ))}
          </StaggerReveal>

          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 sm:flex-row sm:items-center">
              <p className="text-sm text-cream/55">
                Not sure where to start? We are happy to help you find the right
                next step.
              </p>
              <a
                href={site.phoneHref}
                className="flex items-center gap-2 text-sm font-semibold text-aurora transition-colors hover:text-aurora-2"
              >
                <Phone className="h-4 w-4" />
                {site.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 dot-grid opacity-40" />
        <div className="shell relative">
          <SectionHeading
            eyebrow="How we care"
            title={
              <>
                Thoughtful dentistry,
                <span className="gold-text italic"> without the hurry.</span>
              </>
            }
            description="We take the time to understand what is happening, explain your options clearly, and choose the least invasive path whenever it is the right one."
            align="center"
          />
          <StaggerReveal className="mt-14 grid gap-4 md:grid-cols-3">
            {values.map((value, index) => {
              const Icon = valueIcons[value.icon as keyof typeof valueIcons];
              return (
                <StaggerItem key={value.title} className="h-full">
                  <div className="group relative flex h-full flex-col rounded-[1.75rem] border border-ink/10 bg-white/55 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-aurora-3/40 hover:bg-white hover:shadow-[0_35px_70px_-45px_rgba(6,24,29,0.35)]">
                    <div className="flex items-center justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink/[0.04] text-aurora-4">
                        <Icon className="h-5 w-5" strokeWidth={1.5} />
                      </span>
                      <span className="font-display text-sm italic text-ink/65">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="mt-8 text-[1.55rem] leading-[1.05] text-ink">
                      {value.title}
                    </h3>
                    <p className="mt-3 text-[0.9rem] leading-relaxed text-ink/65">
                      {value.text}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerReveal>
        </div>
      </section>

      {/* Kids */}
      <section className="relative overflow-hidden bg-cream-2/70 py-20 sm:py-28">
        <div className="shell grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-[2.2rem] border border-ink/10">
              <div className="relative aspect-[5/4]">
                <Image
                  src="/images/kid-friendly.jpg"
                  alt="A young patient at Northern Lights Dental"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-aurora-3/20 via-transparent to-transparent" />
              </div>
              <div className="absolute right-5 top-5 rounded-full border border-white/30 bg-cream/85 px-4 py-2 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-ink backdrop-blur-md">
                Ages 1 to 101+
              </div>
            </div>
            <div className="absolute -bottom-6 left-5 rounded-2xl border border-ink/10 bg-cream px-5 py-4 shadow-[0_20px_50px_-30px_rgba(6,24,29,0.35)]">
              <p className="eyebrow text-ink/60">Family favorite</p>
              <p className="mt-1 font-display text-xl tracking-[-0.03em] text-ink">
                “We love kids.”
              </p>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Kid friendly"
              title={
                <>
                  Dentistry for the
                  <span className="aurora-text-ink italic"> whole family.</span>
                </>
              }
              description="We love kids and look forward to helping them achieve a shiny, cavity-free, healthy smile. Our team keeps first visits gentle, positive, and full of explanation — so children know what to expect."
            />
            <Reveal delay={0.12}>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Gentle first visits",
                  "Cleanings and sealants",
                  "Brushing guidance for parents",
                  "A welcoming space for siblings",
                ].map((item) => (
                  <span
                    key={item}
                    className="flex items-center gap-2.5 text-sm font-medium text-ink/65"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-aurora/15">
                      <Check className="h-3 w-3 text-aurora-4" />
                    </span>
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <Button asChild size="lg" className="mt-9">
                <Link href="/services/kid-friendly-dentistry">
                  Explore kid-friendly care
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="shell relative">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Meet the doctors"
              title={
                <>
                  The people behind
                  <span className="gold-text italic"> the smiles.</span>
                </>
              }
              description="Three dentists, one shared belief: care should be personal, honest, and comfortable."
            />
            <Reveal delay={0.1} className="shrink-0">
              <Button asChild variant="outline" size="lg">
                <Link href="/about">
                  About the practice
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </Reveal>
          </div>
          <StaggerReveal className="mt-12 grid gap-5 md:grid-cols-3">
            {doctors.map((doctor) => (
              <StaggerItem key={doctor.slug} className="h-full">
                <DoctorCard doctor={doctor} className="h-full" />
              </StaggerItem>
            ))}
          </StaggerReveal>
          <Reveal delay={0.12}>
            <div className="mt-12 grid gap-6 rounded-[2rem] border border-ink/10 bg-white/45 p-7 sm:grid-cols-3 sm:p-9">
              {[
                {
                  icon: ShieldCheck,
                  title: "Top-of-the-line technology",
                  text: "Modern tools support careful diagnosis and comfortable care.",
                },
                {
                  icon: Heart,
                  title: "Utmost compassion",
                  text: "We treat our patients the way we would want our own family treated.",
                },
                {
                  icon: Clock,
                  title: "A schedule that fits",
                  text: "Mon–Thu 8–5 and Friday mornings. Call us to find a time.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-aurora/15 text-aurora-4">
                    <item.icon className="h-4 w-4" strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{item.title}</p>
                    <p className="mt-1 text-[0.8rem] leading-relaxed text-ink/65">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Journal */}
      <section className="relative overflow-hidden bg-cream-2/70 py-20 sm:py-28">
        <div className="shell relative">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="From the journal"
              title={
                <>
                  Notes, stories, and
                  <span className="aurora-text-ink italic"> useful things.</span>
                </>
              }
              description="Practical guidance and a look inside the practice — written by the people who know your smile best."
            />
            <Reveal delay={0.1} className="shrink-0">
              <Button asChild variant="outline" size="lg">
                <Link href="/blog">
                  Read the journal
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </Reveal>
          </div>
          <StaggerReveal className="mt-12 grid gap-5 md:grid-cols-3">
            {posts.map((post, index) => (
              <StaggerItem key={post.slug} className="h-full">
                <PostCard post={post} className="h-full" priority={index === 0} />
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28">
        <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Good questions"
              title={
                <>
                  A few things
                  <span className="gold-text italic"> people ask.</span>
                </>
              }
              description="Can't find what you need? Call the office — a real person will be glad to help."
            />
            <Reveal delay={0.12}>
              <div className="mt-8 rounded-2xl border border-ink/10 bg-white/55 p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-aurora/15 text-aurora-4">
                    <Phone className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-ink/60">
                      Talk to us
                    </p>
                    <a
                      href={site.phoneHref}
                      className="font-display text-xl tracking-[-0.03em] text-ink transition-colors hover:text-aurora-4"
                    >
                      {site.phone}
                    </a>
                  </div>
                </div>
              </div>
              <Button asChild variant="ghost" className="mt-5 px-0">
                <Link href="/faq" className="link-underline">
                  See all questions
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </Reveal>
          </div>
          <Reveal delay={0.08}>
            <div className="rounded-[1.75rem] border border-ink/10 bg-white/55 px-6 py-2 sm:px-8">
              <FaqAccordion items={faqs.slice(0, 6)} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <section
        id="appointment"
        className="grain relative isolate overflow-hidden bg-ink py-20 text-cream sm:py-28"
      >
        <AuroraBackdrop />
        <div className="shell relative grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Make an appointment"
              title={
                <>
                  Scheduling a visit is the first step toward
                  <span className="aurora-text italic"> a healthy smile.</span>
                </>
              }
              description="Please give us a call or fill out the form and we will get in touch with you soon. We look forward to serving you."
              tone="light"
            />

            <Reveal delay={0.12}>
              <div className="mt-9 space-y-5">
                <a
                  href={site.phoneHref}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition-colors hover:border-aurora/30 hover:bg-white/[0.06]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-aurora/15 text-aurora">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="eyebrow text-cream/55">Call the office</span>
                    <span className="mt-0.5 block font-display text-2xl tracking-[-0.03em] text-cream">
                      {site.phone}
                    </span>
                  </span>
                </a>
                <a
                  href={site.mapLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition-colors hover:border-aurora/30 hover:bg-white/[0.06]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-aurora/15 text-aurora">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="eyebrow text-cream/55">Visit us</span>
                    <span className="mt-0.5 block text-sm leading-relaxed text-cream/70">
                      {site.address.street}
                      <br />
                      {site.address.city}, {site.address.state} {site.address.zip}
                    </span>
                  </span>
                </a>
                <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <div className="flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-cream/55">
                    <Clock className="h-3.5 w-3.5 text-aurora" />
                    Office hours
                  </div>
                  <div className="mt-3 space-y-1.5">
                    {site.hours.map((row) => (
                      <div
                        key={row.days}
                        className="flex items-baseline justify-between gap-6 text-xs"
                      >
                        <span className="text-cream/50">{row.days}</span>
                        <span className="font-semibold text-cream/80">
                          {row.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
