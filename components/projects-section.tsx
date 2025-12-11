import { Card } from "./ui/card"
import { ExternalLink, Github } from "lucide-react"
import { Helmet } from "react-helmet-async"
import project1 from "./src/assets/Project1.webp"
import project2 from "./src/assets/Project2.webp"
import project3 from "./src/assets/Project3.webp"
import project4 from "./src/assets/Project4.webp"
import { LuxeSlideLR} from "./src/animations/SectionAnimations"
import { FadeZoomIn } from "./src/animations/SectionAnimations"

const projects = [
  {
    title: "Guitar Lessons Website",
    description:
      "A custom-built marketing website for a professional guitar teacher. The site includes structured SEO, fast page performance (99+ Lighthouse), accessibility features, and a clean, mobile-first UI. It helps students learn about lesson options and easily contact the teacher to book sessions.",
    technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion", "TypeScript"],
    githubUrl: "https://github.com/Joeeeeca/guitar-lessons-site",
    liveUrl: "https://joeeeeca.github.io/guitar-lessons-site/",
    image: project1,
    results: {
      before:
        "The client had an unresponsive Wix site with broken links, poor navigation, and no SEO structure.",
      after:
        "I rebuilt the entire site into a clean, responsive, high-performance website with optimized SEO, structured content, and 99+ Lighthouse scores. The new design improves usability and makes it easier for students to book lessons.",
    },
  },
  {
    title: "Sports Mindset Website",
    description:
      "A modern and approachable website designed for a sports mindset coach who helps athletes overcome performance anxiety, self-doubt, and mental barriers. The site presents the coach’s services, courses, testimonials, and contact options in a clear, structured layout to improve engagement and encourage enquiries.",
    technologies: ["React", "Vite", "Tailwind CSS", "React Helmet","TypeScript"],
    githubUrl: "https://github.com/Joeeeeca/sportsmindmastered",
    liveUrl: "https://sportsmindmastered.com/",
    image: project2,
    results: {
      before:
        "The original “website” was essentially a text-heavy Word document crammed into a few pages — no design, no branding, no visual hierarchy.",
      after:
        "I created a full brand direction with a calm, approachable theme, designed a new logo, added engaging visuals and videos, and built a clear layout with a working contact form. The new site presents the coach professionally and encourages enquiries.",
    },
  },
  {
    title: "Christmas Lights Display Website",
    description:
      "A cheerful, holiday-themed website built to promote a local Christmas lights display and raise donations for charity. The site features animated snow, bright seasonal visuals, and clear calls-to-action guiding visitors to learn more or plan a visit. Designed to be simple, joyful, and mobile-friendly, it helps spread holiday cheer while supporting a good cause.",
    technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Decap CMS"],
    githubUrl: "https://github.com/Joeeeeca/Christmas",
    liveUrl: "https://highfieldroadchristmaslights.com",
    image: project3,
    results: {
      before:
        "The project existed only as a Facebook page, which made it hard for visitors to find information or donate.",
      after:
        "I designed a joyful, mobile-friendly website with animated snow, clear information sections, and simple call-to-actions. Visitors can now easily learn about the event and donate, greatly improving clarity and engagement.",
    },
  },
       {
    title: "FitCore Personal Trainer Website",
    description:
      "A high-energy, conversion-focused website built for a personal training brand. The site showcases services, transformations, and client results through a clean, modern design with strong visual hierarchy. Structured sections, compelling CTAs, and mobile-first responsiveness help personal trainers attract more clients and build trust with visitors.",
    technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion", "TypeScript"],
    githubUrl: "https://github.com/Joeeeeca/FitCore",
    liveUrl: "https://your-live-url.com",
    image: project4,
    results: {
      before:
        "Personal trainers often rely on Instagram pages or simple link-in-bio sites that make it difficult to clearly present services, pricing, transformations, and their coaching approach.",
      after:
        "I built a full-featured fitness website with a bold hero section, structured services, transformation gallery, testimonials, and multiple conversion points. The design is responsive, fast, and optimized for a professional client experience — helping trainers turn visitors into paying clients.",
    },
  },
]

export function ProjectsSection() {
  return (
    <>
      <Helmet>
        <title>Joe Capon | Freelance Web Developer</title>
        <meta
          name="description"
          content="I'm Joe, a freelance web developer specializing in fast, accessible, and modern websites. Explore my portfolio and recent projects."
        />
      </Helmet>

      <section id="projects" className="relative py-20 md:py-32 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

        <div className="relative max-w-6xl mx-auto">

          {/* Header */}
            <FadeZoomIn>
          <div className="mb-16 space-y-4">
       
  <div className="flex items-center gap-4">
    <h2 className="text-3xl md:text-4xl font-bold text-foreground flex items-center">
      <span className="text-accent font-mono text-xl md:text-2xl mr-2">02.</span>
      Previous Work
    </h2>
    <div className="flex-1 h-px max-w-xs bg-gray-800 hidden md:block" />
  </div>


            <p className="text-muted-foreground text-lg max-w-2xl text-pretty text-center lg:text-left mx-auto lg:mx-0">
              Here are some of my recent projects that showcase my skills and experience in web development.
            </p>
          </div>
</FadeZoomIn>
          {/* Projects */}
          <div className="space-y-24">
           {projects.map((project, index) => (
  <LuxeSlideLR
    key={project.title}
    direction={index % 2 === 0 ? "left" : "right"}
  >
    <div className="space-y-10">

                {/* Project Layout */}
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
                      />
                    </div>
                  </div>

                  {/* Details */}
                  <div
                    className={`w-full lg:w-2/5 space-y-4 ${
                      index % 2 === 0 ? "lg:text-left" : "lg:text-right"
                    }`}
                  >
                    <p className="text-accent font-mono text-sm mb-2">Featured Project</p>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {project.title}
                    </h3>

                    <Card className="p-6 shadow-[0_6px_26px_rgba(147,51,234,0.08)] hover:shadow-[0_10px_36px_rgba(147,51,234,0.15)] transition-all duration-300">
                      <p className="text-muted-foreground leading-relaxed text-pretty">
                        {project.description}
                      </p>
                    </Card>

                    <div
                      className={`flex flex-wrap gap-3 text-sm font-mono text-muted-foreground justify-center ${
                        index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"
                      }`}
                    >
                      {project.technologies.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>

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

                {/* RESULTS SECTION — FIXED & WORKING */}
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
              </LuxeSlideLR>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}
