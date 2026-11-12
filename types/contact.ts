export type ContactChannel = {
  /** Key into the icon set in components/contact/ContactDetails.tsx. */
  kind: "phone" | "fax" | "email";
  label: string;
  /** Value exactly as KEW publishes it. */
  value: string;
  /** tel: or mailto: link. Omitted for channels that cannot be opened from a browser (fax). */
  href?: string;
  note: string;
};
