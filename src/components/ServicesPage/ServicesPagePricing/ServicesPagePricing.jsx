import Link from "next/link"
import { Check } from "lucide-react"

export default function ServicesPagePricing() {
  const plans = [
    {
      name: "Starter",
      price: "$999",
      period: "per month",
      description: "Perfect for small businesses looking to establish their digital presence.",
      features: [
        "SEO Optimization (Basic)",
        "Social Media Management (2 platforms)",
        "Content Creation (2 blog posts/month)",
        "Monthly Performance Report",
        "Email Support",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      price: "$1,999",
      period: "per month",
      description: "Ideal for growing businesses seeking to expand their digital footprint.",
      features: [
        "SEO Optimization (Advanced)",
        "Social Media Management (4 platforms)",
        "Content Creation (4 blog posts/month)",
        "PPC Advertising Management",
        "Email Marketing (1 campaign/month)",
        "Bi-weekly Performance Reports",
        "Email & Phone Support",
        "Dedicated Account Manager",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$3,999",
      period: "per month",
      description: "Comprehensive solution for established businesses with ambitious growth goals.",
      features: [
        "SEO Optimization (Premium)",
        "Social Media Management (All platforms)",
        "Content Creation (8 blog posts/month)",
        "PPC Advertising Management (Advanced)",
        "Email Marketing (4 campaigns/month)",
        "Conversion Rate Optimization",
        "Weekly Performance Reports",
        "Priority Support",
        "Dedicated Marketing Team",
        "Quarterly Strategy Reviews",
      ],
      cta: "Contact Us",
      popular: false,
    },
  ]

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-[rgba(var(--primary),0.1)] text-[rgb(var(--primary))] rounded-full font-medium mb-4">
            Pricing Plans
          </div>
          <h2>Transparent Pricing for Your Business Needs</h2>
          <p className="text-gray-600 mt-4">
            Choose the plan that fits your business goals and budget. All plans can be customized to meet your specific
            needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg overflow-hidden border ${plan.popular ? "border-[rgb(var(--primary))]" : "border-gray-200"} relative`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-[rgb(var(--primary))] text-white px-4 py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-end mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <Link
                  href="/contact"
                  className={`block text-center py-3 px-6 rounded-md font-medium ${plan.popular ? "bg-[rgb(var(--primary))] text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"} transition-colors w-full`}
                >
                  {plan.cta}
                </Link>
              </div>
              <div className="bg-gray-50 p-8">
                <p className="font-medium mb-4">What's included:</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <Check className="text-[rgb(var(--primary))] h-5 w-5 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Need a custom solution? Contact us for a personalized quote.</p>
          <Link href="/contact" className="btn-outline">
            Request Custom Quote
          </Link>
        </div>
      </div>
    </section>
  )
}
