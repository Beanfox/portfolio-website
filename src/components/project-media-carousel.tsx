"use client";

import { useState } from "react";

type MediaItem = {
  type: "image" | "video";
  label: string;
  src?: string;
  poster?: string;
};

type ProjectMediaCarouselProps = {
  media: MediaItem[];
  mediaStyle?: "wide" | "standard" | "square";
};

export default function ProjectMediaCarousel({
  media,
  mediaStyle = "wide",
}: ProjectMediaCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = media[activeIndex];

  const hasMany = media.length > 1;

  const handlePrevious = () => {
    setActiveIndex((current) => (current === 0 ? media.length - 1 : current - 1));
  };

  const handleNext = () => {
    setActiveIndex((current) => (current === media.length - 1 ? 0 : current + 1));
  };

  const mediaAspectClass =
    mediaStyle === "wide"
      ? "aspect-[16/10] sm:aspect-[16/9]"
      : mediaStyle === "square"
        ? "aspect-square"
        : "aspect-[4/3]";

  const backdropSrc =
    active.type === "image"
      ? active.src
      : active.type === "video"
        ? active.poster ?? active.src
        : undefined;

  return (
    <div className="mt-8">
      <div
        className={`relative flex w-full items-center justify-center overflow-hidden rounded-3xl border border-dashed border-zinc-600 bg-gradient-to-br from-indigo-500/10 via-zinc-900 to-sky-500/10 text-zinc-300 ${mediaAspectClass}`}
      >
        {backdropSrc && (
          <img
            src={backdropSrc}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full scale-110 object-cover opacity-35 blur-3xl"
          />
        )}
        {active.type === "video" ? (
          active.src ? (
            <video
              controls
              preload="metadata"
              poster={active.poster}
              className="relative z-10 h-full w-full bg-zinc-950/60 object-contain p-2"
            >
              <source src={active.src} />
            </video>
          ) : (
            <div className="px-4 text-center text-lg font-medium">{active.label}</div>
          )
        ) : active.src ? (
          <img
            src={active.src}
            alt={active.label}
            className="pointer-events-none relative z-10 h-full w-full bg-zinc-950/60 object-contain p-2"
          />
        ) : (
          <div className="relative z-10 px-4 text-center text-lg font-medium">{active.label}</div>
        )}

        {hasMany && (
          <>
            <button
              type="button"
              onClick={handlePrevious}
              className="absolute left-3 z-20 rounded-full border border-zinc-500 bg-zinc-900/80 px-4 py-2 text-sm font-medium text-zinc-200 transition-colors hover:border-indigo-300 hover:text-indigo-100"
              aria-label="Previous media"
            >
              ←
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-3 z-20 rounded-full border border-zinc-500 bg-zinc-900/80 px-4 py-2 text-sm font-medium text-zinc-200 transition-colors hover:border-indigo-300 hover:text-indigo-100"
              aria-label="Next media"
            >
              →
            </button>
          </>
        )}
      </div>

      {hasMany && (
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          {media.map((item, index) => (
            <button
              type="button"
              key={`${item.label}-${index}`}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                index === activeIndex ? "bg-indigo-300" : "bg-zinc-600 hover:bg-zinc-500"
              }`}
              aria-label={`View media ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
