import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-bg.jpg";
import { ArrowRight, Sparkles, Brain, Target } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-gradient-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-60" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-40" />
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-purple-300 rounded-full animate-bounce opacity-30" />
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-blue-300 rounded-full animate-pulse opacity-50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
          <Sparkles className="w-4 h-4 text-purple-300" />
          <span className="text-sm font-medium">Leading AI Innovation Across Industries</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          <span className="block">Transforming Industries</span>
          <span className="block bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
            with AI Excellence
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
          Stellar iDea Labs is a cutting-edge technology incubator that identifies innovative opportunities 
          and develops AI-powered SaaS solutions across Hospitality & FoodTech, Healthcare, and Technology verticals.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            <Target className="w-5 h-5 mr-2" />
            Schedule a Strategic Call
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button variant="glass" size="lg" className="text-lg px-8 py-4">
            <Brain className="w-5 h-5 mr-2" />
            Explore Our Solutions
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-300 mb-2">3</div>
            <div className="text-sm text-gray-300">Industry Verticals</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-300 mb-2">15+</div>
            <div className="text-sm text-gray-300">AI-Powered Solutions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-300 mb-2">∞</div>
            <div className="text-sm text-gray-300">Innovation Potential</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;