"use client";
import { motion } from "framer-motion";
import React from "react";
interface WaveProps {
  children?: React.ReactNode;
}
export default function Wave({ children }: WaveProps) {
  return (
    <motion.div
      whileHover={{
        rotate: [-10, 0, 10, 0, -10],
        transition: {
          repeat: Infinity,
          duration: 0.8,
          ease: "linear",
          repeatType: "loop",
        },
      }}
      className="cursor-pointer"
      style={{ originX: 0.5, originY: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
