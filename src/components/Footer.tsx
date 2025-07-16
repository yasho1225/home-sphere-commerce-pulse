import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  ShoppingCart, 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  MessageCircle,
  Facebook,
  Twitter,
  Youtube
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-primary/5 to-primary/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="bg-gradient-primary rounded-2xl p-8 mb-12 text-primary-foreground">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with Latest Offers! 🎉</h3>
            <p className="mb-6 opacity-90">
              Get exclusive deals, new product launches, and special discounts delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="bg-primary-foreground text-foreground border-0"
              />
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-medium">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <img 
                  src="/lovable-uploads/b21260dd-2055-41a3-95da-7be2b8104e70.png" 
                  alt="Shop 4 Home Logo"
                  className="h-10 w-10 rounded-full shadow-medium"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                  Shop 4 Home
                </h3>
                <p className="text-xs text-muted-foreground">shop4home.com</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
              Your trusted partner for home essentials, kitchen utilities, stationery, 
              and kids' gifts. Quality products at unbeatable prices.
            </p>
            <div className="flex gap-2">
              <Button size="icon" variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" className="hover:bg-green-500 hover:text-white">
                <MessageCircle className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" className="hover:bg-blue-500 hover:text-white">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" className="hover:bg-red-500 hover:text-white">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">All Products</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Sale 🔥</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Track Order</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Customer Reviews</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Home & Kitchen Utility</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Stationery</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Kids Return Gifts</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Organizers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">New Arrivals</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Best Sellers</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Mumbai, Maharashtra, India
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+91-XXX-XXX-XXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">support@shop4home.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span className="text-muted-foreground">WhatsApp Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment & Policies */}
        <div className="border-t border-border/50 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-4 text-foreground">We Accept</h4>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="bg-muted px-3 py-1 rounded-full">UPI</span>
                <span className="bg-muted px-3 py-1 rounded-full">Google Pay</span>
                <span className="bg-muted px-3 py-1 rounded-full">Paytm</span>
                <span className="bg-muted px-3 py-1 rounded-full">PhonePe</span>
                <span className="bg-muted px-3 py-1 rounded-full">Credit Card</span>
                <span className="bg-muted px-3 py-1 rounded-full">Debit Card</span>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Policies</h4>
              <div className="flex flex-wrap gap-4 text-sm">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Shipping Policy</a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">No Returns Policy</a>
              </div>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-accent/10 border border-accent/20 rounded-xl p-4 mb-8">
          <p className="text-sm text-center">
            <strong className="text-accent">Important:</strong> We follow a strict no return, no refund, no replacement policy. 
            Please read product descriptions carefully before ordering.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Shop 4 Home (shop4home.com). All rights reserved. | Made with ❤️ in India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;