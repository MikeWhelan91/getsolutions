"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

interface Slide {
  src: string;
  alt: string;
  name?: string;
  tagline?: string;
}

interface HeroSlideshowProps {
  slides: Slide[];
  intervalMs?: number;
}

export default function HeroSlideshow({ slides, intervalMs = 5500 }: HeroSlideshowProps) {
  const validSlides = useMemo(() => slides.filter((slide) => Boolean(slide.src)), [slides]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (validSlides.length <= 1) {
      return;
    }

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % validSlides.length);
    }, intervalMs);

    return () => clearInterval(interval);
  }, [intervalMs, validSlides.length]);

  if (validSlides.length === 0) {
    return null;
  }

  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute inset-0 -z-10 rounded-[32px] bg-gradient-to-r from-grass-500/30 via-grass-400/20 to-transparent blur-3xl" aria-hidden="true" />
      <div className="relative rounded-[32px] bg-white/5 p-3 shadow-2xl backdrop-blur-xl">
        <div className="relative aspect-[5/3] w-full overflow-hidden rounded-3xl">
          {validSlides.map((slide, index) => (
            <div
              key={slide.src}
              className={`absolute inset-0 transition-opacity duration-700 ${index === activeIndex ? "opacity-100" : "opacity-0"}`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="(min-width: 1024px) 520px, 90vw"
              />
            </div>
          ))}
        </div>

        {(validSlides[activeIndex].name || validSlides[activeIndex].tagline) && (
          <div className="mt-5 flex flex-col items-center text-center text-sm text-gray-200">
            <div>
              {validSlides[activeIndex].name && (
                <p className="font-semibold text-white">{validSlides[activeIndex].name}</p>
              )}
              {validSlides[activeIndex].tagline && (
                <p className="text-xs text-gray-400">{validSlides[activeIndex].tagline}</p>
              )}
            </div>
            <div className="mt-3 flex items-center gap-2">
              {validSlides.map((slide, index) => (
                <button
                  key={`${slide.src}-dot`}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show ${slide.name || "slide"} banner`}
                  className={`h-2.5 w-2.5 rounded-full transition-all ${index === activeIndex ? "bg-grass-300" : "bg-white/30 hover:bg-white/60"}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
