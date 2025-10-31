"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Opdracht } from "@/components/Opdracht";

const HeaderQuote = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 150); // 0.15s delay after navbar
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="headerquote" className="py-12 md:py-21">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className={`transition-all duration-1000 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-hero">
            <p className="flex flex-wrap items-center" style={{lineHeight: '1.2'}}>
              Mijn opdracht is te laten zien hoe Nederland structureel kan investeren in zijn verdienvermogen en strategische relevantie, zodat groei, innovatie en welvaart in de komende decennia behouden blijven.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-5 mt-6 md:mt-10">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="default" size="lg">
                  Lees mijn opdracht
                </Button>
              </DialogTrigger>
              <DialogContent className="w-full max-w-[calc(100%-2rem)] md:w-[1000px] md:!max-w-[1280px] !top-[5vh] md:!top-[10vh] !bottom-0 !translate-y-0 !left-[50%] !translate-x-[-50%] !max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="sr-only">Mijn opdracht</DialogTitle>
                </DialogHeader>
                <Opdracht />
              </DialogContent>
            </Dialog>
            <Button variant="outline" size="lg" asChild>
              <a
                href="/_downloads/311025_RapportWennink_BriefPartijleiders.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bekijk mijn brief (PDF)
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { HeaderQuote };
