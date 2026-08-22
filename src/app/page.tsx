import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProblemSolving from "@/components/ProblemSolving";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Certifications />
      <ProblemSolving />
      <Contact />

      <Footer />
    </main>
  );
}
