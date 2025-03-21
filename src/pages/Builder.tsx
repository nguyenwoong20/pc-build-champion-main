import { useEffect } from "react";
import { ArrowLeft, Info, Check, AlertCircle, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import BuilderInterface from "@/components/BuilderInterface";

const Builder = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-primary transition-colors">Trang chủ</Link>
            <span>/</span>
            <span className="text-foreground">Xây dựng PC</span>
          </div>
          
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Xây dựng PC của bạn</h1>
            <p className="text-muted-foreground max-w-3xl">
              Cấu hình PC tùy chỉnh bằng cách chọn các linh kiện tương thích. Công cụ xây dựng của chúng tôi đảm bảo tất cả các linh kiện hoạt động tốt với nhau.
            </p>
          </div>
          
          {/* The Builder Interface */}
          <BuilderInterface />
          
          {/* Builder guidance */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-panel rounded-xl p-6 flex flex-col bg-white border">
              <div className="rounded-full bg-green-100 text-green-600 w-10 h-10 flex items-center justify-center mb-4">
                <Check className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-medium mb-2">Kiểm tra tương thích tự động</h3>
              <p className="text-sm text-muted-foreground">
                Hệ thống của chúng tôi tự động xác minh tính tương thích của các linh kiện khi bạn xây dựng.
              </p>
            </div>
            
            <div className="glass-panel rounded-xl p-6 flex flex-col bg-white border">
              <div className="rounded-full bg-blue-100 text-blue-600 w-10 h-10 flex items-center justify-center mb-4">
                <Info className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-medium mb-2">Thông tin hiệu suất</h3>
              <p className="text-sm text-muted-foreground">
                Nhận ước tính hiệu suất thời gian thực cho trò chơi và năng suất.
              </p>
            </div>
            
            <div className="glass-panel rounded-xl p-6 flex flex-col bg-white border">
              <div className="rounded-full bg-purple-100 text-purple-600 w-10 h-10 flex items-center justify-center mb-4">
                <ShoppingCart className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-medium mb-2">Lưu & Chia sẻ cấu hình</h3>
              <p className="text-sm text-muted-foreground">
                Lưu cấu hình của bạn để sau hoặc chia sẻ với bạn bè để nhận phản hồi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Builder;