import { events } from "@/data/events";
import type { EventCategory, EventSummary, KewEvent } from "@/types/events";

export const eventCategoryLabels: Record<EventCategory, string> = {
  exhibition: "Exhibitions",
  "trade-show": "Trade Shows",
  conference: "Conferences",
  corporate: "Corporate Events",
};

/** Singular labels used on cards and detail pages. */
export const eventCategoryTags: Record<EventCategory, string> = {
  exhibition: "Exhibition",
  "trade-show": "Trade show",
  conference: "Conference",
  corporate: "Corporate event",
};

/** Filters appear once the listing has enough events to make them useful. */
export const FILTER_MIN_EVENTS = 4;

/** Dated events first (newest first), then undated events in data order. */
export function getAllEvents(): KewEvent[] {
  return events
    .map((event, order) => ({ event, order }))
    .sort((a, b) => {
      const aDate = a.event.startDate;
      const bDate = b.event.startDate;
      if (aDate && bDate) return bDate.localeCompare(aDate);
      if (aDate) return -1;
      if (bDate) return 1;
      return a.order - b.order;
    })
    .map(({ event }) => event);
}

/** Card-sized data for the listing, keeping galleries out of the client payload. */
export function getEventSummaries(): EventSummary[] {
  return getAllEvents().map(({ id, slug, title, category, startDate, endDate, location, venue, shortDescription, coverImage, isSample }) => (
    { id, slug, title, category, startDate, endDate, location, venue, shortDescription, coverImage, isSample }
  ));
}

export function getEventBySlug(slug: string): KewEvent | undefined {
  return events.find((event) => event.slug === slug);
}

export function getEventSlugs(): string[] {
  return events.map((event) => event.slug);
}

/** Categories that have at least one event, in label order. */
export function getActiveCategories(list: Pick<KewEvent, "category">[]): EventCategory[] {
  const present = new Set(list.map((event) => event.category));
  return (Object.keys(eventCategoryLabels) as EventCategory[]).filter((category) => present.has(category));
}

export function shouldShowFilters(list: Pick<KewEvent, "category">[]): boolean {
  return list.length >= FILTER_MIN_EVENTS && getActiveCategories(list).length > 1;
}

/**
 * Previous/next events in listing order. Wraps around when there are enough
 * events that wrapping never points both links at the same event.
 */
export function getAdjacentEvents(slug: string): { previous?: KewEvent; next?: KewEvent } {
  const list = getAllEvents();
  const index = list.findIndex((event) => event.slug === slug);
  if (index === -1 || list.length < 2) return {};

  const wrap = list.length > 2;
  const previous = index > 0 ? list[index - 1] : wrap ? list[list.length - 1] : undefined;
  const next = index < list.length - 1 ? list[index + 1] : wrap ? list[0] : undefined;
  return { previous, next };
}

const parseDate = (value: string) => {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day));
};

const format = (date: Date, options: Intl.DateTimeFormatOptions) =>
  new Intl.DateTimeFormat("en-GB", { timeZone: "UTC", ...options }).format(date);

/** e.g. "12 Feb 2025", "12–15 Feb 2025", "28 Feb – 2 Mar 2025". */
export function formatEventDate(event: Pick<KewEvent, "startDate" | "endDate">): string {
  if (!event.startDate) return "Date to be confirmed";

  const start = parseDate(event.startDate);
  const full: Intl.DateTimeFormatOptions = { day: "numeric", month: "short", year: "numeric" };
  if (!event.endDate || event.endDate === event.startDate) return format(start, full);

  const end = parseDate(event.endDate);
  const sameYear = start.getUTCFullYear() === end.getUTCFullYear();
  const sameMonth = sameYear && start.getUTCMonth() === end.getUTCMonth();

  if (sameMonth) return `${start.getUTCDate()}–${format(end, full)}`;
  if (sameYear) return `${format(start, { day: "numeric", month: "short" })} – ${format(end, full)}`;
  return `${format(start, full)} – ${format(end, full)}`;
}

export function getEventYear(event: Pick<KewEvent, "startDate">): string {
  return event.startDate ? event.startDate.slice(0, 4) : "TBC";
}

export function formatEventLocation(event: Pick<KewEvent, "location" | "venue">): string {
  if (event.venue && event.location) return `${event.venue}, ${event.location}`;
  return event.venue ?? event.location ?? "Location to be confirmed";
}

/** Two-digit index used throughout the design system, e.g. "03". */
export const pad = (value: number) => String(value).padStart(2, "0");
