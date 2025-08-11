import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Calendar, 
  Play, 
  Handshake, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin,
  Linkedin,
  Twitter
} from "lucide-react";

const CTASection = () => {
  const ctaOptions = [
    {
      icon: Calendar,
      title: "Schedule a Strategic Call",
      description: "Connect with our executive team to explore innovation opportunities and discuss your transformation goals.",
      buttonText: "Book a Call",
      buttonVariant: "hero" as const,
      highlight: true
    },
    {
      icon: Play,
      title: "Request a Demo",
      description: "See our AI-powered solutions in action with a personalized demonstration tailored to your industry.",
      buttonText: "Watch Demo",
      buttonVariant: "cta" as const,
      highlight: false
    },
    {
      icon: Handshake,
      title: "Explore Partnership",
      description: "Discover strategic partnership opportunities to accelerate innovation and market expansion together.",
      buttonText: "Partner With Us",
      buttonVariant: "outline" as const,
      highlight: false
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main CTA */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Pioneer the Future
            <span className="block text-primary">of AI Innovation?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Join industry leaders who are already transforming their operations with our cutting-edge AI solutions. 
            The future of your industry starts with a single conversation.
          </p>
        </div>

        {/* CTA Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {ctaOptions.map((option, index) => (
            <Card 
              key={index} 
              className={`p-8 text-center transition-all duration-300 hover:-translate-y-2 ${
                option.highlight 
                  ? 'bg-gradient-primary text-white shadow-glow border-primary/20' 
                  : 'bg-card shadow-card hover:shadow-elegant'
              }`}
            >
              <div className={`w-20 h-20 mx-auto mb-6 rounded-3xl flex items-center justify-center ${
                option.highlight 
                  ? 'bg-white/20 backdrop-blur-sm' 
                  : 'bg-gradient-primary'
              }`}>
                <option.icon className={`w-10 h-10 ${option.highlight ? 'text-white' : 'text-white'}`} />
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${option.highlight ? 'text-white' : 'text-foreground'}`}>
                {option.title}
              </h3>
              <p className={`mb-8 leading-relaxed ${option.highlight ? 'text-white/90' : 'text-muted-foreground'}`}>
                {option.description}
              </p>
              <Button 
                variant={option.highlight ? 'glass' : option.buttonVariant} 
                size="lg" 
                className="w-full"
              >
                {option.buttonText}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Card>
          ))}
        </div>

        {/* Contact Information */}
        <Card className="p-12 bg-card border-border">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Let's Build Tomorrow, Today
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our team of AI pioneers and industry experts is ready to help you navigate 
                the complexities of digital transformation and unlock unprecedented growth opportunities.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground">hello@stellarideλlabs.ai</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground">Silicon Valley Innovation Hub</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-card rounded-2xl p-8">
              <h4 className="text-xl font-semibold text-foreground mb-6">
                Why Leading Organizations Choose Us
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Proven track record of successful AI implementations</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">End-to-end solutions from strategy to deployment</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Industry-specific expertise across multiple verticals</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Continuous innovation and R&D investment</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">Follow our journey</p>
                <div className="flex gap-3">
                  <Button variant="ghost" size="icon" className="w-10 h-10">
                    <Linkedin className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="w-10 h-10">
                    <Twitter className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;