import { Card } from "./ui/card";
import { Button } from "./ui/buttons";
import { Mail, Linkedin, Instagram, FileText } from "lucide-react";
import { Helmet } from "react-helmet-async";

import {
  FadeZoom,
  FadeUp,
  StaggerParent,
  StaggerItem,
} from "./src/animations/SectionAnimations";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "joecapon101@gmail.com",
    href: "mailto:joecapon101@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Joe Capon",
    href: "https://linkedin.com/in/joe-capon-0199b5235",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@joecapondesigns",
    href: "https://instagram.com/joecapondesigns",
  },
  {
    icon: FileText,
    label: "Questionnaire",
    value: "Work with me",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSd1WgbA33GUhJsmRPUL43GUk-WPjyedbvb7iZy0py9uGdWgdw/viewform?usp=header",
  },
];

export function ContactSection() {
  return (
    <>
      <Helmet>
        <title>Joe Capon | Freelance Web Developer</title>
        <meta
          name="description"
          content="I'm Joe, a freelance web developer specializing in fast, accessible, and modern websites. Explore my portfolio and recent projects."
        />
      </Helmet>

      <section id="contact" className="relative py-20 md:py-32 px-4">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

        <div className="relative max-w-4xl mx-auto">

          {/* HEADER */}
          <FadeZoom>
            <div className="mb-16 space-y-4 text-center">
              <div className="flex items-center justify-center gap-4">
                <div className="flex-1 h-px max-w-xs hidden md:block bg-gray-800" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  <span className="text-accent font-mono text-xl md:text-2xl">06.</span>{" "}
                  Get In Touch
                </h2>
                <div className="flex-1 h-px max-w-xs hidden md:block bg-gray-800" />
              </div>

              <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
                I'm always open to discussing new projects, creative ideas, or opportunities 
                to be part of your vision. Feel free to reach out!
              </p>
            </div>
          </FadeZoom>

          {/* CONTACT CARDS WITH STAGGER */}
          <StaggerParent>
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              {contactMethods.map((method) => (
                <StaggerItem key={method.label}>
                  <a
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block h-full"
                  >
                    <Card className="p-6 bg-card/50 backdrop-blur-sm border-gray-800 
                                    hover:border-accent/50 transition-all hover:translate-y-[-2px]
                                    text-center lg:text-left h-full">
                      <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-center lg:gap-4">
                        <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors flex items-center justify-center">
                          <method.icon className="w-6 h-6 text-accent" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="text-sm text-muted-foreground mb-1">{method.label}</div>
                          <div className="font-mono text-sm text-foreground truncate">{method.value}</div>
                        </div>
                      </div>
                    </Card>
                  </a>
                </StaggerItem>
              ))}
            </div>
          </StaggerParent>

          {/* CTA BUTTON */}
          <FadeUp delay={0.2}>
            <div className="text-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-mono group"
                asChild
              >
                <a href="mailto:joecapon101@gmail.com">
                  <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Send me an email
                </a>
              </Button>
            </div>
          </FadeUp>

          {/* FOOTER NOTE */}
          <FadeUp delay={0.35}>
            <div className="mt-16 pt-8 border-t border-gray-800 text-center">
              <p className="text-sm text-muted-foreground">
                Designed & Built by <span className="text-accent font-mono">Joe Capon</span>
              </p>
            </div>
          </FadeUp>

        </div>
      </section>
    </>
  );
}
