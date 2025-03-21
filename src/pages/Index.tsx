import Hero from "@/components/Hero";
import FeaturedBuilds from "@/components/FeaturedBuilds";
import BuilderTool from "@/components/BuilderTool";
import Services from "@/components/Services";
import { useEffect } from "react";

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Main content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-6">
          <FeaturedBuilds />
          <BuilderTool />
        </div>
      </div>
      
      <Services />
    </div>
  );
};

export default Index;