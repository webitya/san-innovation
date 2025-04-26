"use client"

import { motion } from "framer-motion"
import { Typography, Container, Box } from "@mui/material"

export default function PortfolioPageHero() {
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

  return (
    <section className="bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--secondary))] text-white py-20 md:py-32">
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div variants={itemVariants}>
            <Box className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full font-medium mb-4">
              <Typography variant="body2" className="text-white">
                Our Work
              </Typography>
            </Box>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography variant="h2" component="h1" className="font-bold mb-6">
              Portfolio & Case Studies
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography variant="h6" className="opacity-90 mb-8">
              Explore our successful projects and see how San Innovation E-services has helped businesses in Ranchi and
              beyond achieve their digital marketing and technology goals.
            </Typography>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
