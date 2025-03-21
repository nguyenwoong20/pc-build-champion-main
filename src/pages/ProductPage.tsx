
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { 
  ArrowLeft, 
  Star, 
  Info, 
  Check, 
  ShoppingCart, 
  Heart, 
  Share2, 
  Plus, 
  Minus,
  Cpu,
  Layers,
  HardDrive,
  Monitor,
  Power,
  Fan 
} from "lucide-react";

interface Spec {
  name: string;
  value: string;
  important?: boolean;
}

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  price: number;
  discountPrice?: number;
  rating: number;
  reviews: number;
  inStock: boolean;
  images: string[];
  specs: Spec[];
  features: string[];
}

// Sample product data
const sampleProduct: Product = {
  id: 'gaming-pc-extreme',
  name: 'Extreme Gaming PC',
  category: 'Gaming PC',
  description: 'High-performance gaming PC with RGB lighting',
  longDescription: 'Experience the ultimate in gaming performance with our Extreme Gaming PC. Featuring top-of-the-line components, custom RGB lighting, and optimized cooling, this PC is built to handle even the most demanding games at their highest settings.',
  price: 2499,
  discountPrice: 2299,
  rating: 4.9,
  reviews: 128,
  inStock: true,
  images: [
    'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    'https://images.unsplash.com/photo-1587202372583-49466282efbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    'https://images.unsplash.com/photo-1591488320011-74c0e8949c0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80'
  ],
  specs: [
    { name: 'CPU', value: 'Intel Core i9-13900K', important: true },
    { name: 'GPU', value: 'NVIDIA RTX 4090 24GB', important: true },
    { name: 'RAM', value: '64GB DDR5-6000MHz', important: true },
    { name: 'Storage', value: '2TB NVMe Gen4 SSD + 4TB HDD', important: true },
    { name: 'Motherboard', value: 'ASUS ROG Maximus Z790 Hero' },
    { name: 'Cooling', value: 'Custom 360mm AIO Liquid Cooling' },
    { name: 'Power Supply', value: '1000W 80+ Platinum' },
    { name: 'Case', value: 'NZXT H7 Flow' },
    { name: 'Operating System', value: 'Windows 11 Pro' },
  ],
  features: [
    'Custom RGB lighting with remote control',
    'Overclocked and benchmarked for optimal performance',
    '3-year warranty with premium support',
    'Ultra-quiet operation with optimized airflow',
    'Premium cable management for a clean interior',
    'Tempered glass side panel to display components',
    'Pre-installed with essential software'
  ]
};

const componentIcons: Record<string, React.ElementType> = {
  'CPU': Cpu,
  'GPU': Monitor,
  'RAM': Layers,
  'Storage': HardDrive,
  'Motherboard': Layers,
  'Cooling': Fan,
  'Power Supply': Power,
  'Case': Layers,
};

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // In a real app, this would fetch the product data from an API
    // For demo purposes, just use the sample product
    setLoading(true);
    
    // Simulate API call delay
    const timer = setTimeout(() => {
      setProduct(sampleProduct);
      setLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [id]);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  if (loading) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <div className="animate-pulse text-primary">Loading product...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The product you're looking for doesn't exist or has been removed.
            </p>
            <Link
              to="/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-all hover:bg-primary/90"
            >
              <ArrowLeft className="mr-2 w-4 h-4" /> Return to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link to="/builds" className="hover:text-primary transition-colors">Pre-Built PCs</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>
        
        {/* Product details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product images */}
          <div>
            <div className="glass-panel rounded-xl overflow-hidden shine-hover mb-4">
              <img 
                src={product.images[activeImage]} 
                alt={product.name}
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`border rounded-lg overflow-hidden transition-all ${activeImage === index ? 'ring-2 ring-primary' : 'opacity-70 hover:opacity-100'}`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} - view ${index + 1}`}
                    className="w-full aspect-[4/3] object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Product info */}
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                <span className="px-3 py-1 rounded-full bg-secondary">{product.category}</span>
                <div className="flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-amber-500 text-amber-500' : 'text-muted'}`} 
                      />
                    ))}
                  </div>
                  <span className="ml-1">({product.reviews})</span>
                </div>
              </div>
              
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <p className="text-muted-foreground">{product.description}</p>
            </div>
            
            <div className="mb-6">
              <div className="flex items-baseline gap-3">
                {product.discountPrice ? (
                  <>
                    <span className="text-3xl font-bold">${product.discountPrice}</span>
                    <span className="text-xl text-muted-foreground line-through">${product.price}</span>
                    <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                      Save ${product.price - product.discountPrice}
                    </span>
                  </>
                ) : (
                  <span className="text-3xl font-bold">${product.price}</span>
                )}
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className={`flex items-center ${product.inStock ? 'text-green-600' : 'text-red-500'}`}>
                  {product.inStock ? <Check className="w-4 h-4 mr-1" /> : <Info className="w-4 h-4 mr-1" />}
                  <span className="text-sm font-medium">{product.inStock ? 'In Stock' : 'Out of Stock'}</span>
                </div>
                <span className="text-sm text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">Free shipping</span>
              </div>
            </div>
            
            {/* Key specs preview */}
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-3">Key Specifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.specs.filter(spec => spec.important).map((spec, index) => {
                  const Icon = componentIcons[spec.name] || Info;
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{spec.name}</div>
                        <div className="font-medium">{spec.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Add to cart */}
            <div className="glass-panel rounded-xl p-6 mb-8">
              <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                <div className="flex items-center border rounded-lg overflow-hidden">
                  <button 
                    onClick={decrementQuantity}
                    className="px-3 py-2 bg-secondary/50 hover:bg-secondary/80 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <input 
                    type="number" 
                    value={quantity} 
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)} 
                    className="w-12 text-center border-x py-2 bg-transparent"
                    min="1"
                  />
                  <button 
                    onClick={incrementQuantity}
                    className="px-3 py-2 bg-secondary/50 hover:bg-secondary/80 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                
                <button 
                  className="flex-1 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-all hover:bg-primary/90 flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </button>
                
                <button className="p-3 rounded-lg border hover:bg-secondary/50 transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
                
                <button className="p-3 rounded-lg border hover:bg-secondary/50 transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            {/* Features */}
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-3">Key Features</h3>
              <ul className="grid grid-cols-1 gap-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Detailed description and specs */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Description</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>{product.longDescription}</p>
              <p>
                Every PC is carefully assembled by our expert technicians, tested rigorously for stability and 
                performance, and shipped with care to ensure it arrives in perfect condition.
              </p>
              <p>
                Our 3-year warranty covers all components and labor, with premium support available 7 days a week
                to help with any questions or issues you might encounter.
              </p>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Full Specifications</h2>
            <div className="glass-panel rounded-xl overflow-hidden">
              <div className="divide-y divide-border">
                {product.specs.map((spec, index) => (
                  <div key={index} className="flex justify-between py-3 px-4">
                    <span className="text-muted-foreground">{spec.name}</span>
                    <span className="font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
