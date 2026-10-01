"use client";

import { useState } from "react";
import { skillCategories, type Specimen } from "@/data/skills";
import RoomLabel from "@/components/RoomLabel";

const specimenId = (code: string, i: number) => `${code}·${String(i + 1).padStart(2, "0")}`;

const first = skillCategories[0];
const initialIndex = Math.max(0, first.items.findIndex((s) => s.name.startsWith("Ollama")));
const initial = { specimen: first.items[initialIndex], id: specimenId(first.code, initialIndex) };

export default function SkillsSection() {
  const [active, setActive] = useState<{ specimen: Specimen; id: string }>(initial);

  return (
    <section
      id="skills"
      data-room="V"
      data-room-name="The Technical Collection"
      data-sketch="<SkillsSection />"
      className="relative border-b-4 border-ink px-6 py-24 sm:px-12 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <RoomLabel room="V" name="The Technical Collection" />
        <header className="reveal">
          <h2 className="font-display text-4xl uppercase tracking-tight sm:text-6xl">The Technical Collection</h2>
          <p className="mt-3 max-w-[52ch] text-base leading-relaxed">
            Every specimen is catalogued with its provenance. Hover or select one to read what it is,
            how it&apos;s used, and where it appears in the works.
          </p>
        </header>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <aside
            aria-live="polite"
            className="sticky top-[7.5rem] z-10 border-2 border-ink bg-plaster p-5 lg:order-2"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/60">Specimen {active.id}</p>
            <h3 className="mt-2 font-display text-xl uppercase leading-tight">{active.specimen.name}</h3>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/60">What it is</dt>
                <dd className="mt-0.5">{active.specimen.what}</dd>
              </div>
              {active.specimen.how && (
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/60">How I use it</dt>
                  <dd className="mt-0.5">{active.specimen.how}</dd>
                </div>
              )}
              {active.specimen.usedIn && (
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/60">Used in</dt>
                  <dd className="mt-0.5 flex flex-wrap gap-x-3">
                    {active.specimen.usedIn.map((link) => (
                      <a key={link.href} href={link.href} className="underline underline-offset-4 hover:no-underline">
                        {link.label} →
                      </a>
                    ))}
                  </dd>
                </div>
              )}
            </dl>
          </aside>

          <div className="lg:order-1">
            {skillCategories.map((group) => (
              <div key={group.code} className="reveal border-t-2 border-ink py-6 first:border-t-4">
                <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-ink/60">
                  Drawer {group.code} · {group.category}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item, i) => {
                    const id = specimenId(group.code, i);
                    const isActive = active.id === id;
                    const select = () => setActive({ specimen: item, id });
                    return (
                      <li key={item.name}>
                        <button
                          type="button"
                          data-cursor="Examine"
                          aria-pressed={isActive}
                          onMouseEnter={select}
                          onFocus={select}
                          onClick={select}
                          className={`flex items-baseline gap-2 border-2 border-ink px-3 py-1 text-left text-sm transition-colors ${
                            isActive ? "bg-ink text-plaster" : "hover:bg-ink hover:text-plaster"
                          }`}
                        >
                          <span className="font-mono text-[9px] opacity-60">{id}</span>
                          {item.name}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
