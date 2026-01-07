"use client";

import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { getAccentColor } from "@/lib/utils";
import { DARKCOLOR, LIGHTCOLOR } from "@/shared/constrains";
import useAccentChange from "@/Customhooks/useAccentChange";

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <AccentProvider>{children}</AccentProvider>
    </NextThemesProvider>
  );
}

// Accent Context
interface AccentContextType {
  accent: number;
  setAccent: (accent: number) => void;
}

const AccentContext = createContext<AccentContextType | undefined>(undefined);

export function AccentProvider({ children }: { children: ReactNode }) {
  const [accent, setAccent] = useState<number>(5);
  return (
    <AccentContext.Provider value={{ accent, setAccent }}>
      {children}
    </AccentContext.Provider>
  );
}

export function useAccent() {
  const context = useContext(AccentContext);
  if (context === undefined) {
    throw new Error("useAccent must be used within an AccentProvider");
  }
  return context;
}
