"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { SlidersHorizontal } from "lucide-react";
import { ServiceCard } from "@/components/site/service-card";
import type { Service, ServiceCategory } from "@/lib/site";
import { cn } from "@/lib/utils";

const filters: ("All" | ServiceCategory)[] = [
  "All",
  "Preventive",
  "Restorative",
  "Cosmetic",
  "Family",
];

export function ServicesExplorer({ services }: { services: Service[] }) {
  const [active, setActive] = React.useState<(typeof filters)[number]>("All");
  const reduce = useReducedMotion();

  const filtered =
    active === "All"
      ? services
      : services.filter((service) => service.category.includes(active));

  return (
    <div>
      <div className="flex flex-col gap-4 border-b border-ink/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-ink/60">
          <SlidersHorizontal className="h-3.5 w-3.5" />
          Filter by care
        </div>
        <div
          role="tablist"
          aria-label="Filter services"
          className="scrollbar-hide -mx-1 flex gap-2 overflow-x-auto px-1 pb-1"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={active === filter}
              onClick={() => setActive(filter)}
              className={cn(
                "shrink-0 rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-300",
                active === filter
                  ? "border-ink bg-ink text-cream shadow-[0_8px_25px_-12px_rgba(6,24,29,0.6)]"
                  : "border-ink/15 bg-white/40 text-ink/65 hover:border-ink/30 hover:text-ink",
              )}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <p className="text-xs text-ink/60">
          Showing{" "}
          <span className="font-semibold text-ink/70">{filtered.length}</span>{" "}
          {filtered.length === 1 ? "service" : "services"}
        </p>
        <p className="hidden text-[0.68rem] uppercase tracking-[0.16em] text-ink/65 sm:block">
          Northern Lights Dental
        </p>
      </div>

      <motion.div layout className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((service, index) => (
            <motion.div
              key={service.slug}
              layout={!reduce}
              initial={reduce ? false : { opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduce ? undefined : { opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="h-full"
            >
              <ServiceCard
                service={service}
                index={index}
                tone="light"
                className="h-full"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
