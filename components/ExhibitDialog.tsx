"use client";

import { useEffect, useRef } from "react";
import type { Exhibit } from "@/data/exhibits";

export default function ExhibitDialog({ exhibit, onClose }: { exhibit: Exhibit | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (exhibit && !dialog.open) dialog.showModal();
    if (!exhibit && dialog.open) dialog.close();
  }, [exhibit]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && ref.current.close()}
      className="pointer-events-auto m-auto w-[min(90vw,32rem)] border-4 border-ink bg-plaster p-0 text-ink backdrop:bg-black/70"
    >
      {exhibit && (
        <article className="p-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink/60">
            Exhibit No. {exhibit.no}
          </p>
          <h3 className="mt-2 font-display text-2xl uppercase">{exhibit.title}</h3>
          <p className="mt-1 font-mono text-xs italic text-ink/60">{exhibit.after}</p>
          <p className="mt-5 border-l-4 border-ink pl-4 text-lg leading-snug">{exhibit.meaning}</p>
          <p className="mt-5 text-sm leading-relaxed">{exhibit.plaque}</p>
          <dl className="mt-5 flex gap-4 border-t border-ink pt-3 text-sm">
            <dt className="font-mono text-xs uppercase tracking-[0.2em] text-ink/60">Medium</dt>
            <dd>{exhibit.medium}</dd>
          </dl>
          <div className="mt-6 flex items-center justify-between gap-4">
            <a
              href={exhibit.target}
              onClick={() => ref.current?.close()}
              className="border-2 border-ink px-4 py-1.5 font-mono text-xs uppercase tracking-wide hover:bg-ink hover:text-plaster"
            >
              {exhibit.targetLabel} →
            </a>
            <button
              type="button"
              onClick={() => ref.current?.close()}
              className="font-mono text-xs uppercase tracking-[0.2em] hover:underline"
            >
              Close ×
            </button>
          </div>
        </article>
      )}
    </dialog>
  );
}
