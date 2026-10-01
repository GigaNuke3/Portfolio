"use client";

import { useRef } from "react";
import { toggleIR } from "@/lib/ir";

// Five quick clicks on the logo switch the exhibition into infrared (its "underdrawing").
export default function EcoLogo() {
  const clicks = useRef<number[]>([]);

  function onClick() {
    const now = Date.now();
    clicks.current = [...clicks.current.filter((t) => now - t < 1500), now];
    if (clicks.current.length >= 5) {
      clicks.current = [];
      toggleIR();
    }
  }

  return (
    <a href="#home" onClick={onClick} className="font-display text-xl text-ink">
      ECO
    </a>
  );
}
