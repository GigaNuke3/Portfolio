"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setStatus("sent");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="px-6 py-24 sm:px-12">
      <h2 className="font-display text-3xl sm:text-4xl">Contact</h2>
      <form
        onSubmit={handleSubmit}
        className="mt-10 flex max-w-xl flex-col gap-4"
      >
        <input
          name="name"
          required
          placeholder="Name"
          className="border-4 border-ink bg-plaster px-4 py-3 font-mono placeholder:text-ink/60 focus:outline-none focus:ring-4 focus:ring-ochre"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Email"
          className="border-4 border-ink bg-plaster px-4 py-3 font-mono placeholder:text-ink/60 focus:outline-none focus:ring-4 focus:ring-ochre"
        />
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Message"
          className="border-4 border-ink bg-plaster px-4 py-3 font-mono placeholder:text-ink/60 focus:outline-none focus:ring-4 focus:ring-ochre"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="brutal-shadow border-4 border-ink bg-terracotta px-6 py-3 font-mono uppercase tracking-wide text-plaster hover:bg-ochre disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send"}
        </button>
        {status === "sent" && (
          <p className="font-mono text-sm text-faded-blue">
            Message sent — thanks, I&apos;ll get back to you.
          </p>
        )}
        {status === "error" && (
          <p className="font-mono text-sm text-terracotta">
            Something went wrong — try again in a moment.
          </p>
        )}
      </form>
    </section>
  );
}
