"use client"

const services = [
  {
    icon: "🗑️",
    title: "Junk Removal",
    description: "Professional removal of unwanted items, furniture, and debris from your space.",
  },
  {
    icon: "🧹",
    title: "Space Cleanup",
    description: "Complete cleanup including sweeping, surface touch-up, and light organization.",
  },
  {
    icon: "📦",
    title: "Organization",
    description: "Expert organization and arrangement of your belongings for maximum efficiency.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-white">Our</span>
          <span className="ml-3" style={{ color: "#ffa51f" }}>
            Services
          </span>
        </h2>
        <p className="text-center text-gray-400 mb-16 text-lg">
          Comprehensive solutions for all your cleanup and junk removal needs
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group border border-gray-800 card-glow"
            >
              <div
                className="mb-6 inline-block p-4 rounded-lg group-hover:text-white transition-colors duration-300 text-3xl"
                style={{ backgroundColor: "rgba(255, 165, 31, 0.1)", color: "#ffa51f" }}
              >
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

              <a
                href="#contact"
                className="font-semibold transition-colors duration-300 flex items-center gap-2 hover:gap-3 hover:opacity-80"
                style={{ color: "#ffa51f" }}
              >
                Book Now →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
