import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  ArrowRight, 
  Calendar, 
  Waves, 
  Shield, 
  BarChart3, 
  Phone, 
  ShoppingCart,
  Check,
  Pause
} from "lucide-react";

// Product data structure
const productData = [
  {
    id: 1,
    vertical: "Hospitality & FoodTech",
    verticalColor: "from-orange-500 to-red-500",
    badgeColor: "bg-orange-100 text-orange-800 border-orange-200",
    productName: "Event Booking SaaS",
    valueProposition: "Intelligent event management with predictive analytics and automated resource optimization",
    features: [
      "AI-powered demand forecasting reduces overbooking by 85%",
      "Automated resource allocation saves 40+ hours weekly",
      "Real-time analytics increase revenue by average 30%"
    ],
    primaryCTA: "Start Free Trial",
    secondaryCTA: "View Demo",
    icon: Calendar,
    backgroundGradient: "from-orange-500/20 via-red-500/10 to-transparent",
    mockupElements: [
      { type: "calendar", x: "right-12", y: "top-20", size: "w-32 h-24" },
      { type: "chart", x: "right-4", y: "bottom-32", size: "w-24 h-16" },
      { type: "notification", x: "right-20", y: "top-52", size: "w-40 h-12" }
    ]
  },
  {
    id: 2,
    vertical: "Hospitality & FoodTech", 
    verticalColor: "from-orange-500 to-red-500",
    badgeColor: "bg-orange-100 text-orange-800 border-orange-200",
    productName: "IoT Food Safety Monitoring",
    valueProposition: "Real-time temperature and quality monitoring with AI-powered alerts and compliance tracking",
    features: [
      "24/7 automated monitoring prevents 99% of safety violations",
      "Predictive alerts reduce food waste by up to 60%",
      "Automated compliance reporting saves 20+ hours monthly"
    ],
    primaryCTA: "Schedule Demo",
    secondaryCTA: "Learn More",
    icon: Waves,
    backgroundGradient: "from-orange-500/20 via-amber-500/10 to-transparent",
    mockupElements: [
      { type: "sensor", x: "right-8", y: "top-16", size: "w-20 h-20" },
      { type: "graph", x: "right-16", y: "bottom-24", size: "w-36 h-20" },
      { type: "alert", x: "right-4", y: "top-48", size: "w-32 h-8" }
    ]
  },
  {
    id: 3,
    vertical: "Healthcare",
    verticalColor: "from-blue-500 to-cyan-500", 
    badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
    productName: "Clinical Trial Fraud Detection",
    valueProposition: "Advanced AI algorithms to identify anomalies and ensure data integrity in clinical research",
    features: [
      "Machine learning detects 95% of fraudulent patterns instantly",
      "Automated compliance monitoring reduces audit time by 70%",
      "Real-time data validation ensures research integrity"
    ],
    primaryCTA: "Request Demo",
    secondaryCTA: "View Case Study",
    icon: Shield,
    backgroundGradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
    mockupElements: [
      { type: "shield", x: "right-10", y: "top-12", size: "w-28 h-28" },
      { type: "data", x: "right-6", y: "bottom-28", size: "w-32 h-24" },
      { type: "check", x: "right-24", y: "top-44", size: "w-16 h-16" }
    ]
  },
  {
    id: 4,
    vertical: "Healthcare",
    verticalColor: "from-blue-500 to-cyan-500",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-200", 
    productName: "Substance Abuse Predictive Analytics",
    valueProposition: "Early intervention systems using machine learning to predict and prevent substance abuse patterns",
    features: [
      "Predictive models identify at-risk patients 6 months earlier",
      "Intervention recommendations improve outcomes by 45%", 
      "Population health insights reduce healthcare costs by 25%"
    ],
    primaryCTA: "Get Started",
    secondaryCTA: "Research Paper",
    icon: BarChart3,
    backgroundGradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
    mockupElements: [
      { type: "brain", x: "right-14", y: "top-16", size: "w-24 h-24" },
      { type: "timeline", x: "right-8", y: "bottom-32", size: "w-40 h-16" },
      { type: "health", x: "right-28", y: "top-52", size: "w-20 h-20" }
    ]
  },
  {
    id: 5,
    vertical: "Technology",
    verticalColor: "from-purple-500 to-pink-500",
    badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
    productName: "AI Contact Center Analytics", 
    valueProposition: "Intelligent conversation analysis with sentiment tracking and performance optimization",
    features: [
      "Real-time sentiment analysis improves customer satisfaction by 40%",
      "Automated quality scoring reduces review time by 80%",
      "Predictive insights increase first-call resolution by 35%"
    ],
    primaryCTA: "Try Free",
    secondaryCTA: "Watch Demo",
    icon: Phone,
    backgroundGradient: "from-purple-500/20 via-pink-500/10 to-transparent",
    mockupElements: [
      { type: "phone", x: "right-12", y: "top-20", size: "w-16 h-24" },
      { type: "wave", x: "right-4", y: "bottom-24", size: "w-32 h-12" },
      { type: "sentiment", x: "right-20", y: "top-48", size: "w-24 h-16" }
    ]
  },
  {
    id: 6,
    vertical: "Technology",
    verticalColor: "from-purple-500 to-pink-500",
    badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
    productName: "E-commerce Intelligence Tools",
    valueProposition: "Advanced analytics for customer behavior prediction and conversion optimization", 
    features: [
      "Behavioral AI increases conversion rates by average 55%",
      "Personalization engine boosts customer lifetime value by 40%",
      "Predictive inventory management reduces costs by 30%"
    ],
    primaryCTA: "Start Trial",
    secondaryCTA: "See Results", 
    icon: ShoppingCart,
    backgroundGradient: "from-purple-500/20 via-violet-500/10 to-transparent",
    mockupElements: [
      { type: "cart", x: "right-16", y: "top-12", size: "w-20 h-20" },
      { type: "analytics", x: "right-8", y: "bottom-28", size: "w-36 h-20" },
      { type: "conversion", x: "right-24", y: "top-56", size: "w-28 h-12" }
    ]
  }
];

const ProductCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotation logic
  useEffect(() => {
    if (!isPlaying || isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % productData.length);
    }, 5000); // 5 seconds per slide

    return () => clearInterval(interval);
  }, [isPlaying, isPaused]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % productData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + productData.length) % productData.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const currentProduct = productData[currentSlide];
  const IconComponent = currentProduct.icon;

  return (
    <div className="relative w-full h-full min-h-[600px] overflow-hidden">
      {/* Background gradient for current slide */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br ${currentProduct.backgroundGradient} transition-all duration-1000 ease-in-out`}
      />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {currentProduct.mockupElements.map((element, index) => (
          <div
            key={index}
            className={`absolute ${element.x} ${element.y} ${element.size} opacity-20 animate-fade-in`}
            style={{
              animationDelay: `${index * 0.2}s`,
              animationDuration: '0.6s'
            }}
          >
            <div className={`w-full h-full rounded-xl bg-gradient-to-br ${currentProduct.verticalColor} shadow-lg`} />
          </div>
        ))}
        
        {/* Floating particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-white/30 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-white/40 rounded-full animate-ping" />
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-white/20 rounded-full animate-bounce" />
      </div>

      {/* Main content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Vertical badge */}
            <Badge className={`${currentProduct.badgeColor} text-sm font-medium px-3 py-1`}>
              {currentProduct.vertical}
            </Badge>

            {/* Product name */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              {currentProduct.productName}
            </h1>

            {/* Value proposition */}
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
              {currentProduct.valueProposition}
            </p>

            {/* Core features */}
            <div className="space-y-4">
              {currentProduct.features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-muted-foreground leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                {currentProduct.primaryCTA}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                {currentProduct.secondaryCTA}
                <Play className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Right side - Product visualization */}
          <div className="hidden lg:flex items-center justify-center relative">
            <Card className="w-80 h-96 bg-card/50 backdrop-blur-sm border-border shadow-elegant relative overflow-hidden">
              {/* Product icon */}
              <div className="absolute top-8 left-8">
                <div className={`w-16 h-16 bg-gradient-to-br ${currentProduct.verticalColor} rounded-2xl flex items-center justify-center shadow-lg animate-scale-in`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Mock UI elements */}
              <div className="absolute inset-0 p-8 pt-28">
                <div className="space-y-4">
                  <div className="h-4 bg-muted rounded animate-fade-in" style={{ animationDelay: '0.2s' }} />
                  <div className="h-3 bg-muted rounded w-3/4 animate-fade-in" style={{ animationDelay: '0.4s' }} />
                  <div className="h-3 bg-muted rounded w-1/2 animate-fade-in" style={{ animationDelay: '0.6s' }} />
                  
                  <div className="mt-8 space-y-2">
                    <div className="h-8 bg-primary/20 rounded animate-fade-in" style={{ animationDelay: '0.8s' }} />
                    <div className="h-8 bg-primary/10 rounded animate-fade-in" style={{ animationDelay: '1.0s' }} />
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute bottom-8 right-8">
                <Badge className={`${currentProduct.badgeColor} animate-scale-in`} style={{ animationDelay: '1.2s' }}>
                  AI-Powered
                </Badge>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Navigation controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center gap-4 bg-background/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-elegant">
          {/* Previous button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="w-8 h-8"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          {/* Slide indicators */}
          <div className="flex gap-2">
            {productData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-primary w-8' : 'bg-muted hover:bg-muted-foreground'
                }`}
              />
            ))}
          </div>

          {/* Next button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="w-8 h-8"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          {/* Play/Pause button */}
          <div className="w-px h-6 bg-border mx-2" />
          <Button
            variant="ghost"
            size="icon"
            onClick={togglePlayPause}
            className="w-8 h-8"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </Button>
        </div>
      </div>

      {/* Progress bar */}
      {isPlaying && !isPaused && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-border">
          <div 
            className="h-full bg-primary transition-all duration-100 ease-linear"
            style={{
              width: `${((currentSlide + 1) / productData.length) * 100}%`
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ProductCarousel;