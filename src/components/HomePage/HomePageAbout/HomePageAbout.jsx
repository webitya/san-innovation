"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Paper, Button, Divider } from "@mui/material"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects"
import SpeedIcon from "@mui/icons-material/Speed"
import TrendingUpIcon from "@mui/icons-material/TrendingUp"

export default function HomePageAbout() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const benefits = [
    {
      icon: <EmojiObjectsIcon className="text-[rgb(var(--primary))]" />,
      title: "Data-driven marketing strategies",
      description: "We use analytics and insights to create effective campaigns",
    },
    {
      icon: <SpeedIcon className="text-[rgb(var(--primary))]" />,
      title: "Customized solutions for your business",
      description: "Tailored approaches based on your specific goals and audience",
    },
    {
      icon: <TrendingUpIcon className="text-[rgb(var(--primary))]" />,
      title: "Proven track record of success",
      description: "Consistent results across various industries and markets",
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
    <section ref={ref} className="section-padding overflow-hidden">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="relative">
            <div className="relative z-10">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="About DigiMarkPro"
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-lg bg-[rgba(var(--primary),0.1)] -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-lg bg-[rgba(var(--secondary),0.1)] -z-10"></div>

            <Paper
              elevation={4}
              className="absolute -bottom-6 -right-6 p-6 rounded-lg shadow-lg text-white gradient-bg"
            >
              <p className="text-3xl font-bold">10+</p>
              <p className="text-sm">Years of Experience</p>
            </Paper>
          </motion.div>

          <div className="space-y-6">
            <motion.div variants={itemVariants}>
              <div className="inline-block px-4 py-2 bg-[rgba(var(--primary),0.1)] text-[rgb(var(--primary))] rounded-full font-medium">
                About DigiMarkPro
              </div>
            </motion.div>

            <motion.h2 variants={itemVariants} className="gradient-text">
              Your Partner in Digital Growth
            </motion.h2>

            <motion.p variants={itemVariants} className="text-gray-600">
              DigiMarkPro is a full-service digital marketing agency dedicated to helping businesses thrive in the
              digital landscape. With over a decade of experience, we've helped hundreds of companies achieve their
              marketing goals and drive measurable results.
            </motion.p>

            <Divider className="my-6" />

            <motion.div variants={containerVariants} className="grid grid-cols-1 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="mt-1">{benefit.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold">{benefit.title}</h4>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="pt-4">
              <Button variant="contained" color="primary" component={Link} href="/about" endIcon={<ArrowForwardIcon />}>
                Learn More About Us
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
