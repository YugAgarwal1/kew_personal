import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function EventNotFound() {
  return <main id="top" className="event-not-found relative isolate overflow-hidden bg-[#111317] text-white">
    <title>Event not found | KEW Electricals</title>
    <meta name="robots" content="noindex" />
    <div className="hero-video-grid -z-10" aria-hidden="true" />
    <div className="shell event-not-found-shell">
      <p className="events-eyebrow"><span />404 / Event not found</p>
      <h1 className="events-hero-title font-display">This event <span>isn&apos;t listed.</span></h1>
      <p className="events-hero-lead">The event may have been renamed or removed. Browse the full list of KEW exhibitions and events instead.</p>
      <Link href="/events" className="hero-cta mt-9"><ArrowLeft size={16} aria-hidden="true" />All events</Link>
    </div>
  </main>;
}
