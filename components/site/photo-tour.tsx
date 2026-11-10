"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const stops = [
  {
    id: "reception",
    label: "Reception",
    eyebrow: "Stop 01",
    title: "A calm first hello",
    body: "Your visit begins at the front desk, where our team can check you in, answer questions, and help you settle in before your appointment.",
    src: "/images/clinic-reception.jpg",
    alt: "Reception area at Northern Lights Dental",
  },
  {
    id: "treatment-room",
    label: "Treatment room",
    eyebrow: "Stop 02",
    title: "Comfortable treatment rooms",
    body: "Our treatment rooms are designed to keep care comfortable and unhurried, with space for conversation and a clear view of what comes next.",
    src: "/images/clinic-chair.jpg",
    alt: "Treatment room and dental chair at Northern Lights Dental",
  },
  {
    id: "family-care",
    label: "Family care",
    eyebrow: "Stop 03",
    title: "Room for every age",
    body: "From a child's first visit to care for grandparents, we look after the whole family in one familiar place.",
    src: "/images/kid-friendly.jpg",
    alt: "A young patient at Northern Lights Dental",
  },
  {
    id: "team",
    label: "Our team",
    eyebrow: "Stop 04",
    title: "People who know your name",
    body: "The same friendly faces welcome you back visit after visit. Getting to know you is part of how we care for your smile.",
    src: "/images/team.jpg",
    alt: "The team at Northern Lights Dental",
  },
];

export function PhotoTour() {
  const [active, setActive] = React.useState(0);
  const reduce = useReducedMotion();
  const stop = stops[active];

  function go(direction: number) {
    setActive((current) => (current + direction + stops.length) % stops.length);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_18rem] lg:items-start">
      <div className="overflow-hidden rounded-[2rem] border border-ink/10 bg-ink shadow-[0_40px_100px_-50px_rgba(6,24,29,0.5)]">
        <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/10]">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={stop.id}
              initial={reduce ? false : { opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduce ? undefined : { opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={stop.src}
                alt={stop.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 70vw"
                priority={active === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-5 text-cream sm:flex-row sm:items-end sm:justify-between sm:p-7">
            <div className="max-w-md">
              <p className="text-[0.6rem] font-bold uppercase tracking-[0.18em] text-aurora">
                {stop.eyebrow} · {stop.label}
              </p>
              <h2 className="mt-1.5 font-display text-[1.7rem] leading-tight tracking-[-0.02em] sm:text-[2.1rem]">
                {stop.title}
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous tour stop"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-ink/60 text-cream backdrop-blur-md transition-colors hover:border-aurora hover:text-aurora"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next tour stop"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-ink/60 text-cream backdrop-blur-md transition-colors hover:border-aurora hover:text-aurora"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 bg-ink px-5 py-4 sm:px-7">
          <p className="text-sm leading-relaxed text-cream/60">{stop.body}</p>
        </div>
      </div>

      <div
        role="tablist"
        aria-label="Tour stops"
        aria-orientation="vertical"
        className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-1"
      >
        {stops.map((item, index) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={index === active}
            aria-controls={`tour-panel-${item.id}`}
            onClick={() => setActive(index)}
            className={cn(
              "group flex items-center gap-3 rounded-2xl border p-2.5 text-left transition-all duration-300",
              index === active
                ? "border-ink/25 bg-white shadow-[0_10px_30px_-20px_rgba(6,24,29,0.5)]"
                : "border-ink/10 bg-white/40 hover:border-ink/20 hover:bg-white/70",
            )}
          >
            <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl">
              <Image
                src={item.src}
                alt=""
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="48px"
              />
            </span>
            <span className="min-w-0">
              <span className="block text-[0.56rem] font-bold uppercase tracking-[0.16em] text-ink/60">
                {item.eyebrow}
              </span>
              <span className="mt-0.5 block truncate text-xs font-semibold text-ink/75">
                {item.label}
              </span>
            </span>
          </button>
        ))}
      </div>

      <div
        id={`tour-panel-${stop.id}`}
        role="tabpanel"
        aria-label={`${stop.label} tour stop`}
        className="sr-only"
      >
        {stop.title}. {stop.body}
      </div>
    </div>
  );
}
