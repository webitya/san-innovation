import Link from "next/link"

export default function AboutPageCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--secondary))] text-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Growing List of Success Stories</h2>
          <p className="text-xl opacity-90 mb-8">
            Ready to take your digital marketing to the next level? Let's start a conversation about your business
            goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-[rgb(var(--primary))] px-8 py-4 rounded-md font-medium hover:opacity-90 transition-all"
            >
              Contact Us Today
            </Link>
            <Link
              href="/services"
              className="bg-transparent border-2 border-white px-8 py-4 rounded-md font-medium hover:bg-white hover:text-[rgb(var(--primary))] transition-all"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
