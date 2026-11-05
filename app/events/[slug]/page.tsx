import type { Metadata } from "next";
import { notFound } from "next/navigation";
import EventsMotion from "@/components/events/EventsMotion";
import EventDetailHero from "@/components/events/EventDetailHero";
import EventOverview from "@/components/events/EventOverview";
import EventGallery from "@/components/events/EventGallery";
import EventHighlights from "@/components/events/EventHighlights";
import EventNavigation from "@/components/events/EventNavigation";
import { getAdjacentEvents, getEventBySlug, getEventSlugs } from "@/lib/events";

export function generateStaticParams() {
  return getEventSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/events/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return { title: "Event not found | KEW Electricals" };

  const title = `${event.title} | Events | KEW Electricals`;
  return {
    title,
    description: event.shortDescription,
    openGraph: { title, description: event.shortDescription, type: "article" },
    // Placeholder entries should never be indexed as real events.
    robots: event.isSample ? { index: false, follow: true } : undefined,
  };
}

export default async function EventPage({ params }: PageProps<"/events/[slug]">) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();

  const { previous, next } = getAdjacentEvents(slug);

  return <EventsMotion>
    <EventDetailHero event={event} />
    <EventOverview event={event} />
    <EventGallery images={event.gallery} title={event.title} />
    <EventHighlights highlights={event.highlights} />
    <EventNavigation previous={previous} next={next} />
  </EventsMotion>;
}
