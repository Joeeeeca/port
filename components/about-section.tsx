import { Card } from "./ui/card";
import { Code2, Palette, Rocket, Users } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { FadeLeft, FadeRight, FadeZoomIn } from "./src/animations/SectionAnimations";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    technologies: ["Node.js", "REST APIs"],
  },
  {
    category: "Tools & Others",
    technologies: ["Git", "Vercel", "Figma", "VS Code"],
  },
];

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code following best practices",
  },
  {
    icon: Palette,
    title: "Design Focus",
    description: "Creating beautiful, intuitive user interfaces and experiences",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimizing applications for speed and efficiency",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working effectively with teams and stakeholders",
  },
];

export function AboutSection() {
  return (
    <>
      <Helmet>
        <title>Joe Capon | Freelance Web Developer</title>
        <meta
          name="description"
          content="I'm Joe, a freelance web developer specializing in fast, accessible, and modern websites. Explore my portfolio and recent projects."
        />
      </Helmet>

      <section id="about" className="relative py-20 md:py-32 px-4">
        <div className="absolute inset-0 bg-gradient-to-tl from-accent/5 via-transparent to-primary/5 pointer-events-none" />

        <div className="relative max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16 space-y-4">
            <FadeZoomIn>
            <div className="flex items-center gap-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                <span className="text-accent font-mono text-xl md:text-2xl">
                  03.
                </span>{" "}
                About Me
              </h2>
              <div className="flex-1 h-px max-w-xs hidden md:block bg-gray-800" />
            </div>
            </FadeZoomIn>
          </div>

          {/* Two Columns */}
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 relative items-start">
            {/* LEFT COLUMN — Fades from Left */}
            <FadeLeft delay={0.1}>
              <div className="space-y-6 relative z-10">
                <div className="space-y-4 text-muted-foreground leading-relaxed text-center lg:text-left">
                  <p className="text-pretty">
                    I’m Joe, a 25-year-old junior web developer with a passion
                    for creativity and continuous learning...
                  </p>
                  <p className="text-pretty">
                    Whether I’m prototyping in Figma, optimizing performance, or
                    writing accessible markup...
                  </p>
                  <p className="text-pretty">
                    Interested in working together? Click the button below…
                  </p>
                </div>

                {/* Highlights */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  {highlights.map((highlight) => (
                    <Card
                      key={highlight.title}
                      className="p-4 bg-card/50 backdrop-blur-sm border-border hover:border-accent/50 transition-colors group"
                    >
                      <highlight.icon className="w-6 h-6 text-accent mb-2 group-hover:scale-110 transition-transform" />
                      <h3 className="font-semibold text-foreground text-sm mb-1">
                        {highlight.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {highlight.description}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>
            </FadeLeft>

            {/* RIGHT COLUMN — Fades from Right */}
            <FadeRight delay={0.2}>
              <div className="flex flex-col space-y-8 items-center text-center lg:items-start lg:text-left">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-6 text-center lg:text-left">
                    Technologies I work with:
                  </h3>

                  <div className="space-y-6">
                    {skills.map((skillGroup) => (
                      <div key={skillGroup.category}>
                        <h4 className="text-accent font-mono text-sm mb-3">
                          {skillGroup.category}
                        </h4>

                        <div className="grid grid-cols-2 gap-2 justify-items-center lg:justify-items-start">
                          {skillGroup.technologies.map((tech) => (
                            <div
                              key={tech}
                              className="flex items-center gap-2 text-muted-foreground"
                            >
                              <span className="text-accent text-xs">▹</span>
                              <span className="text-sm">{tech}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeRight>

            {/* ⭐ FIXED STATS CARD — animated directly with motion.div */}
            <motion.div
            style={{ willChange: "opacity, transform" }}
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="hidden lg:flex absolute right-0 top-[75%] -translate-y-1/4 w-[45%] justify-end"
            >
              <Card className="p-6 bg-gradient-to-br from-accent/10 to-primary/5 border-accent/20 w-full shadow-lg">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-accent font-mono">2+</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Years Experience
                    </div>
                  </div>

                  <div>
                    <div className="text-3xl font-bold text-accent font-mono">10+</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Projects Completed
                    </div>
                  </div>

                  <div>
                    <div className="text-3xl font-bold text-accent font-mono">5+</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Happy Clients
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
