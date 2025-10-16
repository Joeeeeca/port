import { Button } from "@/components/ui/buttons"
import { Card } from "@/components/ui/card.tsx"
import { ExternalLink, Github } from "lucide-react"
import { Helmet } from "react-helmet-async";

const projects = [
  {
    title: "Guitar Lessons Website",
    description:
      "A responsive website designed for a local guitar teacher to showcase lessons, pricing, and contact details. Built using HTML, CSS, and JavaScript, this project focused on clean structure, accessibility, and creating a smooth user experience across devices.",
    technologies: ["Figma", "HTML", "CSS", "JavaScript"],
    githubUrl: "#",
    liveUrl: "https://georgecaponguitarlessons.com/",
    image: "/Project-1.png",
  },
  {
    title: "Sports Mindset Website",
    description:
      "A clean and engaging website for a sports mindset coach, designed to help athletes—from beginners to world champions—improve confidence, composure, and mental resilience. Built with HTML, CSS, and JavaScript, the site highlights key programs and provides a clear path for client inquiries.",
    technologies: ["Figma", "HTML", "CSS", "JavaScript"],
    githubUrl: "#",
    liveUrl: "https://sportsmindmastered.com/",
    image: "/Project-2.png",
  },
  {
    title: "Christmas Lights Display Website",
    description:
      "A festive website created for a local Christmas lights display, built to share its story, location, and charitable mission. Developed with HTML, CSS, and JavaScript, the site includes a donation link, embedded Facebook updates, and responsive design for easy viewing across devices.",
    technologies: ["Figma", "HTML", "CSS", "JavaScript"],
    githubUrl: "#",
    liveUrl: "https://sportsmindmastered.com/",
    image: "/Project-3.png",
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
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 space-y-4">
          <div className="flex items-center gap-4">
  <h2 className="text-3xl md:text-4xl font-bold text-foreground flex items-center">
    <span className="text-accent font-mono text-xl md:text-2xl mr-2">02.</span> 
    Previous Work
  </h2>
  <div className="flex-1 h-px bg-border max-w-xs bg-gray-800 hidden md:block" />
</div>

          <p className="text-muted-foreground text-lg max-w-2xl lg-max-w-2xl text-pretty text-center lg:text-left mx-auto lg:mx-0">
            Here are some of my recent projects that showcase my skills and experience in web development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-24">
          {projects.map((project, index) => (
           <div
  key={project.title}
  className={`flex flex-col ${
    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
  } gap-8 items-center text-center lg:text-left group`}
>

              {/* Project Image */}
             <div className="w-full lg:w-3/5 relative mx-auto">
  <div className="relative overflow-hidden rounded-lg border border-border bg-card shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:shadow-accent/10 flex items-center justify-center">
    <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
    <img
      src={project.image || "/placeholder.svg"}
      alt={project.title}
      className="w-full aspect-[16/10] object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
    />
  </div>
</div>

              {/* Project Details */}
              <div
  className={`w-full lg:w-2/5 space-y-4 ${
    index % 2 === 0 ? "lg:text-left" : "lg:text-right"
  } text-center lg:text-left mx-auto`}
>

                <div>
                  <p className="text-accent font-mono text-sm mb-2">Featured Project</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{project.title}</h3>
                </div>

         <Card className="p-6 shadow-[0_6px_26px_rgba(147,51,234,0.08)] hover:shadow-[0_10px_36px_rgba(147,51,234,0.15)] transition-all duration-300 dark:shadow-none dark:hover:-translate-y-1">
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
    rel="noopener noreferrer"
    className="text-muted-foreground hover:text-accent transition-colors"
    aria-label={`View ${project.title} on GitHub`}
  >
    <Github className="w-6 h-6" />
  </a>
  <a
    href={project.liveUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="text-muted-foreground hover:text-accent transition-colors"
    aria-label={`View ${project.title} live site`}
  >
    <ExternalLink className="w-6 h-6" />
  </a>
</div>

              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-16">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-accent text-accent hover:bg-accent/10 bg-transparent"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
    </>
  )
}
