"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
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
    <section
      id="contact"
      className="px-6 py-24 text-center sm:px-12 sm:py-32"
    >
      <h2 className="reveal font-display text-4xl sm:text-6xl">
        Let&apos;s build something.
      </h2>
      <p className="reveal mt-4 font-mono text-xs uppercase tracking-[0.3em] text-ink">
        ECO · IT Developer · AI · Software
      </p>

      <ul className="reveal mt-10 flex flex-wrap justify-center gap-4 font-mono text-sm uppercase tracking-wide">
        <li>
          <a
            href="https://github.com/GigaNuke3"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-ink px-4 py-2 hover:bg-ink hover:text-plaster"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/edil-con-l-gorospe-383a8a303/"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-ink px-4 py-2 hover:bg-ink hover:text-plaster"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="mailto:gorospeedilcon@gmail.com"
            className="border-2 border-ink px-4 py-2 hover:bg-ink hover:text-plaster"
          >
            Email
          </a>
        </li>
        <li>
          <a
            href="/resume.pdf"
            download
            className="border-2 border-ink px-4 py-2 hover:bg-ink hover:text-plaster"
          >
            Resume
          </a>
        </li>
      </ul>

      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-10 flex max-w-xl flex-col gap-4 text-left"
      >
        <input
          name="name"
          required
          placeholder="Name"
          className="border-4 border-ink bg-plaster px-4 py-3 font-mono placeholder:text-ink/60 focus:outline-none focus:ring-4 focus:ring-ink"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Email"
          className="border-4 border-ink bg-plaster px-4 py-3 font-mono placeholder:text-ink/60 focus:outline-none focus:ring-4 focus:ring-ink"
        />
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Message"
          className="border-4 border-ink bg-plaster px-4 py-3 font-mono placeholder:text-ink/60 focus:outline-none focus:ring-4 focus:ring-ink"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="brutal-shadow border-4 border-ink bg-ink px-6 py-3 font-mono uppercase tracking-wide text-plaster hover:bg-plaster hover:text-ink disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send"}
        </button>
        {status === "sent" && (
          <p className="font-mono text-sm text-ink">
            Message sent — thanks, I&apos;ll get back to you.
          </p>
        )}
        {status === "error" && (
          <p className="font-mono text-sm text-ink">
            Something went wrong — try again in a moment.
          </p>
        )}
      </form>
    </section>
  );
}
