import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { enquiryUrl } from "@/components/layout/site-links";
import { getEventYear } from "@/lib/events";
import type { KewEvent } from "@/types/events";

function AdjacentLink({ event, direction }: { event: KewEvent; direction: "previous" | "next" }) {
  const isNext = direction === "next";
  return <Link href={`/events/${event.slug}`} rel={isNext ? "next" : "prev"} className={`event-adjacent group ${isNext ? "is-next" : ""}`}>
    <span className="event-adjacent-thumb">
      <Image src={event.coverImage.src} alt={event.coverImage.alt} fill sizes="120px" className="object-cover" style={{ objectPosition: event.coverImage.position }} />
    </span>
    <span className="event-adjacent-copy">
      <span className="event-adjacent-label">
        {!isNext && <ArrowLeft size={14} aria-hidden="true" />}
        {isNext ? "Next event" : "Previous event"}
        {isNext && <ArrowRight size={14} aria-hidden="true" />}
      </span>
      <strong className="font-display">{event.title}</strong>
      <span className="event-adjacent-year">{getEventYear(event)}</span>
    </span>
  </Link>;
}

export default function EventNavigation({ previous, next }: { previous?: KewEvent; next?: KewEvent }) {
  return <nav aria-label="Event navigation" className="event-navigation">
    <div className="shell">
      <div data-ev-reveal className="event-adjacent-grid">
        {previous ? <AdjacentLink event={previous} direction="previous" /> : <span aria-hidden="true" />}
        {next ? <AdjacentLink event={next} direction="next" /> : <span aria-hidden="true" />}
      </div>

      <div data-ev-reveal className="event-navigation-footer">
        <Link href="/events" className="event-back-link group"><span><ArrowLeft size={16} aria-hidden="true" /></span>Back to all events</Link>
        <a href={enquiryUrl} className="event-connect group">
          Meet the KEW team
          <span><ArrowRight size={16} aria-hidden="true" /></span>
        </a>
      </div>
    </div>
  </nav>;
}
