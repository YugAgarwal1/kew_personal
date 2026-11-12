import Image from "next/image";
import SectionMark from "@/components/about/SectionMark";
import { aboutImages, companyFacts, storyChapters } from "@/data/about";

export default function CompanyStory() {
  return <section id="story" aria-labelledby="story-title" className="ab-story section-pad">
    <div className="shell">
      <div className="ab-story-layout">
        <div className="ab-story-year" aria-hidden="true">
          <p data-ab-year className="font-display"><span>19</span><span>61</span></p>
        </div>

        <div className="ab-story-body">
          <div data-ab-reveal>
            <h2 id="story-title" className="ab-title font-display">A modest room. A <span>lasting</span> idea.</h2>
            <p className="ab-story-founder">Established in {companyFacts.founded} by the late {companyFacts.founder}.</p>
          </div>

          <ol className="ab-chapters ab-chapters-horizontal">
            {storyChapters.map((chapter, index) => <li key={chapter.label} data-ab-stagger className="ab-chapter">
              <p className="ab-chapter-label"><span>{String(index + 1).padStart(2, "0")}</span>{chapter.label}</p>
              <h3 className="font-display">{chapter.title}</h3>
              <p>{chapter.body}</p>
            </li>)}
          </ol>
        </div>
      </div>
    </div>
  </section>;
}
