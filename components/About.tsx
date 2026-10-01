import Image from "next/image";

const plaques = [
  {
    no: "01",
    title: "AI Engineering",
    items: ["RAG", "LLMs", "Ollama", "LangChain", "Embeddings", "AI Automation"],
  },
  {
    no: "02",
    title: "Software Development",
    items: ["Python", "JavaScript", "PHP", "Laravel", "Electron", "MySQL", "Git · Linux"],
  },
];

const works = [
  {
    no: "01",
    title: "E-LIB",
    kind: "Library Management System",
    text: "A live library management system with automated fines, SMS and email notifications, and Excel reporting.",
  },
  {
    no: "02",
    title: "Callama",
    kind: "Offline AI Desktop Assistant",
    text: "A local AI assistant with subject-based memory that runs local models, so private data never leaves the machine.",
  },
];

export default function About() {
  return (
    <section id="about" className="border-b-4 border-ink px-6 py-24 sm:px-12 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <header className="reveal flex items-end justify-between gap-4 border-b-2 border-ink pb-4">
          <h2 className="font-display text-4xl uppercase tracking-tight sm:text-6xl">About Me</h2>
          <span className="hidden font-mono text-xs uppercase tracking-[0.3em] sm:block">
            Exhibition Notes
          </span>
        </header>

        <div className="mt-12 grid items-start gap-12 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-14">
          <figure className="reveal mx-auto w-full max-w-sm md:max-w-none">
            <Image
              src="/images/profile-ai-engineer.jpg"
              alt="Portrait of Eco"
              width={640}
              height={640}
              sizes="(min-width: 768px) 40vw, 90vw"
              className="brutal-shadow aspect-square w-full border-4 border-ink object-cover"
            />
            <figcaption className="mt-6 border-t-2 border-ink pt-3 font-mono text-xs uppercase tracking-[0.2em]">
              <span className="font-bold">Eco</span>
              <span className="block text-ink/60">AI Engineer · Web Developer</span>
            </figcaption>
          </figure>

          <div className="space-y-6">
            <div className="reveal">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink/60">
                00 — Introduction
              </p>
              <p className="mt-4 max-w-[34ch] font-display text-2xl leading-snug sm:text-3xl">
                I help small agencies and businesses stop doing reports and repetitive work by hand.
                I build AI tools that do it for them.
              </p>
            </div>

            <div className="reveal max-w-[62ch] space-y-4 text-base leading-relaxed">
              <p>
                I&apos;m a Freelance AI Engineer &amp; Virtual Assistant focused on AI automation. My
                core skill set includes RAG (document Q&amp;A), report automation, and web
                development.
              </p>
              <p>
                I can build AI assistants that answer questions from your own documents, automate
                weekly or monthly client reports, set up AI workflows for research and content
                drafting, and handle everyday VA tasks like inbox management, scheduling, and data
                entry.
              </p>
              <p>
                I focus on practical solutions that are reliable, easy to use, and aligned with the
                needs of the business.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {plaques.map((plaque) => (
            <div key={plaque.no} className="reveal border-2 border-ink p-6">
              <p className="font-mono text-xs tracking-[0.3em] text-ink/60">{plaque.no}</p>
              <h3 className="mt-2 font-mono text-sm font-bold uppercase tracking-[0.2em]">
                {plaque.title}
              </h3>
              <ul className="mt-5 divide-y divide-ink/30 border-t border-ink/30 text-sm">
                {plaque.items.map((item) => (
                  <li key={item} className="py-1.5">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="reveal flex items-center gap-4 font-mono text-xs uppercase tracking-[0.3em]">
            <span>Selected Projects</span>
            <span className="h-px flex-1 bg-ink" />
          </h3>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            {works.map((work) => (
              <article key={work.no} className="reveal border-t-4 border-ink pt-4">
                <h4 className="font-display text-2xl uppercase">
                  {work.no} — {work.title}
                </h4>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-ink/60">
                  {work.kind}
                </p>
                <p className="mt-3 max-w-[48ch] text-sm leading-relaxed">{work.text}</p>
              </article>
            ))}
          </div>
        </div>

        <p className="reveal mt-16 max-w-[62ch] border-l-4 border-ink pl-5 text-base leading-relaxed">
          If your team is losing hours to work like this, message me. Tell me what eats your week,
          and I&apos;ll tell you honestly whether AI can fix it.
        </p>
      </div>
    </section>
  );
}
