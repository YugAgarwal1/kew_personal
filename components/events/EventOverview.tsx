import type { KewEvent } from "@/types/events";

export default function EventOverview({ event }: { event: KewEvent }) {
  return <section aria-labelledby="event-overview-title" className="event-overview section-pad">
    <div className="shell event-overview-layout">
      <div data-ev-reveal className="event-overview-aside">
        <p className="product-section-mark events-section-mark">01 / Overview</p>
        <h2 id="event-overview-title" className="event-section-title font-display">About the <span>event.</span></h2>
      </div>

      <div className="event-overview-body">
        <div data-ev-reveal className="event-prose">
          {event.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>

        <div data-ev-reveal className="event-involvement">
          <h3 className="event-subtitle"><i aria-hidden="true" />KEW&apos;s involvement</h3>
          <div className="event-prose">
            {event.involvement.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>

        {event.participation && event.participation.length > 0 && <dl data-ev-reveal className="event-participation" aria-label="Participation details">
          {event.participation.map((fact) => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}
        </dl>}
      </div>
    </div>
  </section>;
}
