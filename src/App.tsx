import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { WhyUs } from "./components/WhyUs";
import { ArchitectHub } from "./components/ArchitectHub";
import { Careers } from "./components/Careers";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80; // height of the sticky nav header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-800 dark:text-slate-200 antialiased selection:bg-indigo-500 selection:text-white transition-colors duration-200">
      {/* Central Navigation */}
      <Header onScrollTo={handleScrollTo} />

      {/* Main Page Layout Flow */}
      <main>
        {/* Hero Landing Section */}
        <Hero onScrollTo={handleScrollTo} />

        {/* Services & What We Do */}
        <Services />

        {/* Why Nexora & Philosophy & Core Values */}
        <WhyUs />

        {/* Intelligent Architect Hub */}
        <ArchitectHub />

        {/* Careers & Job Listings Accordions */}
        <Careers />

        {/* Direct Contact Form & Global Locations Map */}
        <Contact />
      </main>

      {/* Footer Details */}
      <Footer onScrollTo={handleScrollTo} />
    </div>
  );
}

