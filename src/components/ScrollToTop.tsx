"use client";

import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 480);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 flex h-9 w-9 items-center justify-center rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors"
      aria-label="Scroll to top"
    >
      <ChevronUp className="h-5 w-5" />
    </button>
  );
};

export { ScrollToTop };
