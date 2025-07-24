// src/components/Contact.jsx
import React from 'react';

export default function Contact({ className = '' }) {
  return (
    <section
      id="contact"
      className={`
        ${className}
        py-24 bg-gray-50 text-gray-900
      `}
    >
      <div className="container mx-auto px-6 lg:px-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Get in touch</h2>
        <p className="mb-8 text-gray-700 max-w-2xl mx-auto">
          Have a project in mind? I’ve put together a quick questionnaire to help me understand your needs so we can hit the ground running.
        </p>

        {/* Primary CTA */}
        <a
          href="https://your.typeform.com/to/QUESTIONNAIRE_ID"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block px-10 py-4 bg-[#FFC75F] text-gray-900 font-semibold
            rounded-full shadow-lg transition hover:brightness-95
            focus:outline-none focus:ring-4 focus:ring-[#FFC75F]/50
          "
        >
          Tell me about your project
        </a>

        {/* Secondary Email */}
        <div className="mt-6 text-gray-600">
          Or email me directly at{' '}
          <a
            href="mailto:joe@example.com"
            className="text-[#FFC75F] font-medium hover:underline"
          >
            joe@example.com
          </a>
        </div>
      </div>
    </section>
  );
}
