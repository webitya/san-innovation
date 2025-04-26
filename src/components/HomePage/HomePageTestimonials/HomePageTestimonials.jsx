"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Typography, Box, Container, Rating, Avatar, Card, CardContent } from "@mui/material"
import FormatQuoteIcon from "@mui/icons-material/FormatQuote"

export default function HomePageTestimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      image: "/placeholder.svg?height=80&width=80&text=SJ",
      quote:
        "DigiMarkPro transformed our online presence. Their SEO strategies increased our organic traffic by 200% in just 6 months. The team is responsive, knowledgeable, and truly cares about our success.",
      stars: 5,
    },
    {
      name: "Michael Chen",
      position: "Marketing Director, GrowthBrand",
      image: "/placeholder.svg?height=80&width=80&text=MC",
      quote:
        "The team at DigiMarkPro are true professionals. Their data-driven approach to social media marketing helped us double our engagement rates and significantly increase our conversion rates.",
      stars: 5,
    },
    {
      name: "Emily Rodriguez",
      position: "Founder, StyleShop",
      image: "/placeholder.svg?height=80&width=80&text=ER",
      quote:
        "Working with DigiMarkPro has been a game-changer for our e-commerce business. Their PPC campaigns delivered a 320% ROI in the first quarter, and their ongoing optimization keeps improving our results.",
      stars: 5,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section ref={ref} className="section-padding overflow-hidden">
      <Container maxWidth="lg">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Box className="inline-block px-4 py-2 bg-[rgba(var(--primary),0.1)] text-[rgb(var(--primary))] rounded-full font-medium mb-4">
            <Typography variant="body2" fontWeight="medium">
              Testimonials
            </Typography>
          </Box>
          <Typography variant="h3" component="h2" className="font-bold mb-4 gradient-text">
            What Our Clients Say
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Don't just take our word for it. Here's what our clients have to say about working with DigiMarkPro.
          </Typography>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants} whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
              <Card elevation={3} className="h-full relative overflow-visible">
                <Box className="absolute -top-6 -left-6 w-12 h-12 rounded-full flex items-center justify-center bg-[rgb(var(--primary))] text-white">
                  <FormatQuoteIcon />
                </Box>
                <CardContent className="pt-8">
                  <Rating value={testimonial.stars} readOnly className="mb-4" />
                  <Typography variant="body1" color="text.secondary" className="mb-6 italic">
                    "{testimonial.quote}"
                  </Typography>
                  <Box className="flex items-center space-x-4">
                    <Avatar src={testimonial.image} alt={testimonial.name} sx={{ width: 60, height: 60 }} />
                    <Box>
                      <Typography variant="subtitle1" fontWeight="bold">
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {testimonial.position}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
