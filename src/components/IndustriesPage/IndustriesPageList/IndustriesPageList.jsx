"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Typography, Container, Grid, Paper, Button, Box } from "@mui/material"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import LocalHospitalIcon from "@mui/icons-material/LocalHospital"
import SchoolIcon from "@mui/icons-material/School"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import HomeWorkIcon from "@mui/icons-material/HomeWork"
import HotelIcon from "@mui/icons-material/Hotel"
import BusinessIcon from "@mui/icons-material/Business"

export default function IndustriesPageList() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const industries = [
    {
      id: "healthcare",
      icon: <LocalHospitalIcon fontSize="large" />,
      title: "Healthcare",
      description:
        "Digital solutions for hospitals, clinics, and healthcare providers to improve patient engagement and streamline operations.",
      features: [
        "Patient engagement portals",
        "Healthcare SEO and local marketing",
        "Appointment booking systems",
        "Telemedicine platform integration",
        "Healthcare content marketing",
      ],
      image: "/placeholder.svg?height=400&width=600",
      color: "#4CAF50", // Green
    },
    {
      id: "education",
      icon: <SchoolIcon fontSize="large" />,
      title: "Education",
      description:
        "Digital marketing and technology solutions for schools, colleges, universities, and educational institutions.",
      features: [
        "Student recruitment campaigns",
        "Educational website development",
        "Learning management systems",
        "Virtual campus tours",
        "Social media management for institutions",
      ],
      image: "/placeholder.svg?height=400&width=600",
      color: "#2196F3", // Blue
    },
    {
      id: "ecommerce",
      icon: <ShoppingCartIcon fontSize="large" />,
      title: "E-Commerce",
      description: "Comprehensive digital solutions to help online retailers increase traffic, conversions, and sales.",
      features: [
        "E-commerce website development",
        "Product catalog management",
        "Shopping cart optimization",
        "Payment gateway integration",
        "E-commerce SEO and PPC campaigns",
      ],
      image: "/placeholder.svg?height=400&width=600",
      color: "#FF9800", // Orange
    },
    {
      id: "real-estate",
      icon: <HomeWorkIcon fontSize="large" />,
      title: "Real Estate",
      description: "Digital marketing strategies for real estate agencies, property developers, and individual agents.",
      features: [
        "Property listing websites",
        "Virtual property tours",
        "Lead generation campaigns",
        "Real estate CRM integration",
        "Location-based marketing",
      ],
      image: "/placeholder.svg?height=400&width=600",
      color: "#9C27B0", // Purple
    },
    {
      id: "hospitality",
      icon: <HotelIcon fontSize="large" />,
      title: "Hospitality",
      description: "Digital solutions for hotels, restaurants, and tourism businesses to attract and retain customers.",
      features: [
        "Booking system development",
        "Restaurant website design",
        "Hotel marketing campaigns",
        "Review management systems",
        "Local SEO for hospitality businesses",
      ],
      image: "/placeholder.svg?height=400&width=600",
      color: "#F44336", // Red
    },
    {
      id: "professional-services",
      icon: <BusinessIcon fontSize="large" />,
      title: "Professional Services",
      description:
        "Digital marketing solutions for law firms, accounting firms, consultants, and other professional service providers.",
      features: [
        "Professional service websites",
        "Lead generation campaigns",
        "Content marketing for thought leadership",
        "Client testimonial strategies",
        "Professional networking campaigns",
      ],
      image: "/placeholder.svg?height=400&width=600",
      color: "#607D8B", // Blue Grey
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

  return (
    <section ref={ref} className="section-padding">
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-24"
        >
          {industries.map((industry, index) => (
            <motion.div key={index} id={industry.id} variants={itemVariants} className="scroll-mt-20">
              <Grid container spacing={6} direction={index % 2 === 1 ? "row-reverse" : "row"} alignItems="center">
                <Grid item xs={12} md={6}>
                  <Box
                    className="w-16 h-16 rounded-lg flex items-center justify-center mb-6"
                    sx={{ backgroundColor: `${industry.color}15`, color: industry.color }}
                  >
                    {industry.icon}
                  </Box>
                  <Typography variant="h3" component="h2" className="font-bold mb-4">
                    {industry.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" className="mb-6">
                    {industry.description}
                  </Typography>

                  <Paper elevation={0} className="bg-gray-50 p-6 mb-6">
                    <Typography variant="h6" className="mb-4 font-semibold">
                      Our {industry.title} Solutions Include:
                    </Typography>
                    <ul className="space-y-3">
                      {industry.features.map((feature, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <span className="text-[rgb(var(--primary))] font-bold">✓</span>
                          <Typography variant="body1">{feature}</Typography>
                        </li>
                      ))}
                    </ul>
                  </Paper>

                  <Button
                    variant="contained"
                    color="primary"
                    endIcon={<ArrowForwardIcon />}
                    component={Link}
                    href={`/contact?industry=${industry.id}`}
                  >
                    Get {industry.title} Solutions
                  </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Paper elevation={3} className="overflow-hidden">
                    <Image
                      src={industry.image || "/placeholder.svg"}
                      alt={`${industry.title} Digital Solutions`}
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                  </Paper>
                </Grid>
              </Grid>
              {index < industries.length - 1 && <Box className="my-16 border-b border-gray-200" />}
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
