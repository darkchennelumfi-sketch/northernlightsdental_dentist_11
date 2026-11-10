import { cn } from "@/lib/utils";

export function Marquee({
  items,
  className,
  tone = "dark",
}: {
  items: string[];
  className?: string;
  tone?: "dark" | "light";
}) {
  const row = [...items, ...items];

  return (
    <div
      className={cn(
        "group relative flex overflow-hidden border-y py-4",
        tone === "dark"
          ? "border-white/10 bg-ink text-cream"
          : "border-ink/10 bg-cream-2/60 text-ink",
        className,
      )}
    >
      <div className="flex w-max animate-marquee items-center gap-8 group-hover:[animation-play-state:paused]">
        {row.map((item, index) => (
          <div key={`${item}-${index}`} className="flex items-center gap-8">
            <span className="whitespace-nowrap font-display text-lg italic tracking-[-0.02em] sm:text-xl">
              {item}
            </span>
            <span
              className={cn(
                "h-1.5 w-1.5 rounded-full",
                tone === "dark" ? "bg-aurora" : "bg-aurora-3",
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
