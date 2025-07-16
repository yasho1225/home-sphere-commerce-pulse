import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, Star, Eye } from "lucide-react";
import { useState } from "react";

const FeaturedProducts = () => {
  const [wishlist, setWishlist] = useState<number[]>([]);

  const products = [
    {
      id: 1,
      name: "Premium Kitchen Organizer Set",
      price: 1299,
      originalPrice: 1599,
      image: "/placeholder.svg",
      rating: 4.8,
      reviews: 156,
      discount: 19,
      tag: "Best Seller",
      category: "Kitchen"
    },
    {
      id: 2,
      name: "Colorful Stationery Bundle",
      price: 799,
      originalPrice: 999,
      image: "/placeholder.svg",
      rating: 4.6,
      reviews: 89,
      discount: 20,
      tag: "New",
      category: "Stationery"
    },
    {
      id: 3,
      name: "Kids Party Gift Pack (10 items)",
      price: 599,
      originalPrice: 799,
      image: "/placeholder.svg",
      rating: 4.9,
      reviews: 234,
      discount: 25,
      tag: "Hot Deal",
      category: "Kids Gifts"
    },
    {
      id: 4,
      name: "Smart Home Storage System",
      price: 2199,
      originalPrice: 2699,
      image: "/placeholder.svg",
      rating: 4.7,
      reviews: 67,
      discount: 19,
      tag: "Premium",
      category: "Organizers"
    },
    {
      id: 5,
      name: "Eco-Friendly Kitchen Tools",
      price: 899,
      originalPrice: 1199,
      image: "/placeholder.svg",
      rating: 4.5,
      reviews: 123,
      discount: 25,
      tag: "Eco",
      category: "Kitchen"
    },
    {
      id: 6,
      name: "Artist's Creative Set",
      price: 1599,
      originalPrice: 1999,
      image: "/placeholder.svg",
      rating: 4.8,
      reviews: 78,
      discount: 20,
      tag: "Limited",
      category: "Stationery"
    }
  ];

  const toggleWishlist = (productId: number) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const getTagColor = (tag: string) => {
    switch (tag) {
      case "Best Seller": return "bg-primary text-primary-foreground";
      case "New": return "bg-accent text-accent-foreground";
      case "Hot Deal": return "bg-secondary text-secondary-foreground";
      case "Premium": return "bg-gradient-primary text-primary-foreground";
      case "Eco": return "bg-green-500 text-white";
      case "Limited": return "bg-orange-500 text-white";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured 
            <span className="bg-gradient-secondary bg-clip-text text-transparent"> Products</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Handpicked products with amazing deals and customer favorites
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className="group cursor-pointer hover:shadow-strong transition-all duration-300 hover:-translate-y-1 bg-card border-0 overflow-hidden"
            >
              <div className="relative">
                <div className="relative h-64 bg-gradient-card overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Discount Badge */}
                  <Badge className="absolute top-2 left-2 bg-secondary text-secondary-foreground">
                    {product.discount}% OFF
                  </Badge>
                  
                  {/* Product Tag */}
                  <Badge className={`absolute top-2 right-2 ${getTagColor(product.tag)}`}>
                    {product.tag}
                  </Badge>
                  
                  {/* Hover Actions */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex gap-2">
                      <Button size="icon" variant="secondary" className="shadow-medium">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="secondary" className="shadow-medium">
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* Wishlist Button */}
                <Button
                  size="icon"
                  variant="ghost"
                  className={`absolute top-2 right-12 ${wishlist.includes(product.id) ? 'text-secondary' : 'text-muted-foreground'} hover:text-secondary`}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleWishlist(product.id);
                  }}
                >
                  <Heart className={`h-4 w-4 ${wishlist.includes(product.id) ? 'fill-current' : ''}`} />
                </Button>
              </div>
              
              <CardContent className="p-4">
                <div className="mb-2">
                  <span className="text-xs text-muted-foreground font-medium">{product.category}</span>
                </div>
                
                <h3 className="font-semibold text-base mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                
                <div className="flex items-center gap-1 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < Math.floor(product.rating)
                            ? 'text-accent fill-current'
                            : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {product.rating} ({product.reviews})
                  </span>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-primary">₹{product.price}</span>
                    <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice}</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    className="flex-1 bg-gradient-primary hover:opacity-90 shadow-soft"
                    size="sm"
                  >
                    <ShoppingCart className="h-4 w-4 mr-1" />
                    Add to Cart
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="hover:bg-muted"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-secondary hover:opacity-90 shadow-medium">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;