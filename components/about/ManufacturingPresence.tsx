import { Building2, Factory, Warehouse } from "lucide-react";
import SectionMark from "@/components/about/SectionMark";
import { locationGroups } from "@/data/about";
import type { KewLocation } from "@/types/about";

const kindIcon: Record<KewLocation["kind"], typeof Factory> = { office: Building2, trade: Warehouse, manufacturing: Factory };
const kindLabel: Record<KewLocation["kind"], string> = { office: "Head office", trade: "Trading house", manufacturing: "Manufacturing" };

const allLocations = locationGroups.flatMap((group) => group.locations);
const count = (kind: KewLocation["kind"]) => allLocations.filter((location) => location.kind === kind).length;
const pad = (value: number) => String(value).padStart(2, "0");

/**
 * The group's footprint drawn as a single-line diagram: each state is a bus
 * section, joined by a coupler, with every site as an outgoing feeder.
 */
export default function ManufacturingPresence() {
  const stats = [
    [pad(count("manufacturing")), "Manufacturing units"],
    [pad(count("trade")), "Trading house"],
    [pad(count("office")), "Head office, Mumbai"],
    [pad(locationGroups.length), "States: Maharashtra & Gujarat"],
  ];

  return <section id="footprint" aria-labelledby="footprint-title" className="ab-footprint section-pad">
    <div className="shell">
      <div className="ab-footprint-heading" data-ab-reveal>
        <div>
          <SectionMark number="04" label="Operational footprint" />
          <h2 id="footprint-title" className="ab-title font-display">Four plants. One trading house. <span>Two states.</span></h2>
        </div>
        <p className="ab-lead is-ink">Headquartered in Mumbai, the KEW Group runs its manufacturing units and trading house across Maharashtra and Gujarat.</p>
      </div>

      <dl className="ab-readout" data-ab-reveal>
        {stats.map(([value, label]) => <div key={label}><dt>{label}</dt><dd className="font-display">{value}</dd></div>)}
      </dl>

      <div className="ab-sld" data-ab-reveal>
        <p className="ab-sld-source"><span>Incoming</span>KEW Group</p>
        <div className="ab-sld-sections">
          {locationGroups.map((group, groupIndex) => <div key={group.state} className="ab-sld-section">
            <h3 className="ab-sld-state">{group.state}<span>Bus section {String.fromCharCode(65 + groupIndex)}</span></h3>
            <div className="ab-sld-bus" aria-hidden="true">
              {groupIndex > 0 && <span className="ab-sld-coupler" />}
              <i data-ab-line />
            </div>
            <ul>
              {group.locations.map((location) => {
                const Icon = kindIcon[location.kind];
                return <li key={location.name} data-ab-stagger className={`ab-feeder is-${location.kind}`}>
                  <i className="ab-feeder-drop" aria-hidden="true" />
                  <div className="ab-feeder-node">
                    <Icon aria-hidden="true" size={18} strokeWidth={1.5} />
                    <p className="ab-feeder-kind">{kindLabel[location.kind]}</p>
                    <p className="ab-feeder-name">{location.name}</p>
                    <p className="ab-feeder-city">{location.city}, {group.state}</p>
                  </div>
                </li>;
              })}
            </ul>
          </div>)}
        </div>
      </div>
    </div>
  </section>;
}
