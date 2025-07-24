// src/components/About.jsx
import React from 'react';

export default function About({ className = '' }) {
  return (
    <section
      id="about"
      className={`
        ${className}
        relative bg-[#1F2937] text-gray-100
        pt-[170px]
        md:pt-[178px]
        pb-16 md:pb-24
        overflow-hidden
      `}
    >
      {/* Top “V” Divider */}
      <div
        className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none"
        style={{ height: '100px' }}
      >
        <svg
          className="block w-[calc(100%+1px)] h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1200 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0 L1200 0 L1200 50 L600 100 L0 50 Z" fill="#f3f4f6" />
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-16 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          About Me
        </h2>
        <div className="max-w-3xl space-y-6 mb-8 text-gray-200">
          <p>
            I’m Joe, a <strong className="text-white">24‑year‑old junior web developer</strong> with a passion for creativity and continuous learning. My journey began in college with HTML and CSS, and since then I’ve dedicated myself to expanding my skill set and growing as a developer.
          </p>
          <p>
            Whether I’m prototyping in Figma, optimizing performance, or writing accessible, semantic markup, I thrive on striking the right balance between form and function. I’m always eager to tackle new challenges and refine my craft.
          </p>
          <p>
            Interested in working together? Click the button below to tell me about your project via a short questionnaire—whether you need a rebuild of an existing site or a brand‑new build, this will help me understand your scope and next steps.
          </p>
        </div>
        <a
          href="#contact"
          className="
            inline-block px-8 py-3 rounded-full bg-[#FFC75F]
            text-gray-900 font-semibold transition
            hover:brightness-95 focus:outline-none
            focus:ring-4 focus:ring-[#FFC75F]/50
          "
        >
          Tell me about your project
        </a>
      </div>
    </section>
  );
}
