import { skillCategories } from "@/data/skills";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="border-b-4 border-ink px-6 py-24 sm:px-12"
    >
      <div className="reveal brutal-shadow-sm inline-flex items-center gap-2 border-2 border-ink bg-plaster px-4 py-2">
        <span className="text-ink">■</span>
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink">What I Work With</span>
      </div>

      <h2 className="reveal mt-6 font-display text-4xl sm:text-5xl">Skills</h2>

      <div className="mt-12">
        {skillCategories.map((group) => (
          <div key={group.category} className="reveal border-t-4 border-ink py-6">
            <h3 className="font-mono text-xs uppercase tracking-widest text-ink/60">
              {group.category}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="border-2 border-ink px-3 py-1 text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="border-t-4 border-ink" />
      </div>
    </section>
  );
}
