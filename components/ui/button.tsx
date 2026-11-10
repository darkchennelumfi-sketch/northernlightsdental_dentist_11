import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 ease-out disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-aurora text-ink shadow-[0_10px_40px_-12px_rgba(95,224,191,0.7)] hover:bg-aurora-2 hover:shadow-[0_16px_50px_-12px_rgba(95,224,191,0.85)] hover:-translate-y-0.5",
        dark:
          "bg-ink text-cream hover:bg-ink-2 hover:-translate-y-0.5 shadow-[0_10px_30px_-14px_rgba(6,24,29,0.8)]",
        outline:
          "border border-ink/20 bg-transparent text-ink hover:border-ink/40 hover:bg-ink/[0.04]",
        "outline-light":
          "border border-white/25 bg-white/[0.04] text-cream backdrop-blur-md hover:border-aurora/60 hover:bg-white/[0.08]",
        ghost: "text-ink hover:bg-ink/[0.06]",
        "ghost-light": "text-cream/80 hover:bg-white/[0.08] hover:text-cream",
        gold: "bg-gold text-ink hover:bg-[#e5c68f] hover:-translate-y-0.5",
        link: "h-auto rounded-none p-0 text-ink underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        default: "h-11 px-6",
        lg: "h-13 px-7 text-[0.95rem]",
        icon: "h-11 w-11",
        "icon-sm": "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
