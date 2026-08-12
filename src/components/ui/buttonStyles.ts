import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "secondary" | "outline" | "whatsapp";
export type ButtonSize = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-primary-600 text-white hover:bg-primary-700 focus-visible:outline-primary-700",
  secondary: "bg-sky-300 text-primary-900 hover:bg-sky-200 focus-visible:outline-primary-700",
  outline:
    "border border-neutral-300 bg-white text-neutral-800 hover:border-primary-600 hover:text-primary-700 focus-visible:outline-primary-600",
  whatsapp: "bg-[#25D366] text-white hover:bg-[#1fb757] focus-visible:outline-[#1fb757]",
};

const sizes: Record<ButtonSize, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

/**
 * Shared style function so links, anchors and native buttons can
 * all look identical without a polymorphic wrapper component.
 * Usage: <Link className={buttonStyles({ variant: "secondary" })}>
 */
export function buttonStyles({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}): string {
  return cn(base, variants[variant], sizes[size], className);
}
