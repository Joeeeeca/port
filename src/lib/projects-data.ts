import project1 from "@/assets/Project1.webp";
import project2 from "@/assets/Project2.webp";
import project3 from "@/assets/Project3.webp";
import project4 from "@/assets/Project4.webp";
import project5 from "@/assets/Project5.webp";

export interface Project {
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  liveUrl: string
  image: string
  results: {
    before: string
    after: string
  }
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: "Guitar Lessons Website",
    description:
      "A custom-built marketing website for a professional guitar teacher. The site includes structured SEO, fast page performance (99+ Lighthouse), accessibility features, and a clean, mobile-first UI. It helps students learn about lesson options and easily contact the teacher to book sessions.",
    technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion", "TypeScript"],
    githubUrl: "#",
    liveUrl: "#",
  image: project1,
    featured: true,
    results: {
      before:
        "The teacher had no online presence at all, relying solely on word-of-mouth and handwritten flyers to attract students. Potential students couldn't easily learn about lesson options or book sessions.",
      after:
        "I built a professional, SEO-optimized website with fast page speeds (99+ Lighthouse score), clear lesson information, and an easy contact form. The site now ranks well locally and makes it simple for students to discover and book lessons.",
    },
  },
  {
    title: "Sports Mindset Website",
    description:
      "A modern and approachable website designed for a sports mindset coach who helps athletes overcome performance anxiety, self-doubt, and mental barriers. The site presents the coach's services, courses, testimonials, and contact options in a clear, structured layout to improve engagement and encourage enquiries.",
    technologies: ["React", "Vite", "Tailwind CSS", "React Helmet", "TypeScript"],
    githubUrl: "#",
    liveUrl: "#",
    image: project2,
    featured: true,
    results: {
      before:
        "The original 'website' was essentially a text-heavy Word document crammed into a few pages — no design, no branding, no visual hierarchy.",
      after:
        "I created a full brand direction with a calm, approachable theme, designed a new logo, added engaging visuals and videos, and built a clear layout with a working contact form. The new site presents the coach professionally and encourages enquiries.",
    },
  },
  {
    title: "Christmas Lights Display Website",
    description:
      "A cheerful, holiday-themed website built to promote a local Christmas lights display and raise donations for charity. The site features animated snow, bright seasonal visuals, and clear calls-to-action guiding visitors to learn more or plan a visit. Designed to be simple, joyful, and mobile-friendly, it helps spread holiday cheer while supporting a good cause.",
    technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Decap CMS"],
    githubUrl: "#",
    liveUrl: "#",
    image: project3,
    featured: true,
    results: {
      before:
        "The Christmas lights display had no digital presence, making it hard for visitors to find information about times, location, or how to donate to the charity.",
      after:
        "I created a festive, mobile-friendly website with animated snow effects, clear visitor information, and prominent donation CTAs. The site successfully increased visitor attendance and charitable donations during the holiday season.",
    },
  },

    {
    title: "FitCore Personal Trainer Website",
    description:
      "A high-energy, conversion-focused website built for a personal training brand. The site showcases services, transformations, and client results through a clean, modern design with strong visual hierarchy. Structured sections, compelling CTAs, and mobile-first responsiveness help personal trainers attract more clients and build trust with visitors.",
    technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion", "TypeScript"],
    githubUrl: "#",
    liveUrl: "#",
    image: project4,
    featured: true,
    results: {
      before:
        "Personal trainers often rely on Instagram pages or simple link-in-bio sites that make it difficult to clearly present services, pricing, transformations, and their coaching approach.",
      after:
        "I built a full-featured fitness website with a bold hero section, structured services, transformation gallery, testimonials, and multiple conversion points. The design is responsive, fast, and optimized for a professional client experience — helping trainers turn visitors into paying clients.",
    }
  },

  {
    title: "Your Health Education",
    description:
      "a modern health-coaching and e-learning platform founded by Brad Salter. The site showcases his background in sport and exercise nutrition, coaching philosophy, and mission to scale accessible, results-driven health education worldwide.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "React Router", "Context API", "LocalStorage"],
    githubUrl: "#",
    liveUrl: "#",
    image: project5,
    featured: true,
    results: {
      before:
        "Personal trainers often rely on Instagram pages or simple link-in-bio sites that make it difficult to clearly present services, pricing, transformations, and their coaching approach.",
      after:
        "I designed and built a complete health education website from the ground up, clearly communicating the founder’s credentials, mission, and long-term vision. The site presents a professional, trustworthy brand presence with clear content structure, strong visual hierarchy, and mobile-first responsiveness.",
    },
  },
]

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured)
}
