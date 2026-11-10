import * as React from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/site/reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className,
  titleClassName,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
  titleClassName?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "mb-5 flex items-center gap-3",
            align === "center" && "justify-center",
          )}
        >
          <span className="h-px w-8 bg-aurora-3/60" />
          <span
            className={cn(
              "eyebrow",
              tone === "light" ? "text-aurora" : "text-ink/65",
            )}
          >
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        className={cn(
          "text-balance text-[2.3rem] leading-[1.02] sm:text-[3rem] lg:text-[3.6rem]",
          tone === "light" ? "text-cream" : "text-ink",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 max-w-2xl text-[1.02rem] leading-relaxed sm:text-[1.08rem]",
            align === "center" && "mx-auto",
            tone === "light" ? "text-cream/65" : "text-ink/60",
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
