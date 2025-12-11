import { Card } from "./ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Helmet } from "react-helmet-async";

import project1 from "./src/assets/Project1.webp";
import project2 from "./src/assets/Project2.webp";
import project3 from "./src/assets/Project3.webp";
import project4 from "./src/assets/Project4.webp";

import {
  FadeZoom,
  SlideLR,
} from "./src/animations/SectionAnimations";

const projects = [
  {
    title: "Guitar Lessons Website",
    description:
      "A custom-built marketing website for a professional guitar teacher. The site includes structured SEO, fast page performance (99+ Lighthouse), accessibility features, and a clean, mobile-first UI.",
    technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion", "TypeScript"],
    githubUrl: "https://github.com/Joeeeeca/guitar-lessons-site",
    liveUrl: "https://joeeeeca.github.io/guitar-lessons-site/",
    image: project1,
    results: {
      before:
        "The client had an unresponsive Wix site with broken links, poor navigation, and no SEO structure.",
      after:
        "I rebuilt the entire site into a clean, responsive, high-performance website with structured SEO and 99+ Lighthouse scores.",
    },
  },
  {
    title: "Sports Mindset Website",
    description:
      "A clean, structured website for a mindset coach helping athletes overcome performance anxiety and mental barriers.",
    technologies: ["React", "Vite", "Tailwind CSS", "React Helmet", "TypeScript"],
    githubUrl: "https://github.com/Joeeeeca/sportsmindmastered",
    liveUrl: "https://sportsmindmastered.com/",
    image: project2,
    results: {
      before:
        "The original site was basically a Word document shoved into a webpage with no design or structure.",
      after:
        "I created full branding, a new logo, visuals, video integration, and a structured layout that drives enquiries.",
    },
  },
  {
    title: "Christmas Lights Display Website",
    description:
      "A joyful, holiday-themed website to promote a Christmas lights display and help raise money for charity.",
    technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Decap CMS"],
    githubUrl: "https://github.com/Joeeeeca/Christmas",
    liveUrl: "https://highfieldroadchristmaslights.com",
    image: project3,
    results: {
      before:
        "All the information only existed on a Facebook page, causing confusion.",
      after:
        "I built a joyful, mobile-friendly website with animated snow, clear content, and donation improvements.",
    },
  },
  {
    title: "FitCore Personal Trainer Website",
    description:
      "A high-energy fitness brand website built for conversions, mobile-first responsiveness, and client trust.",
    technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion", "TypeScript"],
    githubUrl: "https://github.com/Joeeeeca/FitCore",
    liveUrl: "https://your-live-url.com",
    image: project4,
    results: {
      before:
        "Most PTs rely on Instagram or basic link-in-bio pages which lack structure and clarity.",
      after:
        "I built a bold, modern site with structured services, transformations, testimonials, and multiple CTAs.",
    },
  },
];

export function ProjectsSection() {
  return (
    <>
      <Helmet>
        <title>Joe Capon | Freelance Web Developer</title>
        <meta
          name="description"
          content="A showcase of recent websites I've built — including guitar teaching, fitness, mindset coaching, and seasonal event platforms."
        />
      </Helmet>

      <section id="projects" className="relative py-20 md:py-32 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

        <div className="relative max-w-6xl mx-auto">
          {/* Header */}
          <FadeZoom>
            <div className="mb-16 space-y-4 text-center lg:text-left">
              <div className="flex items-center gap-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground flex items-center">
                  <span className="text-accent font-mono text-xl md:text-2xl mr-2">
                    02.
                  </span>
                  Previous Work
                </h2>
                <div className="flex-1 h-px max-w-xs bg-border hidden md:block" />
              </div>

              <p className="text-muted-foreground text-lg max-w-2xl text-pretty mx-auto lg:mx-0">
                A curated selection of websites I’ve built for real clients —
                each focused on performance, clarity, and professionalism.
              </p>
            </div>
          </FadeZoom>

          {/* Projects */}
          <div className="space-y-24">
            {projects.map((project, index) => (
              <SlideLR
                key={project.title}
                direction={index % 2 === 0 ? "left" : "right"}
                delay={0.1}
              >
                <div className="space-y-10">
                  {/* Layout */}
                  <div
                    className={`flex flex-col ${
                      index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    } gap-8 items-center text-center lg:text-left group`}
                  >
                    {/* Image */}
                    <div className="w-full lg:w-3/5 relative mx-auto">
                      <div className="relative overflow-hidden rounded-lg border border-border bg-card shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:shadow-accent/10">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full aspect-[1896/867] object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>

                    {/* Details */}
                    <div
                      className={`w-full lg:w-2/5 space-y-4 ${
                        index % 2 === 0 ? "lg:text-left" : "lg:text-right"
                      }`}
                    >
                      <p className="text-accent font-mono text-sm">Featured Project</p>

                      <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                        {project.title}
                      </h3>

                      <Card className="p-6 shadow-[0_6px_26px_rgba(147,51,234,0.08)] hover:shadow-[0_10px_36px_rgba(147,51,234,0.15)] transition-all duration-300">
                        <p className="text-muted-foreground leading-relaxed text-pretty">
                          {project.description}
                        </p>
                      </Card>

                      {/* Tech stack */}
                      <div
                        className={`flex flex-wrap gap-3 text-sm font-mono text-muted-foreground justify-center ${
                          index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"
                        }`}
                      >
                        {project.technologies.map((tech) => (
                          <span key={tech}>{tech}</span>
                        ))}
                      </div>

                      {/* Links */}
                      <div
                        className={`flex gap-4 pt-2 justify-center ${
                          index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"
                        }`}
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          className="text-muted-foreground hover:text-accent transition-colors"
                        >
                          <Github className="w-6 h-6" />
                        </a>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          className="text-muted-foreground hover:text-accent transition-colors"
                        >
                          <ExternalLink className="w-6 h-6" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Results */}
                  <Card className="p-6 md:p-8 bg-card border-border shadow-md">
                    <h4 className="text-accent font-mono text-sm mb-6 font-semibold">
                      Results
                    </h4>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <p className="font-semibold text-foreground">Before:</p>
                        <p className="text-muted-foreground leading-relaxed text-pretty">
                          {project.results.before}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <p className="font-semibold text-foreground">After:</p>
                        <p className="text-muted-foreground leading-relaxed text-pretty">
                          {project.results.after}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </SlideLR>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
