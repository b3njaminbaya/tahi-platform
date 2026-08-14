interface LegalTOCProps {
  sections: { id: string; title: string }[];
}

export function LegalTOC({ sections }: LegalTOCProps) {
  return (
    <nav aria-label="Table of contents" className="lg:sticky lg:top-24 lg:self-start">
      <div className="rounded-xl border border-neutral-200 bg-white p-5 lg:border-0 lg:bg-transparent lg:p-0">
        <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">On this page</p>
        <ol className="mt-3 space-y-2 text-sm">
          {sections.map((section, index) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="flex gap-2 text-neutral-600 transition-colors hover:text-primary-700"
              >
                <span className="text-neutral-400">{index + 1}.</span>
                {section.title}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
