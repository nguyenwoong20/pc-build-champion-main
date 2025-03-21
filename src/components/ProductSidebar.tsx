
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Cpu, 
  HardDrive, 
  Monitor,
  Layers,
  MemoryStick, 
  Power,
  Computer, 
  Gamepad,
  Keyboard,
  LucideIcon,
  ChevronDown,
  ChevronUp
} from "lucide-react";

interface CategoryItem {
  title: string;
  route: string;
  icon: LucideIcon;
  children?: CategoryItem[];
  isExpanded?: boolean;
}

const ProductSidebar = () => {
  // Initialize our category data with expanded state for parent categories
  const [categories, setCategories] = useState<CategoryItem[]>([
    {
      title: "PC GAMING",
      route: "/category/pc-gaming",
      icon: Computer,
      isExpanded: false,
      children: [
        { title: "PC GAMING GIÁ RẺ", route: "/category/pc-gaming/budget", icon: Computer },
        { title: "PC GAMING TRUNG CẤP", route: "/category/pc-gaming/mid-range", icon: Computer },
        { title: "PC GAMING CAO CẤP", route: "/category/pc-gaming/high-end", icon: Computer }
      ]
    },
    { title: "PC WORKSTATION", route: "/category/pc-workstation", icon: Computer },
    { title: "PC AMD GAMING", route: "/category/pc-amd-gaming", icon: Computer },
    { title: "PC VĂN PHÒNG", route: "/category/pc-office", icon: Computer },
    { title: "PC MINI", route: "/category/pc-mini", icon: Computer },
    {
      title: "LINH KIỆN MÁY TÍNH", 
      route: "/category/components", 
      icon: HardDrive,
      isExpanded: false,
      children: [
        { title: "CPU - BỘ VI XỬ LÝ", route: "/category/components/cpu", icon: Cpu },
        { title: "MAINBOARD", route: "/category/components/mainboard", icon: Layers },
        { title: "RAM - BỘ NHỚ", route: "/category/components/ram", icon: MemoryStick },
        { title: "VGA - CARD MÀN HÌNH", route: "/category/components/vga", icon: Monitor },
        { title: "SSD - Ổ CỨNG THỂ RẮN", route: "/category/components/ssd", icon: HardDrive },
        { title: "HDD - Ổ CỨNG", route: "/category/components/hdd", icon: HardDrive },
        { title: "PSU - NGUỒN", route: "/category/components/psu", icon: Power },
        { title: "CASE - VỎ MÁY TÍNH", route: "/category/components/case", icon: Computer },
        { title: "COOLING - TẢN NHIỆT", route: "/category/components/cooling", icon: Computer },
      ]
    },
    { title: "MÀN HÌNH MÁY TÍNH", route: "/category/monitors", icon: Monitor },
    { 
      title: "GAMING GEAR", 
      route: "/category/gaming-gear", 
      icon: Gamepad,
      isExpanded: false,
      children: [
        { title: "BÀN PHÍM GAMING", route: "/category/gaming-gear/keyboards", icon: Keyboard },
        { title: "CHUỘT GAMING", route: "/category/gaming-gear/mice", icon: Gamepad },
        { title: "TAI NGHE GAMING", route: "/category/gaming-gear/headsets", icon: Keyboard },
        { title: "GHẾ GAMING", route: "/category/gaming-gear/chairs", icon: Keyboard }
      ]
    }
  ]);

  // Handler to toggle category expansion
  const toggleExpand = (index: number) => {
    const updatedCategories = [...categories];
    updatedCategories[index].isExpanded = !updatedCategories[index].isExpanded;
    setCategories(updatedCategories);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden w-full sticky top-4">
      <div className="bg-primary text-white p-3 font-bold text-lg">
        DANH MỤC SẢN PHẨM
      </div>
      <div className="divide-y">
        {categories.map((category, index) => (
          <div key={category.title} className="text-sm">
            <div className="relative">
              <Link 
                to={category.route}
                className={`flex items-center gap-3 p-3 ${category.children ? 'pr-12' : ''} text-gray-800 hover:bg-gray-50 transition-colors w-full`}
              >
                <category.icon className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-medium">{category.title}</span>
              </Link>
              {category.children && (
                <button 
                  onClick={() => toggleExpand(index)}
                  className="absolute right-3 top-3 p-1 text-gray-500 hover:text-gray-700"
                >
                  {category.isExpanded ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>
              )}
            </div>
            
            {/* Render sub-categories if present and expanded */}
            {category.children && category.isExpanded && (
              <div className="bg-gray-50 w-full">
                {category.children.map(subCategory => (
                  <Link 
                    key={subCategory.title}
                    to={subCategory.route}
                    className="flex items-center gap-2 py-2 px-10 text-sm text-gray-700 hover:bg-gray-100 transition-colors border-t border-gray-100 w-full"
                  >
                    <subCategory.icon className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{subCategory.title}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSidebar;
