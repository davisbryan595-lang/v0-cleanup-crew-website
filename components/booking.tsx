"use client"

import type React from "react"

import { useState } from "react"

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    service: "standard",
    message: "",
    customDetails: "",
    budget: "",
    promotionalUpdates: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      service: "standard",
      message: "",
      customDetails: "",
      budget: "",
      promotionalUpdates: false,
    })
  }

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-white">Get in</span>
          <span className="ml-3" style={{ color: "#ffa51f" }}>
            Touch
          </span>
        </h2>
        <p className="text-center text-gray-400 mb-16 text-lg">Get started with a free consultation</p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-white">Contact Us</h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: "#ffa51f" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Call Us</h4>
                  <a
                    href="tel:5052897190"
                    className="text-gray-400 hover:text-white transition-colors"
                    style={{ color: "#ffa51f" }}
                  >
                    505-289-7190
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: "#ffa51f" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Email</h4>
                  <a
                    href="mailto:info@cleanupcrewabq.com"
                    className="text-gray-400 hover:text-white transition-colors"
                    style={{ color: "#ffa51f" }}
                  >
                    info@cleanupcrewabq.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: "#ffa51f" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Service Areas</h4>
                  <p className="text-gray-400">Albuquerque, Rio Rancho, Corrales, Los Lunas, Belén</p>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-white mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/share/17M9FQnhmD/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                    style={{ color: "#ffa51f" }}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/the_clean_up_crew505?igsh=ZDRsdmNmcmhkcnpj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                    style={{ color: "#ffa51f" }}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 7.313c.05.001.102.002.155.002 1.378 0 2.5 1.122 2.5 2.5v8.75c0 1.378-1.122 2.5-2.5 2.5H7.404c-1.378 0-2.5-1.122-2.5-2.5V9.815c0-1.378 1.122-2.5 2.5-2.5h9.037zm-4.441 1.688c-1.933 0-3.5 1.567-3.5 3.5s1.567 3.5 3.5 3.5 3.5-1.567 3.5-3.5-1.567-3.5-3.5-3.5zm4.441.903c.331 0 .6.269.6.6s-.269.6-.6.6-.6-.269-.6-.6.269-.6.6-.6z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <img
              src="/happy-cleanup-team-with-thumbs-up.jpg"
              alt="Cleanup team"
              className="rounded-lg mt-8 shadow-lg"
            />
          </div>

          {/* Booking Form */}
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-white mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-2 border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none transition-colors"
                  style={{ borderColor: "rgb(55, 65, 81)", focusBorderColor: "#ffa51f" }}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-2 border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-2 border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none transition-colors"
                  placeholder="505-289-7190"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-2">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-2 border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none transition-colors"
                  placeholder="Your address"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-2">Service Type</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border-2 border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none transition-colors"
                >
                  <option value="standard">Regular Junk Removal</option>
                  <option value="basic">Single Bulky Item Pickup</option>
                  <option value="premium">Commercial Work</option>
                  <option value="custom">Custom Package (Tell us what you need)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border-2 border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your cleanup needs..."
                />
              </div>

              {formData.service === "custom" && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Custom Package Details</label>
                    <textarea
                      name="customDetails"
                      value={formData.customDetails}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border-2 border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none transition-colors resize-none"
                      placeholder="List the items/areas to address, timeline, special requests, etc."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Preferred Budget (optional)</label>
                    <input
                      type="text"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border-2 border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none transition-colors"
                      placeholder="$500"
                    />
                  </div>
                </div>
              )}

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="promotionalUpdates"
                  name="promotionalUpdates"
                  checked={formData.promotionalUpdates}
                  onChange={handleChange}
                  className="w-5 h-5 rounded border-2 border-gray-700 bg-gray-800 cursor-pointer"
                  style={{ accentColor: "#ffa51f" }}
                />
                <label htmlFor="promotionalUpdates" className="text-sm text-gray-300 cursor-pointer">
                  I agree to receive promotional updates
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
                style={{ backgroundColor: "#ffa51f" }}
              >
                Get a Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
