"use client";

import Image from "next/image";
import { useRef } from "react";
import type { Photo } from "@/lib/content";

/** Horizontal photo strip with previous/next buttons (the template's "Sneak Peek" carousel). */
export function Gallery({ photos, label }: { photos: Photo[]; label: string }) {
  const ref = useRef<HTMLUListElement>(null);
  const scroll = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <ul
        ref={ref}
        aria-label={label}
        tabIndex={0}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:thin]"
      >
        {photos.map((p, i) => (
          <li key={p.src + i} className="relative aspect-[4/5] w-[78%] shrink-0 snap-start overflow-hidden rounded-[22px] bg-mist sm:w-[44%] lg:w-[31%]">
            <Image src={p.src} alt={p.alt} fill sizes="(min-width: 1024px) 31vw, (min-width: 640px) 44vw, 78vw" className="object-cover" />
          </li>
        ))}
      </ul>
      <div className="mt-4 flex justify-end gap-2">
        <button type="button" onClick={() => scroll(-1)} aria-label="Previous photos" className="grid h-14 w-14 place-items-center rounded-full bg-sun-soft text-clay-ink ring-[2.5px] ring-clay-ink ring-offset-2 ring-offset-sun transition-transform hover:-translate-y-0.5 hover:bg-sun active:translate-y-0 motion-reduce:transition-none">
          <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden="true">
            <path d="M10 3L5 8l5 5" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
        <button type="button" onClick={() => scroll(1)} aria-label="Next photos" className="grid h-14 w-14 place-items-center rounded-full bg-sun-soft text-clay-ink ring-[2.5px] ring-clay-ink ring-offset-2 ring-offset-sun transition-transform hover:-translate-y-0.5 hover:bg-sun active:translate-y-0 motion-reduce:transition-none">
          <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden="true">
            <path d="M6 3l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
      </div>
    </div>
  );
}
