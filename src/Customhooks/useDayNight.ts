import { useState, useEffect } from "react";
import * as SunCalc from "suncalc";

interface Coordinates {
  latitude: number;
  longitude: number;
}

// Default to Auckland, NZ
const DEFAULT_COORDS: Coordinates = {
  latitude: -37.7749,
  longitude: 174.886,
};

export const useDayNight = () => {
  const [isDay, setIsDay] = useState<boolean>(true);
  const [coords, setCoords] = useState<Coordinates>(DEFAULT_COORDS);

  useEffect(() => {
    const checkDayNight = () => {
      const now = new Date();
      const times = SunCalc.getTimes(
        now,
        DEFAULT_COORDS.latitude,
        DEFAULT_COORDS.longitude
      );

      // Check if current time is between sunrise and sunset
      const isDayTime = now >= times.sunrise && now < times.sunset;
      setIsDay(isDayTime);
    };

    checkDayNight();

    // Update every minute to catch sunrise/sunset transitions
    const interval = setInterval(checkDayNight, 60000);

    return () => clearInterval(interval);
  }, [coords]);

  return { isDay };
};
