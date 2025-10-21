"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const [particles, setParticles] = useState<Array<{ id: number; left: number; delay: number }>>([])

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(/herobg.jpg)",
        }}
      />
      <div className="absolute inset-0 bg-black/70" />

      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-2 h-2 rounded-full opacity-20 animate-float"
          style={{
            backgroundColor: "#ffa51f",
            left: `${particle.left}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-down">
          <span className="text-white">Transforming Clutter into</span>
          <br />
          <span className="accent-text hero-emphasis-glow">Clean Perfection</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-down" style={{ animationDelay: "0.2s" }}>
          From chaos to calm — let The Cleanup Crew restore your space
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-down"
          style={{ animationDelay: "0.4s" }}
        >
          <button
            className="px-8 py-4 text-white rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            style={{ backgroundColor: "#ffa51f" }}
          >
            Get a Free Quote
          </button>
          <a
            href="tel:5052897190"
            className="px-8 py-4 rounded-full font-bold text-lg transition-all duration-300"
            style={{
              border: "2px solid #ffa51f",
              color: "#ffa51f",
            }}
          >
            Call Now: 505-289-7190
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce mt-12">
          <svg
            className="w-8 h-8 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            style={{ color: "#ffa51f" }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Decorative elements */}
      <div
        className="absolute top-20 right-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
        style={{ backgroundColor: "#ffa51f" }}
      />
      <div
        className="absolute bottom-20 left-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
        style={{ backgroundColor: "#ffa51f", animationDelay: "1s" }}
      />
    </section>
  )
}
