"use client"

import { motion } from "framer-motion"
import { Fab, Tooltip, Zoom } from "@mui/material"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"

export default function WhatsAppButton() {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Tooltip title="Chat with us on WhatsApp" placement="left" TransitionComponent={Zoom}>
        <Fab
          color="success"
          aria-label="whatsapp"
          href="https://wa.me/918809155327"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            backgroundColor: "#25D366",
            "&:hover": {
              backgroundColor: "#20BD5C",
            },
          }}
        >
          <WhatsAppIcon fontSize="large" />
        </Fab>
      </Tooltip>
    </motion.div>
  )
}
