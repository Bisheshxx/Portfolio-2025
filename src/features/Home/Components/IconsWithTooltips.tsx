"use client";
import WithTooltip from "@/shared/components/WithTooltip";
import { motion } from "framer-motion";
import { Github, Linkedin, DownloadCloud } from "lucide-react";
import React from "react";

export default function IconsWithTooltips() {
  return (
    <div className="w-full flex gap-10 md:justify-start justify-center">
      <Github className="cursor-pointer" />
      <Linkedin className="cursor-pointer" />
      <WithTooltip description="Download CV">
        <motion.div
          whileHover={{
            scale: 1.5,
            transition: { duration: 0.2 },
          }}
          whileTap={{
            scale: 0.9,
            transition: { duration: 0.2 },
          }}
        >
          <DownloadCloud className="cursor-pointer" />
        </motion.div>
      </WithTooltip>
    </div>
  );
}
