import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  ShoppingCart, 
  Search,
  User,
  Phone,
  Laptop
} from "lucide-react";
import ProductCategories from "./ProductCategories";

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md" : "bg-white dark:bg-gray-900"
    }`}>
      <div className="border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center text-sm text-muted-foreground">
              <a href="tel:+84789716419" className="flex items-center hover:text-primary transition-colors mr-4">
                <Phone className="w-4 h-4 mr-1" />
                <span className="hidden sm:inline">078 971 6419</span>
              </a>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <Link to="/account/login" className="hover:text-primary transition-colors">
                Đăng nhập
              </Link>
              <Link to="/account/register" className="hover:text-primary transition-colors">
                Đăng ký
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {isMobile && (
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="mr-2"
              >
                <Menu className="h-6 w-6" />
              </Button>
            )}
            
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-primary mr-1">LV</span>
              <span className="text-xl font-bold">Computer</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4 ml-6">
            <ProductCategories />
          </div>
          
          <div className="hidden md:flex mx-4 flex-1 max-w-md relative">
            <div className="relative w-full">
              <input 
                type="text" 
                placeholder="Tìm kiếm sản phẩm..." 
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            </div>
          </div>
          
          <div className="flex items-center space-x-1">
            {isMobile && (
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
            )}
            
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </Button>
            </Link>
            
            <Link to="/account">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {isMobile && mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 py-3 space-y-4">
            <Link to="/category/pc-gaming" className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-800" onClick={() => setMobileMenuOpen(false)}>
              <span className="font-medium">PC Gaming</span>
            </Link>
            <Link to="/category/pc-workstation" className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-800" onClick={() => setMobileMenuOpen(false)}>
              <span className="font-medium">PC Workstation</span>
            </Link>
            <Link to="/category/pc-office" className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-800" onClick={() => setMobileMenuOpen(false)}>
              <span className="font-medium">PC Văn Phòng</span>
            </Link>
            <Link to="/category/components" className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-800" onClick={() => setMobileMenuOpen(false)}>
              <span className="font-medium">Linh Kiện Máy Tính</span>
            </Link>
            <Link to="/category/monitors" className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-800" onClick={() => setMobileMenuOpen(false)}>
              <span className="font-medium">Màn Hình</span>
            </Link>
            <Link to="/builder" className="flex items-center py-2 border-b border-gray-100 dark:border-gray-800" onClick={() => setMobileMenuOpen(false)}>
              <Laptop className="h-4 w-4 mr-2" />
              <span className="font-medium">Xây Dựng Cấu Hình</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;