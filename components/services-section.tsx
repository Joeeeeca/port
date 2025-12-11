import { Card } from "./ui/card"
import { Button } from "./ui/buttons"
import {
  Globe,
  RefreshCw,
  Search,
  Wrench,
  FileText,
  MessageSquare,
  Rocket,
  ArrowRight,
} from "lucide-react"

import {
  FadeSlideUp,
  FadeZoomIn,
  RevealExpand
} from "./src/animations/SectionAnimations"

import { StaggerParent } from "./src/animations/StaggerParent"
import { StaggerItem } from "./src/animations/StaggerItem"

const packages = [
  {
    icon: Globe,
    title: "Starter Website",
    price: "from £350",
    description:
      "A brand new, custom-built website to establish your online presence.",
  },
  {
    icon: RefreshCw,
    title: "Website Refresh",
    price: "from £250",
    description:
      "Modernize your existing site with updated design and improved performance.",
  },
  {
    icon: Search,
    title: "SEO Tune-Up",
    price: "£120",
    description:
      "Optimize your site for search engines to increase visibility and traffic.",
  },
  {
    icon: Wrench,
    title: "Support",
    price: "£45/mo",
    description:
      "Ongoing maintenance, updates, and technical support to keep things running smoothly.",
  },
]

const processSteps = [
  {
    step: "01",
    icon: FileText,
    title: "Questionnaire",
    description:
      "Tell me about your business, goals, and vision through a quick form.",
  },
  {
    step: "02",
    icon: MessageSquare,
    title: "Plan & Quote",
    description:
      "I'll create a tailored plan and transparent quote based on your needs.",
  },
  {
    step: "03",
    icon: Rocket,
    title: "Build & Communicate",
    description:
      "I build your site with regular updates so you're always in the loop.",
  },
  {
    step: "04",
    icon: Globe,
    title: "Launch",
    description:
      "Your polished, professional website goes live for the world to see.",
  },
]

const questionnaireUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSd1WgbA33GUhJsmRPUL43GUk-WPjyedbvb7iZy0py9uGdWgdw/viewform"

export function ServicesSection() {
  return (
    <section id="services" className="relative py-20 md:py-32 px-4">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16 space-y-4">
          <FadeZoomIn>
            <div className="flex items-center gap-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                <span className="text-accent font-mono text-xl md:text-2xl">
                  05.
                </span>{" "}
                Services
              </h2>
              <div className="flex-1 h-px bg-border max-w-xs hidden md:block" />
            </div>
          </FadeZoomIn>
        </div>

        {/* Packages & Pricing */}
        <div className="mb-20">
          <FadeSlideUp>
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
              Packages & Pricing
            </h3>
          </FadeSlideUp>

 <StaggerParent>
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
    {packages.map((pkg) => (
      <StaggerItem key={pkg.title}>
        <Card
          className="h-full p-6 bg-card/50 backdrop-blur-sm border-border 
          hover:border-accent/50 transition-all duration-300 group hover:-translate-y-1"
        >
          <pkg.icon className="w-10 h-10 text-accent mb-4 group-hover:scale-110 transition-transform" />
          <h4 className="font-semibold text-foreground text-lg mb-1">{pkg.title}</h4>
          <p className="text-accent font-mono text-xl font-bold mb-3">{pkg.price}</p>
          <p className="text-sm text-muted-foreground leading-relaxed">{pkg.description}</p>
        </Card>
      </StaggerItem>
    ))}
 
</div>
 </StaggerParent>
        </div>

        {/* My Process */}
        <div className="mb-20">
          <FadeSlideUp>
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
              My Process
            </h3>
          </FadeSlideUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <FadeSlideUp key={step.title} delay={index * 0.15}>
                <div className="relative h-full">
                  <Card className="p-6 h-full bg-card/50 backdrop-blur-sm border-border hover:border-accent/50 transition-all duration-300 group">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-accent font-mono text-sm font-bold">
                        {step.step}
                      </span>
                      <step.icon className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                    </div>
                    <h4 className="font-semibold text-foreground text-lg mb-2">
                      {step.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </Card>

                  {/* Connector arrow */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-6 h-6 text-accent/50" />
                    </div>
                  )}
                </div>
              </FadeSlideUp>
            ))}
          </div>
        </div>

        {/* CTA */}
       <RevealExpand delay={0.2}>
  <Card className="p-8 md:p-12 bg-gradient-to-br from-accent/10 to-primary/5 
                  border-accent/20 text-center rounded-2xl">
    <p className="text-xl md:text-2xl text-foreground font-medium mb-6 text-pretty max-w-2xl mx-auto">
      Ready for a website that finally feels professional? I'd love to help.
    </p>
    <Button
      asChild
      size="lg"
      className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8"
    >
      <a href={questionnaireUrl} target="_blank" rel="noopener noreferrer">
        Start Your Project
        <ArrowRight className="ml-2 w-4 h-4" />
      </a>
    </Button>
  </Card>
</RevealExpand>
      </div>
    </section>
  )
}
