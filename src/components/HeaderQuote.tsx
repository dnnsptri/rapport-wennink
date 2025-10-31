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
    <section id="headerquote" className="py-21">
      <div className="max-w-7xl mx-auto px-6 md:px-4">
        <div className={`transition-all duration-1000 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-hero">
            <p className="flex flex-wrap items-center" style={{lineHeight: '1.2'}}>
              {/*<img src="/_images/quote.svg" alt="Quote" className="w-36 h-36" />*/}
              Mijn opdracht is te laten zien hoe Nederland structureel kan investeren in zijn verdienvermogen en strategische relevantie, zodat groei, innovatie en welvaart in de komende decennia behouden blijven.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 mt-10">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg">
                  Lees mijn opdracht
                </Button>
              </DialogTrigger>
              <DialogContent className="w-[720px] !max-w-[720px] max-h-[75vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="sr-only">Opdracht Details</DialogTitle>
                </DialogHeader>
                <Opdracht />
              </DialogContent>
            </Dialog>
            <a
              href="/_downloads/311025_RapportWennink_BriefPartijleiders.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg">
                Bekijk mijn brief (PDF)
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { HeaderQuote };
