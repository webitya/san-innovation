import { ArrowRight } from "lucide-react"

export default function ServicesPageProcess() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Analysis",
      description: "We start by understanding your business, goals, target audience, and current digital presence.",
    },
    {
      number: "02",
      title: "Strategy Development",
      description:
        "Based on our analysis, we create a customized digital marketing strategy aligned with your business objectives.",
    },
    {
      number: "03",
      title: "Implementation",
      description:
        "Our team executes the strategy across the selected digital marketing channels with precision and creativity.",
    },
    {
      number: "04",
      title: "Monitoring & Optimization",
      description: "We continuously monitor performance and make data-driven optimizations to improve results.",
    },
    {
      number: "05",
      title: "Reporting & Analysis",
      description: "Regular detailed reports keep you informed about performance, insights, and recommendations.",
    },
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-[rgba(var(--primary),0.1)] text-[rgb(var(--primary))] rounded-full font-medium mb-4">
            Our Process
          </div>
          <h2>How We Deliver Results</h2>
          <p className="text-gray-600 mt-4">
            Our proven 5-step process ensures we deliver effective digital marketing solutions that drive measurable
            results.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-lg shadow-md h-full z-10 relative">
                  <div className="w-12 h-12 bg-[rgb(var(--primary))] text-white rounded-full flex items-center justify-center font-bold mb-4 mx-auto lg:mx-0">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center lg:text-left">{step.title}</h3>
                  <p className="text-gray-600 text-center lg:text-left">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 -translate-y-1/2 -translate-x-1/2 z-20">
                    <ArrowRight size={24} className="text-[rgb(var(--primary))]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
