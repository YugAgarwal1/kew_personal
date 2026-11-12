import type { Metadata } from "next";
import ContactMotion from "@/components/contact/ContactMotion";
import ContactHero from "@/components/contact/ContactHero";
import ContactDetails from "@/components/contact/ContactDetails";
import ContactClosing from "@/components/contact/ContactClosing";

export const dynamic = "force-static";

const title = "Contact Us | KEW Electricals — Kusum Engineering Works, Mumbai";
const description = "Contact the Kusum Engineering Works head office at S.V. Road, Goregaon (West), Mumbai – 400104. Phone, fax, email and map for KEW Electricals.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, type: "website" },
};

export default function ContactPage() {
  return <ContactMotion>
    <ContactHero />
    <ContactDetails />
    <ContactClosing />
  </ContactMotion>;
}
