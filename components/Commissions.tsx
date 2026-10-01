import RoomLabel from "@/components/RoomLabel";

const commissions = [
  {
    no: "01",
    title: "Document Q&A Assistants",
    scope: "AI assistants that answer questions from your own documents.",
    medium: "RAG · LangChain · Embeddings",
  },
  {
    no: "02",
    title: "Report Automation",
    scope: "Automate weekly or monthly client reports.",
    medium: "Python · Excel Export · Workflows",
  },
  {
    no: "03",
    title: "AI Research & Drafting Workflows",
    scope: "AI workflows for research and content drafting.",
    medium: "LLMs · Prompt Engineering",
  },
  {
    no: "04",
    title: "Web Development",
    scope: "Web applications built with Laravel, PHP, JavaScript, and MySQL.",
    medium: "Laravel · PHP · JavaScript · MySQL",
  },
  {
    no: "05",
    title: "Virtual Assistance",
    scope: "Everyday VA tasks like inbox management, scheduling, and data entry.",
    medium: "Inbox · Scheduling · Data Entry",
  },
];


export default function Commissions() {
  return (
    <section
      id="services"
      data-room="VI"
      data-room-name="Commissions"
      data-sketch="<Commissions />"
      className="relative border-b-4 border-ink px-6 py-24 sm:px-12 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <RoomLabel room="VI" name="Commissions" />
        <header className="reveal">
          <h2 className="font-display text-4xl uppercase tracking-tight sm:text-6xl">Commissions</h2>
          <p className="mt-3 max-w-[52ch] text-base leading-relaxed">
            Work currently open for commission. Each notice describes what can be built for you.
          </p>
        </header>

        <ol className="mt-12 border-b-2 border-ink">
          {commissions.map((c) => (
            <li
              key={c.no}
              className="reveal grid gap-3 border-t-2 border-ink py-6 md:grid-cols-[5rem_minmax(0,1fr)_auto] md:items-baseline md:gap-8"
            >
              <span className="font-mono text-xs tracking-[0.3em] text-ink/60">No. {c.no}</span>
              <div>
                <h3 className="font-display text-xl uppercase sm:text-2xl">{c.title}</h3>
                <p className="mt-1 text-sm leading-relaxed">{c.scope}</p>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink/60">
                  Medium · {c.medium}
                </p>
              </div>
              <a
                href="#contact"
                data-cursor="Commission"
                className="justify-self-start border-2 border-ink px-4 py-1.5 font-mono text-xs uppercase tracking-wide hover:bg-ink hover:text-plaster md:justify-self-end"
              >
                Commission this →
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
