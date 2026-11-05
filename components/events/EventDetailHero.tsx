import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { eventCategoryTags, formatEventDate, formatEventLocation } from "@/lib/events";
import type { KewEvent } from "@/types/events";

export default function EventDetailHero({ event }: { event: KewEvent }) {
  const facts = [
    ["Date", formatEventDate(event)],
    ["Location", formatEventLocation(event)],
    ["Category", eventCategoryTags[event.category]],
  ];

  return <section aria-labelledby="event-title" className="event-hero relative isolate overflow-hidden bg-[#111317] text-white">
    <div data-ev-hero-media className="absolute inset-0 -z-20">
      <Image
        src={event.coverImage.src}
        alt={event.coverImage.alt}
        fill
        preload
        sizes="100vw"
        className="event-hero-image object-cover"
        style={{ objectPosition: event.coverImage.position }}
      />
    </div>
    <div className="event-hero-overlay absolute inset-0 -z-10" aria-hidden="true" />

    <div className="shell event-hero-shell">
      <nav data-ev-hero aria-label="Breadcrumb" className="event-breadcrumb">
        <Link href="/events"><ArrowLeft size={14} aria-hidden="true" />All events</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{eventCategoryTags[event.category]}</span>
      </nav>

      <div className="event-hero-copy">
        {event.isSample && <p data-ev-hero className="event-sample-note">Sample entry: placeholder content for layout testing</p>}
        <h1 id="event-title" data-ev-hero className="event-hero-title font-display">{event.title}</h1>
        <p data-ev-hero className="event-hero-intro">{event.introduction}</p>
      </div>

      <dl data-ev-hero className="event-hero-facts">
        {facts.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{label === "Date" && event.startDate ? <time dateTime={event.startDate}>{value}</time> : value}</dd></div>)}
      </dl>
    </div>
  </section>;
}
