import type { SocialLink } from "@/types";

/**
 * No official social profiles have been supplied yet. Set `url`
 * once each account exists and flip `isPlaceholder` to false —
 * SocialLinks will then render the icon as a live link instead
 * of a disabled placeholder.
 */
export const socialLinks: SocialLink[] = [
  { platform: "Facebook", url: null, isPlaceholder: true },
  { platform: "Instagram", url: null, isPlaceholder: true },
  { platform: "TikTok", url: null, isPlaceholder: true },
  { platform: "LinkedIn", url: null, isPlaceholder: true },
  { platform: "YouTube", url: null, isPlaceholder: true },
];
