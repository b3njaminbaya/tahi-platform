import type { ComponentType } from "react";
import type { SocialLink } from "@/types";
import { socialLinks } from "@/config/social";
import { FacebookIcon, InstagramIcon, LinkedInIcon, TikTokIcon, YouTubeIcon } from "@/components/ui/SocialIcons";
import { cn } from "@/lib/cn";

const icons: Record<SocialLink["platform"], ComponentType<{ className?: string }>> = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  TikTok: TikTokIcon,
  LinkedIn: LinkedInIcon,
  YouTube: YouTubeIcon,
};

interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
}

export function SocialLinks({ className, iconClassName }: SocialLinksProps) {
  return (
    <ul className={cn("flex items-center gap-3", className)}>
      {socialLinks.map((social) => {
        const Icon = icons[social.platform];
        const commonClasses = cn(
          "flex h-9 w-9 items-center justify-center rounded-full border transition-colors",
          iconClassName,
        );

        return (
          <li key={social.platform}>
            {social.isPlaceholder || !social.url ? (
              <span
                className={cn(commonClasses, "cursor-not-allowed border-current/20 opacity-40")}
                aria-disabled="true"
                title={`${social.platform} — link coming soon`}
              >
                <Icon className="h-4 w-4" />
                <span className="sr-only">{social.platform} (link coming soon)</span>
              </span>
            ) : (
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(commonClasses, "border-current/20 hover:border-current/50 hover:opacity-80")}
                aria-label={`Visit our ${social.platform} page (opens in a new tab)`}
              >
                <Icon className="h-4 w-4" />
              </a>
            )}
          </li>
        );
      })}
    </ul>
  );
}
