"use client"

import { useState } from "react"
import Image from "next/image"

interface NavbarProps {
  scrolled: boolean
}

export default function Navbar({ scrolled }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navItems = ["Home", "About", "Services", "Gallery", "Pricing", "Testimonials", "Contact"]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 animate-float relative">
            <div className="absolute inset-0 rounded-full blur-xl opacity-70"
              style={{ backgroundColor: "#ffa51f", filter: "blur(1px)" }} />
            <Image
              src="/logo.png"
              alt="The Cleanup Crew Logo"
              width={200}  // Increased size
              height={100}
              className="object-contain relative drop-shadow-[0_0_20px_rgba(255,165,31,0.6)] transition-transform duration-500 hover:scale-110"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, i) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {item}
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: "#ffa51f" }}
                />
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:5052897190"
              className="px-6 py-2 text-white rounded-full transition-all duration-300 font-semibold animate-glow-pulse"
              style={{ backgroundColor: "#ffa51f" }}
            >
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="md:hidden pb-4 space-y-2 bg-black/90">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-4 py-2 text-gray-300 hover:text-white rounded transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="tel:5052897190"
              className="block px-4 py-2 text-white rounded text-center font-semibold"
              style={{ backgroundColor: "#ffa51f" }}
            >
              Call Now
            </a>
          </div>
        )}
      </div>

      {/* Floating & Glow Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </nav>
  )
}
