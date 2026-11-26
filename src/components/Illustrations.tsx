// Doodles in the escolagirassol.com.br language: paint blobs, brush-stroke suns, dashed
// paper-plane trails, torn paper edges. Purpose: give each section a hand-made focal
// point in Mirabilia's colours. Original drawings, not copied artwork.
type Props = { className?: string };

const GRAPE = "#812990";
const SUN = "#F9C91F";
const CLAY = "#F15C25";

/** Sun with brush-stroke rays (rays slowly spin when allowed). */
export function Sunburst({ className, color = SUN, core = CLAY }: Props & { color?: string; core?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <g className="anim-spin" style={{ transformOrigin: "60px 60px" }}>
        {Array.from({ length: 12 }).map((_, i) => (
          <path
            key={i}
            d="M60 8c4 0 7 10 6 20-1 6-11 6-12 0-1-10 2-20 6-20z"
            fill={color}
            transform={`rotate(${i * 30} 60 60)`}
          />
        ))}
      </g>
      <circle cx="60" cy="60" r="22" fill={core} />
      <path d="M48 56c2 3 6 3 8 0M64 56c2 3 6 3 8 0M51 67c5 5 13 5 18 0" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

/** Paper plane with a looping dashed trail. */
export function PaperPlane({ className, color = GRAPE }: Props & { color?: string }) {
  return (
    <svg viewBox="0 0 220 120" className={className} aria-hidden="true">
      <path d="M6 110c30-6 44-40 74-34s14 32 40 24 30-40 58-52" fill="none" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeDasharray="3 9" />
      <g transform="translate(176 14) rotate(-14)">
        <path d="M0 22L40 0 28 40 18 26z" fill="#fff" stroke={color} strokeWidth="2.4" strokeLinejoin="round" />
        <path d="M18 26L40 0" stroke={color} strokeWidth="2" />
      </g>
    </svg>
  );
}

/** Organic paint blob; a soft inner shade gives it the watercolour feel. */
export function PaintBlob({ className, color = CLAY }: Props & { color?: string }) {
  const id = `pb-${color.replace("#", "")}`;
  return (
    <svg viewBox="0 0 200 180" className={className} aria-hidden="true">
      <defs>
        <radialGradient id={id} cx="40%" cy="35%" r="75%">
          <stop offset="0" stopColor={color} stopOpacity=".75" />
          <stop offset="1" stopColor={color} />
        </radialGradient>
      </defs>
      <path
        d="M38 30C64 4 118 2 150 22s46 60 30 92-58 58-102 50S8 128 6 92s6-40 32-62z"
        fill={`url(#${id})`}
      />
    </svg>
  );
}

/** Hand-drawn dashed wave, used under small labels. */
export function Squiggle({ className, color = GRAPE }: Props & { color?: string }) {
  return (
    <svg viewBox="0 0 180 14" className={className} aria-hidden="true">
      <path d="M2 9c18-8 26 6 44-2s26 6 44-2 26 6 44-2 26 6 44-2" fill="none" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeDasharray="7 6" />
    </svg>
  );
}

/** Tilted sticky note, the reference's section badge. */
export function StickyNote({ className, color = SUN }: Props & { color?: string }) {
  return (
    <svg viewBox="0 0 90 80" className={className} aria-hidden="true">
      <path d="M10 14c20-6 46-8 70-4 4 18 4 40 0 58-24 6-48 6-70 2-4-18-4-38 0-56z" fill={color} transform="rotate(-8 45 40)" />
      <path d="M24 30h34M24 42h40M24 54h26" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity=".7" transform="rotate(-8 45 40)" />
    </svg>
  );
}

/** Small sun dot used as a list bullet. */
export function Leaf({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      {Array.from({ length: 8 }).map((_, i) => (
        <rect key={i} x="11" y="1" width="2" height="5" rx="1" fill={SUN} transform={`rotate(${i * 45} 12 12)`} />
      ))}
      <circle cx="12" cy="12" r="5.5" fill={CLAY} />
    </svg>
  );
}
