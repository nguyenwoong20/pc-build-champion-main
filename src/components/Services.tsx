
import { 
  Cpu, 
  ShieldCheck, 
  Clock, 
  Truck, 
  HeadphonesIcon, 
  Zap 
} from 'lucide-react';

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => (
  <div className="glass-card rounded-xl p-6 transition-all duration-300 hover:translate-y-[-5px]">
    <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <h3 className="text-lg font-medium mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: Cpu,
      title: 'Expert PC Building',
      description: 'Our specialists hand-build each PC with precision and care to ensure optimal performance and reliability.'
    },
    {
      icon: ShieldCheck,
      title: '3-Year Warranty',
      description: 'Every custom PC comes with our comprehensive 3-year warranty for peace of mind.'
    },
    {
      icon: Clock,
      title: 'Fast Turnaround',
      description: 'Most custom builds are completed and shipped within 5-7 business days.'
    },
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'Free insured shipping on all orders over $1000 with careful packaging to protect your investment.'
    },
    {
      icon: HeadphonesIcon,
      title: 'Lifetime Support',
      description: 'Our technical team is available to help with any questions or issues for the lifetime of your PC.'
    },
    {
      icon: Zap,
      title: 'Performance Tuning',
      description: 'Every PC is benchmarked, stress-tested, and optimized before shipping to ensure peak performance.'
    }
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Premium PC Building Service</h2>
          <p className="text-muted-foreground md:text-lg">
            Experience the difference of a professionally-built custom PC with our premium service offerings
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
