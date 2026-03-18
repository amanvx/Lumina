import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import AnimatedBackground from "./components/ui/AnimatedBackground";
import HeroSection from "./components/sections/HeroSection";
import BrandsSection from "./components/sections/BrandsSection";
import FeaturesSection from "./components/sections/FeaturesSection";
import WorkflowSection from "./components/sections/WorkflowSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import PricingSection from "./components/sections/PricingSection";

function App() {
  return (
    <div className="text-slate-900">
      <AnimatedBackground />
      <Header />
      <HeroSection />
      <main className="relative z-10 w-full">
        <BrandsSection />
        <FeaturesSection />
        <WorkflowSection />
        <TestimonialsSection />
        <PricingSection />
        <Footer />
      </main>
    </div>
  );
}

export default App;
