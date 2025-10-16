import { Button } from "./ui/buttons";
import { Linkedin, Mail, Instagram } from "lucide-react"
import { Helmet } from "react-helmet-async";



export function HeroSection() {
  return (
      <>
      <Helmet>
        <title>Joe Capon | Freelance Web Developer</title>
        <meta
          name="description"
          content="I'm Joe, a freelance web developer specializing in fast, accessible, and modern websites. Explore my portfolio and recent projects."
        />
      </Helmet>
    
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 py-20 md:py-0">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto w-full">
        <div className="space-y-8">
          {/* Greeting */}
          <div className="space-y-2">
            <p className="text-accent font-mono text-sm md:text-base text-center lg:text-left">Hi, my name is</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground text-balance text-center lg:text-left">Joe Capon</h1>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground text-balance text-center lg:text-left">
              I build things for the web.
            </h2>
          </div>

          {/* Description */}
          <div className="max-w-2xl">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty text-center lg:text-left">
            I’m Joe, a freelance web developer specializing in fast, accessible, modern websites.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
         <Button
  size="lg"
  className="bg-transparent border-2 border-accent text-accent hover:bg-accent/10 hover:text-[#fff] dark:text-accent dark:border-accent text-primary border-primary mx-auto lg:mx-0 cursor-pointer"
>
  View My Work
</Button>

            <Button size="lg" variant="outline" className="border-2 bg-transparent mx-auto lg:mx-0 cursor-pointer">
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 pt-4 mx-auto lg:mx-0 justify-center lg:justify-start">

            <a href="https://linkedin.com/in/joe-capon-0199b5235"
            target="_blank"
            rel="noopener referrer"
            className="text-muted-foreground hover:text-accent transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6" />
            </a>

            <a href="https://www.instagram.com/joecapondesigns"
            target="_blank"
            rel="noopener referrer"
            className="text-muted-foreground hover:text-accent transition-colors" aria-label="Instagram">
              <Instagram className="w-6 h-6" />
            </a>

            <a href="mailto:joecapon101@gmail.com"
            target="_blank"
            rel="noopener referrer"
            className="text-muted-foreground hover:text-accent transition-colors" aria-label="Email">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-accent rounded-full animate-bounce" />
        </div>
      </div>
    </section>
    </>
  )
}
