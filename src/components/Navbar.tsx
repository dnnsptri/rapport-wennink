"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section>
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          <div className="flex flex-1 items-center gap-9">
            <div className="hidden items-center gap-1.5 lg:flex">
              <NavigationMenu delayDuration={0}>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      asChild
                      className={navigationMenuTriggerStyle()}
                    >
                      <a href="#presentatie">Presentatie 12 december</a>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      asChild
                      className={navigationMenuTriggerStyle()}
                    >
                      <a href="#klankbordgroep">Klankbordgroep</a>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      asChild
                      className={navigationMenuTriggerStyle()}
                    >
                      <a href="#contact">Contact</a>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <a href="/" className="flex items-center gap-2">
              {/* <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblocks-logo.svg"
                alt="logo"
                className="h-8 dark:invert"
              /> */}
              <span className="text-lg font-semibold">Rapport Wennink</span>
            </a>
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <Button asChild>
              <a href="#presentatie">Wees er bij op 12 dec!</a>
            </Button>
          </div>

          <Button
            variant="outline"
            className="lg:hidden h-10 w-10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </nav>
      </div>

      {isOpen && (
        <div className="bg-background border-t lg:hidden">
          <div className="max-w-7xl mx-auto px-4">
            <div className="space-y-2 py-4">
              <a
                href="#headerquote"
                className="border-border block border-b py-4 pr-3 text-base font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Products
              </a>
              <a
                href="#presentatie"
                className="border-border block border-b py-4 pr-3 text-base font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Support
              </a>
              <a
                href="#klankbordgroep"
                className="border-border block border-b py-4 pr-3 text-base font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Klankbordgroep
              </a>
              <a
                href="#contact"
                className="border-border block border-b py-4 pr-3 text-base font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Login
              </a>
              <a
                href="#presentatie"
                className="border-border block border-b py-4 pr-3 text-base font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export { Navbar };