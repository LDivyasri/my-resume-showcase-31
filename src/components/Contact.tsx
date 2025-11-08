import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Code2 } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "srid52863@gmail.com",
      href: "mailto:srid52863@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91 93457 05872",
      href: "tel:+919345705872"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Chennai, India - 600042",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      href: "https://github.com/LDivyasri",
      color: "hover:text-primary"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/divya-sri-99a1a22a7",
      color: "hover:text-primary"
    },
    {
      icon: <Code2 className="h-6 w-6" />,
      label: "LeetCode",
      href: "https://leetcode.com/u/Divyasri_L",
      color: "hover:text-secondary"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/20" id="contact">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I'll try my best to get back to you!
          </p>
        </div>

        <Card className="glass-card">
          <CardContent className="p-8">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary/30 transition-colors">
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="font-semibold hover:text-primary transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <p className="font-semibold">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4 text-center">Connect with me</p>
                <div className="flex gap-4 justify-center">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-card rounded-lg flex items-center justify-center text-muted-foreground ${social.color} transition-all hover:scale-110`}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-6 text-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/50">
                  <Mail className="mr-2 h-5 w-5" />
                  Send me an email
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;