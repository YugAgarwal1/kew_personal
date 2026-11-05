import { pad } from "@/lib/events";
import type { EventHighlight } from "@/types/events";

export default function EventHighlights({ highlights }: { highlights: EventHighlight[] }) {
  if (!highlights.length) return null;

  return <section aria-labelledby="event-highlights-title" className="event-highlights section-pad text-white">
    <div className="shell">
      <div data-ev-reveal className="event-highlights-heading">
        <h2 id="event-highlights-title" className="event-section-title font-display">Moments that <span>mattered.</span></h2>
      </div>

      <ol className={`event-highlights-grid ${highlights.length >= 3 ? "has-three" : ""}`}>
        {highlights.map((highlight, index) => (
          <li key={highlight.title} data-ev-stagger-item className="event-highlight">
            <div className="event-highlight-top">
              <span>{pad(index + 1)}</span>
              <p>{highlight.type}</p>
            </div>
            <h3>{highlight.title}</h3>
            <p>{highlight.description}</p>
            <i aria-hidden="true" />
          </li>
        ))}
      </ol>
    </div>
  </section>;
}
