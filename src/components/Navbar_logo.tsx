"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 0); // No delay for navbar
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`transition-all duration-700 ease-out ${
      isVisible 
        ? 'opacity-100 translate-y-0' 
        : 'opacity-0 translate-y-8'
    }`}>
      <div className="w-full">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center ml-8">
            <div className="flex items-center gap-2 select-none">
              <img
                src="/_images/bm_rapport_wennink.svg"
                alt="Rapport Wennink"
                className="h-18 dark:invert transform scale-95"
              />
            </div>
          </div>
          <div className="flex items-center mr-8">
          <Button variant="outline" size="lg" asChild>
            <a href="#contact">
              Contact
            </a>
          </Button>
          </div>
        </nav>
      </div>
    </section>
  );
};

export { Navbar };