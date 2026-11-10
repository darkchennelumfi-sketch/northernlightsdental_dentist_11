"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export function FaqAccordion({
  items,
  className,
  tone = "light",
}: {
  items: { q: string; a: string }[];
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="item-0"
      className={cn("w-full", className)}
    >
      {items.map((item, index) => (
        <AccordionItem
          key={item.q}
          value={`item-${index}`}
          className={tone === "dark" ? "border-white/10" : "border-ink/12"}
        >
          <AccordionTrigger
            className={tone === "dark" ? "text-cream hover:text-aurora" : undefined}
          >
            {item.q}
          </AccordionTrigger>
          <AccordionContent
            className={tone === "dark" ? "text-cream/55" : undefined}
          >
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
