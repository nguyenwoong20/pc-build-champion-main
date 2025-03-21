
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="relative overflow-hidden pt-16">
      {/* Background gradient with subtle animation */}
      <div className="absolute inset-0 bg-gradient-animation -z-10"></div>
      
      {/* Top radial gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-radial from-primary/10 to-transparent -z-10"></div>
      
      <div className="container mx-auto px-4 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className={`space-y-8 opacity-0 ${loaded ? 'animate-slide-up' : ''}`}>
            <div className="space-y-2">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <span className="animate-pulse mr-2">•</span> Precision engineered custom PCs
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Build your <span className="text-primary">perfect</span> PC
              </h1>
            </div>
            
            <p className="text-lg text-muted-foreground md:text-xl md:pr-12">
              Create a custom PC that perfectly balances performance, aesthetics, and value with our intuitive PC builder.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/builder" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-all hover:bg-primary/90 hover:shadow-lg"
              >
                Start Building <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              
              <Link 
                to="/builds" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-medium transition-all hover:bg-secondary/80"
              >
                View Pre-Built PCs
              </Link>
            </div>
          </div>
          
          {/* Image/graphic content */}
          <div className={`relative opacity-0 ${loaded ? 'animate-scale-in animation-delay-200' : ''}`}>
            <div className="relative">
              {/* Main PC image */}
              <div className="rounded-2xl overflow-hidden shine-hover shadow-glass">
                <img 
                  src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" 
                  alt="High-performance custom PC" 
                  className="w-full h-auto object-cover aspect-[4/3] transition-transform duration-700 hover:scale-105"
                />
              </div>
              
              {/* Floating accent elements */}
              <div className="absolute -bottom-6 -left-6 w-36 h-36 rounded-2xl bg-primary/10 backdrop-blur-sm -z-10 animate-float"></div>
              <div className="absolute -top-6 -right-6 w-36 h-36 rounded-2xl bg-primary/10 backdrop-blur-sm -z-10 animate-float animation-delay-400"></div>
              
              {/* Spec badge */}
              <div className="absolute bottom-6 right-6 px-4 py-3 rounded-lg glass-panel shadow-glass animate-float">
                <div className="text-sm font-medium">Premium Components</div>
                <div className="text-xs text-muted-foreground">Precision-engineered for performance</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom curve decoration */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-background" style={{ clipPath: 'ellipse(75% 100% at 50% 100%)' }}></div>
    </div>
  );
};

export default Hero;
