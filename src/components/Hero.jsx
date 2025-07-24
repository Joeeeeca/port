// src/components/Hero.jsx
import React from 'react';

export default function Hero({ className = '' }) {
  return (
    <section
      id="home"
      className={`
        ${className}
        relative overflow-hidden min-h-[65vh] md:min-h-[60vh]
        flex items-center justify-center bg-[#1F2937] text-white
      `}
    >
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 lg:px-16">
        {/* Text */}
        <div className="md:w-1/2 flex flex-col justify-center mb-12 md:mb-0">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-snug lg:leading-tight tracking-tight max-w-prose">
            Crafting beautiful web&nbsp;experiences
          </h1>
          <p className="text-lg text-gray-100 mb-8 max-w-lg">
            I’m Joe, a freelance web developer specializing in fast, accessible, modern websites.
          </p>
          <div className="flex gap-4">
            {/* Primary */}
            <a
              href="#projects"
              className="
                rounded-full bg-[#FFC75F] px-8 py-3 font-semibold shadow-lg
                transition hover:brightness-110 hover:shadow-xl
                focus:outline-none focus:ring-4 focus:ring-[#FFC75F]/50
              "
            >
              View My Work
            </a>
            {/* Secondary */}
            <a
              href="#contact"
              className="
                rounded-full border-2 border-[#FFC75F] text-[#FFC75F]
                px-8 py-3 font-semibold transition
                hover:bg-[#FFC75F] hover:text-white
                focus:outline-none focus:ring-4 focus:ring-[#FFC75F]/50
              "
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Illustration */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-72 h-72 md:w-80 md:h-80">
            <img
              src="/images/hero-image.png"
              alt="Portrait of Joe Capon"
              className="
                w-full h-full object-center rounded-full border-4 border-[#FFC75F]
                shadow-lg shadow-[#FFC75F]/80
              "
            />
          </div>
        </div>
      </div>

      {/* Inverted‑V Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none" style={{ height: '100px' }}>
        <svg
          className="block w-[calc(100%+1px)] h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1200 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 50 L600 0 L1200 50 L1200 100 L0 100 Z" fill="#f3f4f6" />
        </svg>
      </div>
    </section>
  );
}
