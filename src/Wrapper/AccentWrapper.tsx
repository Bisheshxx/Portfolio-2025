"use client";
import useAccentChange from "@/Customhooks/useAccentChange";
import React from "react";

interface AccentWrapperProps {
  children: React.ReactNode;
}

export default function AccentWrapper({ children }: AccentWrapperProps) {
  const { themeColor, accent } = useAccentChange();
  return <div style={{ color: themeColor[accent] }}>{children}</div>;
}
