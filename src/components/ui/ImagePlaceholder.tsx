import type { ComponentType } from "react";
import { ImageOff } from "lucide-react";
import { cn } from "@/lib/cn";

interface ImagePlaceholderProps {
  icon?: ComponentType<{ className?: string; strokeWidth?: number; "aria-hidden"?: boolean }>;
  label?: string;
  className?: string;
}

/**
 * Neutral stand-in shown wherever real photography hasn't been
 * supplied yet, instead of a generic stock photo pretending to
 * be the real thing.
 */
export function ImagePlaceholder({ icon: Icon = ImageOff, label, className }: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "flex h-full w-full flex-col items-center justify-center gap-2 bg-linear-to-br from-sky-50 to-primary-100 text-primary-600",
        className,
      )}
      role="img"
      aria-label={label ?? "Image pending"}
    >
      <Icon className="h-9 w-9 opacity-70" strokeWidth={1.5} aria-hidden />
      {label ? <span className="px-4 text-center text-xs font-medium text-primary-700/70">{label}</span> : null}
    </div>
  );
}
