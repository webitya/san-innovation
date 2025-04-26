"use client"

import Navbar from "@/components/Navbar/Navbar"
import Footer from "@/components/Footer/Footer"
import { ThemeProvider } from "@/components/ThemeProvider/ThemeProvider"
import { MotionConfig } from "framer-motion"
import WhatsAppButton from "@/components/WhatsApp/WhatsAppButton"

export default function ClientLayout({ children }) {
  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </MotionConfig>
    </ThemeProvider>
  )
}
