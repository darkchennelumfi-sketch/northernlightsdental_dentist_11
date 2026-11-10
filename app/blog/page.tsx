import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BookOpen, Calendar } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { PostCard } from "@/components/site/post-card";
import { Button } from "@/components/ui/button";
import { posts, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Notes, stories, and practical guidance from Northern Lights Dental in Fargo — from your child's early dental health to the NLD Star Discount Plan.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHero
        eyebrow="Journal"
        title={
          <>
            Notes from
            <span className="aurora-text italic"> the office.</span>
          </>
        }
        description="Practical guidance, stories from the practice, and useful things we think are worth sharing."
        breadcrumb={[{ label: "Journal" }]}
      >
        <div className="rounded-2xl border border-white/12 bg-white/[0.04] p-5 backdrop-blur-md">
          <div className="flex items-center gap-2 text-[0.6rem] font-bold uppercase tracking-[0.16em] text-aurora">
            <BookOpen className="h-3.5 w-3.5" />
            Written by our team
          </div>
          <p className="mt-2 max-w-[17rem] text-sm leading-relaxed text-cream/65">
            Real guidance from the people who know your smile best.
          </p>
        </div>
      </PageHero>

      <section className="py-16 sm:py-24">
        <div className="shell">
          <Reveal>
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid overflow-hidden rounded-[2rem] border border-ink/10 bg-white/50 transition-all duration-500 hover:-translate-y-1 hover:border-aurora-3/40 hover:shadow-[0_35px_80px_-45px_rgba(6,24,29,0.4)] lg:grid-cols-[1.1fr_0.9fr]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-cream-2 lg:aspect-auto lg:min-h-[26rem]">
                <Image
                  src={featured.image}
                  alt={featured.imageAlt}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
                <span className="absolute left-5 top-5 rounded-full border border-white/25 bg-ink/60 px-3 py-1 text-[0.58rem] font-bold uppercase tracking-[0.18em] text-cream backdrop-blur-md">
                  Featured · {featured.category}
                </span>
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-9">
                <div className="flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-ink/60">
                  <Calendar className="h-3 w-3" />
                  {featured.displayDate}
                  <span className="h-1 w-1 rounded-full bg-ink/20" />
                  {featured.readTime}
                </div>
                <h2 className="mt-4 text-balance text-[2rem] leading-[1.02] tracking-[-0.04em] text-ink sm:text-[2.7rem]">
                  {featured.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-ink/65">
                  {featured.excerpt}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-aurora-4">
                  Read the story
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          </Reveal>

          <div className="mt-14">
            <SectionHeading
              eyebrow="More reading"
              title={
                <>
                  A little more
                  <span className="gold-text italic"> from us.</span>
                </>
              }
            />
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {rest.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream-2/70 py-16 sm:py-24">
        <div className="shell">
          <div className="grid gap-8 rounded-[2rem] bg-ink px-6 py-10 text-cream sm:px-10 sm:py-12 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="eyebrow text-aurora">Have a question?</p>
              <h2 className="mt-3 max-w-2xl text-balance text-[2rem] leading-[1] tracking-[-0.045em] sm:text-[3rem]">
                Some things are easier
                <span className="aurora-text italic"> to talk through.</span>
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button asChild size="lg">
                <Link href="/contact">
                  Ask us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline-light">
                <a href={site.phoneHref}>{site.phone}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
