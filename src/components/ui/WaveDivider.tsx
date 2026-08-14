import { cn } from "@/lib/cn";

interface WaveDividerProps {
  /** Tailwind fill class, e.g. "fill-primary-800" — matches the section above the wave. */
  fillClassName: string;
  /** Flip vertically, for use above a section instead of below it. */
  flip?: boolean;
  className?: string;
}

/**
 * A wave-shaped section transition, echoing the curved cuts used
 * throughout the client's own flyers. Renders as a block element —
 * place it directly between two <section>s with no gap.
 */
export function WaveDivider({ fillClassName, flip = false, className }: WaveDividerProps) {
  return (
    <div className={cn("pointer-events-none overflow-hidden leading-none", flip && "rotate-180", className)} aria-hidden="true">
      <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="block h-12 w-full sm:h-20">
        <path
          d="M0,36 C240,80 480,8 720,36 C960,64 1200,4 1440,36 L1440,90 L0,90 Z"
          className={fillClassName}
        />
      </svg>
    </div>
  );
}
