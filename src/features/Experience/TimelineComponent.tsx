"use client";
import useAccentChange from "@/Customhooks/useAccentChange";
import { useAccent } from "@/Providers/ThemeProvider";
import { BriefcaseBusiness, Code, GraduationCap, Star } from "lucide-react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useEffect, useState } from "react";

interface ExperienceItem {
  company: string;
  role: string;
  type: string;
  date: string;
  description: string;
  iconBg: string;
  contentBg: string;
  contentGradientStart?: string;
  contentGradientEnd?: string;
  arrowColor?: string;
  icon: "work" | "code";
  // Dark mode properties
  darkContentBg?: string;
  darkContentGradientStart?: string;
  darkContentGradientEnd?: string;
  darkArrowColor?: string;
}

// const experiences: ExperienceItem[] = [
//   {
//     company: "WEB LAUNCH LIMITED",
//     role: "Full Stack Developer",
//     type: "Part Time",
//     date: "Jan 2025 - Present",
//     description:
//       "Built and deployed modern, scalable, SEO‑optimized websites and web apps with real-time features, responsive UI/UX, and client‑specific branding.",
//     iconBg: "#6366f1",
//     contentBg: "rgba(199, 210, 254, 0.9)",
//     contentGradientStart: "rgba(199, 210, 254, 0.9)",
//     contentGradientEnd: "rgba(191, 219, 254, 0.9)",
//     arrowColor: "rgba(199, 210, 254, 0.9)",
//     icon: "work",
//   },
//   {
//     company: "Ek Solution Pvt. Ltd",
//     role: "Associate Frontend Developer",
//     type: "Full Time",
//     date: "May 2022 - Jun 2023",
//     description:
//       "Developed scalable, high‑performance web applications using modern JavaScript frameworks (Angular, React, Next.js) with tools like Redux, Tailwind CSS, and Leaflet, while collaborating across teams and using cloud technologies for efficient deployment and maintenance.",
//     iconBg: "#8b5cf6",
//     contentBg: "rgba(221, 214, 254, 0.9)",
//     contentGradientStart: "rgba(221, 214, 254, 0.9)",
//     contentGradientEnd: "rgba(199, 210, 254, 0.9)",
//     arrowColor: "rgba(221, 214, 254, 0.9)",
//     icon: "work",
//   },
//   {
//     company: "Ek Solution Pvt. Ltd",
//     role: "Frontend Developer Intern",
//     type: "Internship",
//     date: "Jan 2022 - Mar 2022",
//     description:
//       "Mastered React and Angular fundamentals through hands-on project contributions in professional workflows, demonstrating rapid technical growth that led to full-time promotion in first year.",
//     iconBg: "#a78bfa",
//     contentBg: "rgba(237, 233, 254, 0.9)",
//     contentGradientStart: "rgba(237, 233, 254, 0.9)",
//     contentGradientEnd: "rgba(221, 214, 254, 0.9)",
//     arrowColor: "rgba(237, 233, 254, 0.9)",
//     icon: "code",
//   },
// ];

const experiences: ExperienceItem[] = [
  {
    company: "WEB LAUNCH LIMITED",
    role: "Full Stack Developer",
    type: "Part Time",
    date: "Jan 2025 - Present",
    description:
      "Built and deployed modern, scalable, SEO-optimized websites and web apps with real-time features, responsive UI/UX, and client-specific branding.",
    iconBg: "#6366f1",

    // light
    contentBg: "rgba(199, 210, 254, 0.9)",
    contentGradientStart: "rgba(199, 210, 254, 0.9)",
    contentGradientEnd: "rgba(191, 219, 254, 0.9)",
    arrowColor: "rgba(199, 210, 254, 0.9)",

    // dark
    darkContentBg: "rgba(49, 46, 129, 0.9)",
    darkContentGradientStart: "rgba(49, 46, 129, 0.9)",
    darkContentGradientEnd: "rgba(67, 56, 202, 0.9)",
    darkArrowColor: "rgba(67, 56, 202, 0.9)",

    icon: "work",
  },
  {
    company: "Ek Solution Pvt. Ltd",
    role: "Associate Frontend Developer",
    type: "Full Time",
    date: "May 2022 - Jun 2023",
    description:
      "Developed scalable, high-performance web applications using modern JavaScript frameworks (Angular, React, Next.js) with tools like Redux, Tailwind CSS, and Leaflet, while collaborating across teams and using cloud technologies for efficient deployment and maintenance.",
    iconBg: "#8b5cf6",

    // light
    contentBg: "rgba(221, 214, 254, 0.9)",
    contentGradientStart: "rgba(221, 214, 254, 0.9)",
    contentGradientEnd: "rgba(199, 210, 254, 0.9)",
    arrowColor: "rgba(221, 214, 254, 0.9)",

    // dark
    darkContentBg: "rgba(76, 29, 149, 0.9)",
    darkContentGradientStart: "rgba(76, 29, 149, 0.9)",
    darkContentGradientEnd: "rgba(91, 33, 182, 0.9)",
    darkArrowColor: "rgba(91, 33, 182, 0.9)",

    icon: "work",
  },
  {
    company: "Ek Solution Pvt. Ltd",
    role: "Frontend Developer Intern",
    type: "Internship",
    date: "Jan 2022 - Mar 2022",
    description:
      "Mastered React and Angular fundamentals through hands-on project contributions in professional workflows, demonstrating rapid technical growth that led to full-time promotion in first year.",
    iconBg: "#a78bfa",

    // light
    contentBg: "rgba(237, 233, 254, 0.9)",
    contentGradientStart: "rgba(237, 233, 254, 0.9)",
    contentGradientEnd: "rgba(221, 214, 254, 0.9)",
    arrowColor: "rgba(237, 233, 254, 0.9)",

    // dark
    darkContentBg: "rgba(88, 28, 135, 0.9)",
    darkContentGradientStart: "rgba(88, 28, 135, 0.9)",
    darkContentGradientEnd: "rgba(107, 33, 168, 0.9)",
    darkArrowColor: "rgba(107, 33, 168, 0.9)",

    icon: "code",
  },
];

const getIcon = (type: "work" | "code") => {
  return type === "work" ? (
    <BriefcaseBusiness className="w-5 h-5" />
  ) : (
    <Code className="w-5 h-5" />
  );
};

export default function Timeline() {
  const { themeColor, accent, theme } = useAccentChange();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Use theme value if available, otherwise default to 'dark' for initial render
  const currentTheme = isMounted ? theme : "dark";
  const timelineLineColor =
    currentTheme === "dark"
      ? "rgba(255, 255, 255, 0.15)"
      : "rgba(0, 0, 0, 0.15)";
  return (
    <section className="py-8 md:py-16">
      <VerticalTimeline lineColor={timelineLineColor} animate={false}>
        {experiences.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{
              background:
                exp.contentGradientStart &&
                exp.contentGradientEnd &&
                exp.darkContentGradientStart &&
                exp.darkContentGradientEnd
                  ? `linear-gradient(135deg, ${theme === "dark" ? exp.darkContentGradientStart : exp.contentGradientStart}, ${theme === "dark" ? exp.darkContentGradientEnd : exp.contentGradientEnd})`
                  : exp.contentBg,
              color: themeColor[accent],
              boxShadow: `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)`,
              // border: "1px solid rgba(255, 255, 255, 0.6)",
              borderRadius: "20px",
              // padding: "1.5rem",
            }}
            contentArrowStyle={{
              borderRight: `7px solid ${
                exp.arrowColor ??
                (theme === "dark"
                  ? exp.darkContentGradientStart
                  : exp.contentGradientStart) ??
                exp.contentBg
              }`,
            }}
            date={exp.date}
            iconStyle={{
              background: exp.iconBg,
              color: "#fff",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
            }}
            icon={getIcon(exp.icon)}
            dateClassName={`text-sm md:text-base font-semibold mx-5 color-${themeColor[accent]}`}
          >
            <h3 className="text-lg md:text-xl font-bold mb-0.5 leading-tight">
              {exp.company}
            </h3>
            <div className="flex gap-2 flex-wrap mb-3">
              <h4 className="text-xs font-semibold  ">{exp.role}</h4>
              <div
                className={`text-xs font-medium dark:bg-black/60 bg-white/60 px-2 py-0.5 rounded-full`}
              >
                {exp.type}
              </div>
            </div>
            <span className="text-xs leading-relaxed">{exp.description}</span>
          </VerticalTimelineElement>
        ))}

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            background: `linear-gradient(135deg, ${theme === "dark" ? "rgba(88, 28, 135, 0.9)" : "rgba(237, 233, 254, 0.9)"}, ${theme === "dark" ? "rgba(107, 33, 168, 0.9)" : "rgba(221, 214, 254, 0.9)"})`,
            color: themeColor[accent],
            boxShadow:
              "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            borderRadius: "20px",
            // padding: "1.5rem",
          }}
          contentArrowStyle={{
            borderRight: "7px solid rgba(237, 233, 254, 0.9)",
          }}
          date="2018 – 2022"
          iconStyle={{
            background: "rgb(16, 204, 82)",
            // color: themeColor[accent],
            color: "#fff",
            boxShadow: "0 4px 12px rgba(16, 204, 82, 0.3)",
          }}
          icon={<GraduationCap className="w-5 h-5" />}
          dateClassName="text-sm md:text-base font-semibold mx-5"
        >
          <h3 className="text-lg md:text-xl font-bold  mb-0.5 leading-tight">
            Bachelor of Science (Hons) in Computing
          </h3>
          <h4 className="text-xs font-semibold  mb-3">
            Coventry University, United Kingdom
            <span className="ml-2 text-xs font-medium dark:bg-black/60 bg-white/60 px-2 py-0.5 rounded-full">
              Grade: First Class
            </span>
          </h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
}
