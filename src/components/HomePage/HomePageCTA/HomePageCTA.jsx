"use client"

import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button, Typography, Container } from "@mui/material"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import PlayArrowIcon from "@mui/icons-material/PlayArrow"

export default function HomePageCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

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
    <section ref={ref} className="py-20 gradient-bg text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat"></div>
      </div>

      {/* Floating Elements */}
      <motion.div
        initial={{ x: -50, y: 0, rotate: -5 }}
        animate={{ x: -30, y: 20, rotate: 5 }}
        transition={{ yoyo: Number.POSITIVE_INFINITY, duration: 4, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm hidden lg:block"
      ></motion.div>

      <motion.div
        initial={{ x: 50, y: 0, rotate: 5 }}
        animate={{ x: 30, y: -20, rotate: -5 }}
        transition={{ yoyo: Number.POSITIVE_INFINITY, duration: 4, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm hidden lg:block"
      ></motion.div>

      <Container maxWidth="lg" className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div variants={itemVariants}>
            <Typography variant="h3" component="h2" className="font-bold mb-6">
              Ready to Grow Your Business?
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography variant="h6" className="opacity-90 mb-8">
              Let's create a digital marketing strategy that drives results for your business. Our team of experts is
              ready to help you achieve your goals.
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
            <Button
              variant="contained"
              size="large"
              component={Link}
              href="/contact"
              endIcon={<ArrowForwardIcon />}
              className="bg-white text-[rgb(var(--primary))] hover:bg-gray-100 px-8 py-3"
            >
              Get a Free Consultation
            </Button>
            <Button
              variant="outlined"
              size="large"
              component={Link}
              href="/services"
              startIcon={<PlayArrowIcon />}
              className="border-white text-white hover:bg-white/10 px-8 py-3"
            >
              Explore Our Services
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
