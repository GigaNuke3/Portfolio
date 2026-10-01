"use client";

import { useState } from "react";
import Image from "next/image";
import { featuredProject } from "@/data/projects";

const pad = (n: number) => String(n).padStart(2, "0");

export default function FeaturedProject() {
  const [index, setIndex] = useState(0);
  const { images, techStack } = featuredProject;

  function go(direction: 1 | -1) {
    setIndex((i) => (i + direction + images.length) % images.length);
  }

  return (
    <div className="reveal">
      <p className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.3em]">
        <span>{featuredProject.index} / Featured Work</span>
        <span className="h-px flex-1 bg-ink" />
      </p>

      <div className="mt-8 grid items-center gap-10 border-2 border-ink p-6 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-14 md:p-10">
        <div className="mx-auto w-full max-w-[280px] md:max-w-[320px]">
          <div className="brutal-shadow-sm relative aspect-[9/16] w-full border-2 border-ink">
            <Image
              src={images[index]}
              alt={`${featuredProject.title} screenshot ${index + 1}`}
              fill
              sizes="(min-width: 768px) 320px, 280px"
              className="object-cover"
            />
          </div>

          <div className="mt-6 flex items-center justify-between font-mono text-xs uppercase tracking-[0.2em]">
            <button
              type="button"
              aria-label="Previous screenshot"
              onClick={() => go(-1)}
              className="px-1 hover:underline"
            >
              ←
            </button>
            <span>
              {pad(index + 1)} / {pad(images.length)}
            </span>
            <button
              type="button"
              aria-label="Next screenshot"
              onClick={() => go(1)}
              className="px-1 hover:underline"
            >
              →
            </button>
          </div>
        </div>

        <div>
          <p className="border-b border-ink pb-3 font-mono text-xs uppercase tracking-[0.25em]">
            {featuredProject.category}
          </p>
          <h3 className="mt-5 font-display text-4xl uppercase tracking-tight sm:text-5xl">
            {featuredProject.title}
          </h3>

          <section className="mt-6">
            <h4 className="font-mono text-xs uppercase tracking-[0.25em] text-ink/60">Description</h4>
            <p className="mt-2 max-w-[44ch] text-base leading-relaxed">{featuredProject.description}</p>
          </section>

          <section className="mt-6">
            <h4 className="font-mono text-xs uppercase tracking-[0.25em] text-ink/60">Highlights</h4>
            <ul className="mt-2 grid gap-x-8 gap-y-1 text-sm sm:grid-cols-2">
              {featuredProject.highlights.map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden>•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-6">
            <h4 className="font-mono text-xs uppercase tracking-[0.25em] text-ink/60">
              Technical Details
            </h4>
            <dl className="mt-2 space-y-1 text-sm">
              <div className="flex gap-4">
                <dt className="w-16 shrink-0 font-mono text-xs uppercase tracking-[0.2em] text-ink/60">
                  Medium
                </dt>
                <dd>{techStack.slice(0, 3).join(" · ")}</dd>
              </div>
              <div className="flex gap-4">
                <dt className="w-16 shrink-0 font-mono text-xs uppercase tracking-[0.2em] text-ink/60">
                  Tools
                </dt>
                <dd>{techStack.slice(3).join(" · ")}</dd>
              </div>
            </dl>
          </section>

          <a
            href={featuredProject.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block border-2 border-ink px-4 py-1.5 font-mono text-xs uppercase tracking-wide hover:bg-ink hover:text-plaster"
          >
            GitHub / Demo ↗
          </a>
        </div>
      </div>
    </div>
  );
}
