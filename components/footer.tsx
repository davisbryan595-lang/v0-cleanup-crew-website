"use client"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span style={{ color: "#ffa51f" }}>THE</span>
              <span className="ml-2">CLEANUP</span>
              <span style={{ color: "#ffa51f" }} className="ml-2">
                CREW
              </span>
            </h3>
            <p className="text-gray-400">Transforming clutter into clean perfection since 2020.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#home" className="hover:text-white transition-colors" style={{ color: "#ffa51f" }}>
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors" style={{ color: "#ffa51f" }}>
                  Services
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors" style={{ color: "#ffa51f" }}>
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors" style={{ color: "#ffa51f" }}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors" style={{ color: "#ffa51f" }}>
                  Junk Removal
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors" style={{ color: "#ffa51f" }}>
                  Space Cleanup
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors" style={{ color: "#ffa51f" }}>
                  Organization
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" style={{ color: "#ffa51f" }}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" style={{ color: "#ffa51f" }}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m5.521 17.34c-.24.375-.745.556-1.159.462-.406-.094-.639-.409-.62-.896.02-.441.328-.655.926-.655h.6c.504 0 .893-.449.823-.954-.035-.227-.083-.303-.684-.303h-.38c-.119 0-.217.02-.254.066-.058.052-.058.174-.058.174v1.448c0 .657-.561 1.08-1.197 1.08-.563 0-.895-.408-.895-1.084v-1.391c0-.437-.26-.856-.682-.856-.388 0-.68.419-.68.856v1.391c0 .676-.332 1.084-.895 1.084-.636 0-1.197-.423-1.197-1.08v-1.448s0-.122-.058-.174c-.037-.046-.135-.066-.254-.066h-.38c-.603 0-.649.076-.684.303-.07.505.319.954.823.954h.6c.598 0 .906.214.926.655.02.487-.214.802-.62.896-.414.094-.92-.087-1.159-.462-.288-.478-.29-1.04-.29-1.04s.058-.651.058-.894c0-.12-.045-.196-.046-.196-.016-.012-.112-.042-.3-.042s-.284.03-.3.042c-.001 0-.046.076-.046.196 0 .243.058.894.058.894s-.002.562-.29 1.04z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" style={{ color: "#ffa51f" }}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a10.6 10.6 0 01-9.5 5M23 3v0z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" style={{ color: "#ffa51f" }}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
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
