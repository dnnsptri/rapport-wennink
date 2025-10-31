"use client";

import { ShoppingBag, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

interface BannerProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
  defaultVisible?: boolean;
}

const Banner = ({
  title = "Aankondiging Rapport Wennink 📢",
  description = "Vrijdagochtend 12 december in Nieuwspoort;",
  buttonText = "Wees erbij!",
  buttonUrl = "https://www.dennispetri.nl",
  defaultVisible = true,
}: BannerProps) => {
  const [isVisible, setIsVisible] = useState(defaultVisible);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <section className="bg-primary w-full p-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <Button
            variant="outline"
            className="absolute right-0 top-0 h-8 w-8 md:hidden"
            onClick={handleClose}
          >
            <X className="h-4 w-4" />
          </Button>

          <div className="text-primary-foreground flex flex-col items-start gap-3 pt-2 md:flex-row md:items-center md:pt-0">
            <div className="flex flex-col gap-1 md:flex-row md:items-center">
              <p className="text-sm font-medium">{title}</p>
              <p className="text-primary-foreground/80 text-sm">
                {description}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              size="sm"
              className="w-full md:w-auto"
              variant="outline"
              asChild
            >
              <a href={buttonUrl} target="_blank" rel="noopener noreferrer">
                {buttonText}
                <ShoppingBag className="ml-2 h-3 w-3" />
              </a>
            </Button>
            <Button
              variant="outline"
              className="hidden h-8 w-8 md:inline-flex text-primary-foreground hover:bg-primary-foreground/10"
              onClick={handleClose}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Banner };
