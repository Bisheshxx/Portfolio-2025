"use client";
import CurvedLoop from "@/components/CurvedLoop";
import { CircleChevronRight, Github, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "@/shared/components/Framer-components/FadeIn";
import { desc } from "framer-motion/client";
import useAccentChange from "@/Customhooks/useAccentChange";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    image: "/tradeseeker.png",
    title: "TradeSeeker",
    link: "https://www.google.com",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stacks: ["React", "Node.js", "MongoDB"],
  },
  {
    image: "/tradeseeker.png",
    title: "Portfolio Website",
    link: "https://www.google.com",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stacks: ["React", "Node.js", "MongoDB"],
  },
];
export default function ProjectsPage() {
  return (
    <section className="min-h-screen" id="project">
      <CurvedLoop
        marqueeText="Projects ✦ Projects ✦ Projects ✦ Projects ✦ Projects ✦"
        speed={2}
        curveAmount={0}
        direction="right"
        interactive={false}
        className="pt-2"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-6 md:mx-0 mt-10">
        {projects.map((project, index) => (
          <ProjectCard
            image={project.image}
            title={project.title}
            link={project.link}
            index={index}
            key={index}
            desc={project.desc}
            stack={project.stacks}
          />
        ))}
      </div>
    </section>
  );
}

interface ProjectCardProps {
  image: string;
  title: string;
  link: string;
  index: number;
  desc: string;
  stack: string[];
}
function ProjectCard({
  image,
  title,
  link,
  index,
  desc,
  stack,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { themeColor, accent, theme } = useAccentChange();

  return (
    <FadeIn index={index} key={index} enableHover={false}>
      <div
        className="project-card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link
          href={link}
          target="_"
          className="group cursor-pointer bg-background h-40 "
        >
          <div className="w-full h-2/3 p-6 bg-gray-400/15" style={{}}>
            <Image
              src={image}
              alt={title}
              width={400}
              height={300}
              className="rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-300 w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-3 my-2 justify-center p-2 md:p-4 ">
            {/* <CircleChevronRight className="h-5 w-5 " strokeWidth={1} /> */}
            <div className="flex justify-between items-center ">
              <h3
                className="text-xl font-bold"
                style={{
                  color: isHovered ? themeColor[accent] : "gray",
                }}
              >
                {title}
              </h3>
              {/* <motion.div
                whileHover={{ scale: 1.5, transition: { duration: 0.2 } }}
                whileTap={{
                  scale: 0.9,
                  transition: { duration: 0.2 },
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="h-3 w-3" />
              </motion.div> */}
            </div>
            <span style={{ color: "gray " }} className="text-sm color-offwhite">
              {desc}
            </span>

            <div className="flex flex-wrap gap-1">
              <Badge
                variant="outline"
                style={{ color: themeColor[accent] }}
                className="rounded-sm bg-offwhite dark:bg-gray-700 border-gray-500/60"
              >
                <Tag className="h-3 w-3 mr-1" /> Tech Stack:
              </Badge>
              {stack.map((tech, i) => (
                <Badge
                  variant="outline"
                  style={{ color: themeColor[i] }}
                  className="rounded-sm bg-offwhite dark:bg-gray-700 border-gray-500/60"
                >
                  {/* <span
                    key={i}
                    className="text-xs px-2 py-1 bg-gray-400 rounded-xl"
                  > */}
                  {tech}
                  {/* </span> */}
                </Badge>
              ))}
            </div>
          </div>
        </Link>
      </div>
    </FadeIn>
  );
}
