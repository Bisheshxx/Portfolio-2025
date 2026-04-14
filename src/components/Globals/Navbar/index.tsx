"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import useAccentChange from "@/Customhooks/useAccentChange";
import useNavbarContrast from "@/Customhooks/useNavbarContrast";

const sections = ["home", "skills", "exp", "project"];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const isScrollingRef = useRef(false);
  const navbarRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const { isOverLightBackground } = useNavbarContrast(navbarRef);

  const performScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      isScrollingRef.current = true;
      const navbarHeight = 80;
      const y =
        element.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(id);
      history.replaceState(null, "", `#${id}`);

      // unlock after smooth scroll ends
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 1500);
    }
  };

  const scrollToSection = (id: string) => {
    // Check if we're not on the home page
    if (pathname !== "/") {
      // Redirect to home with hash
      router.push(`/#${id}`);
      return;
    }

    performScroll(id);
  };
  const handleScroll = () => {
    if (isScrollingRef.current) return;

    const scrollPosition = window.scrollY + 90;
    let currentSection = sections[0];

    for (let i = 0; i < sections.length; i++) {
      const element = document.getElementById(sections[i]);
      if (element && scrollPosition >= element.offsetTop) {
        currentSection = sections[i];
      }
    }

    setActiveSection(currentSection);
    history.replaceState(null, "", `#${currentSection}`);
  };
  useEffect(() => {
    // Handle hash navigation on page load
    const hash = window.location.hash.slice(1);
    if (hash && sections.includes(hash)) {
      window.scrollTo(0, 0);
      setTimeout(() => {
        performScroll(hash);
      }, 100);
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const { theme, setTheme, themeColor, accent } = useAccentChange();

  return (
    <div
      ref={navbarRef}
      className="sticky top-7 md:top-4 z-[777] flex justify-center items-center cursor-pointer"
    >
      <nav className="flex gap-1 md:gap-5">
        <div
          className="relative flex justify-between md:gap-4 border border-white bg-white/30 backdrop-blur-sm
 rounded-full md:px-4 md:py-1  shadow-md"
          // style={{ borderColor: accent !== 5 ? themeColor[accent] : "white" }}
        >
          {sections.map((id) => {
            const isActive = activeSection === id;
            return (
              <div
                key={id}
                onClick={() => scrollToSection(id)}
                className="relative text-xs md:text-sm py-1 px-3 capitalize flex justify-center items-center font-medium"
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-full "
                    transition={{
                      type: "spring",
                      // stiffness: 200,
                      // damping: 60,
                      bounce: 0.3,
                      duration: 1.3,
                      velocity: 200,
                    }}
                    style={{ backgroundColor: themeColor[accent] }}
                  />
                )}
                <span
                  className={`relative z-10 ${
                    isActive ? "text-background" : ""
                  }`}
                  style={
                    isActive
                      ? undefined
                      : {
                          color: isOverLightBackground ? "#111827" : undefined,
                        }
                  }
                >
                  {id}
                </span>
              </div>
            );
          })}
        </div>
        <div
          className="relative flex justify-between md:gap-4 border border-white  bg-white/30 backdrop-blur-sm
 rounded-full md:p-3 p-1  shadow-md"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? (
            <Sun className="md:h-5 md:w-5 h-4 w-4" color="yellow" />
          ) : (
            <Moon className="md:h-5 md:w-5 h-4 w-4" color="#040720" />
          )}
        </div>
      </nav>
    </div>
  );
}
