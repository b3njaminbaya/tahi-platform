import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { NavLink, Link } from "react-router-dom";
import { CalendarCheck } from "lucide-react";
import { primaryNav } from "@/config/nav";
import { buttonStyles } from "@/components/ui/buttonStyles";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { cn } from "@/lib/cn";

interface MobileNavProps {
  id: string;
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ id, open, onClose }: MobileNavProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const firstLink = panelRef.current?.querySelector<HTMLElement>("a, button");
    firstLink?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      id={id}
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      className="fixed inset-x-0 top-16 bottom-0 z-30 overflow-y-auto bg-neutral-50 sm:top-20 lg:hidden"
    >
      <nav aria-label="Mobile primary" className="flex flex-col gap-1 px-5 py-6">
        {primaryNav.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            onClick={onClose}
            className={({ isActive }) =>
              cn(
                "rounded-md px-4 py-3 text-base font-medium",
                isActive ? "bg-primary-50 text-primary-700" : "text-neutral-800 hover:bg-neutral-100",
              )
            }
          >
            {item.label}
          </NavLink>
        ))}

        <div className="mt-4 flex flex-col gap-3 border-t border-neutral-200 pt-5">
          <Link
            to="/appointment"
            onClick={onClose}
            className={buttonStyles({ variant: "primary", size: "lg", className: "w-full" })}
          >
            <CalendarCheck className="h-5 w-5" aria-hidden="true" />
            Book Appointment
          </Link>
          <WhatsAppButton size="lg" className="w-full" />
        </div>
      </nav>
    </div>,
    document.body,
  );
}
