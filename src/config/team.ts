import type { TeamMember } from "@/types";

/**
 * Placeholder team roster. No real staff members have been
 * confirmed yet — every entry here is illustrative and flagged
 * with isPlaceholder so the UI can visibly mark it as such.
 * Replace entries with real staff information as it is supplied.
 */
export const team: TeamMember[] = [
  {
    id: "placeholder-1",
    name: "Team Member Name",
    position: "PLACEHOLDER_POSITION",
    bio: "Biography awaiting client input.",
    isPlaceholder: true,
  },
  {
    id: "placeholder-2",
    name: "Team Member Name",
    position: "PLACEHOLDER_POSITION",
    bio: "Biography awaiting client input.",
    isPlaceholder: true,
  },
  {
    id: "placeholder-3",
    name: "Team Member Name",
    position: "PLACEHOLDER_POSITION",
    bio: "Biography awaiting client input.",
    isPlaceholder: true,
  },
];
