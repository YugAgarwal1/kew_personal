export type AboutImage = {
  src: string;
  alt: string;
  /** CSS object-position, e.g. "center 30%". Defaults to center. */
  position?: string;
};

export type CoreValue = {
  number: string;
  title: string;
  description: string;
  /** Key into the line-drawing set in components/about/ValueGlyph.tsx. */
  glyph: "integrity" | "safety" | "excellence" | "service";
};

export type StatementBlock = {
  label: string;
  title: string;
  statement: string;
};

export type KewLocation = {
  name: string;
  city: string;
  kind: "office" | "trade" | "manufacturing";
};

export type LocationGroup = {
  state: string;
  locations: KewLocation[];
};

export type ExportRegion = {
  name: string;
  countries: string[];
};

export type QualityStage = {
  number: string;
  title: string;
  description: string;
};

export type Award = {
  id: string;
  /** Text exactly as it reads on the award. */
  title: string;
  presenter: string;
  /** Year as printed on the award; omitted when the award carries no date. */
  year?: string;
  detail?: string;
  image: AboutImage;
};
