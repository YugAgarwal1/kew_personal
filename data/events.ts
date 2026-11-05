import type { KewEvent } from "@/types/events";

/**
 * Centralized event data for /events and /events/[slug].
 *
 * To add an event, append an entry below. Place its photography in
 * /public/images/events/<slug>/ (WebP preferred) and reference it by path.
 * Slugs must be unique and URL-safe.
 *
 * IMPORTANT: The entries below are SAMPLE CONTENT (isSample: true). They use
 * genuine KEW exhibition-stand photography already in the project, but the
 * event names, dates and venues are not verified, so none are stated.
 * Replace them with verified event details before launch, and remove
 * `isSample` once an entry is factual.
 */
export const events: KewEvent[] = [
  {
    id: "evt-sample-01",
    slug: "sample-industry-exhibition",
    title: "Industry Exhibition Showcase",
    category: "exhibition",
    shortDescription:
      "A KEW stand presenting switchgear and fusegear ranges on dedicated product display walls.",
    introduction:
      "Placeholder entry showing how an exhibition story is presented. The photography shows a Kusum Engineering Works stand with switchgear and fusegear displays.",
    description: [
      "This sample entry demonstrates the overview section of an event page. Replace this copy with a verified description of the exhibition, its organisers and its focus within the electrical industry.",
      "Exhibitions give specifiers, contractors and distributors the chance to see product construction first-hand and discuss application requirements directly with the engineering team.",
    ],
    involvement: [
      "The stand shown in the photography is organised around wall-mounted product boards, with enclosures, changeover switches and fuse units presented at eye level for close inspection.",
      "Replace this paragraph with verified details of KEW's participation, such as the stand location, product launches or technical sessions.",
    ],
    participation: [
      { label: "Format", value: "Exhibition stand" },
      { label: "Product focus", value: "Switchgear and fusegear" },
    ],
    coverImage: {
      src: "/images/factory-floor.webp",
      alt: "Kusum Engineering Works exhibition stand with switchgear and fusegear display walls",
      position: "center 40%",
    },
    gallery: [
      {
        src: "/images/factory-floor.webp",
        alt: "Front view of the KEW exhibition stand with a central red feature wall",
        caption: "KEW stand / front elevation",
      },
      {
        src: "/images/team-event.webp",
        alt: "Overhead view of KEW product display boards in an exhibition hall",
        caption: "Product display walls",
      },
      {
        src: "/images/industrial-hero.webp",
        alt: "KEW distribution board enclosure range",
        caption: "Enclosure range / product view",
      },
      {
        src: "/images/switchgear-lineup.webp",
        alt: "Illustrative industrial switchgear lineup",
        caption: "Illustrative system imagery",
      },
      {
        src: "/images/switchgear-busbar.webp",
        alt: "Illustrative switchgear busbar detail",
        caption: "Illustrative system detail",
      },
    ],
    highlights: [
      {
        type: "Product showcase",
        title: "Switchgear and fusegear on display",
        description:
          "Product boards present fuse units, changeover switches and enclosures so visitors can examine construction details up close.",
      },
      {
        type: "Industry interaction",
        title: "Technical conversations",
        description:
          "Placeholder for verified notes on the visitors, partners and specifiers the team met during the event.",
      },
      {
        type: "Event moment",
        title: "Add a verified highlight",
        description:
          "Use this space for a launch, presentation or recognition that took place at the event.",
      },
    ],
    isSample: true,
  },
  {
    id: "evt-sample-02",
    slug: "sample-electrical-trade-show",
    title: "Electrical Trade Show Presence",
    category: "trade-show",
    shortDescription:
      "Product display walls featuring KEW protection and distribution products within a busy trade hall.",
    introduction:
      "Placeholder entry for a trade show. The photography shows KEW display boards among neighbouring exhibitors in a large electrical trade hall.",
    description: [
      "This sample entry demonstrates how a trade show is presented. Replace it with verified information about the show, its scale and the audience it serves.",
      "Trade shows bring together manufacturers, distributors and buyers, making them a practical setting for reviewing product ranges and discussing supply requirements.",
    ],
    involvement: [
      "The photography shows a series of KEW-branded display boards presenting protection and distribution products in a structured, easy-to-browse arrangement.",
      "Replace this paragraph with verified participation details.",
    ],
    participation: [
      { label: "Format", value: "Trade show display" },
      { label: "Product focus", value: "Protection and distribution" },
    ],
    coverImage: {
      src: "/images/team-event.webp",
      alt: "Overhead view of an electrical trade show hall with KEW product display boards",
      position: "center 70%",
    },
    gallery: [
      {
        src: "/images/team-event.webp",
        alt: "KEW product display boards seen from above in a trade show hall",
        caption: "Trade hall / overhead view",
      },
      {
        src: "/images/factory-floor.webp",
        alt: "KEW exhibition stand with switchgear and fusegear signage",
        caption: "KEW stand",
      },
      {
        src: "/images/protection-section.webp",
        alt: "KEW protection and distribution products",
        caption: "Protection range",
      },
      {
        src: "/images/switchgear-system.webp",
        alt: "Illustrative switchgear system",
        caption: "Illustrative system imagery",
      },
    ],
    highlights: [
      {
        type: "Product showcase",
        title: "Protection and distribution range",
        description:
          "Display boards organise products by application so visitors can compare formats quickly.",
      },
      {
        type: "Industry interaction",
        title: "Distributor and buyer meetings",
        description:
          "Placeholder for verified notes on trade conversations held during the show.",
      },
    ],
    isSample: true,
  },
  {
    id: "evt-sample-03",
    slug: "sample-product-showcase",
    title: "Enclosure Range Product Showcase",
    category: "corporate",
    shortDescription:
      "A focused presentation of KEW wall-mounting and floor-standing enclosure formats.",
    introduction:
      "Placeholder entry for a corporate or product showcase event, using KEW product photography from the enclosure range.",
    description: [
      "This sample entry demonstrates a corporate event page. Replace it with verified details about the occasion, audience and agenda.",
      "Product showcases allow the team to walk partners through sizes, materials and mounting approaches in a focused setting.",
    ],
    involvement: [
      "Replace this paragraph with verified details of the presentation, such as the products introduced and the teams involved.",
    ],
    coverImage: {
      src: "/images/industrial-hero.webp",
      alt: "KEW distribution board enclosures arranged in a row",
    },
    gallery: [
      {
        src: "/images/industrial-hero.webp",
        alt: "KEW enclosure range arranged for a product presentation",
        caption: "Enclosure range",
      },
      {
        src: "/images/product-focus.webp",
        alt: "KEW changeover product",
        caption: "Changeover solutions",
      },
      {
        src: "/images/hero-section.webp",
        alt: "Illustrative switchgear room with rows of panels",
        caption: "Illustrative application setting",
      },
    ],
    highlights: [
      {
        type: "Product showcase",
        title: "Enclosure formats",
        description:
          "Wall-mounting, floor-standing and polycarbonate formats presented side by side.",
      },
    ],
    isSample: true,
  },
];
