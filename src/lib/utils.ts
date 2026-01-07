import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getAccentColor = (accent: string) => {
  switch (accent) {
    case "accent-one":
      return "bg-accent-one";
    case "accent-two":
      return "bg-accent-two";
    case "accent-three":
      return "bg-accent-three";
    case "accent-four":
      return "bg-accent-four";
    case "accent-five":
      return "bg-accent-five";
    case "foreground":
      return "bg-foreground";
    default:
      return "bg-foreground";
  }
};
