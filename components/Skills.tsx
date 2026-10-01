const skillGroups = [
  {
    category: "AI / Machine Learning",
    items: ["AI / Machine Learning", "LLMs", "RAG"],
  },
  {
    category: "AI / Machine Learning",
    items: ["LangChain", "Transformers", "Embeddings", "Ollama"],
  },
  {
    category: "Languages & Frameworks",
    items: ["JavaScript", "Python", "PHP", "Electron"],
  },
  {
    category: "Languages & Frameworks",
    items: ["HTML", "CSS", "Laravel", "SQLite", "MySQL"],
  },
  {
    category: "Tools & Systems",
    items: ["MySQL", "Git / GitHub", "Linux"],
  },
  {
    category: "Tools & Systems",
    items: ["IPC", "Tailwind", "Daisy UI"],
  },
];

const skills = skillGroups.flatMap((group) => group.items);

export default function Skills() {
  return (
    <div className="overflow-hidden border-b-4 border-ink bg-plaster">
      <div className="flex w-max animate-marquee">
        {[...skills, ...skills].map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="whitespace-nowrap border-r-2 border-ink px-5 py-2 font-mono text-xs uppercase tracking-widest text-ink"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
