"use client";

import { useRef } from "react";
import { useContactAnimations } from "@/hooks/useContactAnimations";

/**
 * Client boundary that scopes contact-page animations. Sections inside stay
 * Server Components and opt in to motion via data attributes.
 */
export default function ContactMotion({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLElement>(null);
  useContactAnimations(root);

  return <main ref={root} id="top">{children}</main>;
}
