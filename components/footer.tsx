"use client"

import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="The Cleanup Crew Logo"
                width={180} // slightly bigger for footer visibility
                height={90}
                className="object-contain"
                priority
              />
            </div>
            <p className="text-gray-400">
              Transforming clutter into clean perfection since 2020.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              {["Home", "Services", "Pricing", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-white transition-colors"
                    style={{ color: "#ffa51f" }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              {["Junk Removal", "Space Cleanup", "Organization"].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="hover:text-white transition-colors"
                    style={{ color: "#ffa51f" }}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {[
                { icon: "facebook", path: "#" },
                { icon: "instagram", path: "#" },
                { icon: "twitter", path: "#" },
                { icon: "linkedin", path: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.path}
                  className="text-gray-400 hover:text-white transition-colors"
                  style={{ color: "#ffa51f" }}
                >
                  {/* Simple placeholder icons (you can replace these with lucide-react or real ones) */}
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © 2025 The Cleanup Crew. All rights reserved. | Serving Albuquerque & surrounding areas
          </p>
        </div>
      </div>
    </footer>
  )
}
