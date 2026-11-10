import { cn } from "@/lib/utils";

export function AuroraBackdrop({
  className,
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  if (variant === "light") {
    return (
      <div
        aria-hidden="true"
        className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      >
        <div className="absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(95,224,191,0.22),transparent_65%)]" />
        <div className="absolute -bottom-56 left-[-10rem] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(143,184,255,0.16),transparent_65%)]" />
        <div className="absolute inset-0 dot-grid opacity-[0.35]" />
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div className="absolute -right-32 -top-64 h-[46rem] w-[46rem] rounded-full bg-[radial-gradient(circle,rgba(95,224,191,0.2),transparent_62%)] animate-pulse-soft" />
      <div className="absolute -left-48 top-1/3 h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(143,184,255,0.16),transparent_65%)]" />
      <div className="absolute -bottom-64 right-1/4 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(185,167,255,0.12),transparent_65%)]" />
      <div className="absolute inset-0 aurora-grid opacity-70" />
    </div>
  );
}
