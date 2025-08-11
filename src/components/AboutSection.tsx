import { Card } from "@/components/ui/card";
import { Award, Users, Globe, Zap } from "lucide-react";

const AboutSection = () => {
  const achievements = [
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Multiple awards for AI innovation and technology leadership across diverse sectors."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "100+ years of combined experience in AI research, software development, and business strategy."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Solutions deployed across 3 continents, serving enterprises in 15+ countries."
    },
    {
      icon: Zap,
      title: "Innovation Speed",
      description: "From concept to deployment in record time, accelerating digital transformation."
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">About Our Mission</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Pioneering the Future of
            <span className="block text-primary">AI-Driven Innovation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stellar iDea Labs was founded on the belief that artificial intelligence can transform 
            entire industries when applied with deep domain expertise and strategic vision.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Our Story
            </h3>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Born from the convergence of cutting-edge AI research and real-world business challenges, 
                Stellar iDea Labs represents a new paradigm in technology incubation. We don't just 
                develop solutions—we architect the future.
              </p>
              <p>
                Our multidisciplinary approach combines the latest advances in machine learning, 
                predictive analytics, and intelligent automation with deep industry knowledge across 
                hospitality, healthcare, and technology sectors.
              </p>
              <p>
                Every solution we create is designed to not just solve today's problems, but to 
                anticipate tomorrow's opportunities, ensuring our partners stay ahead of the curve 
                in an increasingly competitive landscape.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card 
                key={index} 
                className="p-6 bg-card border-border shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  {achievement.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        <Card className="p-12 bg-gradient-primary text-white text-center">
          <h3 className="text-3xl font-bold mb-6">
            Transforming Vision into Reality
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            We believe that the most powerful technologies are those that seamlessly integrate 
            into existing workflows while opening new possibilities for growth and innovation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-white/80">AI Solutions Deployed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">500%</div>
              <div className="text-white/80">Average ROI Improvement</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/80">Continuous Innovation</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;