import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SkillsSection from "@/components/SkillsSection";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import RevealScope from "@/components/RevealScope";

export default function Home() {
  return (
    <main className="flex-1">
      <Header />
      <Hero />
      <RevealScope>
        <About />
        <SkillsSection />
        <Projects />
        <Resume />
        <Contact />
      </RevealScope>
    </main>
  );
}
