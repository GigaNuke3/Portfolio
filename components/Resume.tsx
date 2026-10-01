import { experience, skills } from "@/data/experience";

export default function Resume() {
  return (
    <section
      id="resume"
      className="border-b-4 border-ink px-6 py-24 sm:px-12"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <h2 className="font-display text-3xl sm:text-4xl">Experience</h2>
        <a
          href="/resume.pdf"
          download
          className="border-4 border-ink bg-terracotta px-4 py-2 font-mono text-sm uppercase tracking-wide text-plaster hover:bg-ochre"
        >
          Download Resume
        </a>
      </div>

      <ol className="mt-10 space-y-8">
        {experience.map((item) => (
          <li key={item.role + item.org} className="border-l-4 border-ink pl-6">
            <p className="font-mono text-xs uppercase tracking-widest text-faded-blue">
              {item.period}
            </p>
            <h3 className="mt-1 font-display text-xl">
              {item.role} — {item.org}
            </h3>
            <p className="mt-2 text-sm">{item.summary}</p>
          </li>
        ))}
      </ol>

      <div className="mt-12">
        <h3 className="font-display text-xl">Skills</h3>
        <ul className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <li
              key={skill}
              className="border-2 border-ink px-3 py-1 text-sm"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
