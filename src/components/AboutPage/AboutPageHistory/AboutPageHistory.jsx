export default function AboutPageHistory() {
  const milestones = [
    {
      year: "2013",
      title: "Company Founded",
      description: "DigiMarkPro was founded with a mission to help businesses navigate the digital landscape.",
    },
    {
      year: "2015",
      title: "Expanded Services",
      description: "Added social media marketing and PPC advertising to our service offerings.",
    },
    {
      year: "2017",
      title: "50th Client Milestone",
      description: "Celebrated our 50th client and expanded our team to 15 digital marketing experts.",
    },
    {
      year: "2019",
      title: "Industry Recognition",
      description: "Received multiple industry awards for our innovative digital marketing campaigns.",
    },
    {
      year: "2021",
      title: "International Expansion",
      description: "Expanded our services to international markets and opened a second office.",
    },
    {
      year: "2023",
      title: "10 Year Anniversary",
      description: "Celebrated 10 years of digital excellence with over 500 clients worldwide.",
    },
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-[rgba(var(--primary),0.1)] text-[rgb(var(--primary))] rounded-full font-medium mb-4">
            Our Journey
          </div>
          <h2>A Decade of Digital Excellence</h2>
          <p className="text-gray-600 mt-4">
            From our humble beginnings to becoming a leading digital marketing agency, here's how our journey unfolded.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[rgb(var(--primary))] opacity-20"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className="w-1/2"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[rgb(var(--primary))]"></div>
                <div className={`w-1/2 ${index % 2 === 0 ? "pl-12" : "pr-12"}`}>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="inline-block px-3 py-1 bg-[rgba(var(--primary),0.1)] text-[rgb(var(--primary))] rounded-full font-medium text-sm mb-3">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
