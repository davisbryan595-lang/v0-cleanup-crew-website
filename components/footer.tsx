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
