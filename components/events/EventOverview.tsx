import type { KewEvent } from "@/types/events";

export default function EventOverview({ event }: { event: KewEvent }) {
  return <section aria-labelledby="event-overview-title" className="event-overview section-pad">
    <div className="shell event-overview-layout">
      <div data-ev-reveal className="event-overview-aside">
        <p className="event-overview-eyebrow">The story</p>
        <h2 id="event-overview-title" className="event-section-title font-display">About this <span>gathering.</span></h2>
        <div className="event-overview-meta">
          <span>{event.category}</span>
          <span className="event-overview-dot" aria-hidden="true" />
          <span>{event.location}</span>
        </div>
      </div>

      <div className="event-overview-body">
        <div data-ev-reveal className="event-involvement">
          <div className="event-involvement-header">
            <span className="event-involvement-label">KEW&apos;s role</span>
          </div>
          <div className="event-prose event-prose-secondary">
            {event.involvement.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>

        {event.participation && event.participation.length > 0 && <dl data-ev-reveal className="event-participation" aria-label="Participation details">
          {event.participation.map((fact) => <div key={fact.label} className="event-participation-item">
            <dt>{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>)}
        </dl>}
      </div>
    </div>
  </section>;
}
