"use client";
import WithTooltip from "@/shared/components/WithTooltip";
import { motion } from "framer-motion";
import { Github, Linkedin, DownloadCloud } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function IconsWithTooltips() {
  return (
    <div className="w-full flex gap-10 md:justify-start justify-center">
      <WithTooltip description="GitHub Profile">
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
          <Link
            href={"https://github.com/Bisheshxx"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="cursor-pointer" />
          </Link>
        </motion.div>
      </WithTooltip>
      <WithTooltip description="LinkedIn Profile">
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
          <Link
            href={"https://www.linkedin.com/in/bishesh-tuladhar-9a3888193/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="cursor-pointer" />
          </Link>
        </motion.div>
      </WithTooltip>
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
          <Link
            href="/CV/CV.pdf"
            download="Bishesh_Tuladhar_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DownloadCloud className="cursor-pointer" />
          </Link>
        </motion.div>
      </WithTooltip>
    </div>
  );
}
