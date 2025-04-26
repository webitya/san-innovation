"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { AppBar, Toolbar, Button, IconButton, Drawer, List, ListItem, ListItemText, Collapse, Box } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import ExpandLessIcon from "@mui/icons-material/ExpandLess"
import PhoneIcon from "@mui/icons-material/Phone"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [expandedItems, setExpandedItems] = useState({
    services: false,
    resources: false,
    industries: false,
  })

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleExpand = (item) => {
    setExpandedItems((prev) => ({
      ...prev,
      [item]: !prev[item],
    }))
  }

  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  }

  return (
    <>
      {/* Top Bar with Contact Info */}
      <Box className="bg-[rgb(var(--secondary))] text-white py-2 hidden md:block">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="tel:+918809155327" className="flex items-center space-x-2 text-sm hover:text-gray-200">
              <PhoneIcon fontSize="small" />
              <span>+91 8809155327</span>
            </a>
            <a
              href="https://wa.me/918809155327"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-sm hover:text-gray-200"
            >
              <WhatsAppIcon fontSize="small" />
              <span>WhatsApp Us</span>
            </a>
          </div>
          <div className="text-sm">
            <span>Lalpur, Ranchi, Jharkhand</span>
          </div>
        </div>
      </Box>

      <AppBar
        position="sticky"
        component={motion.header}
        initial="hidden"
        animate="visible"
        variants={navbarVariants}
        className={`${scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white"} transition-all duration-300`}
      >
        <Toolbar className="container-custom py-2">
          <div className="flex items-center justify-between w-full">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/placeholder.svg?height=40&width=40" alt="San Innovation Logo" width={40} height={40} />
              <div>
                <span className="text-xl font-bold text-[rgb(var(--primary))] block leading-tight">San Innovation</span>
                <span className="text-xs text-gray-600 block leading-tight">E-services PVT LTD</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <motion.div custom={0} variants={menuItemVariants}>
                <Link href="/" className="font-medium hover:text-[rgb(var(--primary))] transition-colors">
                  Home
                </Link>
              </motion.div>
              <motion.div custom={1} variants={menuItemVariants}>
                <Link href="/about" className="font-medium hover:text-[rgb(var(--primary))] transition-colors">
                  About
                </Link>
              </motion.div>
              <motion.div custom={2} variants={menuItemVariants} className="relative group">
                <Link
                  href="/services"
                  className="font-medium hover:text-[rgb(var(--primary))] transition-colors flex items-center"
                >
                  Services <ExpandMoreIcon fontSize="small" />
                </Link>
                <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-1">
                    <Link href="/services#digital-marketing" className="block px-4 py-2 text-sm hover:bg-gray-100">
                      Digital Marketing
                    </Link>
                    <Link href="/services#web-development" className="block px-4 py-2 text-sm hover:bg-gray-100">
                      Web Development
                    </Link>
                    <Link href="/services#app-development" className="block px-4 py-2 text-sm hover:bg-gray-100">
                      App Development
                    </Link>
                    <Link href="/services#seo" className="block px-4 py-2 text-sm hover:bg-gray-100">
                      SEO Optimization
                    </Link>
                    <Link href="/services#social" className="block px-4 py-2 text-sm hover:bg-gray-100">
                      Social Media Marketing
                    </Link>
                    <Link href="/services#content" className="block px-4 py-2 text-sm hover:bg-gray-100">
                      Content Marketing
                    </Link>
                  </div>
                </div>
              </motion.div>
              <motion.div custom={3} variants={menuItemVariants} className="relative group">
                <Link
                  href="/industries"
                  className="font-medium hover:text-[rgb(var(--primary))] transition-colors flex items-center"
                >
                  Industries <ExpandMoreIcon fontSize="small" />
                </Link>
                <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-1">
                    <Link href="/industries#healthcare" className="block px-4 py-2 text-sm hover:bg-gray-100">
                      Healthcare
                    </Link>
                    <Link href="/industries#education" className="block px-4 py-2 text-sm hover:bg-gray-100">
                      Education
                    </Link>
                    <Link href="/industries#ecommerce" className="block px-4 py-2 text-sm hover:bg-gray-100">
                      E-Commerce
                    </Link>
                    <Link href="/industries#real-estate" className="block px-4 py-2 text-sm hover:bg-gray-100">
                      Real Estate
                    </Link>
                    <Link href="/industries#hospitality" className="block px-4 py-2 text-sm hover:bg-gray-100">
                      Hospitality
                    </Link>
                  </div>
                </div>
              </motion.div>
              <motion.div custom={4} variants={menuItemVariants}>
                <Link href="/portfolio" className="font-medium hover:text-[rgb(var(--primary))] transition-colors">
                  Portfolio
                </Link>
              </motion.div>
              <motion.div custom={5} variants={menuItemVariants}>
                <Link href="/blog" className="font-medium hover:text-[rgb(var(--primary))] transition-colors">
                  Blog
                </Link>
              </motion.div>
              <motion.div custom={6} variants={menuItemVariants}>
                <Link href="/contact" className="font-medium hover:text-[rgb(var(--primary))] transition-colors">
                  Contact
                </Link>
              </motion.div>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <motion.div custom={7} variants={menuItemVariants}>
                <Button variant="outlined" color="primary" component={Link} href="/contact">
                  Get a Quote
                </Button>
              </motion.div>
              <motion.div custom={8} variants={menuItemVariants}>
                <Button variant="contained" color="primary" component={Link} href="/contact">
                  Contact Us
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <IconButton edge="start" color="primary" aria-label="menu" onClick={toggleMenu} className="md:hidden">
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>

        {/* Mobile Navigation Drawer */}
        <Drawer anchor="right" open={isMenuOpen} onClose={toggleMenu}>
          <div className="w-80 h-full flex flex-col">
            <div className="flex items-center justify-between p-4 border-b">
              <Link href="/" className="flex items-center space-x-2" onClick={toggleMenu}>
                <Image src="/placeholder.svg?height=40&width=40" alt="San Innovation Logo" width={40} height={40} />
                <div>
                  <span className="text-lg font-bold text-[rgb(var(--primary))] block leading-tight">
                    San Innovation
                  </span>
                  <span className="text-xs text-gray-600 block leading-tight">E-services PVT LTD</span>
                </div>
              </Link>
              <IconButton edge="end" color="inherit" aria-label="close" onClick={toggleMenu}>
                <CloseIcon />
              </IconButton>
            </div>

            <List className="flex-1 py-4">
              <ListItem button component={Link} href="/" onClick={toggleMenu}>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button component={Link} href="/about" onClick={toggleMenu}>
                <ListItemText primary="About" />
              </ListItem>

              <ListItem button onClick={() => toggleExpand("services")}>
                <ListItemText primary="Services" />
                {expandedItems.services ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </ListItem>
              <Collapse in={expandedItems.services} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem
                    button
                    component={Link}
                    href="/services#digital-marketing"
                    onClick={toggleMenu}
                    className="pl-8"
                  >
                    <ListItemText primary="Digital Marketing" />
                  </ListItem>
                  <ListItem
                    button
                    component={Link}
                    href="/services#web-development"
                    onClick={toggleMenu}
                    className="pl-8"
                  >
                    <ListItemText primary="Web Development" />
                  </ListItem>
                  <ListItem
                    button
                    component={Link}
                    href="/services#app-development"
                    onClick={toggleMenu}
                    className="pl-8"
                  >
                    <ListItemText primary="App Development" />
                  </ListItem>
                  <ListItem button component={Link} href="/services#seo" onClick={toggleMenu} className="pl-8">
                    <ListItemText primary="SEO Optimization" />
                  </ListItem>
                  <ListItem button component={Link} href="/services#social" onClick={toggleMenu} className="pl-8">
                    <ListItemText primary="Social Media Marketing" />
                  </ListItem>
                </List>
              </Collapse>

              <ListItem button onClick={() => toggleExpand("industries")}>
                <ListItemText primary="Industries" />
                {expandedItems.industries ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </ListItem>
              <Collapse in={expandedItems.industries} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button component={Link} href="/industries#healthcare" onClick={toggleMenu} className="pl-8">
                    <ListItemText primary="Healthcare" />
                  </ListItem>
                  <ListItem button component={Link} href="/industries#education" onClick={toggleMenu} className="pl-8">
                    <ListItemText primary="Education" />
                  </ListItem>
                  <ListItem button component={Link} href="/industries#ecommerce" onClick={toggleMenu} className="pl-8">
                    <ListItemText primary="E-Commerce" />
                  </ListItem>
                  <ListItem
                    button
                    component={Link}
                    href="/industries#real-estate"
                    onClick={toggleMenu}
                    className="pl-8"
                  >
                    <ListItemText primary="Real Estate" />
                  </ListItem>
                </List>
              </Collapse>

              <ListItem button component={Link} href="/portfolio" onClick={toggleMenu}>
                <ListItemText primary="Portfolio" />
              </ListItem>

              <ListItem button component={Link} href="/blog" onClick={toggleMenu}>
                <ListItemText primary="Blog" />
              </ListItem>

              <ListItem button component={Link} href="/contact" onClick={toggleMenu}>
                <ListItemText primary="Contact" />
              </ListItem>
            </List>

            <div className="p-4 border-t">
              <Button
                variant="contained"
                color="primary"
                fullWidth
                component={Link}
                href="/contact"
                onClick={toggleMenu}
                className="mb-2"
              >
                Contact Us
              </Button>
              <Button
                variant="outlined"
                color="primary"
                fullWidth
                component={Link}
                href="/contact"
                onClick={toggleMenu}
              >
                Get a Quote
              </Button>
            </div>
          </div>
        </Drawer>
      </AppBar>
    </>
  )
}
