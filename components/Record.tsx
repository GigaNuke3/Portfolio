// A museum catalog record: term / value rows with hairline rules.
export default function Record({ rows }: { rows: [string, React.ReactNode][] }) {
  return (
    <dl className="grid grid-cols-[7.5rem_minmax(0,1fr)] gap-x-4 gap-y-2 border-y border-ink py-4 text-sm">
      {rows.map(([term, value]) => (
        <div key={term} className="contents">
          <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/60">{term}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}
