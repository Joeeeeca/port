import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { HeroSection } from "./components/hero-section";
import { AboutSection } from "./components/about-section";
import { ProjectsSection } from "./components/projects-section";
import { ContactSection } from "./components/contact-section";
import { ThemeToggle } from "./components/theme-toggle";
import "./app/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <main>
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
        <ThemeToggle />
      </main>
    </HelmetProvider>
  </React.StrictMode>
);

