import { useAccent } from "@/Providers/ThemeProvider";
import { DARKCOLOR, LIGHTCOLOR } from "@/shared/constrains";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

export default function useAccentChange() {
  const { accent, setAccent } = useAccent();
  const theme = useTheme();

  //this is the dynamic theme color array based on light/dark mode
  const [themeColor, setThemeColor] = useState<string[]>(
    theme.theme === "dark" ? DARKCOLOR : LIGHTCOLOR
  );

  //this effect updates the theme colors when the theme changes
  useEffect(() => {
    if (theme) {
      const accentColors = theme.theme === "dark" ? DARKCOLOR : LIGHTCOLOR;
      setThemeColor(accentColors);
    }
  }, [theme]);

  return { themeColor, ...theme, accent, setAccent };
}
