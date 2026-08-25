"use client";

import { ChevronDown } from "lucide-react";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

type ScrollFrameCoreProps = {
  viewportClassName: string;
  scrollHint: string;
  ariaLabel: string;
  header: ReactNode;
  children: ReactNode;
};

export default function ScrollFrameCore({
  viewportClassName,
  scrollHint,
  ariaLabel,
  header,
  children,
}: ScrollFrameCoreProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [canScroll, setCanScroll] = useState(false);
  const [atBottom, setAtBottom] = useState(false);

  const updateScrollState = useCallback(() => {
    const element = viewportRef.current;
    if (!element) return;

    const scrollable = element.scrollHeight > element.clientHeight + 2;
    const reachedBottom =
      !scrollable || element.scrollTop + element.clientHeight >= element.scrollHeight - 8;

    setCanScroll(scrollable);
    setAtBottom(reachedBottom);
  }, []);

  useEffect(() => {
    updateScrollState();

    const element = viewportRef.current;
    if (!element) return;

    const handleLoad = () => {
      window.requestAnimationFrame(updateScrollState);
    };

    element.addEventListener("scroll", updateScrollState, { passive: true });

    element.querySelectorAll("img").forEach((image) => {
      if (image.complete) handleLoad();
      else image.addEventListener("load", handleLoad);
    });

    const resizeObserver = new ResizeObserver(updateScrollState);
    resizeObserver.observe(element);

    return () => {
      element.removeEventListener("scroll", updateScrollState);
      element.querySelectorAll("img").forEach((image) => {
        image.removeEventListener("load", handleLoad);
      });
      resizeObserver.disconnect();
    };
  }, [updateScrollState, children]);

  return (
    <figure className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0d] sm:rounded-[28px]">
      {header}

      <div className="relative">
        <div
          ref={viewportRef}
          tabIndex={0}
          role="region"
          aria-label={ariaLabel}
          className={`scroll-frame-viewport relative overflow-y-auto overflow-x-hidden overscroll-contain focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-gold ${viewportClassName}`}
          onScroll={updateScrollState}
        >
          {children}
        </div>

        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/80 to-transparent transition-opacity duration-300 ${
            canScroll && !atBottom ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {canScroll ? (
        <figcaption className="flex items-center gap-2 px-5 py-4 text-xs text-bone">
          <ChevronDown size={14} className="shrink-0 text-gold" aria-hidden="true" />
          {scrollHint}
        </figcaption>
      ) : null}
    </figure>
  );
}
