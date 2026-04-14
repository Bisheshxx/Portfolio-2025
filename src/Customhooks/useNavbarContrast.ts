import { RefObject, useCallback, useEffect, useRef, useState } from "react";

interface UseNavbarContrastOptions {
  luminanceThreshold?: number;
  lightSampleThreshold?: number;
  settleDelayMs?: number;
}

export default function useNavbarContrast(
  targetRef: RefObject<HTMLElement | null>,
  {
    luminanceThreshold = 0.7,
    lightSampleThreshold = 0.35,
    settleDelayMs = 110,
  }: UseNavbarContrastOptions = {},
) {
  const [isOverLightBackground, setIsOverLightBackground] = useState(false);
  const rafIdRef = useRef<number | null>(null);
  const settleTimeoutRef = useRef<number | null>(null);

  const getLuminance = useCallback((r: number, g: number, b: number) => {
    const normalize = (value: number) => {
      const channel = value / 255;
      return channel <= 0.03928
        ? channel / 12.92
        : Math.pow((channel + 0.055) / 1.055, 2.4);
    };

    const [rr, gg, bb] = [normalize(r), normalize(g), normalize(b)];
    return 0.2126 * rr + 0.7152 * gg + 0.0722 * bb;
  }, []);

  const findSolidBackground = useCallback((element: Element | null) => {
    let current: Element | null = element;

    while (current) {
      const bg = window.getComputedStyle(current).backgroundColor;
      const rgbaMatch = bg.match(
        /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/i,
      );

      if (rgbaMatch) {
        const alpha =
          rgbaMatch[4] === undefined ? 1 : Number.parseFloat(rgbaMatch[4]);
        if (alpha > 0.01) return bg;
      }

      current = current.parentElement;
    }

    return null;
  }, []);

  const isLightColor = useCallback(
    (color: string) => {
      const rgbaMatch = color.match(
        /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/i,
      );
      if (!rgbaMatch) return false;

      const r = Number.parseInt(rgbaMatch[1], 10);
      const g = Number.parseInt(rgbaMatch[2], 10);
      const b = Number.parseInt(rgbaMatch[3], 10);
      const luminance = getLuminance(r, g, b);

      return luminance > luminanceThreshold;
    },
    [getLuminance, luminanceThreshold],
  );

  const evaluateTargetBackground = useCallback(() => {
    const targetElement = targetRef.current;
    if (!targetElement) return;

    const rect = targetElement.getBoundingClientRect();
    const xRatios = [0.1, 0.25, 0.4, 0.5, 0.6, 0.75, 0.9];
    const yRatios = [0.35, 0.5, 0.65];

    const previousPointerEvents = targetElement.style.pointerEvents;
    targetElement.style.pointerEvents = "none";

    let lightSamples = 0;
    let validSamples = 0;

    for (const xRatio of xRatios) {
      for (const yRatio of yRatios) {
        const sampleX = rect.left + rect.width * xRatio;
        const sampleY = rect.top + rect.height * yRatio;
        const underneathElement = document.elementFromPoint(sampleX, sampleY);
        const background = findSolidBackground(underneathElement);

        if (!background) continue;

        validSamples += 1;
        if (isLightColor(background)) {
          lightSamples += 1;
        }
      }
    }

    targetElement.style.pointerEvents = previousPointerEvents;

    const lightRatio = validSamples > 0 ? lightSamples / validSamples : 0;
    setIsOverLightBackground(lightRatio >= lightSampleThreshold);
  }, [findSolidBackground, isLightColor, lightSampleThreshold, targetRef]);

  const scheduleBackgroundEvaluation = useCallback(() => {
    if (rafIdRef.current !== null) {
      window.cancelAnimationFrame(rafIdRef.current);
    }

    rafIdRef.current = window.requestAnimationFrame(() => {
      evaluateTargetBackground();
      rafIdRef.current = null;
    });

    if (settleTimeoutRef.current !== null) {
      window.clearTimeout(settleTimeoutRef.current);
    }

    // Recheck after scroll momentum settles to capture final viewport state.
    settleTimeoutRef.current = window.setTimeout(() => {
      evaluateTargetBackground();
    }, settleDelayMs);
  }, [evaluateTargetBackground, settleDelayMs]);

  useEffect(() => {
    const onViewportUpdate = () => scheduleBackgroundEvaluation();

    onViewportUpdate();
    window.addEventListener("scroll", onViewportUpdate, { passive: true });
    window.addEventListener("resize", onViewportUpdate);

    return () => {
      window.removeEventListener("scroll", onViewportUpdate);
      window.removeEventListener("resize", onViewportUpdate);

      if (rafIdRef.current !== null) {
        window.cancelAnimationFrame(rafIdRef.current);
      }

      if (settleTimeoutRef.current !== null) {
        window.clearTimeout(settleTimeoutRef.current);
      }
    };
  }, [scheduleBackgroundEvaluation]);

  return { isOverLightBackground };
}
