import {
  Baby,
  Bone,
  Crown,
  HeartPulse,
  ShieldCheck,
  Smile,
  Sparkles,
  Sun,
  type LucideIcon,
} from "lucide-react";
import type { Service } from "@/lib/site";

const icons: Record<Service["icon"], LucideIcon> = {
  shield: ShieldCheck,
  sparkles: Sparkles,
  smile: Smile,
  crown: Crown,
  implant: Bone,
  gum: HeartPulse,
  whitening: Sun,
  kids: Baby,
};

export function ServiceIcon({
  icon,
  className,
}: {
  icon: Service["icon"];
  className?: string;
}) {
  const Icon = icons[icon];
  return <Icon className={className} strokeWidth={1.5} aria-hidden="true" />;
}
