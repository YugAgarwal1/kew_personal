"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Award } from "@/types/about";

const pad = (value: number) => String(value).padStart(2, "0");

/** Featured-award showcase: one award on the stage, the rest as a selectable rail. */
export default function AwardsSection({ awards }: { awards: Award[] }) {
  const [active, setActive] = useState(0);
  const rail = useRef<HTMLDivElement>(null);
  const count = awards.length;
  const current = awards[active];

  const select = (next: number, focus = false) => {
    const index = (next + count) % count;
    setActive(index);
    if (focus) requestAnimationFrame(() => rail.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[index]?.focus());
  };

  const handleKeys = (event: KeyboardEvent<HTMLDivElement>) => {
    const moves: Record<string, number> = { ArrowRight: active + 1, ArrowDown: active + 1, ArrowLeft: active - 1, ArrowUp: active - 1, Home: 0, End: count - 1 };
    if (!(event.key in moves)) return;
    event.preventDefault();
    select(moves[event.key], true);
  };

  if (!count) return null;

  return <section id="recognition" aria-labelledby="recognition-title" className="ab-awards section-pad text-white">
    <div className="shell ab-awards-layout">
      <div className="ab-awards-heading" data-ab-reveal>
        <h2 id="recognition-title" className="ab-title font-display">Recognised for <span>export and enterprise.</span></h2>
      </div>

      <div className="ab-awards-stage" id="award-panel" role="tabpanel" aria-labelledby={`award-tab-${current.id}`}>
        <p className="ab-awards-year font-display" aria-hidden="true">{current.year ?? "KEW"}</p>
        <div key={current.id} className="ab-awards-image">
          <Image src={current.image.src} alt={current.image.alt} fill sizes="(max-width: 1023px) 80vw, 40vw" className="object-contain" />
        </div>
        <span className="ab-awards-floor" aria-hidden="true" />
      </div>

      <div className="ab-awards-copy">
        <div className="ab-award-detail" aria-live="polite">
          <p className="ab-award-meta"><span>{pad(active + 1)} / {pad(count)}</span>{current.year ?? "Undated"}</p>
          <h3 className="font-display">{current.title}</h3>
          <p className="ab-award-presenter">{current.presenter}</p>
          {current.detail && <p className="ab-award-note">{current.detail}</p>}
        </div>

        <div className="ab-award-controls">
          <button type="button" onClick={() => select(active - 1)} aria-label="Previous award"><ArrowLeft size={18} aria-hidden="true" /></button>
          <button type="button" onClick={() => select(active + 1)} aria-label="Next award"><ArrowRight size={18} aria-hidden="true" /></button>
        </div>

        <div ref={rail} role="tablist" aria-label="Awards" className="ab-award-rail" onKeyDown={handleKeys}>
          {awards.map((award, index) => <button
            key={award.id}
            id={`award-tab-${award.id}`}
            type="button"
            role="tab"
            aria-selected={index === active}
            aria-controls="award-panel"
            tabIndex={index === active ? 0 : -1}
            className={index === active ? "is-active" : undefined}
            onClick={() => select(index)}
          >
            <span className="ab-award-thumb"><Image src={award.image.src} alt="" fill sizes="72px" className="object-contain" /></span>
            <span className="ab-award-thumb-label">{award.year ?? "Undated"}<span className="sr-only">: {award.title}, {award.presenter}</span></span>
          </button>)}
        </div>

        <p className="ab-footnote">Details are transcribed from the awards themselves.</p>
      </div>
    </div>
  </section>;
}
