import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.16em]",
  {
    variants: {
      variant: {
        default: "border-ink/15 bg-ink/[0.04] text-ink/70",
        aurora: "border-aurora-3/30 bg-aurora/15 text-ink",
        light: "border-white/20 bg-white/10 text-cream/85",
        outline: "border-ink/20 bg-transparent text-ink/70",
        gold: "border-gold/40 bg-gold/15 text-ink/75",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
