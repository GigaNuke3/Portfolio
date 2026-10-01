const shortcuts: [string, string][] = [
  ["`", "Open the curator's console"],
  ["I", "Infrared — see the exhibition's underdrawing"],
  ["ECO ×5", "Another way into infrared"],
  ["Esc", "Restore the gallery / close"],
];

// Native popover: no JS, light-dismiss and Esc to close come free from the browser.
export default function VisitorGuide() {
  return (
    <>
      <button
        type="button"
        popoverTarget="visitor-guide"
        aria-label="Visitor's guide: hidden shortcuts"
        title="Visitor's guide"
        className="flex h-6 w-6 shrink-0 items-center justify-center border-2 border-ink font-mono text-xs text-ink hover:bg-ink hover:text-plaster"
      >
        ?
      </button>
      <div
        id="visitor-guide"
        popover="auto"
        className="brutal-shadow m-auto w-[min(90vw,24rem)] border-4 border-ink bg-plaster p-6 text-left normal-case tracking-normal text-ink backdrop:bg-black/40"
      >
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/60">Visitor&apos;s Guide</p>
        <h2 className="mt-2 font-display text-xl uppercase">Hidden in the exhibition</h2>
        <p className="mt-2 text-sm leading-relaxed">
          The curator left a few doors unlocked. Use these anywhere on the page.
        </p>
        <dl className="mt-4 space-y-2 border-t border-ink pt-4 text-sm">
          {shortcuts.map(([key, what]) => (
            <div key={key} className="flex items-baseline gap-3">
              <dt className="w-16 shrink-0">
                <kbd className="border border-ink px-1.5 py-0.5 font-mono text-xs">{key}</kbd>
              </dt>
              <dd>{what}</dd>
            </div>
          ))}
        </dl>
        <button
          type="button"
          popoverTarget="visitor-guide"
          popoverTargetAction="hide"
          className="mt-5 font-mono text-xs uppercase tracking-[0.2em] hover:underline"
        >
          Close ×
        </button>
      </div>
    </>
  );
}
