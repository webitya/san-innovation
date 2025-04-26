"use client"

import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button, Typography, Container, Box, Paper, Grid } from "@mui/material"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import PhoneIcon from "@mui/icons-material/Phone"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"

export default function IndustriesPageCTA() {
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

      <Container maxWidth="lg" className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <motion.div variants={itemVariants}>
            <Typography variant="h3" component="h2" className="font-bold mb-6">
              Don't See Your Industry?
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography variant="h6" className="opacity-90 mb-8">
              We work with businesses across many industries. Contact us to discuss your specific needs and how we can
              help your business grow with our digital marketing and technology solutions.
            </Typography>
          </motion.div>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={4}>
              <motion.div variants={itemVariants}>
                <Paper elevation={3} className="p-6 text-center h-full flex flex-col">
                  <Box className="mb-4 flex justify-center">
                    <PhoneIcon fontSize="large" className="text-[rgb(var(--primary))]" />
                  </Box>
                  <Typography variant="h5" component="h3" className="font-bold mb-3">
                    Call Us
                  </Typography>
                  <Typography variant="body1" className="mb-6 flex-grow">
                    Speak directly with our digital marketing experts about your business needs.
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    href="tel:+918809155327"
                    startIcon={<PhoneIcon />}
                  >
                    +91 8809155327
                  </Button>
                </Paper>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={4}>
              <motion.div variants={itemVariants}>
                <Paper elevation={3} className="p-6 text-center h-full flex flex-col">
                  <Box className="mb-4 flex justify-center">
                    <WhatsAppIcon fontSize="large" className="text-green-500" />
                  </Box>
                  <Typography variant="h5" component="h3" className="font-bold mb-3">
                    WhatsApp Us
                  </Typography>
                  <Typography variant="body1" className="mb-6 flex-grow">
                    Send us a message on WhatsApp for quick responses to your queries.
                  </Typography>
                  <Button
                    variant="contained"
                    className="bg-green-500 hover:bg-green-600"
                    fullWidth
                    href="https://wa.me/918809155327"
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<WhatsAppIcon />}
                  >
                    Chat on WhatsApp
                  </Button>
                </Paper>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={4}>
              <motion.div variants={itemVariants}>
                <Paper elevation={3} className="p-6 text-center h-full flex flex-col">
                  <Box className="mb-4 flex justify-center">
                    <ArrowForwardIcon fontSize="large" className="text-[rgb(var(--secondary))]" />
                  </Box>
                  <Typography variant="h5" component="h3" className="font-bold mb-3">
                    Contact Form
                  </Typography>
                  <Typography variant="body1" className="mb-6 flex-grow">
                    Fill out our detailed contact form and we'll get back to you within 24 hours.
                  </Typography>
                  <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    component={Link}
                    href="/contact"
                    endIcon={<ArrowForwardIcon />}
                  >
                    Contact Us
                  </Button>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </section>
  )
}
