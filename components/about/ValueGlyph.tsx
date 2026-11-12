import type { CoreValue } from "@/types/about";

/**
 * Restrained line drawings for the core values, drawn in the vocabulary of
 * electrical schematics. Strokes use pathLength=1 so CSS can draw them on hover.
 */
const glyphs: Record<CoreValue["glyph"], React.ReactNode> = {
  // A plumb line: true and upright.
  integrity: <>
    <path pathLength={1} d="M32 6v30" />
    <path pathLength={1} d="M24 36h16l-8 18z" />
    <path pathLength={1} d="M14 6h36" />
    <path pathLength={1} d="M10 58h44" strokeDasharray="2 4" />
  </>,
  // A shield enclosing the earth symbol.
  safety: <>
    <path pathLength={1} d="M32 6 52 13v16c0 13-8.5 22-20 28C20.5 51 12 42 12 29V13z" />
    <path pathLength={1} d="M32 18v12" />
    <path pathLength={1} d="M22 30h20M25.5 35.5h13M29 41h6" />
  </>,
  // A gauge with the needle held at the top of its range.
  excellence: <>
    <path pathLength={1} d="M10 46a22 22 0 1 1 44 0" />
    <path pathLength={1} d="M14 33l4 2M22 21.5l2.5 3.5M32 17v4.5M42 21.5l-2.5 3.5M50 33l-4 2" />
    <path pathLength={1} d="M32 46l14-15" />
    <circle pathLength={1} cx="32" cy="46" r="3" />
  </>,
  // One supply feeding several outgoing circuits.
  service: <>
    <circle pathLength={1} cx="32" cy="12" r="5" />
    <path pathLength={1} d="M32 17v13M12 30h40M12 30v12M32 30v12M52 30v12" />
    <circle pathLength={1} cx="12" cy="47" r="4.5" />
    <circle pathLength={1} cx="32" cy="47" r="4.5" />
    <circle pathLength={1} cx="52" cy="47" r="4.5" />
  </>,
};

export default function ValueGlyph({ glyph }: { glyph: CoreValue["glyph"] }) {
  return <svg className="ab-glyph" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    {glyphs[glyph]}
  </svg>;
}
