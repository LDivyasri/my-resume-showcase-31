import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  return (
    <section className="py-20 px-4 bg-muted/20" id="experience">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Experience & Education</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </div>

        <div className="space-y-8">
          {/* Internship */}
          <Card className="glass-card hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl mb-2">Full Stack Development Intern</CardTitle>
                  <p className="text-primary font-semibold">Big Bucks Innovation Pvt. Ltd.</p>
                  <p className="text-sm text-muted-foreground">Chennai, India • June - July 2025</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 ml-16">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span>Designed and developed the Alumni Portal Website using HTML, CSS, and JavaScript</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span>Implemented smooth transitions and event management features</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span>Enhanced user experience through structured layouts and modern UI design</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="glass-card hover:border-secondary/50 transition-colors">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl mb-2">Bachelor of Engineering</CardTitle>
                  <p className="text-secondary font-semibold">Computer Science Engineering</p>
                  <p className="text-sm text-muted-foreground">SRM Easwari Engineering College, Chennai</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="ml-16 space-y-2">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">CGPA:</span>
                  <span className="text-lg font-bold text-primary">9.02</span>
                  <span className="text-sm text-muted-foreground">(Till 4th Semester)</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">Expected Graduation:</span>
                  <span className="font-semibold">April 2027</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;