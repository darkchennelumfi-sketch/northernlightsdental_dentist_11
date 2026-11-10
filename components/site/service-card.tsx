import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ServiceIcon } from "@/components/site/service-icon";
import type { Service } from "@/lib/site";
import { cn } from "@/lib/utils";

export function ServiceCard({
  service,
  index,
  tone = "dark",
  className,
}: {
  service: Service;
  index: number;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-[1.5rem] border p-6 transition-all duration-500",
        tone === "dark"
          ? "border-white/10 bg-white/[0.035] hover:-translate-y-1.5 hover:border-aurora/30 hover:bg-white/[0.06] hover:shadow-[0_30px_70px_-30px_rgba(95,224,191,0.3)]"
          : "border-ink/10 bg-white/60 hover:-translate-y-1.5 hover:border-aurora-3/40 hover:bg-white hover:shadow-[0_30px_60px_-35px_rgba(6,24,29,0.3)]",
        className,
      )}
    >
      <div className="flex items-start justify-between">
        <span
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-xl border",
            tone === "dark"
              ? "border-aurora/20 bg-aurora/10 text-aurora"
              : "border-ink/10 bg-ink/[0.035] text-aurora-4",
          )}
        >
          <ServiceIcon icon={service.icon} className="h-5 w-5" />
        </span>
        <span
          className={cn(
            "font-display text-sm italic",
            tone === "dark" ? "text-cream/50" : "text-ink/65",
          )}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <h3
        className={cn(
          "mt-7 text-[1.45rem] leading-[1.05] tracking-[-0.035em]",
          tone === "dark" ? "text-cream" : "text-ink",
        )}
      >
        {service.title}
      </h3>
      <p
        className={cn(
          "mt-3 flex-1 text-[0.87rem] leading-relaxed",
          tone === "dark" ? "text-cream/50" : "text-ink/65",
        )}
      >
        {service.excerpt}
      </p>
      <span
        className={cn(
          "mt-6 inline-flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.16em]",
          tone === "dark" ? "text-aurora" : "text-aurora-4",
        )}
      >
        Explore care
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
      <span
        className={cn(
          "pointer-events-none absolute inset-x-6 bottom-0 h-px origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100",
          tone === "dark"
            ? "bg-gradient-to-r from-aurora/60 to-transparent"
            : "bg-gradient-to-r from-aurora-3/50 to-transparent",
        )}
      />
    </Link>
  );
}
