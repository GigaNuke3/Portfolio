"use client";

import { useState } from "react";
import RoomLabel from "@/components/RoomLabel";

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
      data-room="VII"
      data-room-name="The Exhibition Desk"
      data-sketch="<Contact />"
      className="relative px-6 py-24 text-center sm:px-12 sm:py-32"
    >
      <div className="mx-auto max-w-6xl text-left">
        <RoomLabel room="VII" name="The Exhibition Desk" />
      </div>
      <h2 className="reveal font-display text-4xl uppercase sm:text-6xl">
        Leave a note at the desk.
      </h2>
      <p className="reveal mt-4 font-mono text-xs uppercase tracking-[0.3em] text-ink">
        Let&apos;s build something · Web Developer · AI Engineer
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
          placeholder="Your name"
          className="border-4 border-ink bg-plaster px-4 py-3 font-mono placeholder:text-ink/60 focus:outline-none focus:ring-4 focus:ring-ink"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Your email"
          className="border-4 border-ink bg-plaster px-4 py-3 font-mono placeholder:text-ink/60 focus:outline-none focus:ring-4 focus:ring-ink"
        />
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Your note to the curator"
          className="border-4 border-ink bg-plaster px-4 py-3 font-mono placeholder:text-ink/60 focus:outline-none focus:ring-4 focus:ring-ink"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="brutal-shadow border-4 border-ink bg-ink px-6 py-3 font-mono uppercase tracking-wide text-plaster hover:bg-plaster hover:text-ink disabled:opacity-60"
        >
          {status === "sending" ? "Leaving note…" : "Leave note"}
        </button>
        {status === "sent" && (
          <p className="font-mono text-sm text-ink">
            Note received — thank you, I&apos;ll get back to you.
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
