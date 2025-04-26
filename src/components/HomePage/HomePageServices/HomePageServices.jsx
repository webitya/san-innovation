"use client"

import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardActions, Button, Typography, Box } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import ShareIcon from "@mui/icons-material/Share"
import CreateIcon from "@mui/icons-material/Create"
import BarChartIcon from "@mui/icons-material/BarChart"
import EmailIcon from "@mui/icons-material/Email"
import SpeedIcon from "@mui/icons-material/Speed"
import CodeIcon from "@mui/icons-material/Code"
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

export default function HomePageServices() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const services = [
    {
      icon: <CodeIcon fontSize="large" />,
      title: "Web Development",
      description: "Custom websites and web applications designed to meet your specific business needs and goals.",
      link: "/services#web-development",
      color: "rgb(var(--primary))",
    },
    {
      icon: <PhoneAndroidIcon fontSize="large" />,
      title: "App Development",
      description: "Native and cross-platform mobile applications for Android and iOS platforms.",
      link: "/services#app-development",
      color: "rgb(var(--secondary))",
    },
    {
      icon: <SearchIcon fontSize="large" />,
      title: "SEO Optimization",
      description:
        "Improve your search engine rankings and drive organic traffic to your website with our local SEO expertise.",
      link: "/services#seo",
      color: "rgb(var(--accent))",
    },
    {
      icon: <ShareIcon fontSize="large" />,
      title: "Social Media Marketing",
      description:
        "Engage with your audience and build brand awareness across social platforms with targeted campaigns.",
      link: "/services#social",
      color: "#4267B2", // Facebook blue
    },
    {
      icon: <CreateIcon fontSize="large" />,
      title: "Content Marketing",
      description: "Create valuable content that attracts and retains your target audience in Ranchi and beyond.",
      link: "/services#content",
      color: "#0e76a8", // LinkedIn blue
    },
    {
      icon: <BarChartIcon fontSize="large" />,
      title: "PPC Advertising",
      description: "Drive immediate traffic and conversions with targeted paid campaigns on Google and social media.",
      link: "/services#ppc",
      color: "#DB4437", // Google red
    },
    {
      icon: <EmailIcon fontSize="large" />,
      title: "Email Marketing",
      description: "Nurture leads and build customer loyalty with personalized email campaigns that convert.",
      link: "/services#email",
      color: "#7CBB00", // Microsoft green
    },
    {
      icon: <SpeedIcon fontSize="large" />,
      title: "Performance Optimization",
      description:
        "Maximize your website's effectiveness and turn visitors into customers with speed and UX improvements.",
      link: "/services#performance",
      color: "#FF9900", // Amazon orange
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
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
    <section ref={ref} className="section-padding bg-gray-50 overflow-hidden">
      <div className="container-custom">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block px-4 py-2 bg-[rgba(var(--primary),0.1)] text-[rgb(var(--primary))] rounded-full font-medium mb-4">
            Our Services
          </div>
          <h2 className="gradient-text mb-4">Comprehensive Digital Solutions</h2>
          <p className="text-gray-600">
            San Innovation E-services PVT LTD offers a full range of digital marketing and technology services to help
            your business grow and succeed in the digital landscape.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants} whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
              <Card elevation={3} className="h-full flex flex-col">
                <CardContent className="flex-grow">
                  <Box
                    className="w-14 h-14 rounded-lg flex items-center justify-center mb-6"
                    sx={{ backgroundColor: `${service.color}15`, color: service.color }}
                  >
                    {service.icon}
                  </Box>
                  <Typography variant="h5" component="h3" className="font-bold mb-3">
                    {service.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" className="mb-6">
                    {service.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    component={Link}
                    href={service.link}
                    color="primary"
                    endIcon={<ArrowForwardIcon />}
                    className="ml-2 mb-2"
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-12"
        >
          <Button
            variant="contained"
            color="primary"
            component={Link}
            href="/services"
            size="large"
            endIcon={<ArrowForwardIcon />}
          >
            View All Services
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
