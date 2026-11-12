export const enquiryUrl = "https://kewelectricals.com/contact-us";

/** [label, href]. Hash links point at homepage sections. */
export const primaryLinks = [
  ["About", "/about"],
  ["Products", "#products"],
  ["Engineering", "#engineering"],
  ["Legacy", "#legacy"],
  ["Events", "/events"],
  ["Contact", "#contact"],
] as const;

export const mobileLinks = [
  ["About us", "/about"],
  ["Products", "#products"],
  ["Engineering", "#engineering"],
  ["Our legacy", "#legacy"],
  ["Events", "/events"],
  ["Contact", "#contact"],
] as const;

export const footerLinks = [
  ["About", "/about"],
  ["Products", "#products"],
  ["Engineering", "#engineering"],
  ["Legacy", "#legacy"],
  ["Events", "/events"],
  ["Careers", "https://kewelectricals.com/career"],
] as const;

/** Homepage section anchors stay in-page on the homepage and resolve to "/#section" elsewhere. */
export function resolveHref(href: string, isHome: boolean): string {
  return href.startsWith("#") && !isHome ? `/${href}` : href;
}
