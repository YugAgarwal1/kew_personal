import Image from "next/image";
import { aboutImages, certifications, qualityStages } from "@/data/about";

export default function QualitySection() {
  return <section id="quality" aria-labelledby="quality-title" className="ab-quality section-pad">
    <div className="shell">
      <div className="ab-quality-heading" data-ab-reveal>
        <div>
          <h2 id="quality-title" className="ab-title font-display">Tested before it <span>leaves.</span></h2>
        </div>
        <div className="ab-quality-intro">
          <p className="ab-lead is-ink">KEW people are focused on delivering products that go through rigorous testing and qualification, so that every product delivered meets customer expectations.</p>
          <ul className="ab-certs" aria-label="Certifications">
            {certifications.map((certification) => <li key={certification}>
              <svg viewBox="0 0 100 100" aria-hidden="true" focusable="false">
                <defs><path id="ab-seal-path" d="M50 50m-36 0a36 36 0 1 1 72 0a36 36 0 1 1-72 0" /></defs>
                <circle cx="50" cy="50" r="47" />
                <circle cx="50" cy="50" r="27" />
                <text><textPath href="#ab-seal-path" startOffset="0">Quality management · Quality management ·</textPath></text>
              </svg>
              <strong>{certification}</strong>
            </li>)}
          </ul>
        </div>
      </div>

      <div className="ab-line-stage">
        <div className="ab-line-product" data-ab-image-reveal>
          <Image src={aboutImages.quality.src} alt={aboutImages.quality.alt} fill sizes="(max-width: 1023px) 90vw, 44vw" className="object-contain" />
          <span className="ab-reticle" aria-hidden="true" />
        </div>

        <div className="ab-rail">
          <div className="ab-rail-ends" aria-hidden="true"><span>Material in</span><span>Product out</span></div>
          <div className="ab-rail-track" aria-hidden="true"><i data-ab-progress /></div>
          <ol className="ab-checkpoints">
            {qualityStages.map((stage) => <li key={stage.number} data-ab-stagger className="ab-checkpoint">
              <span className="ab-checkpoint-dot" aria-hidden="true" />
              <p className="ab-checkpoint-number">Checkpoint {stage.number}</p>
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
            </li>)}
          </ol>
        </div>
      </div>
    </div>
  </section>;
}
