"use client";

import type { RefObject } from "react";
import { gsap, ScrollTrigger, useGSAP, prefersReducedMotion } from "@/lib/gsap";

/**
 * Page-level motion for /contact. Elements opt in with data attributes:
 *
 * - [data-ct-hero]            hero copy, revealed in sequence on load
 * - [data-ct-hero-media]      hero image wrapper, eased in on load
 * - [data-ct-reveal]          fades up once when scrolled into view
 * - [data-ct-frame-reveal]    clip-path reveal for framed media (the map)
 * - [data-ct-stagger]         batched, staggered entrance (contact channels)
 *
 * Everything is created inside the useGSAP context scoped to `scope`, so all
 * tweens and ScrollTriggers are reverted when the route unmounts.
 */
export function useContactAnimations(scope: RefObject<HTMLElement | null>) {
  useGSAP(() => {
    if (prefersReducedMotion()) return;
    const root = scope.current;
    if (!root) return;

    const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
    if (root.querySelector("[data-ct-hero-media]")) {
      intro.from("[data-ct-hero-media]", { scale: 1.12, autoAlpha: 0, duration: 1.5, ease: "power2.out" }, 0);
    }
    if (root.querySelector("[data-ct-hero]")) {
      intro.from("[data-ct-hero]", { y: 28, autoAlpha: 0, duration: 1.05, stagger: 0.1 }, 0.15);
    }

    gsap.utils.toArray<HTMLElement>("[data-ct-reveal]").forEach((element) => {
      gsap.from(element, {
        y: 32,
        autoAlpha: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: element, start: "top 86%", once: true },
      });
    });

    gsap.utils.toArray<HTMLElement>("[data-ct-frame-reveal]").forEach((element) => {
      gsap.fromTo(element, { clipPath: "inset(8% 6% 8% 6%)" }, {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: { trigger: element, start: "top 84%", once: true },
      });
    });

    const staggerItems = gsap.utils.toArray<HTMLElement>("[data-ct-stagger]");
    if (staggerItems.length) {
      gsap.set(staggerItems, { y: 36, autoAlpha: 0 });
      ScrollTrigger.batch(staggerItems, {
        start: "top 88%",
        once: true,
        onEnter: (batch) => gsap.to(batch, { y: 0, autoAlpha: 1, duration: 0.85, stagger: 0.1, ease: "power3.out", overwrite: true }),
      });
    }
  }, { scope });
}
