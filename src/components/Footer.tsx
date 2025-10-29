import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const sections = [
  {
    title: "Product",
    links: [
      { name: "Overview", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Marketplace", href: "#" },
      { name: "Features", href: "#" },
      { name: "Integrations", href: "#" },
      { name: "Marketing", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "Klankbordgroep", href: "#klankbordgroep" },
      { name: "Team", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#" },
    ],
  },
];

interface FooterProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
}

const Footer = ({
  logo = {
    url: "https://www.shadcnblocks.com",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg",
    alt: "logo",
    title: "Rapport Wennink",
  },
}: FooterProps) => {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-4">
        <footer>
          <div className="text-muted-foreground mt-20 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium lg:flex-row lg:items-center lg:text-left">
            <p>
              © 2025 Rapport Wennink.
            </p>
            <p>
              <a href="#" className="text-primary ml-1 hover:underline">
                  Privacy Policy
              </a>
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer };
