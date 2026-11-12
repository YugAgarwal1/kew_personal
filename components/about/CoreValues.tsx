import SectionMark from "@/components/about/SectionMark";
import { coreValues } from "@/data/about";

export default function CoreValues() {
  return <section id="values" aria-labelledby="values-title" className="ab-values section-pad text-white">
    <div className="shell">
      <div className="ab-values-heading" data-ab-reveal>
        <div>
          <h2 id="values-title" className="ab-title font-display">What we <span>stand on.</span></h2>
        </div>
        <p className="ab-lead">Four values shape how KEW works: with customers, with colleagues and with the communities around us.</p>
      </div>

      <div className="ab-values-grid">
        {coreValues.map((value) => <div key={value.title} data-ab-stagger className="ab-value-card">
          <div className="ab-value-card-header">
            <span className="ab-value-number">{value.number}</span>
          </div>
          <h3 className="font-display">{value.title}</h3>
          <p>{value.description}</p>
        </div>)}
      </div>
    </div>
  </section>;
}
