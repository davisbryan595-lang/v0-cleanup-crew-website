"use client"

import { useEffect, useState } from "react"

export default function About() {
  const [counters, setCounters] = useState({ clients: 0, satisfaction: 0, rating: 0 })

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prev) => ({
        clients: prev.clients < 500 ? prev.clients + 10 : 500,
        satisfaction: prev.satisfaction < 100 ? prev.satisfaction + 2 : 100,
        rating: prev.rating < 5 ? prev.rating + 0.1 : 5,
      }))
    }, 30)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">About</span>
              <span className="ml-3" style={{ color: "#ffa51f" }}>
                The Cleanup Crew
              </span>
            </h2>

            <p className="text-lg text-gray-400 mb-6 leading-relaxed">
              We're dedicated to transforming cluttered spaces into organized, clean environments. With years of
              experience in junk removal and space cleanup, we've helped hundreds of families and businesses reclaim
              their spaces.
            </p>

            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Our team is reliable, professional, and committed to 100% customer satisfaction. We handle everything from
              junk removal to complete space organization and light cleanup.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold" style={{ color: "#ffa51f" }}>
                  +{counters.clients}
                </div>
                <p className="text-gray-400 mt-2">Happy Clients</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold" style={{ color: "#ffa51f" }}>
                  {counters.satisfaction}%
                </div>
                <p className="text-gray-400 mt-2">Satisfaction</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold" style={{ color: "#ffa51f" }}>
                  {counters.rating.toFixed(1)}
                </div>
                <p className="text-gray-400 mt-2">Star Rating</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="/professional-cleanup-team-working-in-organized-spa.jpg"
              alt="The Cleanup Crew team"
              className="rounded-lg shadow-xl"
            />
            <div
              className="absolute inset-0 rounded-lg"
              style={{ background: "linear-gradient(to top, rgba(255, 165, 31, 0.2), transparent)" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
