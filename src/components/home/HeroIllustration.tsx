/**
 * Custom brand illustration — not a stand-in for real photography.
 * A flat, abstract composition (home + caregiver + client + care
 * accents) in the confirmed brand palette, used deliberately as
 * designed art rather than a placeholder pretending to be a photo.
 */
export function HeroIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      role="img"
      aria-label="Illustration of a caregiver visiting a client at home"
    >
      <defs>
        <linearGradient id="hero-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F1F6FE" />
          <stop offset="1" stopColor="#DCE5F9" />
        </linearGradient>
      </defs>

      <rect width="400" height="400" fill="url(#hero-bg)" />

      {/* decorative accents */}
      <circle cx="60" cy="80" r="6" fill="#B1CFF3" opacity="0.8" />
      <circle cx="345" cy="270" r="8" fill="#8FACEA" opacity="0.6" />
      <circle cx="120" cy="345" r="5" fill="#4A7FD1" opacity="0.5" />
      <circle cx="355" cy="205" r="5" fill="#002EA6" opacity="0.35" />

      {/* ground shadow */}
      <ellipse cx="200" cy="332" rx="130" ry="12" fill="#001C6B" opacity="0.08" />

      {/* house */}
      <path d="M100,182 L200,110 L300,182 L300,180 L120,180 Z" fill="#002EA6" opacity="0.12" />
      <path d="M100,184 L200,112 L300,184" fill="none" stroke="#002EA6" strokeWidth="6" strokeLinejoin="round" strokeLinecap="round" />
      <rect x="120" y="180" width="160" height="140" rx="6" fill="#FFFFFF" stroke="#002EA6" strokeWidth="5" />

      {/* windows */}
      <rect x="140" y="205" width="34" height="34" rx="5" fill="#E1EDFC" stroke="#002EA6" strokeWidth="3" />
      <path d="M140,222 L174,222 M157,205 L157,239" stroke="#002EA6" strokeWidth="2.5" />
      <rect x="226" y="205" width="34" height="34" rx="5" fill="#E1EDFC" stroke="#002EA6" strokeWidth="3" />
      <path d="M226,222 L260,222 M243,205 L243,239" stroke="#002EA6" strokeWidth="2.5" />

      {/* door */}
      <rect x="184" y="256" width="32" height="64" rx="4" fill="#B1CFF3" />
      <circle cx="209" cy="290" r="2.5" fill="#002EA6" />

      {/* caregiver figure */}
      <circle cx="163" cy="298" r="16" fill="#002EA6" />
      <rect x="146" y="319" width="34" height="55" rx="17" fill="#002EA6" />
      <rect x="176" y="342" width="15" height="13" rx="3" fill="#4A7FD1" />
      <path d="M180,345 L187,345 M183.5,341.5 L183.5,348.5" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" />

      {/* client figure */}
      <circle cx="246" cy="303" r="15" fill="#4A7FD1" />
      <rect x="229" y="323" width="34" height="51" rx="17" fill="#4A7FD1" />

      {/* heart-pulse badge */}
      <circle cx="322" cy="128" r="34" fill="#FFFFFF" stroke="#B1CFF3" strokeWidth="3" />
      <path
        d="M302,128 L312,128 L317,116 L325,144 L330,128 L342,128"
        fill="none"
        stroke="#002EA6"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* medical cross badge */}
      <circle cx="82" cy="146" r="25" fill="#002EA6" />
      <rect x="76" y="134" width="12" height="24" rx="3" fill="#FFFFFF" />
      <rect x="70" y="140" width="24" height="12" rx="3" fill="#FFFFFF" />
    </svg>
  );
}
