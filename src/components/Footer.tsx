
import { Link } from 'react-router-dom';
import { 
  Cpu, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company and about */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Cpu className="w-6 h-6 text-primary" />
              <span className="font-display text-xl font-medium">PrecisionBuild</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Premium custom PC building service, delivering expertly crafted high-performance computers tailored to your specific needs.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/builder" className="text-muted-foreground hover:text-primary transition-colors">PC Builder</Link>
              </li>
              <li>
                <Link to="/builds" className="text-muted-foreground hover:text-primary transition-colors">Pre-Built PCs</Link>
              </li>
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">Components</Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/support" className="text-muted-foreground hover:text-primary transition-colors">Support</Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-medium text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/custom-builds" className="text-muted-foreground hover:text-primary transition-colors">Custom PC Building</Link>
              </li>
              <li>
                <Link to="/services/upgrades" className="text-muted-foreground hover:text-primary transition-colors">PC Upgrades</Link>
              </li>
              <li>
                <Link to="/services/repairs" className="text-muted-foreground hover:text-primary transition-colors">Repairs & Maintenance</Link>
              </li>
              <li>
                <Link to="/services/consultation" className="text-muted-foreground hover:text-primary transition-colors">Technical Consultation</Link>
              </li>
              <li>
                <Link to="/services/warranty" className="text-muted-foreground hover:text-primary transition-colors">Warranty Service</Link>
              </li>
              <li>
                <Link to="/services/corporate" className="text-muted-foreground hover:text-primary transition-colors">Corporate Solutions</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-medium text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  123 Tech Plaza, Suite 400<br />
                  San Francisco, CA 94103
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+15551234567" className="text-muted-foreground hover:text-primary transition-colors">
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:info@precisionbuild.com" className="text-muted-foreground hover:text-primary transition-colors">
                  info@precisionbuild.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground order-2 md:order-1">
            &copy; {currentYear} PrecisionBuild. All rights reserved.
          </p>
          <div className="flex gap-5 text-sm order-1 md:order-2">
            <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link to="/returns" className="text-muted-foreground hover:text-primary transition-colors">
              Returns Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
