"use client";
import CurvedLoop from "@/components/CurvedLoop";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { getIcon } from "@/lib/getIcon";
import FadeIn from "@/shared/components/Framer-components/FadeIn";
import { motion, positionalKeys } from "framer-motion";
import { i, s } from "framer-motion/client";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { title } from "process";
import React, { useState } from "react";

interface SkillCardComponentProps {
  id: string;
  title: string;
  description: string;
  icons: string[];
  positionalKeys: "left" | "middle" | "right";
  masterColSpan?: number;
  activeTooltip: string | null;
  setActiveTooltip: (tooltip: string | null) => void;
}
interface SkillCardProps {
  id: string;
  title: string;
  description: string;
  icons: string[];
  positionalKeys: "left" | "middle" | "right";
  masterColSpan?: number;
}

const skills: SkillCardProps[] = [
  {
    id: "1",
    title: "Front End Development",
    description:
      "Building engaging and user-friendly web interfaces using modern frameworks and technologies with expertise.",
    icons: ["HTML", "React", "NextJS", "Redux", "Zustand"],
    positionalKeys: "left",
  },

  {
    id: "2",
    title: "UI/UX Design",
    description:
      "Designing user-centric interfaces that are intuitive, visually appealing, and easy to navigate.",
    icons: ["Figma"],
    positionalKeys: "middle",
  },

  {
    id: "3",
    title: "Programming Languages",
    description:
      "Proficient in problem-solving and applying programming languages to implement efficient data structures and algorithms.",
    icons: ["Python", "JavaScript", "TypeScript", "C#"],
    positionalKeys: "right",
  },
  {
    id: "4",
    title: "Back-End Development",
    description:
      "Developing robust server-side logic and APIs to power dynamic and scalable web applications.",
    icons: ["NodeJS", "ExpressJS", "DotNet"],
    positionalKeys: "left",
  },
  {
    id: "5",
    title: "Web Animations",
    description:
      "Creating seamless animations and transitions to enhance user engagement and interactivity.",
    icons: ["Framer Motion"],
    positionalKeys: "middle",
  },
  {
    id: "6",
    title: "Database Management",
    description:
      "Designing and managing databases to ensure secure and efficient data storage and retrieval.",
    icons: ["MySQL", "MongoDB", "PostgreSQL"],
    positionalKeys: "right",
  },
  {
    id: "7",
    title: "Cloud & Deployment",
    description:
      "Experienced in deploying and managing applications using modern cloud platforms and tools.",
    icons: ["AWS", "Azure", "Google Cloud", "Docker", "Nginx"],
    positionalKeys: "left",
  },

  {
    id: "8",
    title: "Mobile App Development",
    description:
      "Creating cross-platform mobile apps with sleek designs and robust functionality.",
    icons: ["React Native"],
    positionalKeys: "middle",
  },
  {
    id: "9",
    title: "Version Control & Collaboration",
    description:
      "Effectively managing code and collaborating on projects to ensure seamless teamwork.",
    icons: ["Git", "GitHub", "GitLab"],
    positionalKeys: "right",
  },
  {
    id: "10",
    title: "Styling & Design",
    description:
      "Crafting visually appealing and responsive designs with advanced styling tools and frameworks.",
    icons: [
      "CSS",
      "Sass",
      "TailwindCSS",
      "Material-UI",
      "Bootstrap",
      "Ant-Design",
      "Shadcn/UI",
    ],
    positionalKeys: "left",
    masterColSpan: 2,
  },
  {
    id: "11",
    title: "Testing & Debugging",
    description:
      "Ensuring code quality and reliability through rigorous testing and debugging processes.",
    icons: ["Jest", "Selenium", "Postman"],
    positionalKeys: "right",
  },
];

export default function SkillsPage() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  return (
    <section className="h-min-screen" id="skills">
      <CurvedLoop
        marqueeText="Skills ✦ Skills ✦ Skills ✦ Skills ✦ Skills ✦"
        speed={2}
        curveAmount={0}
        direction="right"
        interactive={false}
        className="pt-2"
      />

      <div className="grid grid-cols-1 md:grid-cols-[5fr_3fr] gap-2 mx-6 md:mx-0">
        {/* Left Column */}
        <div className="grid grid-col-1 md:grid-cols-[3fr_2fr] gap-2">
          <div className="flex flex-col gap-2">
            {skills
              .filter(
                (skill) =>
                  skill.positionalKeys === "left" && skill.masterColSpan !== 2
              )
              .map((skill, idx) => (
                <SkillCard
                  key={skill.id}
                  title={skill.title}
                  description={skill.description}
                  id={skill.id}
                  icons={skill.icons}
                  positionalKeys={skill.positionalKeys}
                  activeTooltip={activeTooltip}
                  setActiveTooltip={setActiveTooltip}
                />
              ))}
          </div>

          {/* Middle Column */}
          <div className="flex flex-col gap-2">
            {skills
              .filter((skill) => skill.positionalKeys === "middle")
              .map((skill, idx) => (
                <SkillCard
                  key={skill.id}
                  title={skill.title}
                  description={skill.description}
                  id={skill.id}
                  icons={skill.icons}
                  positionalKeys={skill.positionalKeys}
                  activeTooltip={activeTooltip}
                  setActiveTooltip={setActiveTooltip}
                />
              ))}
          </div>
          <div className="flex md:col-span-2 gap-2">
            {skills
              .filter((skill) => skill.masterColSpan === 2)
              .map((skill) => (
                <SkillCard
                  key={skill.id}
                  title={skill.title}
                  description={skill.description}
                  id={skill.id}
                  icons={skill.icons}
                  positionalKeys={skill.positionalKeys}
                  activeTooltip={activeTooltip}
                  setActiveTooltip={setActiveTooltip}
                />
              ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-2">
          {skills
            .filter((skill) => skill.positionalKeys === "right")
            .map((skill, idx) => (
              <SkillCard
                key={skill.id}
                title={skill.title}
                description={skill.description}
                id={skill.id}
                icons={skill.icons}
                positionalKeys={skill.positionalKeys}
                activeTooltip={activeTooltip}
                setActiveTooltip={setActiveTooltip}
              />
            ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({
  title,
  description,
  id,
  icons,
  activeTooltip,
  setActiveTooltip,
}: SkillCardComponentProps) {
  const iconCount = icons.length;

  const renderIcons = () => {
    // ✅ Special case: 5 icons
    if (iconCount === 5) {
      return (
        <div className="flex flex-col gap-2">
          {/* Row 1: 3 icons */}
          <div className="grid grid-cols-3 gap-2 place-items-center">
            {icons.slice(0, 3).map((iconName) => (
              <IconItem
                key={iconName}
                iconName={iconName}
                activeTooltip={activeTooltip}
                setActiveTooltip={setActiveTooltip}
              />
            ))}
          </div>

          {/* Row 2: 2 icons (centered) */}
          <div className="grid grid-cols-2 gap-8">
            {icons.slice(3, 4).map((iconName) => (
              <div key={`${iconName}-3`} className="place-items-end">
                <IconItem
                  iconName={iconName}
                  activeTooltip={activeTooltip}
                  setActiveTooltip={setActiveTooltip}
                />
              </div>
            ))}
            {icons.slice(4, 5).map((iconName) => (
              <div key={`${iconName}-4`} className="place-items-start">
                <IconItem
                  iconName={iconName}
                  activeTooltip={activeTooltip}
                  setActiveTooltip={setActiveTooltip}
                />
              </div>
            ))}
          </div>
        </div>
      );
    }
    if (iconCount === 7) {
      return (
        <div className="flex flex-col gap-2">
          {/* Row 1: 3 icons */}
          <div className="grid grid-cols-4 md:grid-cols-7 gap-2 place-items-center">
            {icons.map((iconName) => (
              <IconItem
                key={iconName}
                iconName={iconName}
                activeTooltip={activeTooltip}
                setActiveTooltip={setActiveTooltip}
              />
            ))}
          </div>
        </div>
      );
    }

    // ✅ Other cases
    let gridCols = "grid-cols-4";
    if (iconCount === 1) gridCols = "grid-cols-2";
    if (iconCount === 3) gridCols = "grid-cols-3";
    if (iconCount === 4) gridCols = "grid-cols-4";

    return (
      <div className={`grid ${gridCols} gap-2 place-items-center`}>
        {icons.map((iconName, idx) => {
          if (iconName.trim() === "") return <div key={`empty-${idx}`}></div>;
          return (
            <IconItem
              key={iconName}
              iconName={iconName}
              activeTooltip={activeTooltip}
              setActiveTooltip={setActiveTooltip}
            />
          );
        })}
      </div>
    );
  };

  return (
    <FadeIn
      index={parseInt(id)}
      className="card-without-hover"
      enableHover={false}
    >
      {renderIcons()}
      <div>
        <h3 className="font-semibold text-md my-2 ">{title}</h3>
        <p className="text-sm ">{description}</p>
      </div>
    </FadeIn>
  );
}

function IconItem({
  iconName,
  activeTooltip,
  setActiveTooltip,
}: {
  iconName?: string;
  activeTooltip: string | null;
  setActiveTooltip: (tooltip: string | null) => void;
}) {
  const tooltipId = iconName || "";
  const isOpen = activeTooltip === tooltipId;

  const handleClick = () => {
    if (isOpen) {
      setActiveTooltip(null);
    } else {
      setActiveTooltip(tooltipId);
    }
  };

  return (
    <Tooltip
      open={isOpen}
      onOpenChange={(open) => {
        if (open) {
          setActiveTooltip(tooltipId);
        } else {
          setActiveTooltip(null);
        }
      }}
      delayDuration={200}
    >
      <TooltipTrigger asChild onClick={handleClick}>
        <div className="bg-white self-center p-3 rounded-full w-14 h-14 flex justify-center items-center hover:translate-y-[-8px] transition-transform duration-300 cursor-pointer">
          <Image
            src={getIcon(iconName as any)}
            alt={iconName || "icon"}
            width={40}
            height={40}
            className="aspect-square object-contain h-8 w-8"
          />
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p>{iconName}</p>
      </TooltipContent>
    </Tooltip>
  );
}
