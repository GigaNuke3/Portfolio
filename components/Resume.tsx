import { experience, type Experience } from "@/data/experience";

function ExperienceList({ items }: { items: Experience[] }) {
  return (
    <ol className="mt-6 space-y-8">
      {items.map((item) => (
        <li key={item.role + item.org} className="reveal border-l-4 border-ink pl-6">
          <p className="font-mono text-xs uppercase tracking-widest text-ink/60">{item.period}</p>
          <h4 className="mt-1 font-display text-xl">
            {item.role} — {item.org}
          </h4>
          {item.summary && <p className="mt-2 text-sm">{item.summary}</p>}
          {item.bullets && (
            <ul className="mt-3 space-y-1.5 text-sm">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span>●</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  );
}

export default function Resume() {
  const work = experience.filter((item) => item.type === "experience");
  const education = experience.filter((item) => item.type === "education");

  return (
    <section
      id="experience"
      className="border-b-4 border-ink px-6 py-24 sm:px-12"
    >
      <div className="reveal flex flex-wrap items-baseline justify-between gap-4">
        <h2 className="font-display text-3xl sm:text-4xl">
          Experience &amp; Education
        </h2>
        <a
          href="/resume.pdf"
          download
          className="border-4 border-ink bg-ink px-4 py-2 font-mono text-sm uppercase tracking-wide text-plaster hover:bg-plaster hover:text-ink"
        >
          Download Resume
        </a>
      </div>

      <h3 className="reveal mt-12 font-mono text-xs uppercase tracking-widest text-ink/60">
        Experience
      </h3>
      <ExperienceList items={work} />

      <h3 className="reveal mt-16 font-mono text-xs uppercase tracking-widest text-ink/60">
        Education
      </h3>
      <ExperienceList items={education} />
    </section>
  );
}
