import Link from "next/link";
import { footerLinks, resolveHref } from "@/components/layout/site-links";

export default function SiteFooter({ isHome = false }: { isHome?: boolean }) {
  return <footer className="site-footer bg-[#080a0c] py-14 text-white/70">
    <div className="shell grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
      <div>
        <div className="brand-mark relative h-14 w-28 overflow-hidden"><img src="/images/kew-logo.webp" alt="KEW Electricals" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-contain" /></div>
        <p className="mt-6 max-w-sm text-sm leading-7">Kusum Engineering Works — electrical switchgear, fusegear, controlgear and power distribution products.</p>
      </div>
      <div>
        <p className="footer-title">Explore</p>
        <div className="grid gap-3 text-sm">
          {footerLinks.map(([label, href]) => {
            const target = resolveHref(href, isHome);
            return target.startsWith("/") ? <Link key={href} href={target}>{label}</Link> : <a key={href} href={target}>{label}</a>;
          })}
        </div>
      </div>
      <address className="not-italic">
        <p className="footer-title">Head office</p>
        <p className="text-sm leading-7">Kusum Engineering Works<br />S.V. Road, Goregaon (West)<br />Mumbai – 400104, India</p>
        <a className="mt-4 block text-sm text-white" href="mailto:info@kewelectricals.com">info@kewelectricals.com</a>
        <a className="mt-2 block text-sm text-white" href="tel:+91224276764990">+91 22 4276764990</a>
      </address>
    </div>
    <div className="shell mt-14 flex flex-col gap-3 border-t border-white/12 pt-6 text-[10px] uppercase tracking-[.13em] sm:flex-row sm:justify-between"><p>© {new Date().getFullYear()} Kusum Engineering Works</p><p>Concept website · KEW Electricals</p></div>
  </footer>;
}
