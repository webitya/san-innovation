"use client"

import Link from "next/link"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function ServicesPageFAQ() {
  const faqs = [
    {
      question: "How long does it take to see results from digital marketing?",
      answer:
        "The timeline for seeing results varies depending on the strategies implemented. SEO typically takes 3-6 months to show significant results, while PPC and social media advertising can generate immediate traffic. Content marketing usually shows cumulative results over time. We provide regular reports to track progress and make adjustments as needed.",
    },
    {
      question: "Do you offer customized marketing strategies?",
      answer:
        "Yes, we create customized marketing strategies tailored to your specific business goals, target audience, and industry. We believe that every business is unique and requires a personalized approach to digital marketing.",
    },
    {
      question: "How do you measure the success of your marketing campaigns?",
      answer:
        "We measure success through various metrics including website traffic, conversion rates, engagement rates, lead generation, ROI, and more. We use advanced analytics tools to track these metrics and provide detailed reports that show the impact of our marketing efforts on your business goals.",
    },
    {
      question: "Can I choose specific services or do I need to purchase a complete package?",
      answer:
        "You can choose specific services based on your needs and budget. While our packages offer comprehensive solutions, we understand that some businesses may only need assistance in specific areas. We're happy to create a custom service plan that addresses your particular marketing challenges.",
    },
    {
      question: "Do you work with businesses in specific industries?",
      answer:
        "We work with businesses across various industries including e-commerce, healthcare, technology, education, finance, and more. Our team has experience developing effective marketing strategies for diverse sectors, allowing us to understand the unique challenges and opportunities in your industry.",
    },
    {
      question: "What is your contract term?",
      answer:
        "Our standard contracts are month-to-month, though we recommend a minimum 3-month commitment for most digital marketing services to allow enough time to implement strategies and see meaningful results. We also offer discounted rates for longer-term commitments.",
    },
  ]

  const [openIndex, setOpenIndex] = useState(0)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-[rgba(var(--primary),0.1)] text-[rgb(var(--primary))] rounded-full font-medium mb-4">
            FAQ
          </div>
          <h2>Frequently Asked Questions</h2>
          <p className="text-gray-600 mt-4">Find answers to common questions about our digital marketing services.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className={`flex justify-between items-center w-full p-6 text-left rounded-lg ${
                  openIndex === index ? "bg-white shadow-md" : "bg-white hover:bg-gray-100"
                }`}
              >
                <span className="font-bold">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-[rgb(var(--primary))]" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-6 pt-0 bg-white rounded-b-lg">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions? We're here to help.</p>
          <Link href="/contact" className="btn-primary">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
