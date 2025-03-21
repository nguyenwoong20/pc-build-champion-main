
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Cpu, 
  HardDrive, 
  Monitor, 
  Layers, 
  MemoryStick, 
  Power,
  Fan,
  Laptop,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const BuilderTool = () => {
  return (
    <div className="pt-8 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <div className="bg-primary p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-bold text-white text-center">
                XÂY DỰNG CẤU HÌNH MÁY TÍNH CỦA BẠN
              </h2>
              <p className="text-primary-foreground opacity-80 text-center mt-2">
                Chọn linh kiện phù hợp nhất với nhu cầu và ngân sách của bạn
              </p>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <Laptop className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">Xây Dựng Cấu Hình</h3>
                    <p className="text-sm text-muted-foreground">Chọn linh kiện để bắt đầu</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Link to="/builder">
                    <Button className="h-11">
                      Bắt đầu xây dựng
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-3 border rounded-lg hover:border-primary transition-colors">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Cpu className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">CPU</div>
                    <div className="text-xs text-muted-foreground">Bộ vi xử lý</div>
                  </div>
                  <CheckCircle className="w-5 h-5 text-green-500 ml-auto" />
                </div>
                
                <div className="flex items-center gap-3 p-3 border rounded-lg hover:border-primary transition-colors">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Layers className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Mainboard</div>
                    <div className="text-xs text-muted-foreground">Bo mạch chủ</div>
                  </div>
                  <CheckCircle className="w-5 h-5 text-green-500 ml-auto" />
                </div>
                
                <div className="flex items-center gap-3 p-3 border rounded-lg hover:border-primary transition-colors">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <MemoryStick className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">RAM</div>
                    <div className="text-xs text-muted-foreground">Bộ nhớ</div>
                  </div>
                  <CheckCircle className="w-5 h-5 text-green-500 ml-auto" />
                </div>
                
                <div className="flex items-center gap-3 p-3 border rounded-lg hover:border-primary transition-colors">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Monitor className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">VGA</div>
                    <div className="text-xs text-muted-foreground">Card màn hình</div>
                  </div>
                  <CheckCircle className="w-5 h-5 text-green-500 ml-auto" />
                </div>
                
                <div className="flex items-center gap-3 p-3 border rounded-lg hover:border-primary transition-colors">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <HardDrive className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Ổ cứng</div>
                    <div className="text-xs text-muted-foreground">SSD/HDD</div>
                  </div>
                  <CheckCircle className="w-5 h-5 text-green-500 ml-auto" />
                </div>
                
                <div className="flex items-center gap-3 p-3 border rounded-lg hover:border-primary transition-colors">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Power className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Nguồn</div>
                    <div className="text-xs text-muted-foreground">PSU</div>
                  </div>
                  <CheckCircle className="w-5 h-5 text-green-500 ml-auto" />
                </div>
                
                <div className="flex items-center gap-3 p-3 border rounded-lg hover:border-primary transition-colors">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Laptop className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Case</div>
                    <div className="text-xs text-muted-foreground">Vỏ máy tính</div>
                  </div>
                  <CheckCircle className="w-5 h-5 text-green-500 ml-auto" />
                </div>
                
                <div className="flex items-center gap-3 p-3 border rounded-lg hover:border-primary transition-colors">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Fan className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Tản nhiệt</div>
                    <div className="text-xs text-muted-foreground">Cooling</div>
                  </div>
                  <CheckCircle className="w-5 h-5 text-green-500 ml-auto" />
                </div>
                
                <div className="flex items-center gap-3 p-3 border rounded-lg hover:border-primary transition-colors">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Monitor className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Màn hình</div>
                    <div className="text-xs text-muted-foreground">Monitor</div>
                  </div>
                  <CheckCircle className="w-5 h-5 text-green-500 ml-auto" />
                </div>
              </div>
              
              <div className="flex justify-center pt-4">
                <Link to="/builder">
                  <Button size="lg" className="w-full sm:w-auto">
                    Xây dựng ngay
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuilderTool;
