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
