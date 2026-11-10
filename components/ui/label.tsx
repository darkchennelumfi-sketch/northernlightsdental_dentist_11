import * as React from "react";
import { cn } from "@/lib/utils";

function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      data-slot="label"
      className={cn(
        "mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-ink/65",
        className,
      )}
      {...props}
    />
  );
}

export { Label };
