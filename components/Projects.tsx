import Image from "next/image";
import { projects } from "@/data/projects";
import FeaturedProject from "@/components/FeaturedProject";

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-b-4 border-ink px-6 py-24 sm:px-12"
    >
      <h2 className="reveal font-display text-3xl sm:text-4xl">Projects</h2>

      <div className="mt-10">
        <FeaturedProject />
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="reveal border-4 border-ink bg-plaster brutal-shadow"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={176}
              className="h-44 w-full border-b-4 border-ink object-cover"
            />
            <div className="p-6">
              <h3 className="font-display text-xl">{project.title}</h3>
              <p className="mt-3 text-sm">{project.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="border-2 border-ink px-2 py-0.5 text-xs uppercase tracking-wide text-ink"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block border-2 border-ink px-4 py-1.5 font-mono text-xs uppercase tracking-wide hover:bg-ink hover:text-plaster"
              >
                GitHub / Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
