import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Post } from "@/lib/site";
import { cn } from "@/lib/utils";

export function PostCard({
  post,
  className,
  priority = false,
}: {
  post: Post;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "group flex flex-col overflow-hidden rounded-[1.5rem] border border-ink/10 bg-white/45 transition-all duration-500 hover:-translate-y-1.5 hover:border-aurora-3/40 hover:shadow-[0_30px_60px_-35px_rgba(6,24,29,0.35)]",
        className,
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-cream-2">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          priority={priority}
          className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent opacity-60" />
        <span className="absolute left-4 top-4 rounded-full border border-white/25 bg-ink/60 px-3 py-1 text-[0.58rem] font-bold uppercase tracking-[0.18em] text-cream backdrop-blur-md">
          {post.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-ink/60">
          <span>{post.displayDate}</span>
          <span className="h-1 w-1 rounded-full bg-ink/20" />
          <span>{post.readTime}</span>
        </div>
        <h3 className="mt-3 text-balance text-[1.35rem] leading-[1.08] tracking-[-0.035em] text-ink">
          {post.title}
        </h3>
        <p className="mt-3 flex-1 text-[0.84rem] leading-relaxed text-ink/65">
          {post.excerpt}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-aurora-4">
          Read the story
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
