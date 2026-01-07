"use client";
import React from "react";
import TimelineComponent from "./TimelineComponent";
import CurvedLoop from "@/components/CurvedLoop";

export default function ExperiencePage() {
  return (
    <section className="" id="exp">
      <CurvedLoop
        marqueeText="Experience ✦ Experience ✦ Experience ✦ Experience ✦ Experience ✦"
        speed={2}
        curveAmount={0}
        direction="right"
        interactive={false}
        className="pt-2"
      />
      <TimelineComponent />
    </section>
  );
}
