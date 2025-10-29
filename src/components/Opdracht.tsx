"use client";

import {
  BookOpen,
  Code,
  Droplet,
  Layout,
  Map,
  Palette,
  Pen,
  Smartphone,
  TestTube,
  Users,
} from "lucide-react";

const Opdracht = () => {
  const services = [
    {
      icon: Users,
      title: "User research and persona development",
    },
    {
      icon: Map,
      title: "Information architecture and user journey mapping",
    },
    {
      icon: Pen,
      title: "Wireframing and interactive prototyping",
    },
    {
      icon: Palette,
      title: "Visual design and brand integration",
    },
    {
      icon: TestTube,
      title: "Usability testing and design validation",
    },
    {
      icon: BookOpen,
      title: "Design system creation and documentation",
    },
  ];

  const stats = [
    {
      icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/adobe-icon.png",
      title: "Adobe Creative Suite",
      description: "Design proficiency",
    },
    {
      icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/figma-icon.svg",
      title: "Figma",
      description: "Years experience",
    },
    {
      icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/sketch-icon.svg",
      title: "Sketch",
      description: "Projects completed",
    },
  ];

  const relatedServices = [
    {
      icon: Droplet,
      title: "Brand Identity",
      description: "Logo design and brand guidelines",
      link: "#",
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Custom website development",
      link: "#",
    },
    {
      icon: Smartphone,
      title: "Mobile App Design",
      description: "iOS and Android app interfaces",
      link: "#",
    },
    {
      icon: Layout,
      title: "Design Systems",
      description: "Scalable component libraries",
      link: "#",
    },
  ];

  return (
    <section className="py-32">
      <div className="container max-w-3xl">
        {/* Icon and Intro */}
        <div className="mb-12 space-y-8 text-center">
           <div className="space-y-6">
            <h2>
              Opdracht aan Peter Wennink
            </h2>
            <p className="text-muted-foreground text-xl leading-relaxed">
            Het demissionair kabinet Schoof vroeg mij begin september om een onafhankelijk advies uit te brengen over het toekomstige verdienvermogen van Nederland [link naar Kamerbrief: Kamerbrief over advies over versterking investeringsklimaat en verdienvermogen | Kamerstuk | Rijksoverheid.nl ]. Ik kijk daarbij ook naar de betekenis van de adviezen van het rapport Draghi
[link naar rapport opnemen; The Draghi report on EU competitiveness ] voor Nederland. Mijn
opdracht is te laten zien hoe ons land structureel kan investeren in zijn verdienvermogen en
strategische relevantie, zodat groei, innovatie en welvaart in de komende decennia behouden
blijven.
Ik heb deze opdracht om niet aanvaard omdat ik me ernstige zorgen maak. Als we niets doen komt
onze economie tot stilstand. De kosten van stilstand worden vele malen hoger dan de
investeringen die nu nodig zijn. Onze welvaart en veiligheid worden onbetaalbaar als we ons
toekomstig verdienvermogen niet op orde brengen.
In mijn brief [link naar brief opnemen, brief als pdf op website] aan de leiders van politieke partijen
leg ik mijn zorgen en hoe ik mijn opdracht invul uit. Met mijn onafhankelijke advies wil ik de
formerende partijen helpen om tot een inhoudelijk sterk en toekomstgericht akkoord te komen.
Partijleiders staan er niet alleen voor. Overal in het land staan bedrijven, kennisinstellingen en
vakmensen klaar om samen te bouwen aan een toekomstbestendig Nederland, waarin innovatie,
ondernemerschap en kennis elkaar versterken.<br/>
Peter Wennink
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Opdracht };
