"use client";
import CurvedLoop from "@/components/CurvedLoop";
import React from "react";
import { Calendar, CalendarCheck, GraduationCap, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import FadeIn from "@/shared/components/Framer-components/FadeIn";

const qualifications = [
  {
    degree: "Master of Applied Technologies",
    university: "Unitec Institute of Technology, Auckland",
    duration: "2024 – Present",
    grade: "Awaiting Results",
  },
  {
    degree: "Bachelor of Science (Hons) in Computing ",
    university: "Coventry University, United Kingdom",
    duration: "2018 – 2022",
    grade: "First Class Honors",
  },
];

export default function QualificationPage() {
  return (
    <section className="py-8 md:py-16 h-min-[90vh]" id="qual">
      <CurvedLoop
        marqueeText="Qualifications ✦ Qualifications ✦ Qualifications ✦ Qualifications ✦ Qualifications ✦"
        speed={2}
        curveAmount={0}
        direction="right"
        interactive={false}
        className="pt-2"
      />
      <div className="mx-6 md:mx-0 grid grid-cols-1 md:grid-cols-1 gap-8 mt-10">
        {qualifications.map((qual, index) => (
          <FadeIn index={index} className="offwhite-card" key={index}>
            <div
              className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-30 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(139, 92, 246, 0.6), transparent)",
              }}
            />

            <div
              className="absolute -top-[0] -right-[0] rounded-full p-4 text-white m-4"
              style={{
                background:
                  "linear-gradient(135deg, rgba(139, 92, 246, 1), rgba(59, 130, 246, 1))",
                boxShadow:
                  "0 0 0 4px rgba(255, 255, 255, 0.9), 0 10px 20px rgba(139, 92, 246, 0.3)",
              }}
            >
              <GraduationCap className="w-6 h-6" strokeWidth={2.5} />
            </div>

            <div className="relative z-10">
              <h2 className="text-xl md:text-2xl font-bold mb-2 leading-tight pr-12">
                {qual.degree}
              </h2>
              <h3 className="text-sm md:text-base font-semibold  mb-4 leading-relaxed">
                {qual.university}
              </h3>
              <div className="flex flex-wrap items-center gap-2 mt-auto">
                <span className="text-xs md:text-sm font-semibold text-gray-800 bg-white/80 px-3 py-1.5 rounded-full shadow-sm flex items-center">
                  <CalendarCheck className="inline w-4 h-4 mr-1" />{" "}
                  {qual.duration}
                </span>
                <span className="text-xs md:text-sm font-semibold text-gray-800 bg-white/80 px-3 py-1.5 rounded-full shadow-sm flex items-center">
                  <Trophy className="inline w-4 h-4 mr-1" fill="yellow" />{" "}
                  {qual.grade}
                </span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
