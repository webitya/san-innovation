"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Container, Grid, Typography, TextField, Button, IconButton, Divider, Box } from "@mui/material"
import FacebookIcon from "@mui/icons-material/Facebook"
import TwitterIcon from "@mui/icons-material/Twitter"
import InstagramIcon from "@mui/icons-material/Instagram"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import PhoneIcon from "@mui/icons-material/Phone"
import EmailIcon from "@mui/icons-material/Email"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import SendIcon from "@mui/icons-material/Send"

export default function Footer() {
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={footerVariants}
        >
          <Grid container spacing={8}>
            {/* Company Info */}
            <Grid item xs={12} md={4}>
              <motion.div variants={itemVariants}>
                <Link href="/" className="flex items-center space-x-2 mb-6">
                  <Image src="/placeholder.svg?height=40&width=40" alt="San Innovation Logo" width={40} height={40} />
                  <div>
                    <Typography variant="h5" component="span" className="font-bold block leading-tight">
                      San Innovation
                    </Typography>
                    <Typography variant="caption" className="text-gray-400 block leading-tight">
                      E-services PVT LTD
                    </Typography>
                  </div>
                </Link>
                <Typography variant="body1" className="text-gray-300 mb-6">
                  Elevating brands through innovative digital marketing strategies and technology solutions that drive
                  growth and engagement for businesses in Ranchi and beyond.
                </Typography>
                <Box className="flex space-x-3">
                  <IconButton
                    color="inherit"
                    aria-label="Facebook"
                    component="a"
                    href="#"
                    className="hover:text-[rgb(var(--primary))]"
                  >
                    <FacebookIcon />
                  </IconButton>
                  <IconButton
                    color="inherit"
                    aria-label="Twitter"
                    component="a"
                    href="#"
                    className="hover:text-[rgb(var(--primary))]"
                  >
                    <TwitterIcon />
                  </IconButton>
                  <IconButton
                    color="inherit"
                    aria-label="Instagram"
                    component="a"
                    href="#"
                    className="hover:text-[rgb(var(--primary))]"
                  >
                    <InstagramIcon />
                  </IconButton>
                  <IconButton
                    color="inherit"
                    aria-label="LinkedIn"
                    component="a"
                    href="#"
                    className="hover:text-[rgb(var(--primary))]"
                  >
                    <LinkedInIcon />
                  </IconButton>
                </Box>
              </motion.div>
            </Grid>

            {/* Quick Links */}
            <Grid item xs={12} sm={6} md={2}>
              <motion.div variants={itemVariants}>
                <Typography variant="h6" className="font-semibold mb-6">
                  Quick Links
                </Typography>
                <ul className="space-y-3">
                  <li>
                    <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/portfolio" className="text-gray-300 hover:text-white transition-colors">
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </motion.div>
            </Grid>

            {/* Services */}
            <Grid item xs={12} sm={6} md={2}>
              <motion.div variants={itemVariants}>
                <Typography variant="h6" className="font-semibold mb-6">
                  Our Services
                </Typography>
                <ul className="space-y-3">
                  <li>
                    <Link href="/services#web-development" className="text-gray-300 hover:text-white transition-colors">
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#app-development" className="text-gray-300 hover:text-white transition-colors">
                      App Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#seo" className="text-gray-300 hover:text-white transition-colors">
                      SEO Optimization
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#social" className="text-gray-300 hover:text-white transition-colors">
                      Social Media Marketing
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#content" className="text-gray-300 hover:text-white transition-colors">
                      Content Marketing
                    </Link>
                  </li>
                </ul>
              </motion.div>
            </Grid>

            {/* Newsletter & Contact */}
            <Grid item xs={12} md={4}>
              <motion.div variants={itemVariants}>
                <Typography variant="h6" className="font-semibold mb-6">
                  Subscribe to Our Newsletter
                </Typography>
                <Typography variant="body2" className="text-gray-300 mb-4">
                  Stay updated with the latest digital marketing trends and insights.
                </Typography>
                <Box className="flex mb-6">
                  <TextField
                    variant="outlined"
                    placeholder="Your email address"
                    size="small"
                    fullWidth
                    className="bg-gray-800 rounded-r-none"
                    InputProps={{
                      className: "text-white",
                    }}
                  />
                  <Button variant="contained" color="primary" className="rounded-l-none" endIcon={<SendIcon />}>
                    Subscribe
                  </Button>
                </Box>

                <Typography variant="h6" className="font-semibold mb-4 mt-8">
                  Contact Us
                </Typography>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <LocationOnIcon className="text-gray-300 mt-1 flex-shrink-0" />
                    <Typography variant="body2" className="text-gray-300">
                      Lalpur, Ranchi, Jharkhand
                    </Typography>
                  </li>
                  <li className="flex items-center space-x-3">
                    <PhoneIcon className="text-gray-300 flex-shrink-0" />
                    <Typography variant="body2" className="text-gray-300">
                      <a href="tel:+918809155327" className="hover:text-white">
                        +91 8809155327
                      </a>
                    </Typography>
                  </li>
                  <li className="flex items-center space-x-3">
                    <WhatsAppIcon className="text-gray-300 flex-shrink-0" />
                    <Typography variant="body2" className="text-gray-300">
                      <a
                        href="https://wa.me/918809155327"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white"
                      >
                        +91 8809155327
                      </a>
                    </Typography>
                  </li>
                  <li className="flex items-center space-x-3">
                    <EmailIcon className="text-gray-300 flex-shrink-0" />
                    <Typography variant="body2" className="text-gray-300">
                      <a href="mailto:info@saninnovation.com" className="hover:text-white">
                        info@saninnovation.com
                      </a>
                    </Typography>
                  </li>
                </ul>
              </motion.div>
            </Grid>
          </Grid>

          <Divider className="border-gray-800 mt-12 mb-8" />

          <motion.div variants={itemVariants} className="text-center text-gray-400">
            <Typography variant="body2">
              &copy; {currentYear} San Innovation E-services PVT LTD. All rights reserved.
            </Typography>
          </motion.div>
        </motion.div>
      </Container>
    </footer>
  )
}
