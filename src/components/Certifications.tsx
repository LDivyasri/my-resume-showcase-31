import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "CCNA: Introduction to Networks",
      issuer: "Cisco",
      type: "Online Certification"
    },
    {
      title: "IoT, Industrial IoT (Elite+Silver)",
      issuer: "NPTEL",
      type: "Course Certification"
    },
    {
      title: "Privacy & Security in Online Social Media",
      issuer: "NPTEL",
      type: "Course Certification"
    },
    {
      title: "Front-End Web Developer Certification",
      issuer: "Infosys Springboard",
      date: "April 6, 2025"
    },
    {
      title: "C++ Fundamentals",
      issuer: "Infosys Springboard",
      date: "April 6, 2025"
    }
  ];

  const activities = [
    "Participated in ICT Hackathon conducted by CII & ICT Academy",
    "Active in Hackathons & Coding Challenges",
    "Building Mini Projects to explore new technologies"
  ];

  return (
    <section className="py-20 px-4" id="certifications">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Certifications & Activities</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="glass-card hover:border-primary/50 transition-colors">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-lg mb-1">{cert.title}</h4>
                    <p className="text-primary text-sm font-medium">{cert.issuer}</p>
                    {cert.type && <p className="text-xs text-muted-foreground mt-1">{cert.type}</p>}
                    {cert.date && <p className="text-xs text-muted-foreground mt-1">{cert.date}</p>}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <span className="text-2xl">🚀</span>
              Activities & Interests
            </h3>
            <div className="space-y-4">
              {activities.map((activity, index) => (
                <Card key={index} className="glass-card hover:border-secondary/50 transition-colors">
                  <CardContent className="p-4 flex items-start gap-3">
                    <span className="text-secondary mt-1">▹</span>
                    <p className="text-lg">{activity}</p>
                  </CardContent>
                </Card>
              ))}
              
              <Card className="glass-card border-accent/50 mt-6">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-3">Passionate About</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Emerging Technologies", "Problem Solving", "Clean Code", "UI/UX Design"].map((interest, idx) => (
                      <span key={idx} className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">
                        {interest}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;