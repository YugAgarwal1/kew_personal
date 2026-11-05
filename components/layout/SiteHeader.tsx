"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";
import { enquiryUrl, primaryLinks, mobileLinks, resolveHref } from "@/components/layout/site-links";

type SiteHeaderProps = {
  /** On the homepage, section links stay as in-page anchors. */
  isHome?: boolean;
  /** Primary link to mark with aria-current. */
  current?: string;
};

function NavAnchor({ href, isHome, ...props }: { href: string; isHome: boolean } & React.ComponentProps<"a">) {
  const target = resolveHref(href, isHome);
  return target.startsWith("#") ? <a href={target} {...props} /> : <Link href={target} {...props} />;
}

export default function SiteHeader({ isHome = false, current }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const closeOnEscape = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  return <>
    <header className="site-header absolute inset-x-0 top-0 z-50 border-b border-white/15 text-white">
      <div className="shell flex h-20 items-center justify-between">
        <NavAnchor isHome={isHome} href={isHome ? "#top" : "/"} aria-label="KEW Electricals home" className="brand-mark relative z-10 block h-11 w-[90px] overflow-hidden"><img src="/images/kew-logo.webp" alt="KEW Electricals" loading="eager" decoding="sync" className="absolute inset-0 w-full h-full object-contain" /></NavAnchor>
        <nav aria-label="Primary navigation" className="hidden items-center gap-8 text-[11px] font-semibold uppercase tracking-[0.16em] lg:flex">
          {primaryLinks.map(([label, href]) => <NavAnchor key={href} isHome={isHome} className="nav-link" href={href} aria-current={current === href ? "page" : undefined}>{label}</NavAnchor>)}
        </nav>
        <a href={enquiryUrl} className="header-enquiry hidden px-5 py-3 text-[11px] font-bold uppercase tracking-[0.14em] lg:block">Send an enquiry</a>
        <button className="mobile-menu-toggle fixed right-4 top-3 z-[60] grid h-11 w-11 place-items-center lg:hidden" aria-label="Toggle navigation" aria-controls="mobile-navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </div>
    </header>
    {menuOpen && <nav id="mobile-navigation" aria-label="Mobile navigation" className="mobile-menu lg:hidden">
        <div className="mobile-menu-heading">
          <p className="mobile-menu-label">Explore KEW</p>
          <span>Electrical engineering since 1961</span>
        </div>
        <div className="mobile-menu-list">
          {mobileLinks.map(([label, href]) => <NavAnchor key={href} isHome={isHome} className="mobile-menu-link" href={href} aria-current={current === href ? "page" : undefined} onClick={() => setMenuOpen(false)}><strong>{label}</strong><ArrowUpRight aria-hidden="true" size={16} /></NavAnchor>)}
        </div>
        <a className="mobile-menu-enquiry" href={enquiryUrl}>Start an enquiry <ArrowRight size={17} /></a>
      </nav>}
  </>;
}
