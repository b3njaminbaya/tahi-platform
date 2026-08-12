import { User } from "lucide-react";
import type { TeamMember } from "@/types";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

interface TeamCardProps {
  member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-card">
      <div className="aspect-square w-full">
        <ImagePlaceholder icon={User} label={member.isPlaceholder ? "Photo pending" : undefined} />
      </div>
      <div className="p-5">
        <h3 className="text-lg">{member.name}</h3>
        <p className="mt-0.5 text-sm font-semibold text-primary-700">{member.position}</p>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600">{member.bio}</p>
        {member.isPlaceholder ? (
          <p className="mt-3 text-xs font-medium uppercase tracking-wide text-neutral-500">
            Profile awaiting client details
          </p>
        ) : null}
      </div>
    </div>
  );
}
