import Image from "next/image";
import SectionMark from "@/components/about/SectionMark";
import { aboutImages, mission, vision } from "@/data/about";

export default function VisionMission() {
  return <section id="direction" aria-labelledby="direction-title" className="ab-direction">
    <h2 id="direction-title" className="sr-only">Vision and mission</h2>
    <div className="ab-direction-grid">
      <article className="ab-statement is-vision text-white" aria-labelledby="vision-title">
        <div className="ab-statement-media" aria-hidden="true">
          <Image src={aboutImages.vision.src} alt="" fill sizes="(max-width: 1023px) 100vw, 50vw" className="object-cover" style={{ objectPosition: aboutImages.vision.position }} />
        </div>
        <div className="ab-statement-inner" data-ab-reveal>
          <p className="ab-statement-label"><span>V</span>{vision.label}</p>
          <h3 id="vision-title" className="font-display">{vision.title}</h3>
          <p className="ab-statement-copy">{vision.statement}</p>
        </div>
        <i className="ab-corner is-tl" aria-hidden="true" /><i className="ab-corner is-br" aria-hidden="true" />
      </article>

      <div className="ab-direction-seam" aria-hidden="true"><span>KEW</span></div>

      <article className="ab-statement is-mission" aria-labelledby="mission-title">
        <div className="ab-statement-inner" data-ab-reveal>
          <p className="ab-statement-label"><span>M</span>{mission.label}</p>
          <h3 id="mission-title" className="font-display">{mission.title}</h3>
          <p className="ab-statement-copy">{mission.statement}</p>
          <ul className="ab-mission-terms" aria-label="Mission commitments">
            <li>Quick turnaround</li>
            <li>Excellent quality</li>
            <li>High-volume processing</li>
          </ul>
        </div>
        <i className="ab-corner is-tl" aria-hidden="true" /><i className="ab-corner is-br" aria-hidden="true" />
      </article>
    </div>
  </section>;
}
