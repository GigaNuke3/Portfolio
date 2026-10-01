"use client";

import { useEffect, useRef, useState } from "react";
import { toggleIR } from "@/lib/ir";

const destinations: Record<string, string> = {
  "axie-flash": "#artifact-axie-flash",
  axie: "#artifact-axie-flash",
  callama: "#artifact-callama",
  "e-lib": "#artifact-e-lib",
  elib: "#artifact-e-lib",
  entrance: "#home",
  artist: "#about",
  about: "#about",
  works: "#projects",
  archive: "#experience",
  collection: "#skills",
  skills: "#skills",
  commissions: "#services",
  desk: "#contact",
  contact: "#contact",
};

const HELP = [
  "help                 this list",
  "whoami               the artist",
  "ls artifacts         the works on display",
  "open <name>          walk to an artifact or room (e.g. open callama)",
  "resume               the artist's résumé",
  "contact              how to reach the curator",
  "ir                   toggle infrared reflectography",
  "clear                wipe the console",
];

let noteLogged = false;

function goTo(hash: string) {
  const el = document.querySelector<HTMLElement>(hash);
  if (!el) return false;
  const record = el.querySelector("details");
  if (record) record.open = true;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  return true;
}

function run(input: string): string[] {
  const [cmd, ...args] = input.trim().split(/\s+/);
  const arg = args.join(" ").toLowerCase();
  switch (cmd?.toLowerCase()) {
    case "":
      return [];
    case "help":
      return HELP;
    case "whoami":
      return ["Edil Con L. Gorospe — “Eco”.", "Web Developer · AI Engineer · Pinamalayan, Philippines."];
    case "ls":
      return ["01  axie-flash   Mobile Application · AI       2026", "02  callama      Offline AI Desktop Assistant  2026", "03  e-lib        Library Management System     2026"];
    case "open": {
      const hash = destinations[arg];
      if (!hash) return [`open: no such artifact or room: ${arg || "(none)"} — try 'ls artifacts'`];
      return goTo(hash) ? [`walking to ${arg}…`] : [`open: ${arg} is not on display right now`];
    }
    case "resume":
      window.open("/resume.pdf", "_blank", "noopener");
      return ["opening résumé.pdf…"];
    case "contact":
      return ["gorospeedilcon@gmail.com", "or: open desk"];
    case "ir":
      toggleIR();
      return ["infrared reflectography toggled — the underdrawing is showing."];
    case "sudo":
      return arg === "restore fresco"
        ? ["Permission denied: the fresco is 500 years old.", "Some of those cracks are load-bearing."]
        : ["sudo: the curator does not grant root to visitors."];
    default:
      return [`command not found: ${cmd} — try 'help'`];
  }
}

export default function CuratorConsole() {
  const [open, setOpen] = useState(false);
  const [lines, setLines] = useState<string[]>(["The Eco Collection — curator's console. Type 'help'."]);
  const inputRef = useRef<HTMLInputElement>(null);
  const logRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!noteLogged) {
      noteLogged = true;
      console.log(
        "%cThe Eco Collection%c\nYou opened the back room. The curator left the console unlocked — press ` on the page.",
        "font: 700 14px monospace; letter-spacing: .2em",
        "font: 12px monospace",
      );
    }

    function onKey(e: KeyboardEvent) {
      const typing = e.target instanceof HTMLElement && e.target.closest("input, textarea, [contenteditable]");
      if (e.key === "`" && (!typing || e.target === inputRef.current)) {
        e.preventDefault();
        setOpen((o) => !o);
        return;
      }
      if (e.key === "Escape") {
        toggleIR(false);
        setOpen(false);
        return;
      }
      if (!typing && (e.key === "i" || e.key === "I") && !e.metaKey && !e.ctrlKey && !e.altKey) toggleIR();
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight });
  }, [lines]);

  function onSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const input = inputRef.current?.value ?? "";
    if (inputRef.current) inputRef.current.value = "";
    if (input.trim().toLowerCase() === "clear") {
      setLines([]);
      return;
    }
    setLines((prev) => [...prev, `> ${input}`, ...run(input)]);
  }

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-label="Curator's console"
      className="fixed inset-x-0 bottom-0 z-[90] border-t-4 border-ink bg-plaster font-mono text-xs text-ink sm:text-sm"
    >
      <div className="flex items-center justify-between border-b border-ink px-4 py-1.5 text-[10px] uppercase tracking-[0.3em]">
        <span>Curator&apos;s Console</span>
        <button type="button" onClick={() => setOpen(false)} className="hover:underline">
          ` to close
        </button>
      </div>
      <div ref={logRef} className="max-h-[35vh] overflow-y-auto whitespace-pre-wrap px-4 py-3">
        {lines.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
      <form onSubmit={onSubmit} className="flex gap-2 border-t border-ink px-4 py-2">
        <span aria-hidden>&gt;</span>
        <input
          ref={inputRef}
          aria-label="Console command"
          autoComplete="off"
          spellCheck={false}
          className="flex-1 bg-transparent outline-none"
        />
      </form>
    </div>
  );
}
