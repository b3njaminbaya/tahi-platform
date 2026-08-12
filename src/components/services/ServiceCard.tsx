import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
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
      className="group flex flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover focus-visible:outline-2 focus-visible:outline-primary-600"
    >
      <div className="h-40 w-full">
        <ImagePlaceholder icon={Icon} />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl">{service.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">{service.shortDescription}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700">
          Learn more
          <ArrowRight
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}
