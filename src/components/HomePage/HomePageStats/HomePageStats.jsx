"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import CountUp from "react-countup"
import { Paper, Typography, Box } from "@mui/material"
import PeopleIcon from "@mui/icons-material/People"
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn"
import TrendingUpIcon from "@mui/icons-material/TrendingUp"
import WorkIcon from "@mui/icons-material/Work"

export default function HomePageStats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const stats = [
    {
      icon: <PeopleIcon fontSize="large" />,
      number: "500+",
      label: "Clients Worldwide",
      value: 500,
    },
    {
      icon: <AssignmentTurnedInIcon fontSize="large" />,
      number: "1000+",
      label: "Projects Completed",
      value: 1000,
    },
    {
      icon: <TrendingUpIcon fontSize="large" />,
      number: "150%",
      label: "Average ROI",
      value: 150,
      suffix: "%",
    },
    {
      icon: <WorkIcon fontSize="large" />,
      number: "10+",
      label: "Years of Experience",
      value: 10,
      suffix: "+",
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section ref={ref} className="py-16 gradient-bg text-white overflow-hidden">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants} className="text-center">
              <Paper elevation={0} className="py-6 px-4 bg-white/10 backdrop-blur-sm rounded-lg h-full">
                <Box className="flex justify-center mb-4">{stat.icon}</Box>
                <Typography variant="h3" component="p" className="text-4xl md:text-5xl font-bold mb-2">
                  {isInView ? (
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      suffix={stat.suffix || ""}
                      separator=","
                      useEasing={true}
                    />
                  ) : (
                    "0"
                  )}
                </Typography>
                <Typography variant="body1" className="text-lg opacity-80">
                  {stat.label}
                </Typography>
              </Paper>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
