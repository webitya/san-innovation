"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button, Chip, Paper, Typography } from "@mui/material"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"

export default function HomePageHero() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
    },
  }

  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.6 },
    },
  }

  const keyPoints = [
    "Customized Digital Solutions",
    "Local Expertise, Global Standards",
    "Affordable Pricing Plans",
    "Dedicated Support Team",
  ]

  return (
    <section className="relative bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--secondary))] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat"></div>
      </div>

      <div className="container-custom py-20 md:py-32 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <motion.div variants={itemVariants}>
              <Chip
                label="Leading Digital Agency in Ranchi"
                color="primary"
                className="bg-white text-[rgb(var(--primary))] font-medium mb-4"
              />
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transform Your <span className="text-yellow-300">Digital Presence</span> With Strategic Solutions
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl opacity-90 max-w-lg">
              San Innovation E-services provides comprehensive digital marketing, web development, and technology
              solutions tailored for businesses in Ranchi and beyond.
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-3 pt-2">
              {keyPoints.map((point, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircleIcon className="text-yellow-300" fontSize="small" />
                  <Typography variant="body1">{point}</Typography>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              <Button
                variant="contained"
                size="large"
                component={Link}
                href="/contact"
                endIcon={<ArrowForwardIcon />}
                className="bg-white text-[rgb(var(--primary))] hover:bg-gray-100"
              >
                Get Started
              </Button>
              <Button
                variant="outlined"
                size="large"
                component={Link}
                href="/services"
                startIcon={<PlayArrowIcon />}
                className="border-white text-white hover:bg-white/10"
              >
                Explore Services
              </Button>
            </motion.div>
            <motion.div variants={statsVariants} className="flex items-center space-x-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=40&width=40&text=${i}`}
                      alt={`Client ${i}`}
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm">
                <span className="font-bold">200+</span> satisfied clients in Jharkhand
              </p>
            </motion.div>
          </div>
          <motion.div variants={imageVariants} className="relative">
            <div className="relative z-10">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Digital Marketing Services"
                width={600}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </div>

            {/* Floating Elements */}
            <motion.div
              initial={{ x: -20, y: -10 }}
              animate={{ x: 0, y: 0 }}
              transition={{ yoyo: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 z-20"
            >
              <Paper elevation={4} className="p-4 rounded-lg bg-white text-black">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
                    +150%
                  </div>
                  <div>
                    <p className="text-sm font-bold">ROI Increase</p>
                    <p className="text-xs text-gray-500">Average client result</p>
                  </div>
                </div>
              </Paper>
            </motion.div>

            <motion.div
              initial={{ x: 20, y: 10 }}
              animate={{ x: 0, y: 0 }}
              transition={{ yoyo: Number.POSITIVE_INFINITY, duration: 2.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-6 -right-6 z-20"
            >
              <Paper elevation={4} className="p-4 rounded-lg bg-white text-black">
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-12 bg-[rgb(var(--accent))] rounded-full flex items-center justify-center text-white font-bold">
                    98%
                  </div>
                  <div>
                    <p className="text-sm font-bold">Client satisfaction</p>
                    <p className="text-xs text-gray-500">Based on 200+ reviews</p>
                  </div>
                </div>
              </Paper>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}
