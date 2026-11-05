"use client";

import { useRef } from "react";
import { useEventAnimations } from "@/hooks/useEventAnimations";

/**
 * Client boundary that scopes events-page animations. Sections inside stay
 * Server Components and opt in to motion via data attributes.
 */
export default function EventsMotion({ children, className }: { children: React.ReactNode; className?: string }) {
  const root = useRef<HTMLElement>(null);
  useEventAnimations(root);

  return <main ref={root} id="top" className={className}>{children}</main>;
}
