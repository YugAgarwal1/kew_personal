import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { eventCategoryTags, formatEventDate, formatEventLocation, getEventYear } from "@/lib/events";
import type { EventSummary } from "@/types/events";

type EventCardProps = {
  event: EventSummary;
  /** The lead card spans the full row with a side-by-side layout. */
  featured?: boolean;
  /** Above-the-fold cards load eagerly. */
  eager?: boolean;
};

export default function EventCard({ event, featured = false, eager = false }: EventCardProps) {
  const titleId = `event-card-${event.slug}`;

  return <article data-ev-card aria-labelledby={titleId} className={`event-tile group ${featured ? "is-featured" : ""}`}>
    <div className="event-tile-media" data-ev-image-reveal>
      <Image
        src={event.coverImage.src}
        alt={event.coverImage.alt}
        fill
        loading={eager ? "eager" : "lazy"}
        sizes={featured ? "(max-width: 1024px) 100vw, 58vw" : "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"}
        className="object-cover"
        style={{ objectPosition: event.coverImage.position }}
      />
      <span className="event-tile-tag">{eventCategoryTags[event.category]}</span>
      {event.isSample && <span className="event-sample-badge">Sample entry</span>}
    </div>

    <div className="event-tile-body">
      <p className="event-tile-meta">
        <span className="event-tile-year">{getEventYear(event)}</span>
        <span aria-hidden="true">/</span>
        <span>{formatEventLocation(event)}</span>
      </p>
      <h3 id={titleId} className="event-tile-title font-display">
        <Link href={`/events/${event.slug}`} className="event-tile-link">{event.title}</Link>
      </h3>
      <p className="event-tile-copy">{event.shortDescription}</p>

      <div className="event-tile-footer">
        <span className="event-tile-date">{event.startDate ? <time dateTime={event.startDate}>{formatEventDate(event)}</time> : formatEventDate(event)}</span>
        <span className="event-tile-cta" aria-hidden="true">Explore event<i><ArrowRight size={15} /></i></span>
      </div>
    </div>
  </article>;
}
