"use client";

import { useEffect, useState } from "react";

type Room = { num: string; name: string };

// Fixed wayfinding plaque — tells the visitor which room of the exhibition they're in.
export default function RoomPlaque() {
  const [room, setRoom] = useState<Room | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          setRoom({ num: el.dataset.room ?? "", name: el.dataset.roomName ?? "" });
        }
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );
    document.querySelectorAll("[data-room]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  if (!room || room.num === "I") return null;

  return (
    <div className="pointer-events-none fixed bottom-4 left-4 z-40 hidden overflow-hidden border border-ink bg-plaster sm:block">
      <p
        key={room.num}
        className="animate-plaque-in px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.3em] text-ink"
      >
        Room {room.num} · {room.name}
      </p>
    </div>
  );
}
