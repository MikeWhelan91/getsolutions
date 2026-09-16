"use client";

import Image from "next/image";
import { useRef, useState } from "react";

interface ScreenshotCarouselProps {
  appName: string;
  screenshots: string[];
}

export default function ScreenshotCarousel({ appName, screenshots }: ScreenshotCarouselProps) {
  const railRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);
  const pageCount = Math.ceil(screenshots.length / 4);

  const goToPage = (nextPage: number) => {
    const rail = railRef.current;
    if (!rail) return;
    rail.scrollTo({ left: nextPage * rail.clientWidth, behavior: "smooth" });
    setPage(nextPage);
  };

  const updatePageFromScroll = () => {
    const rail = railRef.current;
    if (!rail) return;
    setPage(Math.min(pageCount - 1, Math.round(rail.scrollLeft / rail.clientWidth)));
  };

  return (
    <div className="screenshot-carousel">
      <div ref={railRef} className="screenshot-rail" aria-label={`${appName} screenshots`} onScroll={updatePageFromScroll}>
        {screenshots.map((src, index) => <figure className="screenshot-card" key={src}>
          <Image src={src} alt={`${appName} app screenshot ${index + 1}`} width={310} height={671} sizes="(max-width: 640px) 74vw, 310px" priority={index < 2}/>
        </figure>)}
      </div>
      {pageCount > 1 && <div className="screenshot-carousel-controls" aria-label="Screenshot carousel controls">
        <div className="screenshot-carousel-buttons">
          <button type="button" className="screenshot-carousel-button" onClick={() => goToPage(Math.max(0, page - 1))} disabled={page === 0} aria-label="Show previous screenshots">←</button>
          <button type="button" className="screenshot-carousel-button" onClick={() => goToPage(Math.min(pageCount - 1, page + 1))} disabled={page === pageCount - 1} aria-label="Show more screenshots">→</button>
        </div>
        <div className="screenshot-carousel-dots" aria-label={`Screenshot page ${page + 1} of ${pageCount}`}>
          {Array.from({ length: pageCount }, (_, index) => <button type="button" key={index} onClick={() => goToPage(index)} className={`screenshot-carousel-dot ${page === index ? "is-active" : ""}`} aria-label={`Show screenshots ${index * 4 + 1} to ${Math.min((index + 1) * 4, screenshots.length)}`} aria-current={page === index ? "true" : undefined}/>) }
        </div>
        <span className="screenshot-carousel-count">{String(page + 1).padStart(2, "0")} / {String(pageCount).padStart(2, "0")}</span>
      </div>}
    </div>
  );
}
