import type { ReactNode } from "react";

interface LegalSectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export function LegalSection({ id, title, children }: LegalSectionProps) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-xl">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-neutral-600 [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-1.5">
        {children}
      </div>
    </section>
  );
}
