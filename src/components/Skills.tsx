import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Front-End Development",
      icon: "🎨",
      skills: ["HTML", "CSS", "JavaScript", "React", "Responsive Design"]
    },
    {
      title: "Programming Languages",
      icon: "💻",
      skills: ["C", "C++", "Java", "JavaScript"]
    },
    {
      title: "Backend & Database",
      icon: "🗄️",
      skills: ["Node.js", "MongoDB", "SQL"]
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: ["Visual Studio Code", "Git", "GitHub"]
    },
    {
      title: "Soft Skills",
      icon: "🤝",
      skills: ["Problem-Solving", "Teamwork", "Time Management", "Quick Learner"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/20" id="skills">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="glass-card hover:border-primary/50 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{category.icon}</span>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                      {skill}
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

export default Skills;