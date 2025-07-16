import { Search, ShoppingCart, Heart, User, Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/50">
      {/* Top bar with contact info */}
      <div className="bg-gradient-primary py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm text-primary-foreground">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Phone className="h-3 w-3" />
              <span>Support: +91-XXX-XXX-XXXX</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span>Free shipping on orders above ₹999</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-gradient-hero text-primary-foreground p-2 rounded-xl shadow-medium">
              <ShoppingCart className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                Shop 4 Home
              </h1>
              <p className="text-xs text-muted-foreground">shop4home.com</p>
            </div>
          </div>

          {/* Search bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for products..."
                className="pl-10 h-12 bg-gradient-card border-0 shadow-soft focus:shadow-medium transition-all duration-300"
              />
              <Button className="absolute right-1 top-1/2 transform -translate-y-1/2 h-10 bg-gradient-primary hover:opacity-90">
                Search
              </Button>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative">
              <Heart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-secondary text-secondary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile search */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for products..."
              className="pl-10 h-12 bg-gradient-card border-0 shadow-soft"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-4 border-t border-border/50 pt-4">
          <div className="flex flex-wrap gap-6 text-sm font-medium">
            <a href="#" className="text-primary hover:text-primary-glow transition-colors">Home</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Home & Kitchen</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Stationery</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Kids Return Gifts</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Organizers</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Sale 🔥</a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;