import React from "react";
import { motion } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  index?: number;
  once?: boolean;
  enableHover?: boolean;
}

export default function FadeIn({
  children,
  className,
  index,
  once = false,
  enableHover = true,
}: FadeInProps) {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: once, amount: 0.2 }}
      whileHover={
        enableHover
          ? {
              translateY: -8,
              transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
            }
          : undefined
      }
      transition={{
        duration: 0.6,
        delay: (index ?? 0) * 0.15,
        ease: [0.4, 0, 0.2, 1],
      }}
      className={`${className}`}
    >
      {children}
    </motion.div>
  );
}
