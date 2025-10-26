import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
      
      <footer className="py-8 text-center text-muted-foreground border-t border-border">
        <p className="text-sm">
          © 2025 Divya Sri L. Built with React & Tailwind CSS
        </p>
      </footer>
    </div>
  );
};

export default Index;