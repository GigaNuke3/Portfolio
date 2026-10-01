"use client";

import { useState } from "react";
import Image from "next/image";
import { featuredProject } from "@/data/projects";

export default function FeaturedProject() {
  const [index, setIndex] = useState(0);
  const { images } = featuredProject;

  function go(direction: 1 | -1) {
    setIndex((i) => (i + direction + images.length) % images.length);
  }

  return (
    <div className="reveal mb-16">
      <div className="flex items-center gap-3">
        <span className="border-2 border-ink px-2 py-0.5 font-mono text-xs font-bold">
          {featuredProject.index}
        </span>
        <span className="font-mono text-xs uppercase tracking-widest text-ink">
          {featuredProject.badge}
        </span>
        <span
          title="A frontier application — an AI-native product designed and built end-to-end."
          className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2 border-ink font-mono text-[10px]"
        >
          i
        </span>
      </div>

      <div className="brutal-shadow mt-4 grid gap-0 border-4 border-ink bg-plaster lg:grid-cols-2">
        <div className="relative border-b-4 border-ink p-6 lg:border-b-0 lg:border-r-4">
          <div className="relative mx-auto aspect-[9/16] w-full max-w-[260px] overflow-hidden border-2 border-ink">
            <Image
              src={images[index]}
              alt={`${featuredProject.title} screenshot ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>

          <button
            type="button"
            aria-label="Previous screenshot"
            onClick={() => go(-1)}
            className="absolute left-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center border-2 border-ink bg-plaster hover:bg-ink hover:text-plaster"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next screenshot"
            onClick={() => go(1)}
            className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center border-2 border-ink bg-plaster hover:bg-ink hover:text-plaster"
          >
            ›
          </button>

          <div className="mt-4 flex justify-center gap-2">
            {images.map((img, i) => (
              <button
                key={img}
                type="button"
                aria-label={`Go to screenshot ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2.5 w-2.5 border-2 border-ink ${i === index ? "bg-ink" : "bg-plaster"}`}
              />
            ))}
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-widest text-ink/60">
            {featuredProject.category}
          </p>
          <h3 className="mt-1 font-display text-2xl sm:text-3xl">{featuredProject.title}</h3>
          <p className="mt-4 text-sm leading-relaxed">{featuredProject.description}</p>

          <div className="mt-6 border-t-2 border-ink pt-4">
            <p className="font-mono text-xs uppercase tracking-widest text-ink/60">Highlights</p>
            <ul className="mt-3 grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
              {featuredProject.highlights.map((item) => (
                <li key={item} className="flex gap-2">
                  <span>●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <p className="font-mono text-xs uppercase tracking-widest text-ink/60">Tools</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {featuredProject.tools.map((tool) => (
                <li key={tool} className="border-2 border-ink px-2 py-0.5 text-xs">
                  {tool}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <p className="font-mono text-xs uppercase tracking-widest text-ink/60">Tech Stack</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {featuredProject.techStack.map((tech) => (
                <li key={tech} className="border-2 border-ink px-2 py-0.5 text-xs">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <a
            href={featuredProject.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block border-2 border-ink px-4 py-1.5 font-mono text-xs uppercase tracking-wide hover:bg-ink hover:text-plaster"
          >
            Live website ↗
          </a>
        </div>
      </div>
    </div>
  );
}
