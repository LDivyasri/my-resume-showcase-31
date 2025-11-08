import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Code2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-bg">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <p className="text-primary text-lg font-medium tracking-wider">Hi, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold glow-text">
              Divya Sri L
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-secondary">
              Aspiring Full Stack Developer
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Crafting modern, user-friendly web applications with clean code and beautiful design. 
              Passionate about building impactful digital experiences.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/50"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get in Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Code2 className="mr-2 h-5 w-5" />
              View Projects
            </Button>
          </div>

          <div className="flex gap-6 justify-center pt-8">
            <a href="https://github.com/LDivyasri" target="_blank" rel="noopener noreferrer" 
               className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/divya-sri-99a1a22a7" target="_blank" rel="noopener noreferrer"
               className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://leetcode.com/u/Divyasri_L" target="_blank" rel="noopener noreferrer"
               className="text-muted-foreground hover:text-primary transition-colors">
              <Code2 className="h-6 w-6" />
            </a>
            <a href="mailto:srid52863@gmail.com"
               className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;