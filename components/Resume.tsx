import { experience, type Experience } from "@/data/experience";
import RoomLabel from "@/components/RoomLabel";
import Examine from "@/components/Examine";

function Ledger({ items }: { items: Experience[] }) {
  return (
    <ol className="border-b-2 border-ink">
      {items.map((item) => (
        <li
          key={item.accession}
          className="reveal grid gap-4 border-t-2 border-ink py-8 md:grid-cols-[11rem_minmax(0,1fr)] md:gap-10"
        >
          <p className="font-display text-5xl leading-none tracking-tight sm:text-6xl">{item.mark}</p>

          <div className="relative">
            <p className="font-mono text-[10px] tracking-[0.3em] text-ink/50 md:absolute md:right-0 md:top-0">
              {item.accession}
            </p>
            <dl className="mt-2 grid gap-x-6 gap-y-2 text-sm sm:grid-cols-[12rem_minmax(0,1fr)] md:mt-0">
              <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/60">Role</dt>
              <dd className="font-display text-lg uppercase leading-tight">{item.role}</dd>
              <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/60">Institution</dt>
              <dd>{item.org}</dd>
              <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/60">Period</dt>
              <dd>{item.period}</dd>
              <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/60">Technological Period</dt>
              <dd className="font-mono text-xs uppercase tracking-[0.15em]">{item.tech}</dd>
            </dl>

            {item.summary && <p className="mt-4 text-sm">{item.summary}</p>}
            {item.bullets && (
              <Examine label="Read the record" closeLabel="Close the record" cursor="Read">
                <ul className="space-y-1.5 pb-2 text-sm">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span aria-hidden>●</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </Examine>
            )}
          </div>
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
      data-room="IV"
      data-room-name="The Archive"
      data-sketch="<Resume />"
      className="relative border-b-4 border-ink px-6 py-24 sm:px-12 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <RoomLabel room="IV" name="The Archive" />
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="font-display text-4xl uppercase tracking-tight sm:text-6xl">The Archive</h2>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.3em]">Experience · Education</p>
          </div>
          <a
            href="/resume.pdf"
            download
            className="border-4 border-ink bg-ink px-4 py-2 font-mono text-sm uppercase tracking-wide text-plaster hover:bg-plaster hover:text-ink"
          >
            Download Resume
          </a>
        </div>

        <h3 className="reveal mt-14 mb-4 font-mono text-xs uppercase tracking-[0.3em] text-ink/60">
          Records of Practice
        </h3>
        <Ledger items={work} />

        <h3 className="reveal mt-16 mb-4 font-mono text-xs uppercase tracking-[0.3em] text-ink/60">
          Records of Study
        </h3>
        <Ledger items={education} />
      </div>
    </section>
  );
}
