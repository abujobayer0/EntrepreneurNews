// hooks/useScreenSize.ts
import { useState, useEffect } from "react";

export const useScreenSize = () => {
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    // Avoid running on the server
    if (typeof window === "undefined") return;

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // Set initial width
    handleResize();

    // Listen for resize events
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isSmallScreen = width !== null && width < 640;
  const isMediumScreen = width !== null && width >= 640 && width < 1024;

  return { isSmallScreen, isMediumScreen, width };
};
