import { Inter } from "next/font/google"
import "./globals.css"
import ClientLayout from "./ClientLayout"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "San Innovation E-services PVT LTD - Digital Marketing Solutions",
  description: "Professional digital marketing and technology services to grow your business in Ranchi and beyond",
  keywords: "digital marketing, web development, SEO, social media marketing, Ranchi, Jharkhand",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
