import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl, whatsAppMessages } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  return (
    <a
      href={getWhatsAppUrl(whatsAppMessages.general)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700 lg:hidden"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" strokeWidth={2.25} />
    </a>
  );
}
