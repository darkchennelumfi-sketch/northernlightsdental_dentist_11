import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Camera, Quote, Sparkles } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { BeforeAfter } from "@/components/site/before-after";
import { Button } from "@/components/ui/button";
import { galleryCases, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Smile Gallery",
  description:
    "A look at some of our favorite cases at Northern Lights Dental in Fargo, with before-and-after examples of tooth-colored fillings and implant restorations.",
  alternates: { canonical: "/smile-gallery" },
};

export default function SmileGalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Smile gallery"
        title={
          <>
            Real care,
            <span className="aurora-text italic"> real stories.</span>
          </>
        }
        description="We invite you to take a look at some of our favorite examples of improvements that can offer a sense of peace and confidence to our patients."
        breadcrumb={[{ label: "Smile Gallery" }]}
      >
        <div className="rounded-2xl border border-white/12 bg-white/[0.04] p-5 backdrop-blur-md">
          <div className="flex items-center gap-2 text-[0.6rem] font-bold uppercase tracking-[0.16em] text-aurora">
            <Camera className="h-3.5 w-3.5" />
            A note on care
          </div>
          <p className="mt-2 max-w-[18rem] text-sm leading-relaxed text-cream/65">
            We don&apos;t set out to create insecurities in a person&apos;s
            smile. Healthy teeth and a healthy smile are what we are here for.
          </p>
        </div>
      </PageHero>

      <section className="py-16 sm:py-24">
        <div className="shell">
          <Reveal>
            <div className="grid gap-8 rounded-[2rem] border border-ink/10 bg-white/50 p-6 sm:p-9 lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <div>
                <p className="eyebrow text-ink/60">Why we share</p>
                <h2 className="mt-3 max-w-2xl text-balance text-[2rem] leading-[1.02] tracking-[-0.04em] text-ink sm:text-[2.6rem]">
                  The vast majority of our patients have simple and
                  straightforward appointments.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink/65">
                  Once in a while we are able to demonstrate our skills and help
                  a patient improve their health and smile. Make no mistake: we
                  don&apos;t set out to create insecurities. We believe the
                  perception of a person comes from many things beyond the
                  appearance of teeth — but a healthy smile is something many
                  people want.
                </p>
              </div>
              <div className="flex flex-col items-start gap-4 rounded-2xl bg-cream-2/80 p-6">
                <Quote className="h-7 w-7 text-aurora-4" strokeWidth={1.5} />
                <p className="font-display text-[1.35rem] leading-snug tracking-[-0.03em] text-ink/80">
                  “Healthy teeth and a healthy smile are desired by just about
                  everyone.”
                </p>
                <span className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-ink/60">
                  Northern Lights Dental
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream-2/70 py-16 sm:py-24">
        <div className="shell space-y-16">
          {galleryCases.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div className={index % 2 === 1 ? "lg:order-2" : undefined}>
                  <BeforeAfter
                    before={item.before}
                    after={item.after}
                    beforeAlt={`${item.title} — before`}
                    afterAlt={`${item.title} — after`}
                  />
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : undefined}>
                  <div className="flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-aurora-4">
                    <Sparkles className="h-3.5 w-3.5" />
                    Case study 0{index + 1}
                  </div>
                  <h2 className="mt-4 text-[2.1rem] leading-[1] tracking-[-0.04em] text-ink sm:text-[2.8rem]">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-[0.95rem] leading-[1.8] text-ink/60">
                    {item.description}
                  </p>

                  <div className="mt-6 grid grid-cols-3 gap-2.5">
                    {item.images.map((image) => (
                      <div
                        key={image.src}
                        className="relative aspect-square overflow-hidden rounded-xl border border-ink/10 bg-white/50"
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 30vw, 12vw"
                        />
                        <span className="absolute bottom-1.5 left-1.5 rounded-full bg-ink/55 px-2 py-0.5 text-[0.5rem] font-bold uppercase tracking-[0.14em] text-cream backdrop-blur-sm">
                          {image.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal>
            <p className="rounded-2xl border border-ink/10 bg-white/50 px-5 py-4 text-center text-[0.7rem] leading-relaxed text-ink/60">
              Every smile is different. These examples are shared for
              illustration and are not a guarantee of results. We will talk
              through what is realistic for your teeth at your visit.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="shell">
          <div className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-12 text-cream sm:px-10 sm:py-16">
            <div className="pointer-events-none absolute inset-0 aurora-grid opacity-40" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="eyebrow text-aurora">Your smile, your story</p>
                <h2 className="mt-3 max-w-2xl text-balance text-[2.2rem] leading-[0.98] tracking-[-0.045em] sm:text-[3.2rem]">
                  We would love to hear
                  <span className="aurora-text italic"> what matters to you.</span>
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-cream/55">
                  Come in for a conversation. We will look closely, explain what
                  we see, and help you decide what — if anything — you want to
                  change.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Book a visit
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline-light">
                  <a href={site.phoneHref}>{site.phone}</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
