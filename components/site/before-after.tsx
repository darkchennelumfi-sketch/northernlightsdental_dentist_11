"use client";

import * as React from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

export function BeforeAfter({
  before,
  after,
  beforeAlt,
  afterAlt,
  className,
}: {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  className?: string;
}) {
  const [position, setPosition] = React.useState(52);

  return (
    <div
      className={cn(
        "group relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-ink/10 bg-cream-2",
        className,
      )}
    >
      <Image
        src={after}
        alt={afterAlt}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 60vw"
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={before}
          alt={beforeAlt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 60vw"
        />
      </div>

      <span className="absolute left-4 top-4 rounded-full border border-white/25 bg-ink/60 px-3 py-1 text-[0.58rem] font-bold uppercase tracking-[0.18em] text-cream backdrop-blur-md">
        Before
      </span>
      <span className="absolute right-4 top-4 rounded-full border border-white/25 bg-ink/60 px-3 py-1 text-[0.58rem] font-bold uppercase tracking-[0.18em] text-cream backdrop-blur-md">
        After
      </span>

      <div
        className="pointer-events-none absolute inset-y-0 z-20 w-px bg-cream shadow-[0_0_18px_rgba(6,24,29,0.4)]"
        style={{ left: `${position}%` }}
      >
        <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-cream text-ink shadow-lg">
          <MoveHorizontal className="h-4 w-4" />
        </span>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        aria-label="Drag to compare before and after"
        className="absolute inset-0 z-30 h-full w-full cursor-ew-resize opacity-0"
      />

      <span className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/20 bg-ink/50 px-3 py-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-cream/80 backdrop-blur-md">
        Drag to compare
      </span>
    </div>
  );
}
