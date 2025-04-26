import Image from "next/image"
import { Search, Share2, PenTool, BarChart4, Mail, Zap } from "lucide-react"

export default function ServicesPageList() {
  const services = [
    {
      id: "seo",
      icon: <Search size={32} />,
      title: "SEO Optimization",
      description:
        "Improve your search engine rankings and drive organic traffic to your website with our comprehensive SEO services.",
      features: [
        "Keyword research and strategy",
        "On-page and off-page optimization",
        "Technical SEO audits and fixes",
        "Local SEO optimization",
        "Content optimization",
        "Monthly performance reporting",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "social",
      icon: <Share2 size={32} />,
      title: "Social Media Marketing",
      description:
        "Build brand awareness, engage with your audience, and drive traffic through strategic social media marketing.",
      features: [
        "Social media strategy development",
        "Content creation and curation",
        "Community management",
        "Paid social advertising",
        "Influencer partnerships",
        "Performance analytics and reporting",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "content",
      icon: <PenTool size={32} />,
      title: "Content Marketing",
      description:
        "Create valuable, relevant content that attracts and engages your target audience and drives profitable customer action.",
      features: [
        "Content strategy development",
        "Blog writing and management",
        "Ebook and whitepaper creation",
        "Infographic design",
        "Video content production",
        "Content distribution and promotion",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "ppc",
      icon: <BarChart4 size={32} />,
      title: "PPC Advertising",
      description:
        "Drive immediate traffic and conversions with targeted paid advertising campaigns across search and display networks.",
      features: [
        "Campaign strategy and setup",
        "Keyword research and selection",
        "Ad copywriting and design",
        "Bid management and optimization",
        "A/B testing and conversion tracking",
        "Performance analysis and reporting",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "email",
      icon: <Mail size={32} />,
      title: "Email Marketing",
      description:
        "Nurture leads and build customer loyalty with personalized email campaigns that drive engagement and conversions.",
      features: [
        "Email strategy development",
        "List building and segmentation",
        "Email template design",
        "Automated email sequences",
        "A/B testing and optimization",
        "Performance tracking and analysis",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "cro",
      icon: <Zap size={32} />,
      title: "Conversion Rate Optimization",
      description:
        "Maximize your website's effectiveness and turn more visitors into customers with data-driven CRO strategies.",
      features: [
        "User experience analysis",
        "Conversion funnel optimization",
        "Landing page optimization",
        "A/B and multivariate testing",
        "User behavior analysis",
        "Ongoing optimization and reporting",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="space-y-24">
          {services.map((service, index) => (
            <div key={index} id={service.id} className="scroll-mt-20">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-[rgba(var(--primary),0.1)] text-[rgb(var(--primary))] rounded-lg flex items-center justify-center">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold">{service.title}</h2>
                  <p className="text-gray-600">{service.description}</p>

                  <ul className="space-y-3 mt-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <span className="text-[rgb(var(--primary))] font-bold">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
              {index < services.length - 1 && <hr className="my-16 border-gray-200" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
