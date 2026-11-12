import { ArrowUpRight, Mail, MapPin, Phone, Printer } from "lucide-react";
import { contactChannels, headOffice, officeMap } from "@/data/contact";
import type { ContactChannel } from "@/types/contact";

const channelIcon: Record<ContactChannel["kind"], typeof Phone> = { phone: Phone, fax: Printer, email: Mail };

function ChannelRow({ channel }: { channel: ContactChannel }) {
  const Icon = channelIcon[channel.kind];
  const body = <>
    <span className="ct-channel-icon"><Icon size={18} strokeWidth={1.6} aria-hidden="true" /></span>
    <span className="ct-channel-text">
      <span className="ct-channel-label">{channel.label}</span>
      <span className="ct-channel-value">{channel.value}</span>
      <span className="ct-channel-note">{channel.note}</span>
    </span>
    {channel.href && <ArrowUpRight className="ct-channel-arrow" size={18} aria-hidden="true" />}
  </>;

  return <li data-ct-stagger>
    {channel.href
      ? <a className="ct-channel is-link" href={channel.href}>{body}</a>
      : <div className="ct-channel">{body}</div>}
  </li>;
}

export default function ContactDetails() {
  return <section id="head-office" aria-labelledby="head-office-title" className="ct-details section-pad">
    <div className="shell">
      <div className="ct-details-heading" data-ct-reveal>
        <div>
          <p className="ct-mark"><span>01</span><i aria-hidden="true" />Head office</p>
          <h2 id="head-office-title" className="ct-title font-display">Find us in <span>Goregaon, Mumbai.</span></h2>
        </div>
        <p className="ct-lead">Call, write or visit. Every enquiry to the head office is routed to the right KEW team.</p>
      </div>

      <div className="ct-details-layout">
        <div className="ct-office">
          <address className="ct-address" data-ct-reveal>
            <span className="ct-address-pin"><MapPin size={18} strokeWidth={1.6} aria-hidden="true" /></span>
            <span className="ct-address-company font-display">{headOffice.company}</span>
            <span className="ct-address-lines">{headOffice.addressLines.map((line) => <span key={line}>{line}</span>)}</span>
            <a className="ct-directions" href={officeMap.directionsUrl} target="_blank" rel="noopener noreferrer">Get directions <ArrowUpRight size={16} aria-hidden="true" /></a>
          </address>

          <ul className="ct-channels" aria-label="Contact channels">
            {contactChannels.map((channel) => <ChannelRow key={channel.kind} channel={channel} />)}
          </ul>
        </div>

        <figure className="ct-map" data-ct-frame-reveal>
          <figcaption className="ct-map-bar"><span>Head office location</span><span>{headOffice.city}</span></figcaption>
          <div className="ct-map-canvas">
            <iframe src={officeMap.embedUrl} title={`Map showing the ${headOffice.company} head office in ${headOffice.city}`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          </div>
          <div className="ct-map-foot">
            <span><i aria-hidden="true" />KEW head office</span>
            <a href={officeMap.viewerUrl} target="_blank" rel="noopener noreferrer">Open larger map <ArrowUpRight size={14} aria-hidden="true" /></a>
          </div>
        </figure>
      </div>
    </div>
  </section>;
}
