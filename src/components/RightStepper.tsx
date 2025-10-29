"use client";

import { useEffect, useState } from "react";

const SECTIONS = ["headerquote", "presentatie", "klankbordgroep", "contact"] as const;

export function RightStepper() {
  const [activeId, setActiveId] = useState<string>(SECTIONS[0]);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    const elements = SECTIONS.map((id) => ({
      id,
      el: document.getElementById(id),
    })).filter((item) => item.el !== null) as Array<{ id: string; el: HTMLElement }>;

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) {
          setActiveId((visible.target as HTMLElement).id);
        }
      },
      { rootMargin: "-25% 0px -65% 0px", threshold: 0.1 }
    );

    elements.forEach(({ el }) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      aria-label="Page sections"
      className="fixed right-8 top-1/2 -translate-y-1/2 z-[1000] hidden min-[1400px]:flex flex-col items-center gap-3"
    >
      {SECTIONS.map((id) => {
        const isActive = id === activeId;
        const isHovered = id === hoveredId;
        const fillColor = isHovered ? "#1B3647" : isActive ? "#026B89" : "transparent";

        return (
          <button
            key={id}
            aria-label={id}
            onClick={() => scrollTo(id)}
            onMouseEnter={() => setHoveredId(id)}
            onMouseLeave={() => setHoveredId(null)}
            type="button"
            className="stepper-btn flex items-center justify-center transition-all duration-200 h-auto w-auto p-0 rounded-full"
          >
            <span
              className="block rounded-full transition-all duration-200"
              style={{
                width: 12,
                height: 12,
                border: "1px solid #026B89",
                backgroundColor: fillColor,
              }}
            />
          </button>
        );
      })}
    </div>
  );
}

export default RightStepper;
