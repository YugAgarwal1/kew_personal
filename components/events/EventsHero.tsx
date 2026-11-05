import Image from "next/image";
import { eventCategoryLabels, pad } from "@/lib/events";

export default function EventsHero({ eventCount }: { eventCount: number }) {
  return <section aria-labelledby="events-title" className="events-hero relative isolate overflow-hidden bg-[#111317] text-white">
    <div data-ev-hero-media className="events-hero-media absolute inset-0 -z-20">
      <Image src="/images/factory-floor.webp" alt="" fill preload sizes="100vw" className="object-cover" />
    </div>
    <div className="events-hero-overlay absolute inset-0 -z-10" aria-hidden="true" />
    <div className="hero-video-grid -z-10" aria-hidden="true" />

    <div className="shell events-hero-shell">
      <div className="max-w-[780px]">
        <p data-ev-hero className="events-eyebrow"><span />KEW in the industry</p>
        <h1 id="events-title" data-ev-hero className="events-hero-title font-display">Events &amp;<br /><span>Exhibitions.</span></h1>
        <p data-ev-hero className="events-hero-lead">
          Exhibitions, trade shows, conferences and corporate events where KEW Electricals presents its switchgear, fusegear and power distribution products and meets the people who specify them.
        </p>
      </div>

      <div data-ev-hero className="events-hero-meta">
        <ul aria-label="Event categories">
          {Object.values(eventCategoryLabels).map((label) => <li key={label}><i aria-hidden="true" />{label}</li>)}
        </ul>
        <p><strong>{pad(eventCount)}</strong> {eventCount === 1 ? "Event" : "Events"}</p>
      </div>
    </div>
  </section>;
}
