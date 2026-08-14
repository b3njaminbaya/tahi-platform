import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { LegalTOC } from "@/components/legal/LegalTOC";
import { legal } from "@/config/business";

interface LegalLayoutProps {
  title: string;
  sections: { id: string; title: string }[];
  children: ReactNode;
}

export function LegalLayout({ title, sections, children }: LegalLayoutProps) {
  return (
    <section className="pb-20 pt-4 sm:pb-28">
      <Container className="py-6 pt-0">
        <Breadcrumbs items={[{ label: "Home", path: "/" }, { label: title }]} />
      </Container>
      <Container className="max-w-6xl">
        <h1 className="text-3xl sm:text-4xl">{title}</h1>
        <p className="mt-2 text-sm text-neutral-500">Last updated: {legal.lastUpdated}</p>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[240px_1fr] lg:gap-16">
          <LegalTOC sections={sections} />
          <div className="max-w-3xl space-y-10 text-neutral-700">{children}</div>
        </div>
      </Container>
    </section>
  );
}
