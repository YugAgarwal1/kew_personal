"use client";

import type { RefObject } from "react";
import { gsap, ScrollTrigger, useGSAP, prefersReducedMotion } from "@/lib/gsap";

/**
 * Page-level motion for the events pages. Elements opt in with data attributes:
 *
 * - [data-ev-hero]            hero copy, revealed in sequence on load
 * - [data-ev-hero-media]      hero image wrapper, eased in on load
 * - [data-ev-reveal]          fades up once when scrolled into view
 * - [data-ev-image-reveal]    clip-path reveal with a subtle inner image settle
 * - [data-ev-stagger-item]    batched, staggered entrance (gallery tiles, highlights)
 *
 * Everything is created inside the useGSAP context scoped to `scope`, so all
 * tweens and ScrollTriggers are reverted when the route unmounts.
 */
export function useEventAnimations(scope: RefObject<HTMLElement | null>) {
  useGSAP(() => {
    if (prefersReducedMotion()) return;

    const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
    if (scope.current?.querySelector("[data-ev-hero-media]")) {
      intro.from("[data-ev-hero-media]", { scale: 1.12, autoAlpha: 0, duration: 1.5, ease: "power2.out" }, 0);
    }
    if (scope.current?.querySelector("[data-ev-hero]")) {
      intro.from("[data-ev-hero]", { y: 28, autoAlpha: 0, duration: 1.05, stagger: 0.1 }, 0.15);
    }

    gsap.utils.toArray<HTMLElement>("[data-ev-reveal]").forEach((element) => {
      gsap.from(element, {
        y: 32,
        autoAlpha: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: element, start: "top 86%", once: true },
      });
    });

    gsap.utils.toArray<HTMLElement>("[data-ev-image-reveal]").forEach((element) => {
      const image = element.querySelector("img");
      const reveal = gsap.timeline({ scrollTrigger: { trigger: element, start: "top 84%", once: true } });
      reveal.fromTo(element, { clipPath: "inset(10% 6% 10% 6%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.1, ease: "power3.out" }, 0);
      if (image) reveal.fromTo(image, { scale: 1.14 }, { scale: 1, duration: 1.4, ease: "power2.out" }, 0);
    });

    const staggerItems = gsap.utils.toArray<HTMLElement>("[data-ev-stagger-item]");
    if (staggerItems.length) {
      gsap.set(staggerItems, { y: 36, autoAlpha: 0 });
      ScrollTrigger.batch(staggerItems, {
        start: "top 88%",
        once: true,
        onEnter: (batch) => gsap.to(batch, { y: 0, autoAlpha: 1, duration: 0.85, stagger: 0.09, ease: "power3.out", overwrite: true }),
      });
    }
  }, { scope });
}

/**
 * Staggered entrance for event cards. Re-runs (reverting the previous run)
 * whenever `key` changes, so filtered results animate in without leaving
 * stale ScrollTriggers behind.
 */
export function useCardEntrance(scope: RefObject<HTMLElement | null>, key: string) {
  useGSAP(() => {
    if (prefersReducedMotion()) return;

    const cards = gsap.utils.toArray<HTMLElement>("[data-ev-card]");
    if (!cards.length) return;

    gsap.set(cards, { y: 44, autoAlpha: 0 });
    ScrollTrigger.batch(cards, {
      start: "top 90%",
      once: true,
      onEnter: (batch) => gsap.to(batch, { y: 0, autoAlpha: 1, duration: 0.9, stagger: 0.11, ease: "power3.out", overwrite: true }),
    });
  }, { scope, dependencies: [key], revertOnUpdate: true });
}
