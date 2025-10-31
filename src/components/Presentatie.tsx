import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";

const Presentatie = () => {
  return (
    <section id="presentatie" className="bg-white py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-4">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:mb-10 lg:text-6xl">
                Presentatie Rapport Wennink 12 december in Nieuwspoort
            </h1>
            <p className="intro">
              Peter Wennink presenteert zijn rapport op vrijdag 12 december 2025 in Nieuwspoort.
              Zijn rapport zal bestaan uit:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Check className="size-4 shrink-0 mt-0.5" />
                een onafhankelijke analyse van de economische noodzaak van ingrijpen;
              </li>
              <li className="flex items-start gap-2">
                <Check className="size-4 shrink-0 mt-0.5" />
                aanbevelingen voor de randvoorwaarden die nodig zijn om publieke en private investeringen los te maken, zoals verminderde regeldruk, voldoende talent en infrastructuur;
              </li>
              <li className="flex items-start gap-2">
                <Check className="size-4 shrink-0 mt-0.5" />
                voorstellen om de Nederlandse positie in kritieke technologieën te versterken;
              </li>
              <li className="flex items-start gap-2">
                <Check className="size-4 shrink-0 mt-0.5" />
                suggesties voor praktische vormen van samenwerking en financiering om deze voorstellen werkelijkheid te laten worden.
              </li>
            </ul>
            <div className="flex w-full flex-col items-center gap-2 sm:flex-row">
            <Button asChild size="lg" className="w-auto">
              <a href="mailto:pers@rapportwennink.nl?subject=Ik%20ben%20graag%20bij%20de%20presentatie%20van%20het%20rapport%20van%20Peter%20Wennink%20op%2012%20december%20in%20Nieuwspoort">
                Ik ben journalist en meld me aan
              </a>
            </Button>
            </div>
          </div>
          <img
            src="/_images/visual_wennink.png"
            alt="Peter Wennink presenteert zijn rapport"
            className="border-border w-full max-w-lg rounded-lg border ml-12"
          />
        </div>
      </div>
    </section>
  );
};

export { Presentatie };
