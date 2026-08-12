import { MessageCircle } from "lucide-react";
import { buttonStyles, type ButtonSize } from "@/components/ui/buttonStyles";
import { getWhatsAppUrl, whatsAppMessages } from "@/lib/whatsapp";
import { cn } from "@/lib/cn";

interface WhatsAppButtonProps {
  message?: string;
  size?: ButtonSize;
  className?: string;
  label?: string;
  /** Renders as an icon-only button, useful in the header. */
  iconOnly?: boolean;
}

export function WhatsAppButton({
  message = whatsAppMessages.general,
  size = "md",
  className,
  label = "Chat on WhatsApp",
  iconOnly = false,
}: WhatsAppButtonProps) {
  return (
    <a
      href={getWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(buttonStyles({ variant: "whatsapp", size, className }), iconOnly && "px-2.5")}
      aria-label={iconOnly ? label : undefined}
    >
      <MessageCircle className="h-[1.1em] w-[1.1em]" aria-hidden="true" strokeWidth={2.25} />
      {iconOnly ? null : label}
    </a>
  );
}
