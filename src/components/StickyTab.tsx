"use client";

import { useState, useEffect } from "react";

const StickyTab = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300); // 0.30s delay (0.15s after HeaderQuote)
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`sticky-side-tab transition-all duration-700 ease-out ${
      isVisible 
        ? 'opacity-100 translate-x-0' 
        : 'opacity-0 -translate-x-8'
    }`}>
      <span>Rapport Wennink</span>
    </div>
  );
};

export { StickyTab };
