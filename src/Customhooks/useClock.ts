import { useState, useEffect } from "react";

export const useClock = () => {
  const [time, setTime] = useState<string>("");
  const [period, setPeriod] = useState<"AM" | "PM">("AM");

  useEffect(() => {
    // Set initial time
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: "Pacific/Auckland",
      });
      const nzTime = new Date(
        now.toLocaleString("en-US", { timeZone: "Pacific/Auckland" })
      );
      const hour = nzTime.getHours();
      setPeriod(hour >= 12 ? "PM" : "AM");
      setTime(timeString);
    };

    updateTime();

    // Update every second
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return { time, period };
};
