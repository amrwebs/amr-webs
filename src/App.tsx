import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { OurProcess } from "./components/OurProcess";
import { Portfolio } from "./components/Portfolio";
import { BugHunterGame } from "./components/BugHunterGame";
import { CodeBreakerGame } from "./components/CodeBreakerGame";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { LanguageProvider } from "./contexts/LanguageContext";
import { LanguageToggle } from "./components/LanguageToggle";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <LanguageToggle />
        <Hero />
        <Services />
        <OurProcess />
        <Portfolio />
        <BugHunterGame />
        <CodeBreakerGame />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
