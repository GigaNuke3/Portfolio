"use client";

import { useRef } from "react";
import { gsap } from "gsap";

// Native <details> (works without JS, keyboard-friendly); GSAP only animates the unfold.
export default function Examine({
  label = "Examine artifact",
  closeLabel = "Close record",
  cursor = "Open artifact",
  id,
  children,
}: {
  label?: string;
  closeLabel?: string;
  cursor?: string;
  id?: string;
  children: React.ReactNode;
}) {
  const contentRef = useRef<HTMLDivElement>(null);

  function onToggle(e: React.SyntheticEvent<HTMLDetailsElement>) {
    if (!e.currentTarget.open || !contentRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.fromTo(
      contentRef.current,
      { height: 0, opacity: 0 },
      { height: "auto", opacity: 1, duration: 0.5, ease: "power2.out", clearProps: "height" },
    );
  }

  return (
    <details id={id} onToggle={onToggle} className="group mt-6 border-t border-ink">
      <summary
        data-cursor={cursor}
        className="flex cursor-pointer list-none items-center justify-between py-3 font-mono text-xs uppercase tracking-[0.25em] hover:underline [&::-webkit-details-marker]:hidden"
      >
        <span className="group-open:hidden">{label}</span>
        <span className="hidden group-open:inline">{closeLabel}</span>
        <span aria-hidden className="text-base transition-transform group-open:rotate-45">
          +
        </span>
      </summary>
      <div ref={contentRef} className="overflow-hidden">
        {children}
      </div>
    </details>
  );
}
