import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <main className="relative">
      <ThemeToggle />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </main>
  )
}
