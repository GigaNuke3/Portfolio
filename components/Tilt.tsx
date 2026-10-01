"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

// Turns an image slightly toward the cursor, like an object examined under museum glass.
export default function Tilt({ className, children }: { className?: string; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)").matches) return;

    gsap.set(el, { transformPerspective: 900 });
    const rx = gsap.quickTo(el, "rotationX", { duration: 0.6, ease: "power3" });
    const ry = gsap.quickTo(el, "rotationY", { duration: 0.6, ease: "power3" });

    function move(e: PointerEvent) {
      const r = el!.getBoundingClientRect();
      ry(((e.clientX - r.left) / r.width - 0.5) * 4);
      rx(-((e.clientY - r.top) / r.height - 0.5) * 4);
    }
    function leave() {
      rx(0);
      ry(0);
    }

    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", leave);
    return () => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
