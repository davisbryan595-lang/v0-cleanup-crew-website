"use client"

export default function About() {
  return (
    <section id="about-us" className="py-20 bg-black">
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

            <p className="text-lg text-gray-400 leading-relaxed">
              Whether you're dealing with a garage full of items, a cluttered basement, or a commercial space that needs
              attention, The Cleanup Crew is ready to help you get back to enjoying your space.
            </p>
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
