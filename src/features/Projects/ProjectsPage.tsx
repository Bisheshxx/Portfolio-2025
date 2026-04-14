"use client";
import CurvedLoop from "@/components/CurvedLoop";
import { CircleChevronRight, Github, Tag } from "lucide-react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "@/shared/components/Framer-components/FadeIn";
import { desc } from "framer-motion/client";
import useAccentChange from "@/Customhooks/useAccentChange";
import { Badge } from "@/components/ui/badge";
import DecisionMaker from "../../../public/Projects/Decision_Maker.png";
import EmployeeManagement from "../../../public/Projects/Employee_mgmt.png";
import Link from "next/link";

const projects = [
  {
    id: 1,
    image: DecisionMaker,
    title: "Decision Maker",
    desc: "Helping the Indecisive people make RNG gods decide!",
    stacks: [
      "NextJs",
      "Dot Net",
      "Postgresql",
      "Docker",
      "Vercel",
      "Azure Web Applications",
    ],
    link: "https://decision-maker-project.vercel.app",
    ghLink: "https://github.com/Bisheshxx/PickForMe",
  },
  {
    id: 2,
    image: EmployeeManagement,
    title: "Employee Management System",
    desc: "Handles everything from employee time logs, details and generates timesheets!",
    stacks: ["NextJs", "Supabase", "Docker", "Vercel"],
    link: "https://employee-mgmt-hrms.vercel.app",
    ghLink: "https://github.com/Bisheshxx/Employee-Management-System",
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-6 md:mx-0 mt-10 items-stretch md:auto-rows-fr">
        {projects.map((project, index) => (
          <ProjectCard
            image={project.image}
            title={project.title}
            id={index}
            key={index}
            desc={project.desc}
            stacks={project.stacks}
            ghLink={project.ghLink}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}

interface ProjectCardProps {
  id: number;
  image: StaticImageData;
  title: string;
  desc: string;
  stacks: string[];
  link: string;
  ghLink: string;
}
function ProjectCard({
  image,
  title,
  id,
  desc,
  stacks,
  link,
  ghLink,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { themeColor, accent, theme } = useAccentChange();

  return (
    <FadeIn index={id} key={id} enableHover={false} className="h-full">
      <div
        className="project-card h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl bg-background">
          <div
            className="w-full h-[250px] shrink-0 p-6 bg-gray-400/15"
            style={{}}
          >
            <Image
              src={image}
              alt={title}
              width={400}
              height={300}
              className="rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-300 w-full h-full object-contain bg-white"
            />
          </div>
          <div className="flex flex-1 flex-col gap-3 justify-center p-4 md:p-4">
            {/* <CircleChevronRight className="h-5 w-5 " strokeWidth={1} /> */}
            <div className="flex justify-between items-center ">
              <Link
                href={link}
                target="_"
                className="text-xl font-bold"
                style={{
                  color: isHovered ? themeColor[accent] : "gray",
                }}
              >
                {title}
              </Link>
              <motion.div
                whileHover={{ scale: 1.5, transition: { duration: 0.2 } }}
                whileTap={{
                  scale: 0.9,
                  transition: { duration: 0.2 },
                }}
              >
                <Link href={ghLink} target="_">
                  <Github className="h-6 w-6" />
                </Link>
              </motion.div>
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
              {stacks.map((tech, i) => (
                <Badge
                  key={i}
                  variant="outline"
                  style={{ color: themeColor[i] }}
                  className="rounded-sm bg-offwhite dark:bg-gray-700 border-gray-500/60"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
