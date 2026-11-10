import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Doctor } from "@/lib/site";
import { cn } from "@/lib/utils";

export function DoctorCard({
  doctor,
  className,
}: {
  doctor: Doctor;
  className?: string;
}) {
  return (
    <Link
      href={`/about/${doctor.slug}`}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-ink/10 bg-white/55 transition-all duration-500 hover:-translate-y-1.5 hover:border-aurora-3/40 hover:shadow-[0_35px_70px_-40px_rgba(6,24,29,0.4)]",
        className,
      )}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-cream-2">
        <Image
          src={doctor.photo}
          alt={doctor.name}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent opacity-70" />
        <div className="absolute left-4 top-4 rounded-full border border-white/25 bg-ink/60 px-3 py-1 text-[0.6rem] font-bold uppercase tracking-[0.18em] text-cream backdrop-blur-md">
          {doctor.role}
        </div>
      </div>
      <div className="relative flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-[1.5rem] leading-none tracking-[-0.04em] text-ink">
            {doctor.name}
          </h3>
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink/12 text-ink/60 transition-colors group-hover:border-aurora-3/50 group-hover:text-aurora-4">
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
        <p className="mt-3 text-[0.84rem] leading-relaxed text-ink/65">
          {doctor.short}
        </p>
      </div>
    </Link>
  );
}
