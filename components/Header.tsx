import Skills from "@/components/Skills";
import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Contact Me", href: "#contact" },
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-plaster">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-12">
        <a href="#home" className="font-display text-xl text-ink">
          ECO
        </a>
        <nav className="flex gap-4 overflow-x-auto font-mono text-xs uppercase tracking-widest sm:gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="whitespace-nowrap px-1.5 py-0.5 text-ink hover:bg-ink hover:text-plaster"
            >
              {item.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>
      </div>
      <div className="border-t-4 border-ink">
        <Skills />
      </div>
    </header>
  );
}
