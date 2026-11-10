import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Phone,
  Sparkles,
} from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { DoctorCard } from "@/components/site/doctor-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { doctors, site } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return doctors.map((doctor) => ({ slug: doctor.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const doctor = doctors.find((item) => item.slug === slug);

  if (!doctor) return {};

  return {
    title: `${doctor.name} — ${doctor.role}`,
    description: doctor.short,
    alternates: { canonical: `/about/${doctor.slug}` },
    openGraph: {
      title: `${doctor.name} | Northern Lights Dental`,
      description: doctor.short,
      url: `/about/${doctor.slug}`,
      images: [{ url: doctor.photo, width: 900, height: 1350, alt: doctor.name }],
    },
  };
}

export default async function DoctorPage({ params }: Params) {
  const { slug } = await params;
  const doctor = doctors.find((item) => item.slug === slug);

  if (!doctor) notFound();

  const others = doctors.filter((item) => item.slug !== doctor.slug);

  return (
    <>
      <PageHero
        eyebrow={`${doctor.role} · Northern Lights Dental`}
        title={
          <>
            {doctor.name.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="aurora-text italic">
              {doctor.name.split(" ").slice(-1)}
            </span>
          </>
        }
        description={doctor.short}
        breadcrumb={[
          { label: "About", href: "/about" },
          { label: "Doctors", href: "/about" },
          { label: doctor.name },
        ]}
      >
        <div className="relative w-full max-w-[19rem] overflow-hidden rounded-[1.75rem] border border-white/12">
          <div className="relative aspect-[3/4]">
            <Image
              src={doctor.photo}
              alt={doctor.name}
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 20vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
          </div>
          <div className="absolute bottom-4 left-4">
            <Badge variant="light">{doctor.role}</Badge>
          </div>
        </div>
      </PageHero>

      <section className="py-16 sm:py-24">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_20rem] lg:items-start">
          <div>
            <Reveal>
              <p className="eyebrow text-ink/60">Meet {doctor.name.split(" ")[1]}</p>
              <h2 className="mt-3 max-w-2xl text-balance text-[2.2rem] leading-[1] tracking-[-0.045em] text-ink sm:text-[2.9rem]">
                A little about
                <span className="gold-text italic"> my story.</span>
              </h2>
            </Reveal>

            <div className="mt-7 space-y-5">
              {doctor.bio.map((paragraph) => (
                <Reveal key={paragraph.slice(0, 24)} delay={0.04}>
                  <p className="max-w-2xl text-[0.98rem] leading-[1.8] text-ink/65">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.08} className="mt-10">
              <div className="rounded-[1.75rem] border border-ink/10 bg-white/55 p-6 sm:p-8">
                <div className="flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-aurora-4">
                  <Sparkles className="h-3.5 w-3.5" />
                  Credentials
                </div>
                <ul className="mt-5 space-y-3">
                  {doctor.credentials.map((credential) => (
                    <li
                      key={credential}
                      className="flex items-start gap-2.5 text-sm leading-snug text-ink/65"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-aurora/15">
                        <Check className="h-3 w-3 text-aurora-4" />
                      </span>
                      {credential}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="mt-10">
              <p className="eyebrow text-ink/60">Areas of focus</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {doctor.focus.map((focus) => (
                  <span
                    key={focus}
                    className="rounded-full border border-ink/12 bg-white/50 px-3.5 py-1.5 text-xs font-semibold text-ink/60"
                  >
                    {focus}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <aside className="lg:sticky lg:top-28">
            <Reveal delay={0.08}>
              <div className="rounded-[1.75rem] border border-ink/10 bg-ink p-6 text-cream">
                <p className="eyebrow text-aurora/70">Book with us</p>
                <p className="mt-2 text-sm leading-relaxed text-cream/60">
                  We would be glad to welcome you to Northern Lights Dental.
                </p>
                <Button asChild className="mt-5 w-full">
                  <Link href="/contact">
                    Request an appointment
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <a
                  href={site.phoneHref}
                  className="mt-4 flex items-center justify-center gap-2 text-xs font-semibold text-cream/60 transition-colors hover:text-aurora"
                >
                  <Phone className="h-3.5 w-3.5" />
                  {site.phone}
                </a>
              </div>
              <div className="mt-4 rounded-[1.75rem] border border-ink/10 bg-white/55 p-5">
                <p className="eyebrow text-ink/60">Away from the office</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {doctor.outside.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-cream-2/80 px-3 py-1.5 text-[0.68rem] font-semibold text-ink/65"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <section className="bg-cream-2/70 py-16 sm:py-24">
        <div className="shell">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="The rest of the team"
              title={
                <>
                  More people who
                  <span className="aurora-text-ink italic"> care.</span>
                </>
              }
            />
            <Button asChild variant="ghost">
              <Link href="/about" className="link-underline">
                <ArrowLeft className="h-4 w-4" />
                About the practice
              </Link>
            </Button>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {others.map((item) => (
              <DoctorCard key={item.slug} doctor={item} />
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button asChild variant="dark">
              <Link href="/contact">
                Book an appointment
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
            <span className="text-xs text-ink/60">
              New patients welcome · Ages 1 to 101+
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
