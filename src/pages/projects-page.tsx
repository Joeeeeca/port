import { Link } from "react-router-dom"
import { Navbar } from "../components/navbar"
import { Card } from "../components/ui/card"
import { Button } from "../components/ui/buttons"
import { ExternalLink, Github, ArrowLeft } from "lucide-react"
import { projects } from "../lib/projects-data"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Page Header */}
      <section className="px-4 pt-32 pb-16">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              <span className="text-accent font-mono">All</span> Projects
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl text-pretty">
              A collection of websites I've built for small businesses, helping them establish a professional online
              presence and grow.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="bg-card border-border overflow-hidden hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 group"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden aspect-video">
                  <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <div>
                    {project.featured && (
                      <span className="text-accent font-mono text-xs uppercase tracking-wider">
                        Featured
                      </span>
                    )}
                    <h2 className="text-2xl font-bold text-foreground mt-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h2>
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-pretty">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-3 py-1 bg-accent/10 text-accent rounded-full border border-accent/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Results Preview */}
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-2">
                      <span className="font-semibold text-accent">Result:</span>{" "}
                      {project.results.after}
                    </p>
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-2">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex-1 border-accent/50 text-accent hover:bg-accent/10 bg-transparent"
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live
                      </a>
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-border text-muted-foreground hover:text-accent hover:border-accent/50 bg-transparent"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
