import { Banner } from "@/components/Banner";
import { Navbar } from "@/components/Navbar_logo";
import { Klankbordgroep } from "@/components/Klankbordgroep";
import { Footer } from "@/components/Footer";
import { HeaderQuote } from "@/components/HeaderQuote";
import { Contact } from "@/components/Contact";
import { Presentatie } from "@/components/Presentatie";
import { ScrollToTop } from "@/components/ScrollToTop";
import { StickyTab } from "@/components/StickyTab";
import { RightStepper } from "@/components/RightStepper";
import { SectionDivider } from "@/components/SectionDivider";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/*<Banner />*/}

      <Navbar />
      
      <HeaderQuote />
      <SectionDivider />
      
      <Presentatie />
      <SectionDivider />
      
      <Klankbordgroep />
      <SectionDivider />
      
      <Contact />
      
      {/*<Footer />*/}
      
      <ScrollToTop />
      <StickyTab />
      <RightStepper />
    </div>
  );
}
