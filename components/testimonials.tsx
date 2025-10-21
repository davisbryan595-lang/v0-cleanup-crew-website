"use client"

import { useState, useEffect } from "react"

const testimonials = [
  {
    name: "Sarah Johnson",
    text: "The Cleanup Crew transformed my garage in just one day. Professional, efficient, and friendly!",
    rating: 5,
  },
  {
    name: "Mike Rodriguez",
    text: "Best decision I made. They handled everything from junk removal to organization. Highly recommended!",
    rating: 5,
  },
  {
    name: "Emily Chen",
    text: "Amazing service! They made my cluttered basement look brand new. Will definitely call them again.",
    rating: 5,
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoPlay])

  return (
    <section id="testimonials" className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-white">What Our</span>
          <span className="ml-3" style={{ color: "#ffa51f" }}>
            Clients Say
          </span>
        </h2>
        <p className="text-center text-gray-400 mb-16 text-lg">Real testimonials from satisfied customers</p>

        {/* Carousel */}
        <div
          className="relative bg-gray-800 p-12 rounded-lg shadow-lg border border-gray-700"
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >
          {/* Stars */}
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
              <span key={i} className="text-2xl" style={{ color: "#ffa51f" }}>
                ★
              </span>
            ))}
          </div>

          {/* Testimonial Text */}
          <p className="text-xl text-center text-gray-300 mb-8 italic">"{testimonials[currentIndex].text}"</p>

          {/* Author */}
          <p className="text-center font-bold text-lg text-white">{testimonials[currentIndex].name}</p>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="p-2 text-white rounded-full hover:opacity-80 transition-opacity duration-300"
              style={{ backgroundColor: "#ffa51f" }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex gap-2 items-center">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className="w-2 h-2 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: i === currentIndex ? "#ffa51f" : "#666",
                    width: i === currentIndex ? "32px" : "8px",
                  }}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
              className="p-2 text-white rounded-full hover:opacity-80 transition-opacity duration-300"
              style={{ backgroundColor: "#ffa51f" }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
