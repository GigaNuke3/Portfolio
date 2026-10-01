import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import SkillsSection from "@/components/SkillsSection";
import Commissions from "@/components/Commissions";
import Contact from "@/components/Contact";
import RevealScope from "@/components/RevealScope";
import RoomPlaque from "@/components/RoomPlaque";
import Cursor from "@/components/Cursor";
import CuratorConsole from "@/components/CuratorConsole";

// The tour route: Entrance → Artist → Works → Archive → Collection → Commissions → Desk.
export default function Home() {
  return (
    <main className="flex-1">
      <Header />
      <Hero />
      <RevealScope>
        <About />
        <Projects />
        <Resume />
        <SkillsSection />
        <Commissions />
        <Contact />
      </RevealScope>
      <RoomPlaque />
      <CuratorConsole />
      <Cursor />
    </main>
  );
}
