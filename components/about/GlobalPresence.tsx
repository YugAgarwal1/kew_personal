import Image from "next/image";
import { aboutImages, exportMapOrigin, exportRegions } from "@/data/about";

const marketCount = exportRegions.reduce((total, region) => total + region.countries.length, 0);

export default function GlobalPresence() {
  return <section id="global" aria-labelledby="global-title" className="ab-global section-pad text-white">
    <div className="shell">
      <div className="ab-global-heading" data-ab-reveal>
        <div>
          <h2 id="global-title" className="ab-title font-display">Made in India. <span>Exported widely.</span></h2>
        </div>
        <p className="ab-global-count"><strong className="font-display">{marketCount}</strong><span>Export markets across the Middle East, Africa, Asia and Australia</span></p>
      </div>

      <div className="ab-global-layout">
        <figure className="ab-map" data-ab-image-reveal>
          <figcaption className="ab-map-bar"><span>Export map</span><span>KEW archive</span></figcaption>
          <div className="ab-map-canvas">
            <Image src={aboutImages.exportMap.src} alt={aboutImages.exportMap.alt} fill sizes="(max-width: 1023px) 100vw, 56vw" className="object-contain" />
            <span className="ab-map-origin" style={{ left: `${exportMapOrigin.x}%`, top: `${exportMapOrigin.y}%` }} aria-hidden="true"><i /><i /></span>
          </div>
          <div className="ab-map-legend" aria-hidden="true">
            <span><i className="is-market" />Export markets</span>
            <span><i className="is-origin" />KEW, India</span>
          </div>
        </figure>

        <div className="ab-regions-grid">
          {exportRegions.map((region, index) => <div key={region.name} data-ab-stagger className="ab-region-card">
            <div className="ab-region-card-header">
              <h3 className="font-display">{region.name}</h3>
              <span className="ab-region-count">{String(region.countries.length).padStart(2, "0")}</span>
            </div>
            <div className="ab-region-countries">
              {region.countries.map((country) => <span key={country} className="ab-country-tag">{country}</span>)}
            </div>
          </div>)}
          <p className="ab-footnote">Historical export markets as listed by KEW. Country names are shown as originally recorded and do not indicate current distribution in every market.</p>
        </div>
      </div>
    </div>
  </section>;
}
