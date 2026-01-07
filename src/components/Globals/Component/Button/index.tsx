"use client";

import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  children: React.ReactNode | string;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export const Button = ({
  children,
  className,
  type = "button",
}: ButtonProps) => {
  return (
    <div style={{ display: "inline-block" }}>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        type={type}
        style={{
          color: "#fff",
          //   boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
          background:
            "linear-gradient(135deg, rgba(139, 92, 246, 1), rgba(59, 130, 246, 1))",
          //   boxShadow:
          //     "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        }}
        className={twMerge(
          "py-2 px-3 rounded-full font-semibold relative text-white w-fit text-sm shadow-lg",
          className
        )}
      >
        {/* <div> */}
        <span>{children}</span>
        {/* </div> */}
      </motion.button>
    </div>
  );
};
