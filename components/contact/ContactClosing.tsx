import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { contactChannels } from "@/data/contact";

const email = contactChannels.find((channel) => channel.kind === "email");

export default function ContactClosing() {
  return <section aria-labelledby="contact-closing-title" className="ct-closing">
    <div className="shell ct-closing-inner" data-ct-reveal>
      <h2 id="contact-closing-title" className="font-display">Have a requirement in mind? <span>Write to the KEW team.</span></h2>
      <div className="ct-closing-links">
        <Link href="/#products">Explore the product range <ArrowRight size={16} aria-hidden="true" /></Link>
        <Link href="/about">About KEW <ArrowRight size={16} aria-hidden="true" /></Link>
        {email?.href && <a href={email.href} className="is-primary">Email {email.value} <ArrowUpRight size={16} aria-hidden="true" /></a>}
      </div>
    </div>
  </section>;
}
