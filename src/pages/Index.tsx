import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import VerticalSection from "@/components/VerticalSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <VerticalSection />
      <ExpertiseSection />
      <AboutSection />
      <CTASection />
    </div>
  );
};

export default Index;
