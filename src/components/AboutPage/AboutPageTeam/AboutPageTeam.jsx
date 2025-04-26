import Image from "next/image"
import { Linkedin, Twitter } from "lucide-react"

export default function AboutPageTeam() {
  const team = [
    {
      name: "John Smith",
      position: "CEO & Founder",
      image: "/placeholder.svg?height=300&width=300&text=JS",
      bio: "With over 15 years of experience in digital marketing, John leads our team with vision and expertise.",
    },
    {
      name: "Emily Johnson",
      position: "Marketing Director",
      image: "/placeholder.svg?height=300&width=300&text=EJ",
      bio: "Emily brings creative strategies and data-driven insights to help our clients achieve their marketing goals.",
    },
    {
      name: "Michael Chen",
      position: "SEO Specialist",
      image: "/placeholder.svg?height=300&width=300&text=MC",
      bio: "Michael is an SEO expert who helps businesses improve their search engine rankings and visibility.",
    },
    {
      name: "Sarah Williams",
      position: "Social Media Manager",
      image: "/placeholder.svg?height=300&width=300&text=SW",
      bio: "Sarah creates engaging social media strategies that build brand awareness and drive engagement.",
    },
    {
      name: "David Rodriguez",
      position: "PPC Specialist",
      image: "/placeholder.svg?height=300&width=300&text=DR",
      bio: "David specializes in creating high-performing paid advertising campaigns that deliver ROI.",
    },
    {
      name: "Lisa Thompson",
      position: "Content Strategist",
      image: "/placeholder.svg?height=300&width=300&text=LT",
      bio: "Lisa develops content strategies that tell compelling brand stories and drive conversions.",
    },
  ]

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-[rgba(var(--primary),0.1)] text-[rgb(var(--primary))] rounded-full font-medium mb-4">
            Our Team
          </div>
          <h2>Meet the Experts Behind DigiMarkPro</h2>
          <p className="text-gray-600 mt-4">
            Our talented team of digital marketing professionals is dedicated to helping your business succeed online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="relative overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex justify-center space-x-4">
                      <a
                        href="#"
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[rgb(var(--primary))] hover:bg-[rgb(var(--primary))] hover:text-white transition-colors"
                      >
                        <Linkedin size={18} />
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[rgb(var(--primary))] hover:bg-[rgb(var(--primary))] hover:text-white transition-colors"
                      >
                        <Twitter size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-[rgb(var(--primary))] font-medium mb-3">{member.position}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
