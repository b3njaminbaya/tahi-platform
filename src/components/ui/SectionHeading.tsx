import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: ElementType;
  className?: string;
  children?: ReactNode;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: Tag = "h2",
  className,
  children,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-700">{eyebrow}</p>
      ) : null}
      <Tag className="text-3xl sm:text-4xl leading-tight">{title}</Tag>
      {description ? <p className="mt-4 text-base sm:text-lg text-neutral-600">{description}</p> : null}
      {children}
    </div>
  );
}
