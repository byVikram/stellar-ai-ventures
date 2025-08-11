import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import verticalsBackground from "@/assets/verticals-bg.jpg";
import { 
  UtensilsCrossed, 
  Stethoscope, 
  Cpu, 
  Calendar, 
  Shield, 
  BarChart3, 
  Phone, 
  ShoppingCart,
  ArrowRight,
  Waves
} from "lucide-react";

const VerticalSection = () => {
  const verticals = [
    {
      icon: UtensilsCrossed,
      title: "Hospitality & FoodTech",
      description: "Revolutionizing food service and hospitality operations with intelligent automation and safety monitoring.",
      gradient: "from-orange-500 to-red-500",
      products: [
        {
          icon: Calendar,
          name: "Event Booking SaaS",
          description: "Intelligent event management platform with predictive analytics and automated resource optimization."
        },
        {
          icon: Waves,
          name: "IoT Food Safety Monitoring",
          description: "Real-time temperature and quality monitoring systems with AI-powered alerts and compliance tracking."
        }
      ]
    },
    {
      icon: Stethoscope,
      title: "Healthcare",
      description: "Advancing medical care through AI-driven diagnostics, fraud detection, and predictive health analytics.",
      gradient: "from-blue-500 to-cyan-500",
      products: [
        {
          icon: Shield,
          name: "Clinical Trial Fraud Detection",
          description: "Advanced AI algorithms to identify anomalies and ensure data integrity in clinical research."
        },
        {
          icon: BarChart3,
          name: "Substance Abuse Predictive Analytics",
          description: "Early intervention systems using machine learning to predict and prevent substance abuse patterns."
        }
      ]
    },
    {
      icon: Cpu,
      title: "Technology",
      description: "Empowering businesses with next-generation AI tools for customer engagement and e-commerce optimization.",
      gradient: "from-purple-500 to-pink-500",
      products: [
        {
          icon: Phone,
          name: "AI Contact Center Analytics",
          description: "Intelligent conversation analysis with sentiment tracking and performance optimization."
        },
        {
          icon: ShoppingCart,
          name: "E-commerce Intelligence Tools",
          description: "Advanced analytics for customer behavior prediction and conversion optimization."
        }
      ]
    }
  ];

  return (
    <section id="solutions" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${verticalsBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full border border-border mb-6">
            <Cpu className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Solutions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Three Verticals,
            <span className="block text-primary">Infinite Possibilities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We develop AI-powered SaaS solutions that transform entire industries, 
            creating measurable impact and sustainable competitive advantages.
          </p>
        </div>

        <div className="space-y-16">
          {verticals.map((vertical, index) => (
            <Card key={index} className="p-0 overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-500 group">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-12 bg-card">
                  <div className={`w-20 h-20 bg-gradient-to-br ${vertical.gradient} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                    <vertical.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-6">
                    {vertical.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {vertical.description}
                  </p>
                  <Button variant="outline" className="group/btn">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>

                <div className="p-12 bg-gradient-to-br from-muted/30 to-muted/10">
                  <h4 className="text-xl font-semibold text-foreground mb-8">Featured Solutions</h4>
                  <div className="space-y-6">
                    {vertical.products.map((product, productIndex) => (
                      <div key={productIndex} className="flex gap-4 p-6 bg-card rounded-xl border border-border hover:shadow-card transition-all duration-300">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <product.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h5 className="font-semibold text-foreground mb-2">{product.name}</h5>
                          <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Card className="p-12 bg-gradient-primary text-white">
            <h3 className="text-3xl font-bold mb-6">
              Ready to See Our Solutions in Action?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Experience firsthand how our AI-powered solutions can transform your industry 
              and drive unprecedented growth.
            </p>
            <Button variant="glass" size="lg" className="text-lg px-8 py-4">
              Request a Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VerticalSection;