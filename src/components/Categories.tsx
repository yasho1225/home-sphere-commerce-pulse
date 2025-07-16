import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ChefHat, PenTool, Gift, Archive } from "lucide-react";
import kitchenProducts from "@/assets/kitchen-products.jpg";
import stationeryProducts from "@/assets/stationery-products.jpg";
import kidsGifts from "@/assets/kids-gifts.jpg";

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Home & Kitchen Utility",
      description: "Essential kitchen tools and organizers for modern homes",
      icon: ChefHat,
      image: kitchenProducts,
      itemCount: "250+ items",
      gradient: "from-primary to-primary-glow"
    },
    {
      id: 2,
      name: "Stationery",
      description: "Premium stationery for work, study, and creativity",
      icon: PenTool,
      image: stationeryProducts,
      itemCount: "180+ items",
      gradient: "from-secondary to-accent"
    },
    {
      id: 3,
      name: "Kids Return Gifts",
      description: "Delightful gifts perfect for birthday parties and events",
      icon: Gift,
      image: kidsGifts,
      itemCount: "120+ items",
      gradient: "from-accent to-secondary"
    },
    {
      id: 4,
      name: "Organizers",
      description: "Smart storage solutions for every space in your home",
      icon: Archive,
      image: "/placeholder.svg",
      itemCount: "95+ items",
      gradient: "from-primary to-accent"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Shop by 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Categories</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our carefully curated collections designed to enhance every aspect of your home life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.id} 
                className="group cursor-pointer hover:shadow-strong transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                  <div className="absolute top-4 right-4">
                    <div className={`bg-gradient-to-r ${category.gradient} p-2 rounded-full shadow-medium`}>
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-primary">{category.itemCount}</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" />
                  </div>
                  <Button className="w-full bg-gradient-primary hover:opacity-90 shadow-soft">
                    Browse Collection
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="shadow-soft hover:shadow-medium">
            View All Categories
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Categories;