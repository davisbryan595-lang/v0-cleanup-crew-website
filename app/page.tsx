"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Pricing from "@/components/pricing"
import Gallery from "@/components/gallery"
import Testimonials from "@/components/testimonials"
import Booking from "@/components/booking"
import Footer from "@/components/footer"
import SpecialOffer from "@/components/special-offer"

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Navbar scrolled={scrolled} />
      <SpecialOffer />
      <a href="#contact" className="fixed left-4 bottom-6 z-50 px-4 py-3 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-glow-pulse" style={{ backgroundColor: "#ffa51f" }}>
        Get a Free Quote
      </a>
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Gallery />
      <Testimonials />
      <Booking />
      <Footer />
    </main>
  )
}
