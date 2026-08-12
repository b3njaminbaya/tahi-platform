import type { ReactNode } from "react";
import { Info } from "lucide-react";
import { cn } from "@/lib/cn";

interface PlaceholderNoticeProps {
  children: ReactNode;
  className?: string;
}

/**
 * Visible marker for content awaiting real client input. Used
 * anywhere a placeholder is shown to a visitor so it never reads
 * as confirmed fact.
 */
export function PlaceholderNotice({ children, className }: PlaceholderNoticeProps) {
  return (
    <div
      role="note"
      className={cn(
        "flex items-start gap-2.5 rounded-md border border-dashed border-neutral-300 bg-neutral-100 px-4 py-3 text-sm text-neutral-700",
        className,
      )}
    >
      <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}
