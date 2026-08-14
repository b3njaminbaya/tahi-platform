import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

type Tone = "primary" | "sky" | "white" | "navy";

const tones: Record<Tone, string> = {
  primary: "bg-primary-50 text-primary-600",
  sky: "bg-sky-100 text-sky-700",
  white: "bg-white/15 text-white",
  navy: "bg-primary-900/40 text-sky-200",
};

interface IconBadgeProps {
  icon: LucideIcon;
  tone?: Tone;
  className?: string;
}

/** Consistent circular icon treatment used across cards, values and process steps. */
export function IconBadge({ icon: Icon, tone = "primary", className }: IconBadgeProps) {
  return (
    <span className={cn("inline-flex h-12 w-12 items-center justify-center rounded-xl", tones[tone], className)}>
      <Icon className="h-5 w-5" aria-hidden="true" strokeWidth={2} />
    </span>
  );
}
