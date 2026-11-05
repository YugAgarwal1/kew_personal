"use client";

import { useMemo, useRef, useState } from "react";
import EventCard from "@/components/events/EventCard";
import EventFilters, { type EventFilterValue } from "@/components/events/EventFilters";
import { useCardEntrance } from "@/hooks/useEventAnimations";
import { getActiveCategories, pad, shouldShowFilters } from "@/lib/events";
import type { EventSummary } from "@/types/events";

export default function EventsGrid({ events }: { events: EventSummary[] }) {
  const root = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState<EventFilterValue>("all");

  const categories = useMemo(() => getActiveCategories(events), [events]);
  const showFilters = shouldShowFilters(events);
  const counts = useMemo(() => {
    const result = { all: events.length } as Record<EventFilterValue, number>;
    events.forEach((event) => { result[event.category] = (result[event.category] ?? 0) + 1; });
    return result;
  }, [events]);

  const visible = filter === "all" ? events : events.filter((event) => event.category === filter);
  const [lead, ...rest] = visible;

  useCardEntrance(root, filter);

  return <section aria-labelledby="events-list-title" className="events-list section-pad">
    <div className="shell">
      <div data-ev-reveal className="events-list-heading">
        <div>
          <p className="product-section-mark events-section-mark">01 / Event archive</p>
          <h2 id="events-list-title" className="events-list-title font-display">Where KEW <span>meets the industry.</span></h2>
        </div>
        {showFilters
          ? <EventFilters categories={categories} counts={counts} active={filter} onChange={setFilter} />
          : <p className="events-list-count">Showing {pad(visible.length)} {visible.length === 1 ? "event" : "events"}</p>}
      </div>

      {showFilters && <p className="sr-only" aria-live="polite">{visible.length} {visible.length === 1 ? "event" : "events"} shown</p>}
      <div ref={root}>
        {lead ? <>
          <EventCard key={lead.slug} event={lead} featured eager />
          {rest.length > 0 && <div className={`events-grid ${rest.length >= 3 ? "has-three" : ""}`}>
            {rest.map((event) => <EventCard key={event.slug} event={event} />)}
          </div>}
        </> : <p className="events-empty">No events in this category yet.</p>}
      </div>
    </div>
  </section>;
}
