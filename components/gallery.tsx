"use client"

import type React from "react"

import { useState } from "react"

const beforeAfterPairs = [
  {
    before: "/cluttered-messy-room-with-junk.jpg",
    after: "/clean-organized-room-after-cleanup.jpg",
  },
  {
    before: "/cluttered-garage-full-of-items.jpg",
    after: "/organized-clean-garage.jpg",
  },
  {
    before: "/messy-basement-with-clutter.jpg",
    after: "/clean-organized-basement.jpg",
  },
]

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + beforeAfterPairs.length) % beforeAfterPairs.length)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % beforeAfterPairs.length)
  }

  const handleSliderChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, percentage)))
  }

  return (
    <section id="gallery" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-white">Before & After</span>
          <span className="ml-3" style={{ color: "#ffa51f" }}>
            Transformations
          </span>
        </h2>
        <p className="text-center text-gray-400 mb-16 text-lg">See the amazing transformations we've created</p>

        {/* Slider */}
        <div className="relative max-w-3xl mx-auto mb-8">
          <div className="relative overflow-hidden rounded-lg cursor-col-resize" onClick={handleSliderChange}>
            {/* After Image */}
            <img
              src={beforeAfterPairs[currentIndex].after || "/placeholder.svg"}
              alt="After cleanup"
              className="w-full h-96 object-cover"
            />

            {/* Before Image */}
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPosition}%` }}>
              <img
                src={beforeAfterPairs[currentIndex].before || "/placeholder.svg"}
                alt="Before cleanup"
                className="w-full h-96 object-cover"
                style={{ width: `${(100 / sliderPosition) * 100}%` }}
              />
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 cursor-col-resize"
              style={{ left: `${sliderPosition}%`, backgroundColor: "#ffa51f" }}
            >
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white p-2 rounded-full"
                style={{ backgroundColor: "#ffa51f" }}
              >
                <svg className="w-5 h-5 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <svg className="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={handlePrev}
              className="p-3 text-white rounded-full hover:opacity-80 transition-opacity duration-300"
              style={{ backgroundColor: "#ffa51f" }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex gap-2">
              {beforeAfterPairs.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className="w-3 h-3 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: i === currentIndex ? "#ffa51f" : "#666",
                    width: i === currentIndex ? "32px" : "12px",
                  }}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 text-white rounded-full hover:opacity-80 transition-opacity duration-300"
              style={{ backgroundColor: "#ffa51f" }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
