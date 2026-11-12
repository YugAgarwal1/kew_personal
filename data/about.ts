import type { AboutImage, Award, CoreValue, ExportRegion, LocationGroup, QualityStage, StatementBlock } from "@/types/about";

/**
 * Centralized content for /about.
 *
 * Every fact here comes from the KEW company overview (kewelectricals.com/about-us.html)
 * or, for awards, from text printed on the award itself. Do not add milestones,
 * figures or certifications that are not supported by company material.
 */

export const aboutImages = {
  hero: { src: "/images/switchgear-lineup.webp", alt: "Row of floor-standing switchgear panels in a power distribution room", position: "62% center" },
  heroDetail: { src: "/images/switchgear-busbar.webp", alt: "Copper busbars and a moulded case circuit breaker inside a switchgear panel", position: "70% center" },
  products: { src: "/images/industrial-hero.webp", alt: "KEW branded distribution board enclosures in a range of sizes" },
  vision: { src: "/images/switchgear-system.webp", alt: "", position: "75% center" },
  quality: { src: "/images/product-focus.webp", alt: "KEW automatic transfer switch photographed on a white background" },
  exportMap: { src: "/images/about/export-map.webp", alt: "World map from the KEW archive marking historical export markets across the Middle East, Africa, Asia and Australia" },
} satisfies Record<string, AboutImage>;

/** Position of the highlighted KEW origin marks on the export map, as a percentage of the image. */
export const exportMapOrigin = { x: 65.75, y: 44.7 };

export const companyFacts = {
  name: "Kusum Engineering Works",
  brand: "KEW",
  founded: "1961",
  founder: "Shri Natverlal Virchand Shah",
  headOffice: "Mumbai, India",
  productLines: ["Switchgear", "Fusegear", "Controlgear", "Distribution"],
};

export const storyChapters = [
  {
    label: "The beginning",
    title: "One rented room in Mumbai.",
    body: "Kusum Engineering Works was established in 1961 by the late Shri Natverlal Virchand Shah. It began modestly, in a small rented room in Mumbai.",
  },
  {
    label: "The purpose",
    title: "Made locally, built to be relied on.",
    body: "The vision was to supply reliable, high-quality, locally made electrical power distribution products, at a time of growing dependence on imports.",
  },
  {
    label: "Today",
    title: "A manufacturer and exporter.",
    body: "KEW has since grown into a manufacturer and exporter of electrical switchgear, fusegear, controlgear and distribution products, marketed under the KEW brand.",
  },
];

export const coreValues: CoreValue[] = [
  { number: "01", title: "Integrity", glyph: "integrity", description: "Functioning with integrity and honesty in fulfilling every commitment we make." },
  { number: "02", title: "Safety", glyph: "safety", description: "Working responsibly, with extensive safety measures implemented across every area of operation." },
  { number: "03", title: "Excellence", glyph: "excellence", description: "Settling for nothing but the best, and striving for excellence across all fields of operation." },
  { number: "04", title: "Service", glyph: "service", description: "Giving back to our employees, the community and the country through initiatives for social development." },
];

export const vision: StatementBlock = {
  label: "Vision",
  title: "A trusted source, worldwide.",
  statement: "To position the KEW Group globally as a trusted source of electrical power distribution products and solutions through continuous product innovation, stringent quality standards and employee skill development.",
};

export const mission: StatementBlock = {
  label: "Mission",
  title: "Relationships that last.",
  statement: "To build positive relationships with customers by providing quick turnaround, excellent quality and high-volume processing, resulting in lasting customer satisfaction.",
};

export const locationGroups: LocationGroup[] = [
  {
    state: "Maharashtra",
    locations: [
      { name: "Head Office", city: "Mumbai", kind: "office" },
      { name: "Trade House", city: "Mumbai", kind: "trade" },
      { name: "Manufacturing Unit 1", city: "Mumbai", kind: "manufacturing" },
    ],
  },
  {
    state: "Gujarat",
    locations: [
      { name: "Manufacturing Unit 2", city: "Umbergaon", kind: "manufacturing" },
      { name: "Manufacturing Unit 3", city: "Vadodara", kind: "manufacturing" },
      { name: "Manufacturing Unit 4", city: "Vadodara", kind: "manufacturing" },
    ],
  },
];

/** Historical export markets as listed on the previous KEW website. */
export const exportRegions: ExportRegion[] = [
  { name: "Middle East", countries: ["Iran", "Iraq", "Jordan", "Kuwait", "Oman", "Qatar", "Saudi Arabia", "Syria", "United Arab Emirates", "Yemen"] },
  { name: "Africa", countries: ["Egypt", "Ghana", "Ethiopia", "Kenya", "Malawi", "Mauritius", "Mozambique", "Nigeria", "South Africa", "Sudan", "Tanzania", "Zaire"] },
  { name: "Asia & Australia", countries: ["Bangladesh", "Burma", "Hong Kong", "Indonesia", "Malaysia", "Nepal", "Singapore", "Sri Lanka", "Thailand", "Australia"] },
];

export const qualityStages: QualityStage[] = [
  { number: "01", title: "Incoming material inspection", description: "Extensive quality checks on incoming material before it enters production." },
  { number: "02", title: "In-process quality control", description: "Process controls applied at each stage of manufacture, not only at the end of the line." },
  { number: "03", title: "Pre-dispatch testing", description: "Products are quality tested before dispatch, to meet customer expectations on delivery." },
];

/**
 * Only ISO 9001 is shown. The company overview also mentions "ISO 45000", which
 * is not a published ISO standard number; confirm the actual certificate
 * (possibly ISO 45001) with KEW before adding it here.
 */
export const certifications = ["ISO 9001"];

/** Ordered chronologically; undated awards last. Details are transcribed from each award. */
export const awards: Award[] = [
  {
    id: "bia-1996",
    title: "Award for Outstanding Export Performance",
    presenter: "Bombay Industries Association, Mumbai",
    year: "1996",
    detail: "Presented to M/s Kusum Engineering Works, 7 September 1996.",
    image: { src: "/images/about/awards/bia-export-performance-1996.webp", alt: "Bombay Industries Association trophy for Outstanding Export Performance presented to Kusum Engineering Works, 1996" },
  },
  {
    id: "eepc-2005",
    title: "Star Performer Shield",
    presenter: "EEPC India, Western Region",
    year: "2005–06",
    detail: "Small Enterprises category. Presented to Kusum Engineering Works, Mumbai.",
    image: { src: "/images/about/awards/eepc-star-performer-2005-06.webp", alt: "EEPC India Western Region Star Performer Shield 2005–06 presented to Kusum Engineering Works" },
  },
  {
    id: "eepc-2006",
    title: "Star Performer Shield",
    presenter: "EEPC India, Western Region",
    year: "2006–07",
    detail: "Small Enterprises category. Presented to Kusum Engineering Works, Mumbai.",
    image: { src: "/images/about/awards/eepc-star-performer-2006-07.webp", alt: "EEPC India Western Region Star Performer Shield 2006–07 presented to Kusum Engineering Works" },
  },
  {
    id: "boi-2012",
    title: "India SME 100 Awards",
    presenter: "Bank of India",
    year: "2012",
    detail: "Celebrating SME Achievers of 2012. Awarded to Kusum Engineering Works.",
    image: { src: "/images/about/awards/boi-sme-100-2012.webp", alt: "BOI India SME 100 Awards trophy celebrating SME achievers of 2012, awarded to Kusum Engineering Works" },
  },
  {
    id: "bia-excellence",
    title: "Export Excellence",
    presenter: "Bombay Industries Association",
    detail: "With appreciation, to Shri Natubhai V. Shah, Kusum Engg. Works.",
    image: { src: "/images/about/awards/bia-export-excellence.webp", alt: "Bombay Industries Association plaque of appreciation for export excellence to Shri Natubhai V. Shah, Kusum Engineering Works" },
  },
];
