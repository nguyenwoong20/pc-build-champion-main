
import Hero from "@/components/Hero";
import FeaturedBuilds from "@/components/FeaturedBuilds";
import BuilderTool from "@/components/BuilderTool";
import Services from "@/components/Services";
import ProductSidebar from "@/components/ProductSidebar";
import { useEffect } from "react";

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Main content with sidebar layout - similar to pcmarket.vn */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <ProductSidebar />
          </div>
          
          {/* Main content */}
          <div className="lg:col-span-3">
            <FeaturedBuilds />
            <BuilderTool />
          </div>
        </div>
      </div>
      
      <Services />
    </div>
  );
};

export default Index;
