import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-b-4 border-ink px-6 py-24 sm:px-12"
    >
      <h2 className="font-display text-3xl sm:text-4xl">Projects</h2>
      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="brutal-shadow block border-4 border-ink bg-plaster p-6 transition-transform hover:-translate-x-1 hover:-translate-y-1"
          >
            <h3 className="font-display text-xl">{project.title}</h3>
            <p className="mt-3 text-sm">{project.description}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="border-2 border-ink px-2 py-0.5 text-xs uppercase tracking-wide text-faded-blue"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </section>
  );
}
