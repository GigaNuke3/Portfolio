"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { revealOnScroll } from "@/lib/scrollReveal";

export default function RevealScope({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (ref.current) revealOnScroll(".reveal", ref.current);
  }, { scope: ref });

  return <div ref={ref}>{children}</div>;
}
