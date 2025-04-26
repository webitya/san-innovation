"use client"

import { motion } from "framer-motion"
import { Typography, Paper, Box, Button } from "@mui/material"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import PhoneIcon from "@mui/icons-material/Phone"
import EmailIcon from "@mui/icons-material/Email"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import FacebookIcon from "@mui/icons-material/Facebook"
import TwitterIcon from "@mui/icons-material/Twitter"
import InstagramIcon from "@mui/icons-material/Instagram"
import LinkedInIcon from "@mui/icons-material/LinkedIn"

export default function ContactPageInfo() {
  const contactInfo = [
    {
      icon: <LocationOnIcon className="h-6 w-6 text-[rgb(var(--primary))]" />,
      title: "Our Location",
      details: ["Lalpur, Ranchi", "Jharkhand, India"],
    },
    {
      icon: <PhoneIcon className="h-6 w-6 text-[rgb(var(--primary))]" />,
      title: "Phone Number",
      details: ["+91 8809155327"],
      action: {
        text: "Call Us",
        link: "tel:+918809155327",
      },
    },
    {
      icon: <WhatsAppIcon className="h-6 w-6 text-[rgb(var(--primary))]" />,
      title: "WhatsApp",
      details: ["+91 8809155327"],
      action: {
        text: "Chat with Us",
        link: "https://wa.me/918809155327",
      },
    },
    {
      icon: <EmailIcon className="h-6 w-6 text-[rgb(var(--primary))]" />,
      title: "Email Address",
      details: ["info@saninnovation.com", "support@saninnovation.com"],
      action: {
        text: "Email Us",
        link: "mailto:info@saninnovation.com",
      },
    },
    {
      icon: <AccessTimeIcon className="h-6 w-6 text-[rgb(var(--primary))]" />,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 2:00 PM", "Sunday: Closed"],
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants} className="space-y-8">
      <motion.div variants={itemVariants}>
        <Typography variant="h4" component="h2" className="font-bold mb-6 gradient-text">
          Contact Information
        </Typography>
        <Typography variant="body1" className="mb-6 text-gray-600">
          We'd love to hear from you! Reach out to us using any of the contact methods below, and our team will get back
          to you as soon as possible.
        </Typography>
      </motion.div>

      <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contactInfo.map((item, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Paper elevation={2} className="p-6 h-full flex flex-col">
              <Box className="flex space-x-4 mb-4">
                <Box className="mt-1">{item.icon}</Box>
                <Box className="flex-grow">
                  <Typography variant="h6" className="font-bold mb-2">
                    {item.title}
                  </Typography>
                  {item.details.map((detail, i) => (
                    <Typography key={i} variant="body2" color="text.secondary" className="mb-1">
                      {detail}
                    </Typography>
                  ))}
                </Box>
              </Box>
              {item.action && (
                <Box className="mt-auto pt-4">
                  <Button
                    variant="outlined"
                    color="primary"
                    href={item.action.link}
                    target={item.action.link.startsWith("http") ? "_blank" : "_self"}
                    rel={item.action.link.startsWith("http") ? "noopener noreferrer" : ""}
                    fullWidth
                  >
                    {item.action.text}
                  </Button>
                </Box>
              )}
            </Paper>
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={itemVariants} className="pt-6">
        <Typography variant="h6" className="font-bold mb-4">
          Connect With Us
        </Typography>
        <Box className="flex space-x-4">
          <Button
            variant="contained"
            color="primary"
            startIcon={<FacebookIcon />}
            href="#"
            className="bg-[#4267B2] hover:bg-[#365899]"
          >
            Facebook
          </Button>
          <Button
            variant="contained"
            color="primary"
            startIcon={<TwitterIcon />}
            href="#"
            className="bg-[#1DA1F2] hover:bg-[#1a91da]"
          >
            Twitter
          </Button>
          <Button
            variant="contained"
            color="primary"
            startIcon={<InstagramIcon />}
            href="#"
            className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] hover:opacity-90"
          >
            Instagram
          </Button>
          <Button
            variant="contained"
            color="primary"
            startIcon={<LinkedInIcon />}
            href="#"
            className="bg-[#0e76a8] hover:bg-[#0c6590]"
          >
            LinkedIn
          </Button>
        </Box>
      </motion.div>
    </motion.div>
  )
}
