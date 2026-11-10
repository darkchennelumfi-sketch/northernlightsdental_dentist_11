import Link from "next/link";
import { cn } from "@/lib/utils";

export function AuroraMark({
  className,
  id = "nld-mark",
}: {
  className?: string;
  id?: string;
}) {
  const gradientA = `${id}-aurora-a`;
  const gradientB = `${id}-aurora-b`;

  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={cn("h-11 w-11", className)}
    >
      <defs>
        <linearGradient id={gradientA} x1="8" y1="8" x2="40" y2="44">
          <stop stopColor="#a6f2dc" />
          <stop offset="0.42" stopColor="#5fe0bf" />
          <stop offset="0.72" stopColor="#8fb8ff" />
          <stop offset="1" stopColor="#d8b57a" />
        </linearGradient>
        <linearGradient id={gradientB} x1="12" y1="20" x2="36" y2="30">
          <stop stopColor="#5fe0bf" stopOpacity="0.35" />
          <stop offset="0.5" stopColor="#5fe0bf" />
          <stop offset="1" stopColor="#8fb8ff" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      <path
        d="M24 44.2c-7.4 0-11.9-5.1-13.3-12.7-.7-3.7-2.4-6.9-2.4-10.6C8.3 13.2 12.6 8.4 18.7 8.4c3.1 0 4.4 2.1 5.3 2.1.9 0 2.2-2.1 5.3-2.1 6.1 0 10.4 4.8 10.4 12.5 0 3.7-1.7 6.9-2.4 10.6C36 39.1 31.4 44.2 24 44.2Z"
        stroke={`url(#${gradientA})`}
        strokeWidth="2.1"
        strokeLinejoin="round"
      />
      <path
        d="M13.8 22.2c3.2-4.3 6.6-6.4 10.2-6.4 3.6 0 7 2.1 10.2 6.4"
        stroke={`url(#${gradientB})`}
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M16.4 27.4c2.5-2.2 5-3.3 7.6-3.3s5.1 1.1 7.6 3.3"
        stroke={`url(#${gradientB})`}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.85"
      />
      <circle cx="36" cy="10.4" r="1.7" fill="#5fe0bf" />
    </svg>
  );
}

export function Logo({
  tone = "dark",
  className,
  compact = false,
  id = "nld-mark",
}: {
  tone?: "dark" | "light";
  className?: string;
  compact?: boolean;
  id?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="Northern Lights Dental — home"
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <AuroraMark
        id={id}
        className="h-10 w-10 transition-transform duration-500 group-hover:rotate-3"
      />
      {!compact && (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "font-display text-[1.35rem] leading-none tracking-[-0.045em]",
              tone === "light" ? "text-cream" : "text-ink",
            )}
          >
            Northern Lights
          </span>
          <span
            className={cn(
              "mt-1.5 text-[0.55rem] font-bold uppercase tracking-[0.34em]",
              tone === "light" ? "text-cream/55" : "text-ink/65",
            )}
          >
            Dental · Fargo
          </span>
        </span>
      )}
    </Link>
  );
}
