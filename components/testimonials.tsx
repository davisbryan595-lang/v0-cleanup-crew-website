"use client"

const testimonials = [
  {
    name: "Sarah Johnson",
    text: "The Cleanup Crew transformed my garage in just one day. Professional, efficient, and friendly! They went above and beyond my expectations.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
  },
  {
    name: "Mike Rodriguez",
    text: "Best decision I made. They handled everything from junk removal to organization. The team was punctual and respectful of my property.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
  },
  {
    name: "Emily Chen",
    text: "Amazing service! They made my cluttered basement look brand new. Will definitely call them again for future projects. Highly satisfied!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-white">What Our</span>
          <span className="ml-3" style={{ color: "#ffa51f" }}>
            Clients Say
          </span>
        </h2>
        <p className="text-center text-gray-300 mb-16 text-lg">Real testimonials from satisfied customers</p>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-700 hover:border-orange-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Profile Section */}
              <div className="flex flex-col items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mb-4 border-2"
                  style={{ borderColor: "#ffa51f" }}
                />
                <h3 className="text-lg font-bold text-white text-center">{testimonial.name}</h3>
              </div>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <span key={j} className="text-xl" style={{ color: "#ffa51f" }}>
                    ★
                  </span>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 text-center leading-relaxed italic">"{testimonial.text}"</p>

              {/* Quote Icon */}
              <div className="flex justify-center mt-6">
                <svg
                  className="w-8 h-8 opacity-20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  style={{ color: "#ffa51f" }}
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.716-3-6-3-1.5 0-3.5 1.5-3.5 3 0 1 1 3 2 4 0 1-1.5 2-2 2s-1-2-1-2c0-3 1-5 2-5 2-1 5-1 7-1 3 0 7 1 7 8v8c0 3-1 4-7 4-1.5 0-4-.5-5-2 1 .5 2 1.5 2 3s-1 3-2 3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
