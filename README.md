# Tahi Home-Based Care — Website

Production website for Tahi Home-Based Care (https://tahihomebasedcare.com), a home-based healthcare service provider. Built as a React SPA with a centralized content layer so business information can be updated without touching component code.

## Stack

- **React 19 + TypeScript** — component layer
- **Vite** — build tool and dev server
- **Tailwind CSS v4** — styling, with all design tokens (colors, fonts, shadows) defined as CSS custom properties in `src/index.css`
- **React Router v7** — client-side routing, with route-level code splitting via `React.lazy`
- **React Hook Form + Zod** — form state and validation (Appointment and Contact forms)
- **react-helmet-async** — per-page `<title>`, meta description, canonical URL, Open Graph tags
- **lucide-react** — icon set

No backend is wired up yet (see "Connecting a real backend" below).

## Getting started

```bash
npm install
npm run dev       # start dev server at http://localhost:5173
npm run build     # type-check + production build to dist/
npm run preview   # preview the production build locally
npm run lint       # oxlint
```

## Project structure

```
src/
  config/       Centralized business content — the ONLY place to edit business facts
  components/
    layout/     Header, MobileNav, Footer, Layout shell, floating WhatsApp button
    ui/         Generic building blocks (Button, Container, Card-ish primitives, etc.)
    home/       Home-page-only sections (Hero, ServicesPreview, WhyChooseUs, ...)
    services/   ServiceCard, ServiceGrid
    about/      TeamCard
    testimonials/ TestimonialCard
    forms/      FormField, AppointmentForm, ContactForm, shared input styles
    legal/      LegalLayout, LegalSection (shared shell for the 4 legal pages)
    seo/        Seo (per-page meta tags), OrganizationJsonLd (structured data)
  pages/        One file per route, composed from the components above
  lib/          whatsapp.ts, validation.ts (Zod schemas), submissionService.ts, cn.ts
  types/        Shared TypeScript interfaces
```

## Updating business content

**Almost everything a client would ask to change lives in `src/config/`.** No component hardcodes business facts — they all read from here:

| File | Controls |
|---|---|
| `config/business.ts` | Name, tagline, WhatsApp number, email, address, hours, description, vision, mission, core values, "why choose us" |
| `config/services.ts` | The 7 services — name, descriptions, subcategories, image path. Add/remove a service by editing this array; the Services page, Service Detail pages, footer, and Home preview all read from it automatically |
| `config/team.ts` | Team member profiles (About page) |
| `config/testimonials.ts` | Client testimonials |
| `config/social.ts` | Social media URLs (Facebook, Instagram, TikTok, LinkedIn, YouTube) |
| `config/nav.ts` | Header/footer navigation links |
| `config/seo.ts` | Per-page `<title>` / meta description |

### Placeholder content

The client has not yet supplied a final logo, brand colors, tagline, staff info, testimonials, service photography, email, or address. Every placeholder is marked one of two ways so it's never mistaken for a real fact:

- Fields with `isPlaceholder: true` in the config files (rendered with a visible "coming soon" / dashed-border notice on the page — see `PlaceholderNotice` component)
- Images: no stock photography is used as a stand-in. Anywhere real photography is missing, `ImagePlaceholder` renders a neutral icon graphic instead.

To replace a placeholder, update the relevant field in `src/config/` and flip its `isPlaceholder` flag to `false` (where present). No component changes are needed.

### Brand colors / logo / fonts

All design tokens live in `src/index.css` under the `@theme` block — edit the `--color-primary-*`, `--color-accent-*`, `--color-neutral-*`, and `--font-*` variables there. The favicon/logo mark is inline SVG in `public/favicon.svg` and duplicated inline in `Header.tsx`/`Footer.tsx`; swap those with the client's real logo file once supplied (replace the inline `<svg>` with an `<img>`).

## Connecting a real backend

The Appointment and Contact forms currently validate input and show success/error states, but submissions only go to `console.info` — nothing is sent or stored anywhere. This is intentional: no backend was specified for the initial build.

All submission logic is isolated in `src/lib/submissionService.ts`. To connect a real backend, replace the body of `submitAppointmentRequest` / `submitContactMessage` with a call to your chosen transport (email API via a serverless function, Supabase, Firebase, or a custom API) — the function signatures should stay the same so no form component needs to change. Any API keys/secrets must be handled server-side or via environment variables, never hardcoded in the frontend.

## SEO

- Per-page meta tags via the `Seo` component (`src/components/seo/Seo.tsx`)
- Site-wide `MedicalBusiness` JSON-LD structured data (`OrganizationJsonLd`) — only includes facts that are actually known (name, URL, WhatsApp contact); no invented address, credentials, or ratings
- `public/robots.txt` and `public/sitemap.xml` — update the sitemap if routes change
- Canonical URLs point at `https://tahihomebasedcare.com`

## Accessibility

Built to WCAG 2.2 AA where practical: semantic landmarks, visible focus rings everywhere, labeled/described form fields with live error announcements, a skip-to-content link, keyboard-operable mobile navigation (Escape to close, focus moved on open), and a global `prefers-reduced-motion` override. Report any accessibility issue found — see the Accessibility Statement page.

## Known gaps (by design, pending client input)

- No live form backend (see above)
- No confirmed logo, brand colors, tagline, or company description
- No real staff bios/photos, testimonials, service photography, business email, or physical address
- No confirmed social media accounts
