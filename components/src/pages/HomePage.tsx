import { Navbar } from "../../navbar";
import { HeroSection } from "../../hero-section";
import { ProjectsSection } from "../../projects-section";
import { AboutSection } from "../../about-section";
import { MyStorySection } from "../../my-story-section";
import { ServicesSection } from "../../services-section";
import { ContactSection } from "../../contact-section";
import { ThemeToggle } from "../../theme-toggle";
import { PageTransition } from "../../ui/PageTransition";

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
