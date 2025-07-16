import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Truck, Shield, HeartHandshake } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Hero Banner */}
      <div className="relative h-[600px] md:h-[700px] bg-gradient-hero">
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-20"
          style={{ backgroundImage: `url(${heroBanner})` }}
        />
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 bg-background/90 backdrop-blur text-primary px-4 py-2 rounded-full text-sm font-medium shadow-soft">
                <Star className="h-4 w-4 fill-accent text-accent" />
                #1 Home Shopping Destination in India
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Transform Your Home with 
              <span className="block bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                Premium Products 🏠
              </span>
            </h1>
            
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Discover amazing deals on home essentials, kitchen utilities, stationery, 
              and kids' gifts. Quality products delivered to your doorstep across India.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow">
                Shop Now 🛒
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                View Categories
              </Button>
            </div>
            
            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-primary-foreground/80 text-sm">
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4 text-accent" />
                <span>Free shipping above ₹999</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-accent" />
                <span>Secure payments</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartHandshake className="h-4 w-4 text-accent" />
                <span>Customer support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-card shadow-soft">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">50K+</div>
              <div className="text-muted-foreground text-sm">Happy Customers</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-secondary mb-2">1000+</div>
              <div className="text-muted-foreground text-sm">Products</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-accent mb-2">4.8★</div>
              <div className="text-muted-foreground text-sm">Customer Rating</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground text-sm">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;