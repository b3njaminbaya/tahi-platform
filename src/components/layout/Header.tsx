import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, CalendarCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { buttonStyles } from "@/components/ui/buttonStyles";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { MobileNav } from "@/components/layout/MobileNav";
import { primaryNav } from "@/config/nav";
import { business } from "@/config/business";
import { cn } from "@/lib/cn";

export function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileNavOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileNavOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-neutral-50/95 backdrop-blur supports-[backdrop-filter]:bg-neutral-50/80">
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <Link to="/" className="flex items-center gap-2.5 text-lg font-semibold text-neutral-900" aria-label={`${business.name} — home`}>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-600 text-white">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
              <path
                d="M12 20.5C7.5 18 4.5 14.3 4.5 9.9 4.5 6.6 7.2 4 10.5 4c.9 0 1.8.3 2.5.8.7-.5 1.6-.8 2.5-.8 3.3 0 6 2.6 6 5.9 0 4.4-3 8.1-7.5 10.6"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M12 10.5v5M9.5 13h5" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </span>
          <span className="font-serif leading-none">{business.name}</span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {primaryNav.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    cn(
                      "rounded-md px-3.5 py-2 text-sm font-medium transition-colors",
                      isActive ? "text-primary-700" : "text-neutral-700 hover:text-primary-700",
                    )
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <WhatsAppButton size="md" />
          <Link to="/appointment" className={buttonStyles({ variant: "primary", size: "md" })}>
            <CalendarCheck className="h-4 w-4" aria-hidden="true" />
            Book Appointment
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-neutral-700 lg:hidden"
          aria-expanded={isMobileNavOpen}
          aria-controls="mobile-nav"
          aria-label={isMobileNavOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMobileNavOpen((open) => !open)}
        >
          {isMobileNavOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </Container>

      <MobileNav id="mobile-nav" open={isMobileNavOpen} onClose={() => setIsMobileNavOpen(false)} />
    </header>
  );
}
