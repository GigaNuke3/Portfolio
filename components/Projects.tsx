import Image from "next/image";
import { projects } from "@/data/projects";
import FeaturedProject from "@/components/FeaturedProject";
import RoomLabel from "@/components/RoomLabel";
import Record from "@/components/Record";
import Examine from "@/components/Examine";
import Tilt from "@/components/Tilt";

export default function Projects() {
  return (
    <section
      id="projects"
      data-room="III"
      data-room-name="The Works"
      data-sketch="<Projects />"
      className="relative border-b-4 border-ink px-6 py-24 sm:px-12 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <RoomLabel room="III" name="The Works" />
        <header className="reveal border-b-2 border-ink pb-6">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink/60">Exhibition 01 — Digital Works</p>
          <h2 className="mt-3 font-display text-4xl uppercase tracking-tight sm:text-6xl">Selected Works</h2>
          <p className="mt-2 font-mono text-xs uppercase tracking-[0.3em]">Software &amp; AI artifacts</p>
        </header>

        <div className="mt-12">
          <FeaturedProject />
        </div>

        <div className="mt-16 grid gap-x-10 gap-y-14 md:grid-cols-2">
          {projects.map((project, i) => {
            const flipped = i % 2 === 1;
            const no = String(i + 2).padStart(2, "0");
            return (
              <article
                key={project.slug}
                id={`artifact-${project.slug}`}
                className={`reveal flex scroll-mt-32 gap-6 ${flipped ? "flex-col-reverse md:mt-14" : "flex-col"}`}
              >
                <Tilt
                  className={`brutal-shadow-sm relative w-full border-2 border-ink ${
                    flipped ? "aspect-[16/10]" : "aspect-[4/3]"
                  }`}
                >
                  <Image src={project.image} alt={project.title} fill sizes="(min-width: 768px) 45vw, 90vw" className="object-cover" />
                </Tilt>

                <div className="border-t-4 border-ink pt-4">
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink/60">Artifact {no} / Supporting Work</p>
                  <h3 className="mt-2 font-display text-3xl uppercase tracking-tight">{project.title}</h3>
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-ink/60">{project.kind}</p>
                  <p className="mt-3 max-w-[44ch] text-sm leading-relaxed">{project.description}</p>

                  <Examine>
                    <div className="pb-2">
                      <Record
                        rows={[
                          ["Year", project.year],
                          ["Technologies", project.stack.join(" · ")],
                          ["Status", project.status],
                          [
                            "Links",
                            <a
                              key="l"
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline underline-offset-4 hover:no-underline"
                            >
                              GitHub / Demo ↗
                            </a>,
                          ],
                        ]}
                      />
                    </div>
                  </Examine>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
