"use client"

import { useEffect, useState } from "react"

export default function WhyChooseUs() {
  const [counters, setCounters] = useState({ clients: 0, satisfaction: 0, rating: 0 })

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prev) => ({
        clients: prev.clients < 329 ? prev.clients + 10 : 329,
        satisfaction: prev.satisfaction < 100 ? prev.satisfaction + 2 : 95,
        rating: prev.rating < 4.5 ? prev.rating + 0.1 : 4.5,
      }))
    }, 30)

    return () => clearInterval(interval)
  }, [])

  const reasons = [
    {
      icon: "✓",
      title: "Complete Solutions",
      description: "We handle junk removal, space cleanup, and organization all in one service—no need for multiple contractors.",
    },
    {
      icon: "✓",
      title: "Professional & Reliable",
      description: "Our experienced team is dedicated to 100% customer satisfaction with every job, big or small.",
    },
    {
      icon: "✓",
      title: "Transparent Pricing",
      description: "No hidden fees, no surprises. We provide honest quotes and flexible options tailored to your needs.",
    },
  ]

  return (
    <section id="why-choose-us" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative md:order-2">
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

          {/* Text Content */}
          <div className="md:order-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Why Go With</span>
              <span className="ml-3" style={{ color: "#ffa51f" }}>
                The Cleanup Crew?
              </span>
            </h2>

            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              We're more than just a cleanup service. We offer complete solutions that transform your space—whether you need junk removal, deep cleaning, or full organization. Every job is handled with professionalism and care.
            </p>

            {/* Reasons Grid */}
            <div className="space-y-6 mb-8">
              {reasons.map((reason, i) => (
                <div key={i} className="flex gap-4">
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold"
                    style={{ backgroundColor: "#ffa51f" }}
                  >
                    {reason.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{reason.title}</h3>
                    <p className="text-gray-400">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold" style={{ color: "#ffa51f" }}>
                  +{counters.clients}
                </div>
                <p className="text-gray-400 mt-2 text-sm">Happy Clients</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold" style={{ color: "#ffa51f" }}>
                  {counters.satisfaction}%
                </div>
                <p className="text-gray-400 mt-2 text-sm">Satisfaction</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold" style={{ color: "#ffa51f" }}>
                  {counters.rating.toFixed(1)}
                </div>
                <p className="text-gray-400 mt-2 text-sm">Star Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
