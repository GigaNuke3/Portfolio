"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

// A small curator's cursor: a dot that becomes a label ("VIEW →") over [data-cursor] elements.
// The native cursor stays visible — this is decoration, never a replacement.
export default function Cursor() {
  const rootRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const label = labelRef.current;
    if (!root || !label) return;
    if (!window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)").matches) return;

    root.style.display = "block";
    const xTo = gsap.quickTo(root, "x", { duration: 0.35, ease: "power3" });
    const yTo = gsap.quickTo(root, "y", { duration: 0.35, ease: "power3" });
    let current: string | null = null;

    function onMove(e: PointerEvent) {
      xTo(e.clientX);
      yTo(e.clientY);
      const target = (e.target as Element | null)?.closest<HTMLElement>("[data-cursor]");
      const next = target?.dataset.cursor ?? null;
      if (next === current || !label) return;
      current = next;
      label.textContent = next ? `${next} →` : "";
      label.style.opacity = next ? "1" : "0";
    }

    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div ref={rootRef} className="pointer-events-none fixed left-0 top-0 z-[100] hidden" aria-hidden>
      <div className="h-2 w-2 -translate-x-1/2 -translate-y-1/2 bg-white mix-blend-difference" />
      <span
        ref={labelRef}
        className="absolute left-3 top-1 whitespace-nowrap bg-ink px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-plaster opacity-0 transition-opacity duration-200"
      />
    </div>
  );
}
