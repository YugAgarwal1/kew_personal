import Image from "next/image";
import { aboutImages, companyFacts } from "@/data/about";

export default function AboutHero() {
  return <section aria-labelledby="about-title" className="ab-hero relative isolate overflow-hidden text-white">
    <div className="hero-video-grid -z-10" aria-hidden="true" />
    <p data-ab-year className="ab-hero-year font-display" aria-hidden="true">1961</p>

    <div className="shell ab-hero-shell">
      <div className="ab-hero-copy">
        <p data-ab-hero className="ab-eyebrow"><span />About KEW · {companyFacts.name}</p>
        <h1 id="about-title" data-ab-hero className="ab-hero-title font-display">Engineering trust, since <span>1961.</span></h1>
        <p data-ab-hero className="ab-hero-lead">
          From a single rented room in Mumbai to a group of four manufacturing units and a trading house, KEW has spent more than six decades making electrical power distribution products that people can depend on.
        </p>
      </div>

      <div className="ab-hero-media">
        <figure data-ab-hero-frame className="ab-hero-frame is-main">
          <Image src={aboutImages.hero.src} alt={aboutImages.hero.alt} fill preload sizes="(max-width: 1023px) 100vw, 42vw" className="object-cover" style={{ objectPosition: aboutImages.hero.position }} />
        </figure>
        <figure data-ab-hero-frame className="ab-hero-frame is-detail">
          <Image src={aboutImages.heroDetail.src} alt={aboutImages.heroDetail.alt} fill sizes="(max-width: 1023px) 50vw, 20vw" className="object-cover" style={{ objectPosition: aboutImages.heroDetail.position }} />
        </figure>
        <p className="ab-hero-tag" aria-hidden="true"><span>Fig. 01</span>Power distribution</p>
      </div>
    </div>
  </section>;
}
