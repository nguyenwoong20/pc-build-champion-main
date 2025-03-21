import { useState, useEffect } from 'react';
import { 
  Cpu, 
  Layers, 
  HardDrive, 
  Monitor, 
  Power, 
  Fan,
  PlusCircle,
  Trash2,
  AlertCircle,
  Check,
  X,
  Info,
  ShoppingCart,
  MemoryStick,
  Laptop
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Component types
type ComponentType = 'cpu' | 'motherboard' | 'gpu' | 'ram' | 'storage' | 'psu' | 'case' | 'cooling';

// Component template
interface ComponentTemplate {
  id: string;
  type: ComponentType;
  name: string;
  brand: string;
  price: number;
  image: string;
  specs: Record<string, string>;
  compatible: string[];
}

// Sample component data
const cpuOptions: ComponentTemplate[] = [
  {
    id: 'cpu-1',
    type: 'cpu',
    name: 'AMD Ryzen 5 7600X',
    brand: 'AMD',
    price: 299,
    image: '/placeholder.svg',
    specs: {
      cores: '6 Cores',
      threads: '12 Threads',
      frequency: '4.7GHz (5.3GHz Boost)',
      socket: 'AM5'
    },
    compatible: ['mb-1', 'mb-2']
  },
  {
    id: 'cpu-2',
    type: 'cpu',
    name: 'Intel Core i5-13600K',
    brand: 'Intel',
    price: 329,
    image: '/placeholder.svg',
    specs: {
      cores: '14 Cores (6P+8E)',
      threads: '20 Threads',
      frequency: '3.5GHz (5.1GHz Boost)',
      socket: 'LGA1700'
    },
    compatible: ['mb-3', 'mb-4']
  }
];

const motherboardOptions: ComponentTemplate[] = [
  {
    id: 'mb-1',
    type: 'motherboard',
    name: 'ASUS ROG STRIX B650-A GAMING',
    brand: 'ASUS',
    price: 219,
    image: '/placeholder.svg',
    specs: {
      socket: 'AM5',
      chipset: 'B650',
      formFactor: 'ATX',
      memorySlots: '4 DDR5 Slots'
    },
    compatible: ['cpu-1']
  },
  {
    id: 'mb-3',
    type: 'motherboard',
    name: 'MSI PRO Z790-A',
    brand: 'MSI',
    price: 249,
    image: '/placeholder.svg',
    specs: {
      socket: 'LGA1700',
      chipset: 'Z790',
      formFactor: 'ATX',
      memorySlots: '4 DDR5 Slots'
    },
    compatible: ['cpu-2']
  }
];

const gpuOptions: ComponentTemplate[] = [
  {
    id: 'gpu-1',
    type: 'gpu',
    name: 'NVIDIA GeForce RTX 4070',
    brand: 'NVIDIA',
    price: 599,
    image: '/placeholder.svg',
    specs: {
      memory: '12GB GDDR6X',
      boost: '2.5GHz',
      tdp: '200W',
    },
    compatible: []
  },
  {
    id: 'gpu-2',
    type: 'gpu',
    name: 'AMD Radeon RX 7800 XT',
    brand: 'AMD',
    price: 549,
    image: '/placeholder.svg',
    specs: {
      memory: '16GB GDDR6',
      boost: '2.4GHz',
      tdp: '263W',
    },
    compatible: []
  }
];

const ramOptions: ComponentTemplate[] = [
  {
    id: 'ram-1',
    type: 'ram',
    name: 'Corsair Vengeance 32GB (2x16GB)',
    brand: 'Corsair',
    price: 129,
    image: '/placeholder.svg',
    specs: {
      type: 'DDR5',
      speed: '5600MHz',
      capacity: '32GB (2x16GB)',
    },
    compatible: []
  }
];

const storageOptions: ComponentTemplate[] = [
  {
    id: 'storage-1',
    type: 'storage',
    name: 'Samsung 990 PRO 2TB',
    brand: 'Samsung',
    price: 199,
    image: '/placeholder.svg',
    specs: {
      type: 'NVMe SSD',
      capacity: '2TB',
      readSpeed: '7450 MB/s',
      writeSpeed: '6900 MB/s',
    },
    compatible: []
  }
];

const psuOptions: ComponentTemplate[] = [
  {
    id: 'psu-1',
    type: 'psu',
    name: 'Corsair RM850x',
    brand: 'Corsair',
    price: 149,
    image: '/placeholder.svg',
    specs: {
      wattage: '850W',
      certification: '80+ Gold',
      modular: 'Fully Modular',
    },
    compatible: []
  }
];

const caseOptions: ComponentTemplate[] = [
  {
    id: 'case-1',
    type: 'case',
    name: 'Corsair 4000D Airflow',
    brand: 'Corsair',
    price: 119,
    image: '/placeholder.svg',
    specs: {
      formFactor: 'Mid Tower',
      compatible: 'ATX, mATX, Mini-ITX',
      dimensions: '453mm x 230mm x 466mm',
    },
    compatible: []
  }
];

const coolingOptions: ComponentTemplate[] = [
  {
    id: 'cooling-1',
    type: 'cooling',
    name: 'NZXT Kraken X63',
    brand: 'NZXT',
    price: 139,
    image: '/placeholder.svg',
    specs: {
      type: 'AIO Liquid Cooler',
      radiator: '280mm',
      fans: '2x 140mm',
    },
    compatible: []
  }
];

// All component options grouped by type
const componentOptions: Record<ComponentType, ComponentTemplate[]> = {
  cpu: cpuOptions,
  motherboard: motherboardOptions,
  gpu: gpuOptions,
  ram: ramOptions,
  storage: storageOptions,
  psu: psuOptions,
  case: caseOptions,
  cooling: coolingOptions
};

// Builder component
interface BuilderComponent {
  icon: React.ElementType;
  name: string;
  type: ComponentType;
  description: string;
  selected?: ComponentTemplate | null;
}

// Initial component data
const initialComponents: BuilderComponent[] = [
  {
    icon: Cpu,
    name: 'Bộ vi xử lý (CPU)',
    type: 'cpu',
    description: 'Bộ não của máy tính của bạn',
    selected: null
  },
  {
    icon: Layers,
    name: 'Bo mạch chủ',
    type: 'motherboard',
    description: 'Kết nối tất cả các linh kiện',
    selected: null
  },
  {
    icon: Monitor,
    name: 'Card đồ họa (GPU)',
    type: 'gpu',
    description: 'Xử lý hình ảnh và đồ họa',
    selected: null
  },
  {
    icon: MemoryStick,
    name: 'Bộ nhớ RAM',
    type: 'ram',
    description: 'Lưu trữ dữ liệu tạm thời tốc độ cao',
    selected: null
  },
  {
    icon: HardDrive,
    name: 'Ổ cứng/SSD',
    type: 'storage',
    description: 'Lưu trữ hệ điều hành và dữ liệu',
    selected: null
  },
  {
    icon: Power,
    name: 'Nguồn (PSU)',
    type: 'psu',
    description: 'Cung cấp điện cho linh kiện',
    selected: null
  },
  {
    icon: Laptop,
    name: 'Vỏ case',
    type: 'case',
    description: 'Chứa và bảo vệ linh kiện',
    selected: null
  },
  {
    icon: Fan,
    name: 'Tản nhiệt',
    type: 'cooling',
    description: 'Giữ nhiệt độ hệ thống ổn định',
    selected: null
  }
];

const BuilderInterface = () => {
  const [buildComponents, setBuildComponents] = useState<BuilderComponent[]>(initialComponents);
  const [activeComponentType, setActiveComponentType] = useState<ComponentType | null>(null);
  const [showSelectionModal, setShowSelectionModal] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const { toast } = useToast();
  
  // Calculate total price whenever components change
  useEffect(() => {
    const newTotal = buildComponents.reduce((sum, component) => {
      return sum + (component.selected?.price || 0);
    }, 0);
    setTotalPrice(newTotal);
  }, [buildComponents]);
  
  // Start selection process for a component
  const selectComponent = (type: ComponentType) => {
    setActiveComponentType(type);
    setShowSelectionModal(true);
  };
  
  // Handle component selection
  const handleSelectComponent = (component: ComponentTemplate) => {
    const updatedComponents = buildComponents.map(item => {
      if (item.type === activeComponentType) {
        return { ...item, selected: component };
      }
      return item;
    });
    
    setBuildComponents(updatedComponents);
    setShowSelectionModal(false);
    
    toast({
      title: "Linh kiện đã được thêm",
      description: `${component.name} đã được thêm vào cấu hình của bạn`,
    });
  };
  
  // Remove a component
  const removeComponent = (type: ComponentType) => {
    const updatedComponents = buildComponents.map(component => {
      if (component.type === type) {
        return { ...component, selected: null };
      }
      return component;
    });
    
    setBuildComponents(updatedComponents);
    
    toast({
      title: "Linh kiện đã được gỡ bỏ",
      description: "Linh kiện đã được gỡ bỏ khỏi cấu hình của bạn",
      variant: "destructive",
    });
  };
  
  // Check if build is complete
  const isCompleteConfig = buildComponents.every(component => component.selected !== null);
  
  // Calculate compatibility
  const checkCompatibility = () => {
    // This is a simplified compatibility checker
    // In a real app, this would be more complex
    const cpu = buildComponents.find(c => c.type === 'cpu')?.selected;
    const motherboard = buildComponents.find(c => c.type === 'motherboard')?.selected;
    
    if (cpu && motherboard) {
      return motherboard.compatible.includes(cpu.id) || cpu.compatible.includes(motherboard.id);
    }
    
    return true; // If we don't have both components yet, assume compatible
  };
  
  const isCompatible = checkCompatibility();
  
  // Save configuration
  const saveBuild = () => {
    if (!isCompleteConfig) {
      toast({
        title: "Cấu hình chưa hoàn chỉnh",
        description: "Vui lòng chọn đầy đủ các linh kiện trước khi lưu cấu hình",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Cấu hình đã được lưu",
      description: "Cấu hình PC của bạn đã được lưu thành công",
    });
  };
  
  // Add to cart
  const addToCart = () => {
    if (!isCompleteConfig) {
      toast({
        title: "Cấu hình chưa hoàn chỉnh",
        description: "Vui lòng chọn đầy đủ các linh kiện trước khi thêm vào giỏ hàng",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Đã thêm vào giỏ hàng",
      description: "Cấu hình PC của bạn đã được thêm vào giỏ hàng",
    });
  };
  
  return (
    <div className="divide-y divide-border rounded-xl border shadow-sm bg-white">
      {/* Header with price summary */}
      <div className="bg-primary/5 px-6 py-4 flex flex-wrap justify-between items-center gap-4">
        <div>
          <h3 className="text-lg font-medium">Cấu hình PC của bạn</h3>
          <p className="text-sm text-muted-foreground">Chọn linh kiện để bắt đầu</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold">{totalPrice.toLocaleString()}₫</div>
          <div className="text-sm text-muted-foreground">Tổng chi phí ước tính</div>
        </div>
      </div>
      
      {/* Component selection list */}
      <div className="divide-y divide-border">
        {buildComponents.map((component) => (
          <div key={component.type} className="px-6 py-5 hover:bg-secondary/30 transition-colors">
            <div className="flex flex-wrap items-start justify-between gap-4">
              {/* Component info */}
              <div className="flex items-center gap-4 flex-grow">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                  <component.icon className="w-6 h-6" />
                </div>
                
                <div className="flex-grow">
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium">{component.name}</h4>
                    {!component.selected && (
                      <span className="px-2 py-0.5 text-xs rounded-full bg-amber-100 text-amber-800">
                        Bắt buộc
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{component.description}</p>
                </div>
              </div>
              
              {/* Selection or add button */}
              <div className="flex items-center">
                {component.selected ? (
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-medium">{component.selected.name}</div>
                      <div className="text-sm text-muted-foreground">{component.selected.price.toLocaleString()}₫</div>
                    </div>
                    <button 
                      onClick={() => removeComponent(component.type)}
                      className="p-2 rounded-full hover:bg-secondary/80 transition-colors"
                      aria-label="Gỡ bỏ linh kiện"
                    >
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </button>
                  </div>
                ) : (
                  <button 
                    onClick={() => selectComponent(component.type)}
                    className="inline-flex items-center gap-1 px-4 py-2 rounded-lg border border-primary/30 text-primary hover:bg-primary/5 transition-colors"
                  >
                    <PlusCircle className="w-4 h-4" />
                    <span>Thêm</span>
                  </button>
                )}
              </div>
            </div>
            
            {/* Display specs when component is selected */}
            {component.selected && (
              <div className="mt-3 ml-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {Object.entries(component.selected.specs).map(([key, value]) => (
                  <div key={key} className="flex items-center text-xs text-muted-foreground">
                    <span className="mr-1">•</span>
                    <span className="capitalize">{key}:</span>
                    <span className="ml-1 font-medium text-foreground">{value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Build actions */}
      <div className="bg-secondary/50 px-6 py-5">
        <div className="flex flex-wrap gap-4 justify-between items-center">
          <div className="max-w-lg">
            <div className="flex items-center gap-2 text-sm">
              {!isCompleteConfig && (
                <>
                  <AlertCircle className="w-4 h-4 text-amber-500" />
                  <span className="text-muted-foreground">Vui lòng thêm tất cả các linh kiện bắt buộc để tiếp tục</span>
                </>
              )}
              {!isCompatible && (
                <>
                  <X className="w-4 h-4 text-red-500" />
                  <span className="text-red-500">Có vấn đề về tương thích giữa CPU và bo mạch chủ</span>
                </>
              )}
              {isCompleteConfig && isCompatible && (
                <>
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-green-600">Cấu hình PC của bạn đã hoàn chỉnh và tương thích</span>
                </>
              )}
            </div>
          </div>
          
          <div className="flex gap-3">
            <button 
              onClick={saveBuild}
              className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground font-medium transition-all hover:bg-secondary/80"
            >
              Lưu cấu hình
            </button>
            <button 
              onClick={addToCart}
              className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium transition-all hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              disabled={!isCompleteConfig || !isCompatible}
            >
              <ShoppingCart className="w-4 h-4" />
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      </div>
      
      {/* Component selection modal */}
      {showSelectionModal && activeComponentType && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl max-h-[80vh] overflow-hidden">
            <div className="p-4 bg-primary text-primary-foreground flex justify-between items-center">
              <h3 className="text-lg font-medium">Chọn {buildComponents.find(c => c.type === activeComponentType)?.name}</h3>
              <button onClick={() => setShowSelectionModal(false)} className="p-1 rounded-full hover:bg-white/10">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-4 overflow-y-auto max-h-[calc(80vh-80px)]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {componentOptions[activeComponentType].map(option => (
                  <div 
                    key={option.id} 
                    className="border rounded-lg p-4 cursor-pointer hover:border-primary transition-colors"
                    onClick={() => handleSelectComponent(option)}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                        {activeComponentType === 'cpu' && <Cpu className="w-6 h-6" />}
                        {activeComponentType === 'motherboard' && <Layers className="w-6 h-6" />}
                        {activeComponentType === 'gpu' && <Monitor className="w-6 h-6" />}
                        {activeComponentType === 'ram' && <MemoryStick className="w-6 h-6" />}
                        {activeComponentType === 'storage' && <HardDrive className="w-6 h-6" />}
                        {activeComponentType === 'psu' && <Power className="w-6 h-6" />}
                        {activeComponentType === 'case' && <Laptop className="w-6 h-6" />}
                        {activeComponentType === 'cooling' && <Fan className="w-6 h-6" />}
                      </div>
                      <div>
                        <div className="font-semibold">{option.name}</div>
                        <div className="text-sm text-muted-foreground">{option.brand}</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-1 mb-3">
                      {Object.entries(option.specs).map(([key, value]) => (
                        <div key={key} className="flex items-center text-xs text-muted-foreground">
                          <span className="mr-1">•</span>
                          <span className="capitalize">{key}:</span>
                          <span className="ml-1 font-medium text-foreground">{value}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-right font-bold text-lg">
                      {option.price.toLocaleString()}₫
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-4 border-t bg-gray-50">
              <button 
                onClick={() => setShowSelectionModal(false)} 
                className="w-full py-2 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300 transition-colors"
              >
                Hủy
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BuilderInterface;
