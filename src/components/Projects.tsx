import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Alumni Web Portal",
      description: "A comprehensive web portal featuring alumni directory, admin approval system, donation management, and mentorship features with a modern, intuitive UI.",
      technologies: ["HTML", "CSS", "JavaScript"],
      highlights: [
        "Modern responsive design",
        "Admin approval workflow",
        "Donation management system",
        "Mentorship platform"
      ],
      githubLink: "https://github.com/yourusername/alumni-portal"
    },
    {
      title: "Medicine Resale Portal",
      description: "An innovative platform connecting pharmacies with users to buy unused medicines at discounted rates, promoting sustainability and affordability in healthcare.",
      technologies: ["React", "Node.js", "MongoDB"],
      highlights: [
        "Full-stack MERN application",
        "Secure transaction system",
        "Real-time inventory management",
        "User-pharmacy marketplace"
      ],
      githubLink: "https://github.com/yourusername/medicine-resale"
    }
  ];

  return (
    <section className="py-20 px-4" id="projects">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Real-world applications showcasing my development skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="glass-card hover:border-primary/50 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </div>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-sm text-muted-foreground">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="text-sm flex items-center gap-2">
                        <span className="text-primary">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} className="bg-secondary/20 text-secondary hover:bg-secondary/30">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;