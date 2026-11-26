import type { Photo } from "@/lib/content";

/** Mirabilia's own tour video, hosted on their existing media storage. preload="none" keeps the 18 MB file off the initial load. */
export function VideoTour({ src, poster, title, caption = true }: { src: string; poster: Photo; title: string; caption?: boolean }) {
  return (
    <figure>
      <div className="overflow-hidden rounded-[28px] bg-ink shadow-[8px_8px_0_var(--color-sun)]">
        <video controls preload="none" aria-label={title} poster={poster.src} width={1920} height={1080} className="aspect-video h-auto w-full object-cover">
          <source src={src} type="video/mp4" />
          Your browser cannot play this video.{" "}
          <a href={src} className="underline">
            Download the {title}
          </a>
          .
        </video>
      </div>
      {caption && <figcaption className="mt-3 font-display text-lg text-grape">{title}</figcaption>}
    </figure>
  );
}
