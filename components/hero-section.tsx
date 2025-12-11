import { Button } from "./ui/buttons";
import { Linkedin, Mail, Instagram } from "lucide-react"
import { Helmet } from "react-helmet-async";
import { HeroFadeUp, HeroZoom } from "./src/animations/SectionAnimations";



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
            <HeroFadeUp delay={0}>
            <p className="text-accent font-mono text-sm md:text-base text-center lg:text-left">Hi, my name is</p>
            </HeroFadeUp>
            <HeroZoom delay={0.2}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground text-balance text-center lg:text-left">Joe Capon</h1>
            </HeroZoom>
            <HeroFadeUp delay={0.4}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground text-balance text-center lg:text-left">
              I build fast, accessible, modern websites that help businesses grow.
            </h2>
            </HeroFadeUp>
          </div>

          {/* Description */}
          <div className="max-w-2xl">
            <HeroFadeUp delay={0.6}>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty text-center lg:text-left">
            I’m a freelance web developer specializing in performance, responsive design, and SEO-focused builds that make businesses look more professional online.
            </p>
            </HeroFadeUp>
          </div>

          {/* CTA Buttons */}
          <HeroFadeUp delay={0.8}>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="mx-auto lg:mx-0">
         <Button
  size="lg"
  className="bg-transparent border-2 hover:bg-accent/10 hover:text-[#fff] dark:text-accent dark:border-accent text-primary border-primary mx-auto lg:mx-0 cursor-pointer"
>
  View My Work
</Button>
</a>

<a href="#contact" className="mx-auto lg:mx-0">
            <Button size="lg" variant="outline" className="border-2 bg-transparent mx-auto lg:mx-0 cursor-pointer">
              Get In Touch
            </Button>
            </a>
          </div>
          </HeroFadeUp>

          {/* Social Links */}
          <HeroFadeUp delay={1.0}>
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
          </HeroFadeUp>
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
