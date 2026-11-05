export type EventCategory = "exhibition" | "trade-show" | "conference" | "corporate";

export type EventImage = {
  src: string;
  alt: string;
  caption?: string;
  /** CSS object-position, e.g. "center 30%". Defaults to center. */
  position?: string;
};

export type EventFact = {
  label: string;
  value: string;
};

export type EventHighlight = {
  /** Short tag such as "Product showcase" or "Industry interaction". */
  type: string;
  title: string;
  description: string;
};

export type KewEvent = {
  id: string;
  slug: string;
  title: string;
  category: EventCategory;
  /** ISO date (YYYY-MM-DD). Leave undefined until the date is verified. */
  startDate?: string;
  endDate?: string;
  location?: string;
  venue?: string;
  shortDescription: string;
  /** Opening paragraph for the detail page hero. */
  introduction: string;
  /** Overview paragraphs about the event itself. */
  description: string[];
  /** Paragraphs describing KEW Electricals' involvement. */
  involvement: string[];
  /** Participation details shown beside the overview, e.g. stand or focus area. */
  participation?: EventFact[];
  coverImage: EventImage;
  gallery: EventImage[];
  highlights: EventHighlight[];
  /**
   * Marks placeholder content used to test layouts. Sample events are
   * labelled in the UI and excluded from search indexing.
   */
  isSample?: boolean;
};

/** The subset of event data needed to render a listing card. */
export type EventSummary = Pick<
  KewEvent,
  "id" | "slug" | "title" | "category" | "startDate" | "endDate" | "location" | "venue" | "shortDescription" | "coverImage" | "isSample"
>;
