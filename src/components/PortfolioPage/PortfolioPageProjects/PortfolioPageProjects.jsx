"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import {
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Chip,
  Box,
  Tabs,
  Tab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from "@mui/material"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import CloseIcon from "@mui/icons-material/Close"

export default function PortfolioPageProjects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [activeTab, setActiveTab] = useState(0)
  const [openDialog, setOpenDialog] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue)
  }

  const handleOpenDialog = (project) => {
    setSelectedProject(project)
    setOpenDialog(true)
  }

  const handleCloseDialog = () => {
    setOpenDialog(false)
  }

  const projects = [
    {
      title: "Ranchi Medical Center",
      category: "Healthcare",
      tags: ["Web Development", "SEO", "Content Marketing"],
      image: "/placeholder.svg?height=400&width=600&text=RMC",
      description: "Developed a comprehensive website and digital marketing strategy for Ranchi's leading medical center, resulting in a 150% increase in online appointments.",
      results: [
        "150% increase in online appointments",
        "200% increase in organic search traffic",
        "45% reduction in patient acquisition cost"
      ],
      fullDescription: "Ranchi Medical Center approached us with the challenge of improving their online presence and increasing patient appointments. We developed a comprehensive digital strategy including a new responsive website with online appointment booking, SEO optimization focused on local search terms, and content marketing targeting common health concerns in the region. The implementation resulted in significant improvements in online visibility and patient acquisition.",
      testimonial: {
        quote: "San Innovation transformed our digital presence completely. Our patients can now easily find us online and book appointments with just a few clicks.",
        author: "Dr. Rajesh Kumar",
        position: "Medical Director, Ranchi Medical Center"
      }
    },
    {
      title: "Jharkhand University",
      category: "Education",
      tags: ["Web Development", "Social Media", "Content Marketing"],
      image: "/placeholder.svg?height=400&width=600&text=JU",
      description: "Created a modern website and digital marketing campaign for Jharkhand University, increasing student applications by 75% year-over-year.",
      results: [
        "75% increase in student applications",
        "300% increase in social media engagement",
        "90% positive feedback from prospective students"
      ],
      fullDescription: "Jharkhand University needed to modernize their digital presence to attract more student applications. We developed a comprehensive solution including a modern, responsive website with virtual campus tours, an integrated application system, and a targeted social media campaign. The content strategy focused on highlighting student success stories and unique program offerings. The implementation resulted in a significant increase in applications and improved the university's brand perception among prospective students.",
      testimonial: {
        quote: "The team at San Innovation understood our unique challenges and delivered a solution that has transformed our recruitment efforts.",
        author: "Prof. Anita Singh",
        position: "Dean of Admissions, Jharkhand University"
      }
    },
    {
      title: "Ranchi Retail Mart",
      category: "E-Commerce",
      tags: ["E-commerce Development", "PPC", "SEO"],
      image: "/placeholder.svg?height=400&width=600&text=RRM",
      description: "Developed an e-commerce platform for a local retail chain, enabling online sales and increasing revenue by 120% within six months.",
      results: [
        "120% increase in overall revenue",
        "350% ROI on PPC campaigns",
        "5,000+ new online customers in first 6 months"
      ],
      fullDescription: "Ranchi Retail Mart wanted to expand their business online to reach customers beyond their physical stores. We developed a custom e-commerce platform with inventory management, secure payment processing, and a user-friendly mobile experience. The implementation was complemented by targeted PPC campaigns and SEO optimization. The solution allowed the business to continue serving customers during pandemic restrictions and has become a significant revenue stream even after physical stores reopened.",
      testimonial: {
        quote: "San Innovation helped us navigate the transition to e-commerce seamlessly. Their expertise has been invaluable to our business growth.",
        author: "Vikram Agarwal",
        position: "Owner, Ranchi Retail Mart"
      }
    },
    {
      title: "Jharkhand Properties",
      category: "Real Estate",
      tags: ["Web Development", "Virtual Tours", "SEO"],
      image: "/placeholder.svg?height=400&width=600&text=JP",
      description: "Created a property listing website with virtual tours for a leading real estate agency, increasing lead generation by 200%.",
      results: [
        "200% increase in qualified leads",
        "65% reduction in property viewing time",
        "35% increase in closing rate"
      ],
      fullDescription: "Jharkhand Properties needed a modern solution to showcase their properties and generate qualified leads. We developed a comprehensive property listing website with advanced search functionality, virtual property tours, and lead capture forms. The implementation included local SEO optimization and integration with popular real estate platforms. The virtual tours feature proved especially valuable, allowing potential buyers to view properties remotely and reducing the time agents spent on physical showings.",
      testimonial: {
        quote: "The virtual tour feature has revolutionized how we show properties. San Innovation delivered exactly what our business needed.",
        author: "Priya Sharma",
        position: "Managing Director, Jharkhand Properties"
      }
    },
    {
      title: "Ranchi Grand Hotel",
      category: "Hospitality",
      tags: ["Web Development", "Booking System", "Digital Marketing"],
      image: "/placeholder.svg?height=400&width=600&text=RGH",
      description: "Developed a website with integrated booking system for a luxury hotel, increasing direct bookings by 85% and reducing dependency on OTAs.",
      results: [
        "85% increase in direct bookings",
        "40% reduction in OTA commission costs",
        "25% increase in average booking value"
      ],
      fullDescription: "Ranchi Grand Hotel was looking to reduce their dependency on online travel agencies (OTAs) and increase direct bookings. We developed a comprehensive solution including a luxury hotel website with an integrated booking system, virtual hotel tours, and a targeted digital marketing campaign. The implementation included SEO optimization for local search terms and a content strategy highlighting the hotel's unique amenities and local attractions. The solution significantly reduced the hotel's commission costs while improving the guest booking experience.",
      testimonial: {
        quote: "The booking system developed by San Innovation has transformed our business model, allowing us to connect directly with our guests and improve our profit margins.",
        author: "Sanjay Mehta",
        position: "General Manager, Ranchi Grand Hotel"
      }
    },
    {
      title: "Jharkhand Legal Associates",
      category: "Professional Services",
      tags: ["Web Development", "Content Marketing", "SEO"],
      image: "/placeholder.svg?height=400&width=600&text=JLA",
      description: "Created a professional website and content marketing strategy for a law firm, increasing client inquiries by 120% within three months.",
      results: [
        "120% increase in client inquiries",
        "45% increase in consultation bookings",
        "First page rankings for 15 key legal search terms"
      ],
      fullDescription: "Jharkhand Legal Associates needed to establish a strong online presence to attract new clients and position themselves as legal experts. We developed a professional website with practice area pages, attorney profiles, and an integrated consultation booking system. The content strategy included legal guides, case studies, and a regularly updated blog addressing common legal questions. The SEO strategy focused on local search terms related to their practice areas. The implementation resulted in significant improvements in online visibility and client acquisition.",
      testimonial: {
        quote: "San Innovation helped us translate our legal expertise into an effective online presence. The results have exceeded our expectations.",
        author: "Advocate Ravi Khanna",
        position: "Managing Partner, Jharkhand Legal Associates"
      }
    }
  ]

  const categories = ["All", "Healthcare", "Education", "E-Commerce", "Real Estate", "Hospitality", "Professional Services"]

  const filteredProjects = activeTab === 0 
    ? projects 
    : projects.filter(project => project.category === categories[activeTab])

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

  return (
    <section ref={ref} className="section-padding">
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="mb-12">
            <Typography variant="h4" component="h2" className="font-bold mb-6 gradient-text text-center">
              Our Successful Projects
            </Typography>
            <Typography variant="body1" color="text.secondary" className="text-center max-w-3xl mx-auto mb-8">
              Browse through our portfolio of successful digital marketing and technology projects across various industries. Each project represents our commitment to delivering exceptional results for our clients.
            </Typography>
            
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className="mb-8">
              <Tabs 
                value={activeTab} 
                onChange={handleTabChange} 
                variant="scrollable"
                scrollButtons="auto"
                allowScrollButtonsMobile
                centered
              >
                {categories.map((category, index) => (
                  <Tab key={index} label={category} />
                ))}
              </Tabs>
            </Box>
          </motion.div>

          <Grid container spacing={4}>
            {filteredProjects.map((project, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <motion.div variants={itemVariants}>
                  <Card elevation={3} className="h-full flex flex-col hover:shadow-xl transition-shadow duration-300">
                    <CardMedia
                      component="div"
                      className="h-48 relative overflow-hidden"
                    >
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      <Box className="absolute top-2 left-2">
                        <Chip 
                          label={project.category} 
                          size="small" 
                          className="bg-white/80 backdrop-blur-sm"
                        />
                      </Box>
                    </CardMedia>
                    <CardContent className="flex-grow">
                      <Typography variant="h5" component="h3" className="font-bold mb-2">
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" className="mb-4">
                        {project.description}
                      </Typography>
                      <Box className="flex flex-wrap gap-1 mb-4">
                        {project.tags.map((tag, i) => (
                          <Chip 
                            key={i} 
                            label={tag} 
                            size="small" 
                            variant="outlined" 
                            className="text-xs"
                          />
                        ))}
                      </Box>
                    </CardContent>
                    <CardActions>
                      <Button 
                        size="small" 
                        color="primary"
                        endIcon={<ArrowForwardIcon />}
                        onClick={() => handleOpenDialog(project)}
                      >
                        View Case Study
                      </Button>
                    </CardActions>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>

      {/* Project Details Dialog */}
      {selectedProject && (
        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          maxWidth="md"
          fullWidth
        >
          <DialogTitle className="flex justify-between items-center">
            <Typography variant="h5" component="span" className="font-bold">
              {selectedProject.title}
            </Typography>
            <IconButton edge="end" color="inherit" onClick={handleCloseDialog} aria-label="close">
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent dividers>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg mb-4"
                />
                <Box className="flex flex-wrap gap-1 mb-4">
                  <Chip 
                    label={selectedProject.category} 
                    color="primary" 
                    className="mr-2"
                  />
                  {selectedProject.tags.map((tag, i) => (
                    <Chip 
                      key={i} 
                      label={tag} 
                      size="small" 
                      variant="outlined" 
                    />
                  ))}
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" className="font-bold mb-2">
                  Project Overview
                </Typography>
                <Typography variant="body2" paragraph>
                  {selectedProject.fullDescription}
                </Typography>
                
                <Typography variant="h6" className="font-bold mb-2 mt-4">
                  Results
                </Typography>
                <ul className="list-disc pl-5 mb-4">
                  {selectedProject.results.map((result, i) => (
                    <li key={i} className="mb-1">
                      <Typography variant="body2">{result}</Typography>
                    </li>
                  ))}
                </ul>
                
                {selectedProject.testimonial && (
                  <Box className="bg-gray-50 p-4 rounded-lg mt-4">
                    <Typography variant="body2" className="italic mb-2">
                      "{selectedProject.testimonial.quote}"
                    </Typography>
                    <Typography variant="subtitle2" className="font-bold">
                      {selectedProject.testimonial.author}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {selectedProject.testimonial.position}
                    </Typography>
                  </Box>
                )}
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Close</Button>
            <Button 
              variant="contained" 
              color="primary"
              href="/contact"
            >
              Discuss Your Project
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </section>\
