import { Quote, User } from "lucide-react";
import type { Testimonial } from "@/types";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <figure className="flex h-full flex-col rounded-lg border border-neutral-200 bg-white p-6 shadow-card">
      <Quote className="h-6 w-6 text-sky-500" aria-hidden="true" />
      <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-neutral-700">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3 border-t border-neutral-100 pt-4">
        <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full">
          <ImagePlaceholder icon={User} />
        </div>
        <div>
          <p className="text-sm font-semibold text-neutral-900">{testimonial.clientName}</p>
          {testimonial.context ? <p className="text-xs text-neutral-500">{testimonial.context}</p> : null}
        </div>
      </figcaption>
      {testimonial.isPlaceholder ? (
        <p className="mt-3 text-xs font-medium uppercase tracking-wide text-neutral-500">Placeholder testimonial</p>
      ) : null}
    </figure>
  );
}
