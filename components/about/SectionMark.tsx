/** Numbered section label, e.g. "02 — Core values". */
export default function SectionMark({ number, label, className = "" }: { number: string; label: string; className?: string }) {
  return <p className={`ab-mark ${className}`}><span>{number}</span><i aria-hidden="true" />{label}</p>;
}
