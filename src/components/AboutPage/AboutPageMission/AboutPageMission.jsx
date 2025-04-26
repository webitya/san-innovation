import Image from "next/image"
import { Target, Users, TrendingUp } from "lucide-react"

export default function AboutPageMission() {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-[rgb(var(--primary))]" />,
      title: "Mission",
      description:
        "To empower businesses with innovative digital marketing strategies that drive growth and deliver measurable results.",
    },
    {
      icon: <Users className="h-8 w-8 text-[rgb(var(--primary))]" />,
      title: "Vision",
      description:
        "To be the leading digital marketing agency known for creating impactful digital experiences that transform businesses.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-[rgb(var(--primary))]" />,
      title: "Values",
      description: "Innovation, integrity, transparency, and results-driven approach in everything we do.",
    },
  ]

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-[rgba(var(--primary),0.1)] text-[rgb(var(--primary))] rounded-full font-medium">
              Our Mission & Values
            </div>
            <h2>Driving Digital Success Through Innovation</h2>
            <p className="text-gray-600">
              Founded in 2013, DigiMarkPro has been at the forefront of digital marketing innovation. We believe in
              creating strategies that not only look good but deliver real, measurable results for our clients.
            </p>
            <p className="text-gray-600">
              Our team of experts combines creativity with data-driven insights to develop customized solutions that
              help businesses of all sizes achieve their marketing goals and stand out in today's competitive digital
              landscape.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {values.map((value, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                  <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center bg-[rgba(var(--primary),0.1)] rounded-full">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Our Mission"
              width={600}
              height={600}
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -top-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
              <p className="text-3xl font-bold text-[rgb(var(--primary))]">10+</p>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
