"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CircleArrowRight, Mail, Plus, X } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/Globals/Component/Button";
import Link from "next/link";
import Form from "./Form";

export default function ContactIcon() {
  return <ComposeEmail />;
}

function ComposeEmail() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-2 right-2 md:bottom-8 md:right-8 z-[888]">
      <AnimatePresence mode="popLayout">
        {!isOpen ? (
          <motion.button
            key="button"
            layoutId="compose-window" // Same ID
            onClick={() => setIsOpen(true)}
            className="flex h-10 md:h-14 w-auto items-center justify-center rounded-full bg-blue-600 text-white shadow-lg border-4 border-white px-3 md:px-6"
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            style={{
              background:
                "linear-gradient(135deg, rgba(139, 92, 246, 1), rgba(59, 130, 246, 1))",
            }}
          >
            <motion.div
              layoutId="icon"
              className="flex gap-3 font-bold text-xs md:text-[13px] "
            >
              <Mail className="h-4 w-4 md:h-4 md:w-4" /> Reach Out
            </motion.div>
          </motion.button>
        ) : (
          <motion.div
            key="window"
            layoutId="compose-window" // Same ID
            className="flex  md:w-xl w-[300px] flex-col overflow-hidden rounded-2xl shadow-2xl border border-gray-200 bg-background"
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            style={{ transformOrigin: "bottom right" }} // Morphing starts from the button's corner
          >
            <div
              className="flex items-center justify-between bg-gray-50 md:p-4 p-3"
              style={{
                background:
                  "linear-gradient(135deg, rgba(139, 92, 246, 1), rgba(59, 130, 246, 1))",
              }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm font-semibold text-white"
              >
                Reach Out
              </motion.span>
              <button onClick={() => setIsOpen(false)}>
                <X size={20} className="text-white hover:text-gray-300" />
              </button>
            </div>

            <motion.div
              className="p-3 md:p-4 flex flex-col md:gap-4 gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Form />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
