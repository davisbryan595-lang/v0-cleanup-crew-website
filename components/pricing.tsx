"use client"

import { useState } from "react"

const pricingPlans = [
  {
    name: "Regular Junk Removal",
    description: "Perfect for household items and general junk",
    features: ["Item assessment", "Professional removal", "Site cleanup", "Flexible scheduling"],
  },
  {
    name: "Single Bulky Item Pickup",
    description: "Specialized for large furniture and appliances",
    features: ["Careful handling", "Professional removal", "Same-day options available", "Fully insured"],
    featured: true,
  },
  {
    name: "Commercial Work",
    description: "Construction sites, office cleanups, and more",
    features: ["Large-scale projects", "Bulk removal", "Flexible timelines", "Business scheduling"],
  },
  {
    name: "Custom Package",
    description: "Tailored services to match your exact needs",
    features: [
      "Mix & match any services",
      "On-site assessment",
      "Flexible scheduling",
      "Itemized pricing",
      "Business & residential",
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-white">Simple</span>
          <span className="ml-3" style={{ color: "#ffa51f" }}>
            Pricing
          </span>
        </h2>
        <p className="text-center text-gray-400 mb-16 text-lg">Transparent pricing with no hidden fees</p>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-4 gap-8">
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
              <p className={`mb-8 ${plan.featured ? "text-white/80" : "text-gray-400"}`}>{plan.description}</p>

              <a
                href="#contact"
                className="w-full py-3 rounded-lg font-bold mb-8 transition-all duration-300 inline-block text-center transform hover:scale-105"
                style={{
                  backgroundColor: plan.featured ? "white" : "#ffa51f",
                  color: plan.featured ? "#ffa51f" : "white",
                }}
              >
                Get a Quote
              </a>

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
