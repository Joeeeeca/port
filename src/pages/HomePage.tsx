import { Navbar } from "../components/navbar";
import { HeroSection } from "../components/hero-section";
import { ProjectsSection } from "../components/projects-section";
import { AboutSection } from "../components/about-section";
import { MyStorySection } from "../components/my-story-section";
import { ServicesSection } from "../components/services-section";
import { ContactSection } from "../components/contact-section";
import { ThemeToggle } from "../components/theme-toggle";
import { PageTransition } from "../components/ui/PageTransition";

export default function HomePage() {
  return (
<PageTransition>
<main>
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <MyStorySection />
      <ServicesSection />
      <ContactSection />
      <ThemeToggle />
    </main>
    </PageTransition>
  );
}
