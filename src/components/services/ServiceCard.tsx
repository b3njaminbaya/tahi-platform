import { Link } from "react-router-dom";
import { ArrowRight, ListChecks } from "lucide-react";
import type { Service } from "@/types";
import { serviceIcons } from "@/lib/serviceIcons";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = serviceIcons[service.slug];

  return (
    <Link
      to={`/services/${service.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-primary-200 hover:shadow-card-hover focus-visible:outline-2 focus-visible:outline-primary-600"
    >
      <div className="h-40 w-full border-b border-neutral-100">
        <ImagePlaceholder icon={Icon} />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl">{service.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">{service.shortDescription}</p>
        <div className="mt-4 flex items-center justify-between border-t border-neutral-100 pt-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-500">
            <ListChecks className="h-3.5 w-3.5" aria-hidden="true" />
            {service.subcategories.length} services included
          </span>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700">
            Learn more
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </span>
        </div>
      </div>
    </Link>
  );
}
