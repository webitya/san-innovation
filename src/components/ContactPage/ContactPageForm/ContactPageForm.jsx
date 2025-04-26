"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import {
  TextField,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Alert,
  Snackbar,
  Paper,
  Typography,
  CircularProgress,
  Grid,
  Checkbox,
  FormControlLabel,
} from "@mui/material"
import SendIcon from "@mui/icons-material/Send"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"

export default function ContactPageForm() {
  const formRef = useRef(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
    contactViaWhatsApp: false,
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  })

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
      newErrors.email = "Invalid email address"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (!/^[0-9]{10}$/i.test(formData.phone.replace(/[^0-9]/g, ""))) {
      newErrors.phone = "Invalid phone number (10 digits required)"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    // Using EmailJS to send the form
    // Replace with your own EmailJS service ID, template ID, and public key
    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formRef.current, "YOUR_PUBLIC_KEY").then(
      (result) => {
        setIsSubmitting(false)
        setSnackbar({
          open: true,
          message: "Thank you for your message! We'll get back to you shortly.",
          severity: "success",
        })
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
          contactViaWhatsApp: false,
        })
      },
      (error) => {
        setIsSubmitting(false)
        setSnackbar({
          open: true,
          message: "There was an error sending your message. Please try again.",
          severity: "error",
        })
        console.error(error)
      },
    )
  }

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({
      ...prev,
      open: false,
    }))
  }

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <motion.div initial="hidden" animate="visible" variants={formVariants}>
      <Paper elevation={3} className="p-8 rounded-lg">
        <Typography variant="h4" component="h2" className="font-bold mb-6 gradient-text">
          Get In Touch With Us
        </Typography>

        <Typography variant="body1" className="mb-6 text-gray-600">
          Fill out the form below and our team will get back to you within 24 hours. We're here to help you grow your
          business with our digital marketing and technology solutions.
        </Typography>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                required
                error={!!errors.name}
                helperText={errors.name}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                required
                error={!!errors.email}
                helperText={errors.email}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                required
                error={!!errors.phone}
                helperText={errors.phone}
                placeholder="+91 8809155327"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                label="Company Name"
                name="company"
                value={formData.company}
                onChange={handleChange}
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="service-label">Service You're Interested In</InputLabel>
                <Select
                  labelId="service-label"
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  label="Service You're Interested In"
                >
                  <MenuItem value="">
                    <em>Select a service</em>
                  </MenuItem>
                  <MenuItem value="Web Development">Web Development</MenuItem>
                  <MenuItem value="App Development">App Development</MenuItem>
                  <MenuItem value="SEO">SEO Optimization</MenuItem>
                  <MenuItem value="Social Media">Social Media Marketing</MenuItem>
                  <MenuItem value="Content">Content Marketing</MenuItem>
                  <MenuItem value="PPC">PPC Advertising</MenuItem>
                  <MenuItem value="Email">Email Marketing</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Your Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                required
                multiline
                rows={5}
                error={!!errors.message}
                helperText={errors.message}
              />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.contactViaWhatsApp}
                    onChange={handleChange}
                    name="contactViaWhatsApp"
                    color="primary"
                  />
                }
                label={
                  <div className="flex items-center">
                    <WhatsAppIcon className="mr-2 text-green-500" />
                    <span>I prefer to be contacted via WhatsApp</span>
                  </div>
                }
              />
            </Grid>
          </Grid>

          <div className="pt-4">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              disabled={isSubmitting}
              endIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </form>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} variant="filled" sx={{ width: "100%" }}>
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Paper>
    </motion.div>
  )
}
