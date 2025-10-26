import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-20 px-4" id="about">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <Card className="glass-card">
              <CardContent className="p-6">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  I'm a motivated Computer Science Engineering student at <span className="text-foreground font-semibold">SRM Easwari Engineering College</span> with a strong passion for full-stack development. Currently maintaining a <span className="text-primary font-semibold">9.02 CGPA</span>, I combine academic excellence with practical experience.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardContent className="p-6">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  My journey in web development has been driven by a love for creating intuitive, responsive user interfaces and solving complex problems with clean, efficient code. I'm a quick learner who thrives on new challenges and emerging technologies.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <Card className="glass-card hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Education</h3>
                    <p className="text-muted-foreground">B.E. Computer Science</p>
                    <p className="text-sm text-primary">Expected: April 2027</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">💼</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Experience</h3>
                    <p className="text-muted-foreground">Full Stack Intern</p>
                    <p className="text-sm text-secondary">Big Bucks Innovation</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Location</h3>
                    <p className="text-muted-foreground">Chennai, India</p>
                    <p className="text-sm text-muted-foreground">Open to opportunities</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;