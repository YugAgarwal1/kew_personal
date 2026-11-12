"use client";

import { useRef } from "react";
import { useAboutAnimations } from "@/hooks/useAboutAnimations";

/**
 * Client boundary that scopes about-page animations. Sections inside stay
 * Server Components and opt in to motion via data attributes.
 */
export default function AboutMotion({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLElement>(null);
  useAboutAnimations(root);

  return <main ref={root} id="top">{children}</main>;
}
