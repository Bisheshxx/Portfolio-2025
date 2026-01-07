"use client";
import React from "react";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <div className="w-full py-5 border-t border-black mt-12 flex flex-wrap gap-2 justify-between item-center">
      <div className="text-sm flex gap-1 items-center justify-center w-full">
        © 2026 Bishesh Tuladhar
      </div>
      <Link
        href="mailto:bishesh.tuladhar1@gmail.com"
        target="_"
        className="text-sm flex gap-1 items-center justify-center w-full"
      >
        <Mail className="h-4 w-4 stroke-2" /> bishesh.tuladhar1@gmail.com
      </Link>
    </div>
  );
}
