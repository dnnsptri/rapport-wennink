import { Banner } from "@/components/Banner";
import { Navbar } from "@/components/Navbar_button";
import { Klankbordgroep } from "@/components/Klankbordgroep";
import { Footer } from "@/components/Footer";
import { HeaderQuote } from "@/components/HeaderQuote";
import { Contact } from "@/components/Contact";
import { Presentatie } from "@/components/Presentatie";
import { ScrollToTop } from "@/components/ScrollToTop";
import { StickyTab } from "@/components/StickyTab";
import { RightStepper } from "@/components/RightStepper";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/*<Banner />*/}

      <Navbar />
      
      <HeaderQuote />
      
      <Presentatie />
      
      <Klankbordgroep />
      
      <Contact />
      
      {/*<Footer />*/}
      
      <ScrollToTop />
      <StickyTab />
      <RightStepper />
    </div>
  );
}
