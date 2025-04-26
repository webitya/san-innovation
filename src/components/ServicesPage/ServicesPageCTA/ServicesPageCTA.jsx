import Link from "next/link"

export default function ServicesPageCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--secondary))] text-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Marketing?</h2>
          <p className="text-xl opacity-90 mb-8">
            Let's create a customized digital marketing strategy that helps your business achieve its goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-[rgb(var(--primary))] px-8 py-4 rounded-md font-medium hover:opacity-90 transition-all"
            >
              Schedule a Free Consultation
            </Link>
            <Link
              href="/about"
              className="bg-transparent border-2 border-white px-8 py-4 rounded-md font-medium hover:bg-white hover:text-[rgb(var(--primary))] transition-all"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
