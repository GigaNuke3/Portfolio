"use client";

import { useState } from "react";
import Image from "next/image";
import { featuredProject } from "@/data/projects";
import Examine from "@/components/Examine";
import Tilt from "@/components/Tilt";
import Record from "@/components/Record";

const pad = (n: number) => String(n).padStart(2, "0");

export default function FeaturedProject() {
  const [index, setIndex] = useState(0);
  const { images, techStack } = featuredProject;

  function go(direction: 1 | -1) {
    setIndex((i) => (i + direction + images.length) % images.length);
  }

  return (
    <div id={`artifact-${featuredProject.slug}`} className="reveal scroll-mt-32">
      <p className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.3em]">
        <span>Artifact {featuredProject.index} / Featured Work</span>
        <span className="h-px flex-1 bg-ink" />
      </p>

      <div className="mt-8 grid items-start gap-10 border-2 border-ink p-6 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-14 md:p-10">
        <div className="mx-auto w-full max-w-[280px] md:max-w-[320px]">
          <Tilt className="brutal-shadow-sm relative aspect-[9/16] w-full border-2 border-ink">
            <Image
              src={images[index]}
              alt={`${featuredProject.title} screenshot ${index + 1}`}
              fill
              sizes="(min-width: 768px) 320px, 280px"
              className="object-cover"
            />
          </Tilt>

          <div className="mt-6 flex items-center justify-between font-mono text-xs uppercase tracking-[0.2em]">
            <button type="button" aria-label="Previous screenshot" onClick={() => go(-1)} className="px-1 hover:underline">
              ←
            </button>
            <span>
              {pad(index + 1)} / {pad(images.length)}
            </span>
            <button type="button" aria-label="Next screenshot" onClick={() => go(1)} className="px-1 hover:underline">
              →
            </button>
          </div>
        </div>

        <div>
          <p className="border-b border-ink pb-3 font-mono text-xs uppercase tracking-[0.25em]">
            {featuredProject.category}
          </p>
          <h3 className="mt-5 font-display text-4xl uppercase tracking-tight sm:text-5xl">{featuredProject.title}</h3>
          <p className="mt-4 max-w-[44ch] text-base leading-relaxed">{featuredProject.description}</p>

          <div className="mt-6">
            <Record
              rows={[
                ["Year", featuredProject.year],
                ["Medium", techStack.slice(0, 3).join(" · ")],
                ["Technologies", techStack.slice(3).join(" · ")],
                ["Status", featuredProject.status],
                [
                  "Links",
                  <a key="l" href={featuredProject.link} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:no-underline">
                    GitHub / Demo ↗
                  </a>,
                ],
              ]}
            />
          </div>

          <Examine>
            <ul className="grid gap-x-8 gap-y-1 pb-2 text-sm sm:grid-cols-2">
              {featuredProject.highlights.map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden>•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Examine>
        </div>
      </div>
    </div>
  );
}
