"use client";
import React from "react";
import { useClock } from "@/Customhooks/useClock";
import { useDayNight } from "@/Customhooks/useDayNight";
import { twMerge } from "tailwind-merge";
import useAccentChange from "@/Customhooks/useAccentChange";
import FadeIn from "@/shared/components/Framer-components/FadeIn";
import { MapPin, Clock, Sun, Moon, Palette } from "lucide-react";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/features/Map"), { ssr: false });
export default function InterActiveComponent() {
  return (
    <>
      {" "}
      <MapContainer />
      <ClockContainer />
      <AccentContainer />
    </>
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
