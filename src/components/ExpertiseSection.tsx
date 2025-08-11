import { Card } from "@/components/ui/card";
import { Brain, TrendingUp, Zap, Shield, Network, Lightbulb } from "lucide-react";

const ExpertiseSection = () => {
  const expertiseAreas = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Deep expertise in neural networks, predictive analytics, and intelligent automation across diverse industries."
    },
    {
      icon: TrendingUp,
      title: "Business Strategy",
      description: "Strategic vision for identifying market opportunities and scaling AI solutions for maximum impact."
    },
    {
      icon: Zap,
      title: "Innovation Leadership",
      description: "Proven track record of transforming traditional industries through cutting-edge technology solutions."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Advanced security frameworks and compliance expertise for mission-critical AI applications."
    },
    {
      icon: Network,
      title: "Scalable Architecture",
      description: "Cloud-native solutions designed for enterprise-grade performance and unlimited scalability."
    },
    {
      icon: Lightbulb,
      title: "Research & Development",
      description: "Continuous innovation in AI research with practical applications for real-world challenges."
    }
  ];

  return (
    <section className="py-24 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
            <Brain className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Executive Excellence</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Unparalleled Depth of
            <span className="block text-primary">Technical Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our executive team combines decades of experience in AI research, enterprise software development, 
            and strategic business leadership to deliver transformative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <Card 
              key={index} 
              className="p-8 bg-card border-border shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <area.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {area.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {area.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-gradient-primary rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-6">
              Ready to Transform Your Industry?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our diverse team of AI experts, business strategists, and innovation leaders 
              is ready to unlock your organization's potential.
            </p>
            <div className="text-6xl font-bold text-white/20">
              100+ Years
            </div>
            <div className="text-lg text-white/80 mt-2">
              Combined Executive Experience
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;