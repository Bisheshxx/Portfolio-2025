"use client";
import React, { useEffect, useState } from "react";
import {
  DownloadCloud,
  Github,
  Linkedin,
  MapPin,
  Sun,
  Moon,
  Clock,
  Palette,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import WithTooltip from "@/shared/components/WithTooltip";
import { motion } from "framer-motion";

import Stack from ".";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../Map"), { ssr: false });

import { useClock } from "@/Customhooks/useClock";
import { useDayNight } from "@/Customhooks/useDayNight";
import { twMerge } from "tailwind-merge";
import useAccentChange from "@/Customhooks/useAccentChange";
import FadeIn from "@/shared/components/Framer-components/FadeIn";

export default function Homepage() {
  return (
    <section className="mx-6 md:mx-0" id="home">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 grid-">
        <div className="col-span-1 md:col-span-2 flex flex-col justify-between gap-2 bg-center md:text-left">
          <div className="w-full flex justify-center items-center gap-2 mt-14">
            <h1 className="font-bold text-lg md:text-5xl md:w-full font-man-rope flex gap-2 tracking-tighter">
              Yo, Bishesh here.
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
                👋
              </motion.div>
            </h1>
          </div>

          <div className="flex flex-col gap-2">
            <div className="text-center md:text-left text-sm md:text-lg tracking-tighter">
              28 y.o. software developer from Nepal 🇳🇵
            </div>
            <div className="text-center md:text-left text-sm md:text-lg tracking-tighter">
              I build modern web applications and love solving real-world
              problems.
            </div>
          </div>
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
        </div>
        <div className="flex justify-center items-center">
          <div className="w-full h-[300px] object-fit md:h-[250px] md:w-[250px] md:mr-20">
            <Stack />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 mt-10 text-center md:text-left">
        <MapContainer />
        <ClockContainer />
        <AccentContainer />
      </div>
    </section>
  );
}

const MapContainer = () => {
  return (
    <FadeIn
      enableHover={false}
      className="card-without-hover flex flex-col gap-2 md:col-span-2"
    >
      <div className="flex gap-3 justify-start items-center">
        <MapPin className="w-4 h-4" />{" "}
        <span className="text-xs"> Currently based in 📍</span>
      </div>
      <div className="h-24 w-full rounded-xl">
        <Map />
      </div>
      <div className="flex justify-between items-center"></div>
    </FadeIn>
  );
};

const ClockContainer = () => {
  const { time: currentTime } = useClock();
  const { isDay } = useDayNight();
  return (
    <FadeIn
      enableHover={false}
      className="card-without-hover flex flex-col gap-2 md:col-span-2"
    >
      <div className="flex gap-3 justify-start items-center">
        <Clock className="w-4 h-4" />{" "}
        <span className="text-xs"> My Local Time</span>
      </div>
      <div className="flex justify-center items-center h-24 ">
        <div className="flex items-center gap-2">
          {isDay ? <Sun size={50} /> : <Moon size={50} />}
          <span className="tabular-nums text-4xl md:text-5xl ">
            {currentTime}
          </span>
        </div>
      </div>
    </FadeIn>
  );
};
const AccentContainer = () => {
  const { theme, themeColor, accent, setAccent } = useAccentChange();
  return (
    <FadeIn
      className="card-without-hover flex flex-col gap-2 md:col-span-1"
      enableHover={false}
    >
      <div className="flex gap-2 justify-start items-center">
        <Palette className="w-4 h-4" /> <span className="text-xs"> Accent</span>
      </div>
      <div className="flex justify-center items-center h-24 gap-2 flex-wrap ">
        {Object.values(themeColor).map((color, idx) => (
          <div
            key={idx}
            className={twMerge(
              `w-7 h-7  mb-2 cursor-pointer rounded-sm`,
              accent === idx ? `ring-2  ring-offset-2 ring-${color}` : "",
              theme === "dark" ? "ring-offset-black" : ""
            )}
            style={{ backgroundColor: color }}
            onClick={() => setAccent(idx)}
          ></div>
        ))}
      </div>
    </FadeIn>
  );
};
