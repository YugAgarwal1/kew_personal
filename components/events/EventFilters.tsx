"use client";

import { eventCategoryLabels } from "@/lib/events";
import type { EventCategory } from "@/types/events";

export type EventFilterValue = EventCategory | "all";

type EventFiltersProps = {
  categories: EventCategory[];
  counts: Record<EventFilterValue, number>;
  active: EventFilterValue;
  onChange: (value: EventFilterValue) => void;
};

export default function EventFilters({ categories, counts, active, onChange }: EventFiltersProps) {
  const options: [EventFilterValue, string][] = [["all", "All events"], ...categories.map((category) => [category, eventCategoryLabels[category]] as [EventFilterValue, string])];

  return <div role="group" aria-label="Filter events by category" className="events-filters scrollbar-hide">
    {options.map(([value, label]) => (
      <button
        key={value}
        type="button"
        aria-pressed={active === value}
        onClick={() => onChange(value)}
        className={`events-filter ${active === value ? "is-active" : ""}`}
      >
        {label}<span>{counts[value] ?? 0}</span>
      </button>
    ))}
  </div>;
}
