"use client";
import useAccentChange from "@/Customhooks/useAccentChange";
import FadeIn from "@/shared/components/Framer-components/FadeIn";
import { BriefcaseBusiness, Code, GraduationCap } from "lucide-react";
import { useEffect, useState } from "react";

interface ExperienceItem {
  company: string;
  role: string;
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

  // Keep theme usage hydration-safe for SSR/CSR transition.
  const currentTheme = isMounted ? theme : "dark";
  const isDark = currentTheme === "dark";
  const timelineLineColor =
    currentTheme === "dark"
      ? "rgba(255, 255, 255, 0.15)"
      : "rgba(0, 0, 0, 0.15)";

  const accentColor = themeColor[accent];

  return (
    <section className="py-8 md:py-16">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="relative">
          <div
            className="absolute left-5 top-0 bottom-0 w-px"
            style={{
              background: `linear-gradient(to bottom, transparent, ${timelineLineColor}, transparent)`,
            }}
          />

          {experiences.map((exp, index) => {
            const cardStart =
              isDark && exp.darkContentGradientStart
                ? exp.darkContentGradientStart
                : (exp.contentGradientStart ?? exp.contentBg);
            const cardEnd =
              isDark && exp.darkContentGradientEnd
                ? exp.darkContentGradientEnd
                : (exp.contentGradientEnd ?? exp.contentBg);

            return (
              <FadeIn
                key={index}
                index={index + 1}
                className="relative pl-14 pb-8 last:pb-0"
                enableHover={false}
              >
                <article>
                  <div
                    className="absolute left-0 top-1.5 flex h-10 w-10 items-center justify-center rounded-xl text-white"
                    style={{
                      background: exp.iconBg,
                      boxShadow: "0 10px 24px rgba(0,0,0,0.2)",
                    }}
                  >
                    {getIcon(exp.icon)}
                  </div>

                  <div
                    className="overflow-hidden rounded-2xl border backdrop-blur-sm"
                    style={{
                      background: `linear-gradient(135deg, ${cardStart}, ${cardEnd})`,
                      borderColor: isDark
                        ? "rgba(255,255,255,0.12)"
                        : "rgba(0,0,0,0.08)",
                      boxShadow: isDark
                        ? "0 20px 40px rgba(0,0,0,0.35)"
                        : "0 16px 32px rgba(15, 23, 42, 0.12)",
                    }}
                  >
                    <div
                      className="space-y-3 p-5 md:p-6"
                      style={{ color: accentColor }}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-lg md:text-xl font-bold leading-tight">
                          {exp.company}
                        </h3>
                        <span
                          className="rounded-full px-3 py-1 text-xs md:text-sm font-semibold"
                          style={{
                            color: isDark ? "#f8fafc" : "#0f172a",
                            background: isDark
                              ? "rgba(15, 23, 42, 0.45)"
                              : "rgba(248, 250, 252, 0.7)",
                          }}
                        >
                          {exp.date}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs md:text-sm font-semibold">
                          {exp.role}
                        </span>
                      </div>

                      <p
                        className="text-sm leading-relaxed"
                        style={{
                          color: isDark
                            ? "rgba(241,245,249,0.9)"
                            : "rgba(15,23,42,0.88)",
                        }}
                      >
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </article>
              </FadeIn>
            );
          })}

          <FadeIn
            index={experiences.length + 1}
            className="relative pl-14"
            enableHover={false}
          >
            <article>
              <div
                className="absolute left-0 top-1.5 flex h-10 w-10 items-center justify-center rounded-xl text-white"
                style={{
                  background: "rgb(16, 204, 82)",
                  boxShadow: "0 10px 24px rgba(16, 204, 82, 0.35)",
                }}
              >
                <GraduationCap className="w-5 h-5" />
              </div>

              <div
                className="overflow-hidden rounded-2xl border backdrop-blur-sm"
                style={{
                  background: `linear-gradient(135deg, ${isDark ? "rgba(88, 28, 135, 0.9)" : "rgba(237, 233, 254, 0.9)"}, ${isDark ? "rgba(107, 33, 168, 0.9)" : "rgba(221, 214, 254, 0.9)"})`,
                  borderColor: isDark
                    ? "rgba(255,255,255,0.12)"
                    : "rgba(0,0,0,0.08)",
                  boxShadow: isDark
                    ? "0 20px 40px rgba(0,0,0,0.35)"
                    : "0 16px 32px rgba(15, 23, 42, 0.12)",
                }}
              >
                <div
                  className="space-y-3 p-5 md:p-6"
                  style={{ color: accentColor }}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg md:text-xl font-bold leading-tight">
                      Bachelor of Science (Hons) in Computing
                    </h3>
                    <span
                      className="rounded-full px-3 py-1 text-xs md:text-sm font-semibold"
                      style={{
                        color: isDark ? "#f8fafc" : "#0f172a",
                        background: isDark
                          ? "rgba(15, 23, 42, 0.45)"
                          : "rgba(248, 250, 252, 0.7)",
                      }}
                    >
                      2018 - 2022
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs md:text-sm font-semibold">
                      Coventry University, United Kingdom
                    </span>
                    <span
                      className="rounded-full px-2.5 py-1 text-[11px] md:text-xs font-medium"
                      style={{
                        color: isDark ? "#e2e8f0" : "#1e293b",
                        background: isDark
                          ? "rgba(2, 6, 23, 0.45)"
                          : "rgba(255, 255, 255, 0.65)",
                      }}
                    >
                      Grade: First Class
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
