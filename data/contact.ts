import type { AboutImage } from "@/types/about";
import type { ContactChannel } from "@/types/contact";

/**
 * Centralized content for /contact.
 *
 * Address, numbers and email are KEW's published head office details. Keep
 * them in sync with the head office block in components/layout/SiteFooter.tsx.
 */

export const headOffice = {
  company: "Kusum Engineering Works",
  addressLines: ["S.V. Road, Goregaon (West)", "Mumbai – 400104", "India"],
  city: "Goregaon (West), Mumbai",
};

export const contactChannels: ContactChannel[] = [
  { kind: "phone", label: "Phone", value: "(+91)-22-4276764990", href: "tel:+91224276764990", note: "Head office, Mumbai" },
  { kind: "fax", label: "Fax", value: "(+91)-22-4276764990", note: "Head office, Mumbai" },
  { kind: "email", label: "Email", value: "info@kewelectricals.com", href: "mailto:info@kewelectricals.com", note: "Product and commercial enquiries" },
];

const mapId = "1R0-JenPHlCRmyK0Jo9-tjtZfHX0r6jch";

export const officeMap = {
  embedUrl: `https://www.google.com/maps/d/u/0/embed?mid=${mapId}`,
  viewerUrl: `https://www.google.com/maps/d/u/0/viewer?mid=${mapId}`,
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Kusum+Engineering+Works,+S.V.+Road,+Goregaon+West,+Mumbai+400104",
};

export const contactImages = {
  hero: { src: "/images/industrial-hero.webp", alt: "KEW branded distribution board enclosures in a range of sizes", position: "68% center" },
} satisfies Record<string, AboutImage>;
