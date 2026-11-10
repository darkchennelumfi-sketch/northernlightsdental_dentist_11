import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Clock,
  User,
} from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { PostCard } from "@/components/site/post-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { posts, site } from "@/lib/site";
import type { ContentBlock } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

const imageDimensions: Record<string, { width: number; height: number }> = {
  "/images/journal-brushing.jpg": { width: 687, height: 1024 },
  "/images/journal-family.jpg": { width: 1030, height: 687 },
  "/images/star-plan-card.jpg": { width: 773, height: 1030 },
};

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.image, alt: post.imageAlt }],
    },
  };
}

function ArticleBlock({ block }: { block: ContentBlock }) {
  if (block.type === "h2") {
    return (
      <h2
        id={slugify(block.text)}
        className="mt-12 scroll-mt-28 text-balance text-[1.9rem] leading-[1.05] tracking-[-0.035em] text-ink sm:text-[2.4rem]"
      >
        {block.text}
      </h2>
    );
  }

  if (block.type === "h3") {
    return (
      <h3 className="mt-8 text-[1.5rem] leading-snug text-ink">{block.text}</h3>
    );
  }

  if (block.type === "quote") {
    return (
      <blockquote className="my-6 border-l-2 border-aurora-3/50 pl-5 font-display text-[1.4rem] italic leading-snug tracking-[-0.02em] text-ink/75">
        {block.text}
      </blockquote>
    );
  }

  if (block.type === "list") {
    return (
      <ul className="my-6 space-y-2.5">
        {block.items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2.5 text-[0.98rem] leading-[1.8] text-ink/65"
          >
            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-aurora-3" />
            {item}
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "image") {
    const dimensions = imageDimensions[block.src] ?? {
      width: 1200,
      height: 800,
    };
    return (
      <figure className="my-10">
        <div className="overflow-hidden rounded-[1.5rem] border border-ink/10 bg-cream-2">
          <Image
            src={block.src}
            alt={block.alt}
            width={dimensions.width}
            height={dimensions.height}
            className="h-auto w-full"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
        </div>
        {block.caption && (
          <figcaption className="mt-3 text-center text-[0.7rem] leading-relaxed text-ink/60">
            {block.caption}
          </figcaption>
        )}
      </figure>
    );
  }

  return (
    <p className="mt-5 text-[1rem] leading-[1.85] text-ink/65">{block.text}</p>
  );
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) notFound();

  const related = posts.filter((item) => item.slug !== post.slug);
  const headings = post.content
    .filter(
      (block): block is { type: "h2"; text: string } => block.type === "h2",
    )
    .map((block) => ({ text: block.text, id: slugify(block.text) }));

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: site.name },
    image: `https://nldentalfargo.com${post.image}`,
  };

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        description={post.excerpt}
        breadcrumb={[{ label: "Journal", href: "/blog" }, { label: post.title }]}
      >
        <div className="rounded-2xl border border-white/12 bg-white/[0.04] p-5 backdrop-blur-md">
          <div className="space-y-3 text-sm text-cream/70">
            <p className="flex items-center gap-2">
              <User className="h-4 w-4 text-aurora" />
              {post.author}
            </p>
            <p className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-aurora" />
              {post.displayDate}
            </p>
            <p className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-aurora" />
              {post.readTime}
            </p>
          </div>
          <Badge variant="light" className="mt-4">
            {post.category}
          </Badge>
        </div>
      </PageHero>

      <section className="py-12 sm:py-16">
        <div className="shell">
          <Reveal>
            <div className="relative aspect-[16/8] overflow-hidden rounded-[2rem] border border-ink/10 bg-cream-2 sm:aspect-[16/7]">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-16 sm:pb-24">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_20rem] lg:items-start">
          <article className="max-w-3xl">
            {post.content.map((block, index) => (
              <ArticleBlock key={`${block.type}-${index}`} block={block} />
            ))}

            <div className="mt-12 rounded-[1.5rem] border border-ink/10 bg-white/55 p-6">
              <p className="eyebrow text-ink/60">Written by</p>
              <p className="mt-2 text-sm font-semibold text-ink">{post.author}</p>
              <p className="mt-1 text-xs leading-relaxed text-ink/60">
                Northern Lights Dental · Fargo, North Dakota
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button asChild size="sm" variant="dark">
                  <Link href="/about">Meet the team</Link>
                </Button>
                <Button asChild size="sm" variant="outline">
                  <Link href="/contact">Book a visit</Link>
                </Button>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-ink/10 pt-6">
              <Button asChild variant="ghost" className="px-0">
                <Link href="/blog" className="link-underline">
                  <ArrowLeft className="h-4 w-4" />
                  All stories
                </Link>
              </Button>
              <Button asChild variant="ghost" className="px-0">
                <Link href="/contact" className="link-underline">
                  Ask a question
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </article>

          <aside className="lg:sticky lg:top-28">
            {headings.length > 0 && (
              <div className="rounded-[1.5rem] border border-ink/10 bg-white/55 p-5">
                <p className="eyebrow text-ink/60">In this story</p>
                <ul className="mt-4 space-y-2.5">
                  {headings.map((heading) => (
                    <li key={heading.id}>
                      <a
                        href={`#${heading.id}`}
                        className="text-xs leading-relaxed text-ink/65 transition-colors hover:text-aurora-4"
                      >
                        {heading.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-4 rounded-[1.5rem] border border-ink/10 bg-ink p-5 text-cream">
              <p className="eyebrow text-aurora/70">New patients</p>
              <p className="mt-2 text-sm leading-relaxed text-cream/60">
                We are accepting new patients of every age. Let&apos;s find a
                time for you.
              </p>
              <Button asChild className="mt-4 w-full">
                <Link href="/contact">
                  Book a visit
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <a
                href={site.phoneHref}
                className="mt-3 block text-center text-xs font-semibold text-cream/50 transition-colors hover:text-aurora"
              >
                {site.phone}
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-cream-2/70 py-16 sm:py-24">
        <div className="shell">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow text-ink/60">Keep reading</p>
              <h2 className="mt-3 text-[2rem] leading-[1] tracking-[-0.045em] text-ink sm:text-[2.6rem]">
                More from the
                <span className="aurora-text-ink italic"> journal.</span>
              </h2>
            </div>
            <Button asChild variant="ghost">
              <Link href="/blog" className="link-underline">
                All stories
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {related.map((item) => (
              <PostCard key={item.slug} post={item} />
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
