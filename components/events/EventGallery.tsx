"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Expand, X } from "lucide-react";
import { pad } from "@/lib/events";
import type { EventImage } from "@/types/events";

export default function EventGallery({ images, title }: { images: EventImage[]; title: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState<number | null>(null);
  const count = images.length;

  const open = (next: number) => {
    setIndex(next);
    dialog.current?.showModal();
  };
  const close = useCallback(() => dialog.current?.close(), []);
  const step = useCallback((delta: number) => setIndex((current) => current === null ? current : (current + delta + count) % count), [count]);

  useEffect(() => {
    const element = dialog.current;
    if (!element) return;
    const onClose = () => {
      setIndex(null);
      document.documentElement.style.overflow = "";
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") step(1);
      else if (event.key === "ArrowLeft") step(-1);
    };
    element.addEventListener("close", onClose);
    element.addEventListener("keydown", onKey);
    return () => {
      element.removeEventListener("close", onClose);
      element.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [step]);

  useEffect(() => {
    if (index !== null) document.documentElement.style.overflow = "hidden";
  }, [index]);

  if (!count) return null;
  const current = index === null ? null : images[index];

  return <section aria-labelledby="event-gallery-title" className="event-gallery section-pad">
    <div className="shell">
      <div data-ev-reveal className="event-gallery-heading">
        <div>
          <p className="product-section-mark events-section-mark">02 / Gallery</p>
          <h2 id="event-gallery-title" className="event-section-title font-display">From the <span>floor.</span></h2>
        </div>
        <p className="section-lead">{pad(count)} {count === 1 ? "photograph" : "photographs"}. Select an image to view it full screen.</p>
      </div>

      <ul className={`event-gallery-grid count-${Math.min(count, 6)}`}>
        {images.map((image, imageIndex) => (
          <li key={`${image.src}-${imageIndex}`} data-ev-stagger-item className="event-gallery-item">
            <button type="button" onClick={() => open(imageIndex)} aria-label={`View image ${imageIndex + 1} of ${count}: ${image.alt}`}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes={imageIndex === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 50vw, 33vw"}
                className="object-cover"
                style={{ objectPosition: image.position }}
              />
              <span className="event-gallery-caption">
                <span>{pad(imageIndex + 1)}</span>
                {image.caption && <span>{image.caption}</span>}
                <Expand size={14} aria-hidden="true" />
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>

    <dialog
      ref={dialog}
      className="event-lightbox"
      aria-label={`${title} gallery`}
      onClick={(event) => { if (event.target === event.currentTarget) close(); }}
    >
      {current && index !== null && <div className="event-lightbox-inner">
        <div className="event-lightbox-bar">
          <p>{pad(index + 1)} / {pad(count)}{current.caption && <span>{current.caption}</span>}</p>
          <button type="button" onClick={close} aria-label="Close gallery" autoFocus><X size={18} /></button>
        </div>
        <figure className="event-lightbox-figure">
          <div className="event-lightbox-image">
            <Image key={current.src + index} src={current.src} alt={current.alt} fill sizes="100vw" className="object-contain animate-in" />
          </div>
          <figcaption className="sr-only">{current.alt}</figcaption>
        </figure>
        {count > 1 && <div className="event-lightbox-controls">
          <button type="button" onClick={() => step(-1)} aria-label="Previous image"><ArrowLeft size={18} /></button>
          <button type="button" onClick={() => step(1)} aria-label="Next image"><ArrowRight size={18} /></button>
        </div>}
      </div>}
    </dialog>
  </section>;
}
