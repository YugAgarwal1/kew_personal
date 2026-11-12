"use client";

import type { RefObject } from "react";
import { gsap, ScrollTrigger, useGSAP, prefersReducedMotion } from "@/lib/gsap";

/**
 * Page-level motion for /about. Elements opt in with data attributes:
 *
 * - [data-ab-hero]            hero copy, revealed in sequence on load
 * - [data-ab-hero-frame]      hero image frames, wiped in on load
 * - [data-ab-year]            oversized year numerals, drift slowly against the scroll (desktop only)
 * - [data-ab-reveal]          fades up once when scrolled into view
 * - [data-ab-image-reveal]    clip-path reveal with a subtle inner image settle
 * - [data-ab-stagger]         batched, staggered entrance
 * - [data-ab-line]            line that draws once in view (scaleX, or scaleY with data-ab-line="y")
 * - [data-ab-progress]        line that fills as its section scrolls through the viewport
 *
 * Everything is created inside the useGSAP context scoped to `scope`, so all
 * tweens and ScrollTriggers are reverted when the route unmounts.
 */
export function useAboutAnimations(scope: RefObject<HTMLElement | null>) {
  useGSAP(() => {
    if (prefersReducedMotion()) return;
    const root = scope.current;
    if (!root) return;

    const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
    const frames = gsap.utils.toArray<HTMLElement>("[data-ab-hero-frame]");
    frames.forEach((frame, index) => {
      intro.fromTo(frame, { clipPath: "inset(0% 0% 100% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.3, ease: "power4.inOut" }, 0.1 + index * 0.25);
      const image = frame.querySelector("img");
      if (image) intro.fromTo(image, { scale: 1.18 }, { scale: 1, duration: 1.8, ease: "power2.out" }, 0.1 + index * 0.25);
    });
    if (root.querySelector("[data-ab-hero]")) {
      intro.from("[data-ab-hero]", { y: 28, autoAlpha: 0, duration: 1.05, stagger: 0.09 }, 0.2);
    }

    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      gsap.utils.toArray<HTMLElement>("[data-ab-year]").forEach((element) => {
        gsap.fromTo(element, { yPercent: 6 }, {
          yPercent: -10,
          ease: "none",
          scrollTrigger: { trigger: element.closest("section") ?? element, start: "top bottom", end: "bottom top", scrub: 0.8 },
        });
      });
    });

    gsap.utils.toArray<HTMLElement>("[data-ab-reveal]").forEach((element) => {
      gsap.from(element, {
        y: 32,
        autoAlpha: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: element, start: "top 86%", once: true },
      });
    });

    gsap.utils.toArray<HTMLElement>("[data-ab-image-reveal]").forEach((element) => {
      const image = element.querySelector("img");
      const reveal = gsap.timeline({ scrollTrigger: { trigger: element, start: "top 84%", once: true } });
      reveal.fromTo(element, { clipPath: "inset(8% 6% 8% 6%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.1, ease: "power3.out" }, 0);
      if (image) reveal.fromTo(image, { scale: 1.12 }, { scale: 1, duration: 1.4, ease: "power2.out" }, 0);
    });

    gsap.utils.toArray<HTMLElement>("[data-ab-line]").forEach((element) => {
      const vertical = element.dataset.abLine === "y";
      gsap.fromTo(element, vertical ? { scaleY: 0 } : { scaleX: 0 }, {
        ...(vertical ? { scaleY: 1 } : { scaleX: 1 }),
        duration: 1.4,
        ease: "power3.inOut",
        scrollTrigger: { trigger: element, start: "top 85%", once: true },
      });
    });

    gsap.utils.toArray<HTMLElement>("[data-ab-progress]").forEach((element) => {
      const vertical = element.dataset.abProgress === "y";
      gsap.fromTo(element, vertical ? { scaleY: 0 } : { scaleX: 0 }, {
        ...(vertical ? { scaleY: 1 } : { scaleX: 1 }),
        ease: "none",
        scrollTrigger: { trigger: element.parentElement ?? element, start: "top 80%", end: "bottom 45%", scrub: 0.6 },
      });
    });

    const staggerItems = gsap.utils.toArray<HTMLElement>("[data-ab-stagger]");
    if (staggerItems.length) {
      gsap.set(staggerItems, { y: 36, autoAlpha: 0 });
      ScrollTrigger.batch(staggerItems, {
        start: "top 88%",
        once: true,
        onEnter: (batch) => gsap.to(batch, { y: 0, autoAlpha: 1, duration: 0.85, stagger: 0.1, ease: "power3.out", overwrite: true }),
      });
    }

    return () => mm.revert();
  }, { scope });
}
