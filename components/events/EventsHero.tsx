import Image from "next/image";

export default function EventsHero() {
  return <section aria-labelledby="events-title" className="events-hero relative isolate overflow-hidden bg-[#111317] text-white">
    <div data-ev-hero-media className="events-hero-media absolute inset-0 -z-20">
      <Image src="/images/factory-floor.webp" alt="KEW Electricals factory floor and exhibition space" fill preload sizes="100vw" className="object-cover" />
    </div>
    <div className="events-hero-overlay absolute inset-0 -z-10" aria-hidden="true" />
    <div className="hero-video-grid -z-10" aria-hidden="true" />

    <div className="shell events-hero-shell">
      <div className="events-hero-content">
        <div className="events-hero-left">
          <p data-ev-hero className="events-eyebrow"><span />KEW in the industry</p>
          <h1 id="events-title" data-ev-hero className="events-hero-title font-display">Events &amp;<br /><span>Exhibitions.</span></h1>
        </div>
        <div className="events-hero-right">
          <p data-ev-hero className="events-hero-lead">
            Industrial exhibitions, international exhibitions, engineering exhibitions and trade shows where KEW Electricals presents its switchgear, fusegear and power distribution products and meets the people who specify them.
          </p>
        </div>
      </div>

      <div data-ev-hero className="events-hero-meta">

        {/* No need looking bad */}
        {/* <ul aria-label="Event categories">
          {Object.values(eventCategoryLabels).map((label) => <li key={label}><i aria-hidden="true" />{label}</li>)}
        </ul>
        <p><strong>{pad(eventCount)}</strong> {eventCount === 1 ? "Event" : "Events"}</p> */}
      </div>
    </div>
  </section>;
}
