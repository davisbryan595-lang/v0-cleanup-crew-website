"use client"

import { useState } from "react"

const pricingPlans = [
  {
    name: "Basic Clean",
    price: "$199",
    description: "Perfect for small spaces",
    features: ["Junk removal", "Sweeping", "Surface cleanup", "Up to 2 hours"],
  },
  {
    name: "Standard Clean",
    price: "$399",
    description: "Most popular choice",
    features: ["Complete junk removal", "Deep cleaning", "Light organization", "Up to 4 hours", "Free consultation"],
    featured: true,
  },
  {
    name: "Premium Clean",
    price: "$699",
    description: "Full transformation",
    features: [
      "Complete junk removal",
      "Deep cleaning",
      "Full organization",
      "Up to 8 hours",
      "Free consultation",
      "Follow-up visit",
    ],
  },
]

export default function Pricing() {
  const [toggle, setToggle] = useState(false)

  return (
    <section id="pricing" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-white">Simple</span>
          <span className="ml-3" style={{ color: "#ffa51f" }}>
            Pricing
          </span>
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg">Transparent pricing with no hidden fees</p>

        {/* Toggle */}
        <div className="flex justify-center mb-12">
          <button
            onClick={() => setToggle(!toggle)}
            className="px-6 py-2 rounded-full font-semibold transition-all duration-300 text-white"
            style={{
              backgroundColor: !toggle ? "#ffa51f" : "transparent",
              border: !toggle ? "none" : "2px solid #ffa51f",
              color: !toggle ? "white" : "#ffa51f",
            }}
          >
            One-Time
          </button>
          <button
            onClick={() => setToggle(!toggle)}
            className="px-6 py-2 rounded-full font-semibold transition-all duration-300 ml-4 text-white"
            style={{
              backgroundColor: toggle ? "#ffa51f" : "transparent",
              border: toggle ? "none" : "2px solid #ffa51f",
              color: toggle ? "white" : "#ffa51f",
            }}
          >
            Monthly Maintenance
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-lg p-8 transition-all duration-300 ${
                plan.featured
                  ? "text-white shadow-2xl transform scale-105 border-2"
                  : "bg-gray-800 border-2 border-gray-700 hover:border-orange-500"
              }`}
              style={{
                backgroundColor: plan.featured ? "#ffa51f" : undefined,
                borderColor: plan.featured ? "#ffa51f" : undefined,
              }}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className={`mb-6 ${plan.featured ? "text-white/80" : "text-gray-400"}`}>{plan.description}</p>

              <div className="mb-8">
                <span className="text-5xl font-bold">{plan.price}</span>
                <span className={`ml-2 ${plan.featured ? "text-white/80" : "text-gray-400"}`}>
                  {toggle ? "/month" : "/service"}
                </span>
              </div>

              <button
                className="w-full py-3 rounded-lg font-bold mb-8 transition-all duration-300"
                style={{
                  backgroundColor: plan.featured ? "white" : "#ffa51f",
                  color: plan.featured ? "#ffa51f" : "white",
                }}
              >
                Book Now
              </button>

              <ul className="space-y-4">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
