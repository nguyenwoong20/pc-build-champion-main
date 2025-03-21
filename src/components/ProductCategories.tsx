
import { Link } from "react-router-dom";
import { 
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from "@/components/ui/hover-card";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
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
} from "lucide-react";

const categories = [
  {
    title: "PC Gaming",
    href: "/category/pc-gaming",
    icon: Computer,
    description: "Máy tính chơi game hiệu năng cao",
    children: [
      { 
        title: "PC Gaming Giá Rẻ", 
        href: "/category/pc-gaming/budget",
        description: "Máy tính chơi game với mức giá phải chăng, phù hợp cho game thủ có ngân sách hạn chế"
      },
      { 
        title: "PC Gaming Trung Cấp", 
        href: "/category/pc-gaming/mid-range",
        description: "Máy tính chơi game với hiệu năng cân bằng, đáp ứng nhu cầu đa dạng"
      },
      { 
        title: "PC Gaming Cao Cấp", 
        href: "/category/pc-gaming/high-end",
        description: "Máy tính chơi game hiệu năng cao với các linh kiện hàng đầu, chơi mọi game ở cấu hình tối đa"
      },
    ]
  },
  {
    title: "PC Workstation",
    href: "/category/pc-workstation",
    icon: Computer,
    description: "Máy tính đồ họa, render chuyên nghiệp",
    details: "Máy tính chuyên dụng cho công việc đồ họa nặng, render video, thiết kế 3D và các tác vụ đòi hỏi hiệu năng cao"
  },
  {
    title: "PC AMD Gaming",
    href: "/category/pc-amd-gaming",
    icon: Computer,
    description: "Máy tính chơi game nền tảng AMD",
    details: "Máy tính gaming được trang bị CPU và GPU của AMD, mang lại hiệu năng tối ưu với mức giá hợp lý"
  },
  {
    title: "PC Văn Phòng",
    href: "/category/pc-office",
    icon: Computer,
    description: "Máy tính cho công việc văn phòng",
    details: "Máy tính với thiết kế gọn gàng, tiết kiệm điện năng, phù hợp cho công việc văn phòng và học tập"
  },
  {
    title: "Linh Kiện Máy Tính",
    href: "/category/components",
    icon: HardDrive,
    description: "Đầy đủ linh kiện máy tính chính hãng",
    children: [
      { 
        title: "CPU - Bộ Vi Xử Lý", 
        href: "/category/components/cpu",
        description: "CPU Intel, AMD các dòng mới nhất với hiệu năng mạnh mẽ",
        icon: Cpu 
      },
      { 
        title: "Mainboard - Bo Mạch Chủ", 
        href: "/category/components/mainboard",
        description: "Bo mạch chủ từ các hãng uy tín ASUS, MSI, Gigabyte với đầy đủ các chipset",
        icon: Layers 
      },
      { 
        title: "RAM - Bộ Nhớ", 
        href: "/category/components/ram",
        description: "RAM DDR4, DDR5 từ các thương hiệu nổi tiếng với tốc độ cao",
        icon: MemoryStick 
      },
      { 
        title: "VGA - Card Màn Hình", 
        href: "/category/components/vga",
        description: "Card đồ họa NVIDIA, AMD mới nhất với hiệu năng vượt trội",
        icon: Monitor 
      },
      { 
        title: "SSD - Ổ Cứng Thể Rắn", 
        href: "/category/components/ssd",
        description: "Ổ cứng SSD tốc độ cao, đa dạng dung lượng và chuẩn kết nối",
        icon: HardDrive 
      },
      { 
        title: "HDD - Ổ Cứng", 
        href: "/category/components/hdd",
        description: "Ổ cứng HDD dung lượng lớn, bền bỉ, phù hợp lưu trữ dữ liệu",
        icon: HardDrive 
      },
      { 
        title: "PSU - Nguồn Máy Tính", 
        href: "/category/components/psu",
        description: "Nguồn máy tính chất lượng cao, hiệu suất tốt từ các thương hiệu uy tín",
        icon: Power 
      },
      { 
        title: "Case - Vỏ Máy Tính", 
        href: "/category/components/case",
        description: "Vỏ máy tính đa dạng thiết kế, kích thước, đáp ứng mọi nhu cầu",
        icon: Computer 
      },
      { 
        title: "Cooling - Tản Nhiệt", 
        href: "/category/components/cooling",
        description: "Hệ thống tản nhiệt khí, nước hiệu năng cao, giữ máy tính luôn mát mẻ",
        icon: Monitor 
      },
    ]
  },
  {
    title: "Màn Hình Máy Tính",
    href: "/category/monitors",
    icon: Monitor,
    description: "Màn hình gaming và đồ họa chuyên dụng",
    details: "Màn hình máy tính đa dạng kích thước, tần số quét cao, độ phân giải 2K/4K, phù hợp cho gaming và làm việc đồ họa"
  },
  {
    title: "Gaming Gear",
    href: "/category/gaming-gear",
    icon: Gamepad,
    description: "Phụ kiện gaming chất lượng cao",
    children: [
      { 
        title: "Bàn Phím Gaming", 
        href: "/category/gaming-gear/keyboards",
        description: "Bàn phím cơ, bàn phím gaming với switch chất lượng cao, đèn RGB đẹp mắt",
        icon: Keyboard 
      },
      { 
        title: "Chuột Gaming", 
        href: "/category/gaming-gear/mice",
        description: "Chuột gaming với cảm biến chính xác, DPI cao, thiết kế ergonomic thoải mái",
        icon: Gamepad 
      },
      { 
        title: "Tai Nghe Gaming", 
        href: "/category/gaming-gear/headsets",
        description: "Tai nghe gaming với âm thanh vòm 7.1, mic rõ ràng, đệm tai êm ái",
        icon: Keyboard 
      },
      { 
        title: "Ghế Gaming", 
        href: "/category/gaming-gear/chairs",
        description: "Ghế gaming với thiết kế ôm sát lưng, thoải mái khi ngồi nhiều giờ",
        icon: Keyboard 
      },
    ]
  },
];

const ProductCategories = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent hover:bg-accent">Sản Phẩm</NavigationMenuTrigger>
          <NavigationMenuContent className="left-0">
            <ul className="grid w-[900px] grid-cols-3 gap-3 p-4">
              {categories.map((category) => (
                <li key={category.title} className="row-span-1">
                  {category.children ? (
                    <div className="h-full">
                      <div className="flex items-center gap-2 mb-3">
                        <category.icon className="h-5 w-5 text-primary" />
                        <Link
                          to={category.href}
                          className="text-sm font-medium leading-none hover:text-primary transition-colors"
                        >
                          {category.title}
                        </Link>
                      </div>
                      <ul className="space-y-2">
                        {category.children.map((child) => (
                          <li key={child.title} className="pl-6">
                            <HoverCard openDelay={100} closeDelay={200}>
                              <HoverCardTrigger asChild>
                                <Link
                                  to={child.href}
                                  className="text-sm hover:text-primary transition-colors flex items-center gap-2"
                                >
                                  {child.icon && <child.icon className="h-4 w-4 text-primary" />}
                                  <span>• {child.title}</span>
                                </Link>
                              </HoverCardTrigger>
                              <HoverCardContent side="right" align="start" className="w-80 p-4">
                                <div className="flex flex-col gap-2">
                                  <h4 className="font-medium text-primary">{child.title}</h4>
                                  <p className="text-sm text-muted-foreground">{child.description}</p>
                                </div>
                              </HoverCardContent>
                            </HoverCard>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <HoverCard openDelay={100} closeDelay={200}>
                      <HoverCardTrigger asChild>
                        <NavigationMenuLink asChild>
                          <Link
                            to={category.href}
                            className="flex h-full w-full select-none flex-col justify-between rounded-md bg-gradient-to-b from-muted/50 to-muted p-4 no-underline outline-none focus:shadow-md"
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <category.icon className="h-5 w-5 text-primary" />
                              <div className="text-sm font-medium leading-none">{category.title}</div>
                            </div>
                            <p className="text-xs text-muted-foreground">{category.description}</p>
                          </Link>
                        </NavigationMenuLink>
                      </HoverCardTrigger>
                      <HoverCardContent side="right" align="start" className="w-80 p-4">
                        <div className="flex flex-col gap-2">
                          <h4 className="font-medium text-primary">{category.title}</h4>
                          <p className="text-sm text-muted-foreground">{category.details || category.description}</p>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  )}
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <Link to="/builder" className="text-sm font-medium px-4 py-2 flex items-center gap-1 hover:text-primary transition-colors">
            <Computer className="h-4 w-4" />
            Xây Dựng Cấu Hình
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default ProductCategories;
