"use client";

import { useEffect, useState } from "react";

export default function ScrollSlider() {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const updateSlider = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (scrollTop / scrollHeight) * 100;
      setScrollWidth(scrolled);
    };

    window.addEventListener("scroll", updateSlider);
    return () => window.removeEventListener("scroll", updateSlider);
  }, []);

  return (
    <div
      className="fixed top- left-0 h-1 bg-indigo-600 z-50 transition-all duration-200"
      style={{ width: `${scrollWidth}%` }}
    />
  );
}
