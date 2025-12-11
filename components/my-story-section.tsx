import { Card } from "./ui/card"
import { Lightbulb, Target, Heart, Handshake } from "lucide-react"
import {FadeZoomIn, StaggerFadeUp } from "./src/animations/SectionAnimations";

const offerings = [
  {
    icon: Target,
    text: "Go from zero discoverability to 100 SEO Lighthouse scores",
  },
  {
    icon: Lightbulb,
    text: "Go from being Facebook-only to having a clean, modern, responsive website",
  },
  {
    icon: Heart,
    text: 'Understand simple but powerful improvements like knowing when their website needs a refresh, improving their homepage quickly, and turning a website from "just existing" into "actually converting"',
  },
]

export function MyStorySection() {
  return (
    <section id="my-story" className="relative py-20 md:py-32 px-4">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 space-y-4">
          <FadeZoomIn>
          <div className="flex items-center gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              <span className="text-accent font-mono text-xl md:text-2xl">04.</span> My Story
            </h2>
            <div className="flex-1 h-px bg-border max-w-xs hidden md:block" />
          </div>
          </FadeZoomIn>
        </div>

        <div className="space-y-8">
          {/* Opening - The Struggle */}
          <StaggerFadeUp delay={0.1}>
          <Card className="p-6 md:p-8 bg-card/50 backdrop-blur-sm border-border">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-pretty">
                Not long ago, I was working a minimum-wage job I didn't enjoy. 12-hour shifts. 3am starts. Even on
                Sundays. I felt stuck. I knew I wanted more, but I had no idea what that "more" actually was.
              </p>
              <p className="text-pretty">
                I tried a few different things. I even dipped into web design a few times, but nothing ever stuck...
                Eventually, I applied for an online computing degree just so I felt like I was moving forward.
              </p>
            </div>
          </Card>
          </StaggerFadeUp>

          {/* The Turning Point */}
          <StaggerFadeUp delay={0.2}>
          <Card className="p-6 md:p-8 bg-gradient-to-br from-accent/10 to-primary/5 border-accent/20">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-pretty">
                Most of the modules felt… meh. But then there was one basic web design module. Nothing fancy.{" "}
                <span className="text-accent font-medium">And something clicked.</span>
              </p>
              <p className="text-pretty">
                I went way beyond the requirements, researched endlessly, and tried to make my project the best it could
                possibly be. That module ended, but my motivation didn't. I realised I didn't want to go back to the
                other topics. I wanted to keep learning web design. Every day. Properly.
              </p>
            </div>
          </Card>
          </StaggerFadeUp>

          {/* What I Do Now */}
          <div className="space-y-6">
            <StaggerFadeUp>
            <h3 className="text-xl font-semibold text-foreground">Fast-forward to today and I now help clients:</h3>
            </StaggerFadeUp>
            <div className="space-y-4">
 {offerings.map((offering, index) => (
  <StaggerFadeUp key={index} delay={index * 0.12}>
    <div
      className="flex items-start gap-4 p-4 rounded-lg bg-card/30 border border-border hover:border-accent/50 transition-colors group"
    >
      <div className="mt-1 p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
        <offering.icon className="w-5 h-5 text-accent" />
      </div>
      <p className="text-muted-foreground leading-relaxed text-pretty">
        {offering.text}
      </p>
    </div>
  </StaggerFadeUp>
))}

            </div>
          </div>

          {/* Why I Love It */}
          <StaggerFadeUp delay={0.1}>
          <Card className="p-6 md:p-8 bg-card/50 backdrop-blur-sm border-border">
            <h3 className="text-xl font-semibold text-foreground mb-4">Why I love designing and building websites:</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-background/50">
                <span className="text-accent font-mono">01.</span>
                <span className="text-muted-foreground">Creating things</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-background/50">
                <span className="text-accent font-mono">02.</span>
                <span className="text-muted-foreground">Learning constantly</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-background/50">
                <span className="text-accent font-mono">03.</span>
                <span className="text-muted-foreground">Solving real problems for real people</span>
              </div>
            </div>
            <p className="mt-6 text-muted-foreground text-pretty italic">
              "And honestly, I have never enjoyed anything as much as I enjoy making websites."
            </p>
          </Card>
          </StaggerFadeUp>

          {/* Mission & CTA */}
          <StaggerFadeUp delay={0.2}>
          <Card className="p-6 md:p-8 bg-gradient-to-br from-primary/10 to-accent/5 border-primary/20">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-accent/10">
                <Handshake className="w-6 h-6 text-accent" />
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">My Mission</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  Build a reputation as a fast, reliable web developer who communicates clearly, keeps clients informed,
                  and never leaves them in the dark.
                </p>
                <p className="text-foreground font-medium pt-2">
                  If you are a small business owner who wants a website that brings in more clients, I would love to
                  help.
                </p>
              </div>
            </div>
          </Card>
          </StaggerFadeUp>
        </div>
      </div>
    </section>
  )
}
