"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // reading the pre-hydration theme script's DOM state / OS preference — must run post-mount to stay SSR-safe
    const current = document.documentElement.dataset.theme as "light" | "dark" | undefined;
    if (current) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTheme(current);
    } else {
      setTheme(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    }
  }, []);

  function toggle() {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="whitespace-nowrap border-2 border-ink px-2 py-0.5 text-ink hover:bg-ink hover:text-plaster"
    >
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
}
