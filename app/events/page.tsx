import type { Metadata } from "next";
import EventsMotion from "@/components/events/EventsMotion";
import EventsHero from "@/components/events/EventsHero";
import EventsGrid from "@/components/events/EventsGrid";
import UpcomingEvents from "@/components/events/UpcomingEvents";
import { getEventSummaries } from "@/lib/events";

export const dynamic = "force-static";

const description = "Industrial exhibitions, international exhibitions, engineering exhibitions and trade shows featuring KEW Electricals switchgear, fusegear and power distribution products.";

export const metadata: Metadata = {
  title: "Events & Exhibitions | KEW Electricals",
  description,
  openGraph: { title: "Events & Exhibitions | KEW Electricals", description, type: "website" },
};

export default function EventsPage() {
  const events = getEventSummaries();

  return <EventsMotion>
    <EventsHero />
    <EventsGrid events={events} />
    <UpcomingEvents />
  </EventsMotion>;
}
