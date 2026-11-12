import Image from "next/image";
import { contactImages, headOffice } from "@/data/contact";

export default function ContactHero() {
  return <section aria-labelledby="contact-title" className="ct-hero relative isolate overflow-hidden text-white">
    <div data-ct-hero-media className="ct-hero-media absolute inset-0 -z-20">
      <Image src={contactImages.hero.src} alt={contactImages.hero.alt} fill preload sizes="100vw" className="object-cover" style={{ objectPosition: contactImages.hero.position }} />
    </div>
    <div className="ct-hero-overlay absolute inset-0 -z-10" aria-hidden="true" />
    <div className="hero-video-grid -z-10" aria-hidden="true" />

    <div className="shell ct-hero-shell">
      <div className="ct-hero-copy">
        <p data-ct-hero className="ct-eyebrow"><span />Contact KEW · Head office, Mumbai</p>
        <h1 id="contact-title" data-ct-hero className="ct-hero-title font-display">Let&apos;s talk <span>power.</span></h1>
        <p data-ct-hero className="ct-hero-lead">
          Reach the {headOffice.company} head office in Mumbai for product information, technical requirements and commercial enquiries across the KEW range.
        </p>
      </div>
    </div>
  </section>;
}
