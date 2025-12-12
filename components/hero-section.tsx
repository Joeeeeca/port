import { Button } from "./ui/buttons";
import { Linkedin, Mail, Instagram } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { HeroFadeUp } from "./src/animations/SectionAnimations"; 
// H1 intentionally has NO animation → protects LCP score.

export function HeroSection() {
  return (
    <>
      <Helmet>
        {/* 🔥 Preload Fonts for LCP */}
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="/fonts/inter.woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="/fonts/poppins.woff2"
          crossOrigin="anonymous"
        />

        <title>Joe Capon | Freelance Web Developer</title>
        <meta
          name="description"
          content="I'm Joe, a freelance web developer specializing in fast, accessible, and modern websites. Explore my portfolio and recent projects."
        />
      </Helmet>

      <section
        id="hero"
        className="
          relative z-0 min-h-screen flex items-center justify-center
          px-4 py-20 md:py-0 overflow-hidden
        "
      >
        {/* 🎨 Theme-aware background gradient */}
        <div
          className="
            absolute inset-0 pointer-events-none z-[-1]
            bg-gradient-to-b
            from-zinc-50 via-white to-zinc-100
            dark:from-[#0b0b0f] dark:via-[#0f0f17] dark:to-[#0b0b0f]
          "
        />

        <div className="relative z-10 max-w-5xl mx-auto w-full space-y-12">

          {/* -------------------------------------------------
             GREETING + HERO HEADINGS
          ------------------------------------------------- */}
          <div className="space-y-4 text-center lg:text-left">

            <HeroFadeUp delay={0}>
              <p className="text-accent font-mono text-sm md:text-base">
                Hi, my name is
              </p>
            </HeroFadeUp>

            {/* 🚀 LCP Element — NO ANIMATION */}
            <h1
              className="
                text-4xl md:text-6xl lg:text-7xl
                font-bold text-foreground
                leading-tight text-balance
              "
            >
              Joe Capon
            </h1>

            <HeroFadeUp delay={0.25}>
              <h2
                className="
                  text-2xl md:text-5xl lg:text-6xl
                  font-bold text-muted-foreground
                  text-balance
                "
              >
                I build fast, accessible, modern websites that help businesses grow.
              </h2>
            </HeroFadeUp>
          </div>

          {/* -------------------------------------------------
             DESCRIPTION
          ------------------------------------------------- */}
          <HeroFadeUp delay={0.45}>
            <p
              className="
                max-w-2xl text-base md:text-lg
                text-muted-foreground leading-relaxed
                text-pretty text-center lg:text-left
              "
            >
              I’m a freelance web developer specializing in performance, responsive design,
              and SEO-focused builds that make businesses look more professional online.
            </p>
          </HeroFadeUp>

          {/* -------------------------------------------------
             CTA BUTTONS
          ------------------------------------------------- */}
          <HeroFadeUp delay={0.65}>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="#projects">
                <Button
                  size="lg"
                  className="
                    bg-transparent border-2
                    border-primary text-primary
                    hover:bg-accent/10 hover:text-white
                    dark:text-accent dark:border-accent
                  "
                >
                  View My Work
                </Button>
              </a>

              <a href="#contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 bg-transparent"
                >
                  Get In Touch
                </Button>
              </a>
            </div>
          </HeroFadeUp>

          {/* -------------------------------------------------
             SOCIALS
          ------------------------------------------------- */}
          <HeroFadeUp delay={0.85}>
            <div className="flex gap-6 pt-2 justify-center lg:justify-start">
              <a
                href="https://linkedin.com/in/joe-capon-0199b5235"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>

              <a
                href="https://www.instagram.com/joecapondesigns"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>

              <a
                href="mailto:joecapon101@gmail.com"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </HeroFadeUp>
        </div>

        {/* -------------------------------------------------
           SCROLL INDICATOR
        ------------------------------------------------- */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block z-10">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-accent rounded-full animate-bounce" />
          </div>
        </div>
      </section>
    </>
  );
}
