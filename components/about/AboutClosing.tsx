import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { enquiryUrl } from "@/components/layout/site-links";

export default function AboutClosing() {
  return <section aria-labelledby="about-closing-title" className="ab-closing">
    <div className="shell ab-closing-inner" data-ab-reveal>
      <h2 id="about-closing-title" className="font-display">More than six decades on, <span>the work continues.</span></h2>
      <div className="ab-closing-links">
        <Link href="/#products">Explore the product range <ArrowRight size={16} aria-hidden="true" /></Link>
        <Link href="/events">Events &amp; exhibitions <ArrowRight size={16} aria-hidden="true" /></Link>
        <a href={enquiryUrl} className="is-primary">Send an enquiry <ArrowUpRight size={16} aria-hidden="true" /></a>
      </div>
    </div>
  </section>;
}
