import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Resets scroll position on route change, matching multi-page site behavior. */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return null;
}
