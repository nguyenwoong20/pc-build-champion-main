
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { StarIcon } from "lucide-react";

const featuredPCs = [
  {
    id: 'gaming-pc-1',
    title: 'PC Gaming PCMARKET - Intel Core i5',
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    price: 15990000,
    discountPrice: 14490000,
    specs: [
      'CPU: Intel Core i5-12400F',
      'VGA: RTX 3060 8GB',
      'RAM: 16GB DDR4 3200MHz',
      'SSD: 500GB NVMe PCIe Gen3'
    ],
    badge: 'Giảm giá',
    rating: 5
  },
  {
    id: 'gaming-pc-2',
    title: 'PC Gaming PCMARKET - AMD Ryzen 5',
    image: 'https://images.unsplash.com/photo-1591488320011-74c0e8949c0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    price: 16990000,
    discountPrice: 15990000,
    specs: [
      'CPU: AMD Ryzen 5 5600X',
      'VGA: RTX 3060 8GB',
      'RAM: 16GB DDR4 3200MHz',
      'SSD: 500GB NVMe PCIe Gen3'
    ],
    badge: 'Bán chạy',
    rating: 4
  },
  {
    id: 'gaming-pc-3',
    title: 'PC Gaming PCMARKET - Intel Core i7',
    image: 'https://images.unsplash.com/photo-1587202372583-49466282efbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    price: 25990000,
    discountPrice: 24490000,
    specs: [
      'CPU: Intel Core i7-12700F',
      'VGA: RTX 3070 8GB',
      'RAM: 32GB DDR4 3200MHz',
      'SSD: 1TB NVMe PCIe Gen4'
    ],
    badge: 'Cao cấp',
    rating: 5
  }
];

const FeaturedBuilds = () => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', { 
      style: 'currency', 
      currency: 'VND' 
    }).format(price);
  };

  return (
    <div className="py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">MÁY TÍNH CHƠI GAME NỔI BẬT</h2>
        <Link to="/category/pc-gaming" className="text-primary hover:underline font-medium">
          Xem tất cả
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredPCs.map((pc) => (
          <Card key={pc.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
            <div className="relative">
              <img 
                src={pc.image} 
                alt={pc.title}
                className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {pc.badge && (
                <Badge className="absolute top-3 left-3 bg-red-500 hover:bg-red-600">
                  {pc.badge}
                </Badge>
              )}
            </div>
            <CardContent className="p-4">
              <div className="flex items-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <StarIcon 
                    key={i}
                    className={`h-4 w-4 ${i < pc.rating ? 'fill-amber-500 text-amber-500' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              
              <Link to={`/builds/${pc.id}`}>
                <h3 className="font-bold text-lg hover:text-primary transition-colors line-clamp-2 mb-3">
                  {pc.title}
                </h3>
              </Link>
              
              <div className="space-y-1 mb-4 text-sm">
                {pc.specs.map((spec, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <div>
                  {pc.discountPrice && (
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold">
                        {formatPrice(pc.discountPrice)}
                      </span>
                      <span className="text-sm text-gray-500 line-through">
                        {formatPrice(pc.price)}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex space-x-2">
                <Button variant="default" className="w-full">
                  Mua ngay
                </Button>
                <Button variant="outline" className="px-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3H5L5.4 5M5.4 5H21L17 13H7M5.4 5L7 13M7 13L4.707 15.293C4.077 15.923 4.523 17 5.414 17H17M17 17C16.4696 17 15.9609 17.2107 15.5858 17.5858C15.2107 17.9609 15 18.4696 15 19C15 19.5304 15.2107 20.0391 15.5858 20.4142C15.9609 20.7893 16.4696 21 17 21C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19C19 18.4696 18.7893 17.9609 18.4142 17.5858C18.0391 17.2107 17.5304 17 17 17ZM9 19C9 19.5304 8.78929 20.0391 8.41421 20.4142C8.03914 20.7893 7.53043 21 7 21C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19C5 18.4696 5.21071 17.9609 5.58579 17.5858C5.96086 17.2107 6.46957 17 7 17C7.53043 17 8.03914 17.2107 8.41421 17.5858C8.78929 17.9609 9 18.4696 9 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* PC Office Section - Similar to the reference website */}
      <div className="mt-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">MÁY TÍNH VĂN PHÒNG</h2>
          <Link to="/category/pc-office" className="text-primary hover:underline font-medium">
            Xem tất cả
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Office PC 1 */}
          <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2642&q=80" 
                alt="PC Office Basic"
                className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <Badge className="absolute top-3 left-3 bg-blue-500 hover:bg-blue-600">
                Văn phòng
              </Badge>
            </div>
            <CardContent className="p-4">
              <div className="flex items-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <StarIcon 
                    key={i}
                    className={`h-4 w-4 ${i < 4 ? 'fill-amber-500 text-amber-500' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              
              <Link to="/builds/office-pc-1">
                <h3 className="font-bold text-lg hover:text-primary transition-colors line-clamp-2 mb-3">
                  PC Văn Phòng PCMARKET - Intel Core i3
                </h3>
              </Link>
              
              <div className="space-y-1 mb-4 text-sm">
                <div className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>CPU: Intel Core i3-12100</span>
                </div>
                <div className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>RAM: 8GB DDR4 3200MHz</span>
                </div>
                <div className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>SSD: 256GB NVMe</span>
                </div>
                <div className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Intel UHD Graphics 730</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold">
                    {formatPrice(7990000)}
                  </span>
                  <span className="text-sm text-gray-500 line-through">
                    {formatPrice(8990000)}
                  </span>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <Button variant="default" className="w-full">
                  Mua ngay
                </Button>
                <Button variant="outline" className="px-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3H5L5.4 5M5.4 5H21L17 13H7M5.4 5L7 13M7 13L4.707 15.293C4.077 15.923 4.523 17 5.414 17H17M17 17C16.4696 17 15.9609 17.2107 15.5858 17.5858C15.2107 17.9609 15 18.4696 15 19C15 19.5304 15.2107 20.0391 15.5858 20.4142C15.9609 20.7893 16.4696 21 17 21C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19C19 18.4696 18.7893 17.9609 18.4142 17.5858C18.0391 17.2107 17.5304 17 17 17ZM9 19C9 19.5304 8.78929 20.0391 8.41421 20.4142C8.03914 20.7893 7.53043 21 7 21C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19C5 18.4696 5.21071 17.9609 5.58579 17.5858C5.96086 17.2107 6.46957 17 7 17C7.53043 17 8.03914 17.2107 8.41421 17.5858C8.78929 17.9609 9 18.4696 9 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Office PC 2 */}
          <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1593642702909-dec73df255d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3269&q=80" 
                alt="PC Office Standard"
                className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <Badge className="absolute top-3 left-3 bg-blue-500 hover:bg-blue-600">
                Đa nhiệm
              </Badge>
            </div>
            <CardContent className="p-4">
              <div className="flex items-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <StarIcon 
                    key={i}
                    className={`h-4 w-4 ${i < 5 ? 'fill-amber-500 text-amber-500' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              
              <Link to="/builds/office-pc-2">
                <h3 className="font-bold text-lg hover:text-primary transition-colors line-clamp-2 mb-3">
                  PC Văn Phòng PCMARKET - Intel Core i5
                </h3>
              </Link>
              
              <div className="space-y-1 mb-4 text-sm">
                <div className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>CPU: Intel Core i5-12400</span>
                </div>
                <div className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>RAM: 16GB DDR4 3200MHz</span>
                </div>
                <div className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>SSD: 512GB NVMe</span>
                </div>
                <div className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Intel UHD Graphics 730</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold">
                    {formatPrice(11990000)}
                  </span>
                  <span className="text-sm text-gray-500 line-through">
                    {formatPrice(12990000)}
                  </span>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <Button variant="default" className="w-full">
                  Mua ngay
                </Button>
                <Button variant="outline" className="px-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3H5L5.4 5M5.4 5H21L17 13H7M5.4 5L7 13M7 13L4.707 15.293C4.077 15.923 4.523 17 5.414 17H17M17 17C16.4696 17 15.9609 17.2107 15.5858 17.5858C15.2107 17.9609 15 18.4696 15 19C15 19.5304 15.2107 20.0391 15.5858 20.4142C15.9609 20.7893 16.4696 21 17 21C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19C19 18.4696 18.7893 17.9609 18.4142 17.5858C18.0391 17.2107 17.5304 17 17 17ZM9 19C9 19.5304 8.78929 20.0391 8.41421 20.4142C8.03914 20.7893 7.53043 21 7 21C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19C5 18.4696 5.21071 17.9609 5.58579 17.5858C5.96086 17.2107 6.46957 17 7 17C7.53043 17 8.03914 17.2107 8.41421 17.5858C8.78929 17.9609 9 18.4696 9 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Office PC 3 */}
          <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1625842268584-8f3296236761?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80" 
                alt="PC Office Premium"
                className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <Badge className="absolute top-3 left-3 bg-blue-500 hover:bg-blue-600">
                Cao cấp
              </Badge>
            </div>
            <CardContent className="p-4">
              <div className="flex items-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <StarIcon 
                    key={i}
                    className={`h-4 w-4 ${i < 5 ? 'fill-amber-500 text-amber-500' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              
              <Link to="/builds/office-pc-3">
                <h3 className="font-bold text-lg hover:text-primary transition-colors line-clamp-2 mb-3">
                  PC Văn Phòng PCMARKET - Intel Core i7
                </h3>
              </Link>
              
              <div className="space-y-1 mb-4 text-sm">
                <div className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>CPU: Intel Core i7-12700</span>
                </div>
                <div className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>RAM: 32GB DDR4 3200MHz</span>
                </div>
                <div className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>SSD: 1TB NVMe</span>
                </div>
                <div className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Intel UHD Graphics 770</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold">
                    {formatPrice(18990000)}
                  </span>
                  <span className="text-sm text-gray-500 line-through">
                    {formatPrice(20990000)}
                  </span>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <Button variant="default" className="w-full">
                  Mua ngay
                </Button>
                <Button variant="outline" className="px-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3H5L5.4 5M5.4 5H21L17 13H7M5.4 5L7 13M7 13L4.707 15.293C4.077 15.923 4.523 17 5.414 17H17M17 17C16.4696 17 15.9609 17.2107 15.5858 17.5858C15.2107 17.9609 15 18.4696 15 19C15 19.5304 15.2107 20.0391 15.5858 20.4142C15.9609 20.7893 16.4696 21 17 21C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19C19 18.4696 18.7893 17.9609 18.4142 17.5858C18.0391 17.2107 17.5304 17 17 17ZM9 19C9 19.5304 8.78929 20.0391 8.41421 20.4142C8.03914 20.7893 7.53043 21 7 21C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19C5 18.4696 5.21071 17.9609 5.58579 17.5858C5.96086 17.2107 6.46957 17 7 17C7.53043 17 8.03914 17.2107 8.41421 17.5858C8.78929 17.9609 9 18.4696 9 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBuilds;
