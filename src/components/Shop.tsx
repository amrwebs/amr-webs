import { useState, useEffect } from "react";
import { Search, Filter, TrendingUp, Sparkles, Zap, Shield, Truck, Award, Star, ChevronRight, Smartphone, Laptop, Home, SlidersHorizontal, ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { motion } from "motion/react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { ShopCategories } from "./ShopCategories";

interface Product {
  id: string;
  name: string;
  brand: string;
  category: "celular" | "notebook";
  price: number;
  originalPrice?: number;
  image: string;
  specs: string[];
  stock: number;
  isNew?: boolean;
  isFeatured?: boolean;
  discount?: number;
  rating?: number;
}

interface ShopProps {
  onViewProduct?: (product: Product) => void;
}

// Productos Motorola
const products: Product[] = [
  {
    id: "moto-g05-rojo",
    name: "Celular Moto G05 4/64gb Rojo",
    brand: "Motorola",
    category: "celular",
    price: 140000,
    image: "https://i.postimg.cc/KvHcdxSy/Celular-Moto-G05-4-64gb-Rojo-140-000.png",
    specs: ["4GB RAM", "64GB", "Rojo"],
    stock: 15,
    rating: 4
  },
  {
    id: "moto-g04-negro",
    name: "Moto G04 128 GB Negro 4 GB RAM",
    brand: "Motorola",
    category: "celular",
    price: 170000,
    image: "https://i.postimg.cc/sDNftsds/Moto-G04-128-GB-negro-4-GB-RAM-170-000.png",
    specs: ["4GB RAM", "128GB", "Negro"],
    stock: 20,
    rating: 4
  },
  {
    id: "moto-g04s-128gb",
    name: "Motorola G04s 128gb 4.4gb Ram",
    brand: "Motorola",
    category: "celular",
    price: 180000,
    image: "https://i.postimg.cc/FKtrHpHJ/Motorola-G04s-128gb-4-4gb-Ram-180.png",
    specs: ["4.4GB RAM", "128GB"],
    stock: 18,
    rating: 4
  },
  {
    id: "moto-g04s-256gb-negro",
    name: "Motorola Moto G04s 4gb Ram 256gb Dual Sim Negro Cósmico",
    brand: "Motorola",
    category: "celular",
    price: 197000,
    image: "https://i.postimg.cc/fb4zRCR8/Motorola-Moto-G04s-4gb-Ram-256gb-Dual-Sim-Negro-Cosmico-197-000.png",
    specs: ["4GB RAM", "256GB", "Dual Sim", "Negro Cósmico"],
    stock: 12,
    rating: 5
  },
  {
    id: "moto-g15-se-grey",
    name: "Motorola Moto G15 Se 4 Gb 256 Gb Gravity Grey",
    brand: "Motorola",
    category: "celular",
    price: 240000,
    image: "https://i.postimg.cc/3wM8x1x6/Motorola-Moto-G15-Se-4-Gb-256-Gb-Gravity-Grey-240-000.png",
    specs: ["4GB RAM", "256GB", "Gravity Grey"],
    stock: 16,
    rating: 4
  },
  {
    id: "moto-g35-5g-256gb",
    name: "Motorola G35 5g Dual Sim 256gb 4gb Ram Negro",
    brand: "Motorola",
    category: "celular",
    price: 265000,
    image: "https://i.postimg.cc/Gp0LmKm4/Motorola-G35-5g-Dual-Sim-256gb-4gb-Ram-Negro-265-000.png",
    specs: ["5G", "4GB RAM", "256GB", "Dual Sim", "Negro"],
    stock: 14,
    rating: 5,
    isNew: true
  },
  {
    id: "moto-g15-512gb",
    name: "Motorola Moto G15 512gb 4gb Ram",
    brand: "Motorola",
    category: "celular",
    price: 300000,
    image: "https://i.postimg.cc/YScrCRCD/Motorola-Moto-G15-512gb-4gb-Ram-300-000.png",
    specs: ["4GB RAM", "512GB"],
    stock: 10,
    rating: 4
  },
  {
    id: "moto-g15-power",
    name: "Moto G15 Power 256gb 8gb Ram",
    brand: "Motorola",
    category: "celular",
    price: 320000,
    image: "https://i.postimg.cc/25pkSGS4/Moto-G15-Power-256gb-8gb-Ram-320-000.png",
    specs: ["8GB RAM", "256GB", "Power"],
    stock: 11,
    rating: 5
  },
  {
    id: "moto-g35-5g-8gb",
    name: "Motorola Moto G35 5g 256gb 8gb Ram Liberado Negro",
    brand: "Motorola",
    category: "celular",
    price: 325000,
    image: "https://i.postimg.cc/BvxqLFjm/Motorola-Moto-G35-5g-256gb-8gb-Ram-Liberado-Negro-325-000.png",
    specs: ["5G", "8GB RAM", "256GB", "Liberado", "Negro"],
    stock: 9,
    rating: 5,
    isNew: true
  },
  {
    id: "moto-g85-verde-olivo",
    name: "Celular Moto G85 5g Dual Sim 256gb Verde Olivo 8gb Ram",
    brand: "Motorola",
    category: "celular",
    price: 390000,
    image: "https://i.postimg.cc/5NR9Zbdc/Celular-Moto-G85-5g-Dual-Sim-256gb-Verde-Olivo-8gb-Ram-390-000.png",
    specs: ["5G", "8GB RAM", "256GB", "Dual Sim", "Verde Olivo"],
    stock: 8,
    rating: 5,
    isFeatured: true
  },
  {
    id: "moto-g85-verde-olivo-2",
    name: "Celular Moto G85 5g Dual Sim 256gb Verde Olivo 8gb Ram",
    brand: "Motorola",
    category: "celular",
    price: 390000,
    image: "https://i.postimg.cc/3JcrPYMB/Celular-Moto-G85-5g-Dual-Sim-256gb-Verde-Olivo-8gb-Ram-390-000-2.png",
    specs: ["5G", "8GB RAM", "256GB", "Dual Sim", "Verde Olivo"],
    stock: 7,
    rating: 5,
    isFeatured: true
  },
  {
    id: "moto-edge-50-fusion",
    name: "Celular Motorola Moto Edge 50 Fusion 8/256 Gb Verde Azulado",
    brand: "Motorola",
    category: "celular",
    price: 439000,
    image: "https://i.postimg.cc/PqmtpDCB/Sin-titulo-Celular-Motorola-Moto-Edge-50-Fusion-8-256-Gb-Verde-Azulado-439-000.png",
    specs: ["8GB RAM", "256GB", "Verde Azulado", "Edge 50"],
    stock: 6,
    rating: 5,
    isFeatured: true
  },
  {
    id: "moto-edge-50-pro",
    name: "Motorola moto Edge 50 Pro 512gb 12gb Ram",
    brand: "Motorola",
    category: "celular",
    price: 740000,
    image: "https://i.postimg.cc/R0rSZdZw/Motorola-moto-Edge-50-Pro-512gb-12gb-Ram-740-000.png",
    specs: ["12GB RAM", "512GB", "Edge 50 Pro"],
    stock: 5,
    rating: 5,
    isFeatured: true,
    isNew: true
  },
  {
    id: "moto-razr-50-ultra",
    name: "Motorola Razr 50 Ultra Spring Green 512gb 12gb",
    brand: "Motorola",
    category: "celular",
    price: 1340000,
    image: "https://i.postimg.cc/pdD2hjm6/Motorola-Razr-50-Ultra-Spring-Green-512gb-12gb-1-340-000.png",
    specs: ["12GB RAM", "512GB", "Spring Green", "Plegable", "Ultra"],
    stock: 3,
    rating: 5,
    isFeatured: true,
    isNew: true
  },
  // Samsung Products
  {
    id: "samsung-a07",
    name: "Samsung A07",
    brand: "Samsung",
    category: "celular",
    price: 210000,
    image: "https://i.postimg.cc/4y1PmWGz/samsung-a-07-210.png",
    specs: ["4GB RAM", "128GB"],
    stock: 18,
    rating: 4
  },
  {
    id: "samsung-a17-5g",
    name: "Samsung Galaxy A17 5g 256gb 8gb Ram",
    brand: "Samsung",
    category: "celular",
    price: 325000,
    image: "https://i.postimg.cc/ZnLHCwmc/Samsung-Galaxy-A17-5g-256gb-8gb-Ram-325.png",
    specs: ["5G", "8GB RAM", "256GB"],
    stock: 14,
    rating: 4,
    isNew: true
  },
  {
    id: "samsung-a16-grey",
    name: "Celular Samsung Galaxy A16 256 GB 8 GB de RAM color gris",
    brand: "Samsung",
    category: "celular",
    price: 400000,
    image: "https://i.postimg.cc/d396L5Fr/Celular-Samsung-Galaxy-A16-256-GB-8-GB-de-RAM-color-gris-400.png",
    specs: ["8GB RAM", "256GB", "Gris"],
    stock: 16,
    rating: 4
  },
  {
    id: "samsung-a56-rosa",
    name: "Cel Samsung A56 12 Gb Ram 256 Gb 5g 6.7 Pulgadas Rosa",
    brand: "Samsung",
    category: "celular",
    price: 700000,
    image: "https://i.postimg.cc/5Q6Lrq6y/Cel-Samsung-A56-12-Gb-Ram-256-Gb-5g-6-7-Pulgadas-Rosa-700.png",
    specs: ["5G", "12GB RAM", "256GB", "6.7\"", "Rosa"],
    stock: 10,
    rating: 5,
    isFeatured: true
  },
  {
    id: "samsung-s24-fe-blue",
    name: "Samsung Galaxy S24 Fe 256gb 8gb 5g Blue",
    brand: "Samsung",
    category: "celular",
    price: 1000000,
    image: "https://i.postimg.cc/brRgsmPR/Samsung-Galaxy-S24-Fe-256gb-8gb-5g-Blue-1-000-000.png",
    specs: ["5G", "8GB RAM", "256GB", "Blue", "S24 FE"],
    stock: 8,
    rating: 5,
    isFeatured: true,
    isNew: true
  },
  {
    id: "samsung-s25-128gb",
    name: "Samsung Galaxy S25 128gb",
    brand: "Samsung",
    category: "celular",
    price: 1400000,
    image: "https://i.postimg.cc/xqCvqYgP/Samsung-Galaxy-S25-128g-1-400-000.png",
    specs: ["8GB RAM", "128GB", "S25"],
    stock: 7,
    rating: 5,
    isFeatured: true,
    isNew: true
  },
  {
    id: "samsung-s24-ultra-negro",
    name: "Samsung Galaxy S24 Ultra 256 GB Negro 12 GB RAM",
    brand: "Samsung",
    category: "celular",
    price: 1800000,
    image: "https://i.postimg.cc/L4kNC817/Samsung-Galaxy-S24-Ultra-256-GB-Negro-12-GB-RAM-1-800-000.png",
    specs: ["12GB RAM", "256GB", "Negro", "S24 Ultra"],
    stock: 6,
    rating: 5,
    isFeatured: true
  },
  {
    id: "samsung-s25-plus-mint",
    name: "Samsung Galaxy S25 Plus 256gb Mint",
    brand: "Samsung",
    category: "celular",
    price: 1900000,
    image: "https://i.postimg.cc/8s5RsDwH/Samsung-Galaxy-S25-Plus-256gb-Mint-1900-000.png",
    specs: ["12GB RAM", "256GB", "Mint", "S25 Plus"],
    stock: 5,
    rating: 5,
    isFeatured: true,
    isNew: true
  },
  {
    id: "samsung-z-flip-7",
    name: "Galaxy Z Flip 7 512gb 12Gb RAM Jetblack",
    brand: "Samsung",
    category: "celular",
    price: 2300000,
    image: "https://i.postimg.cc/PvPY7zPr/Galaxy-Z-Flip-7-512gb-12Gb-RAM-Jetblack-2-300-000.png",
    specs: ["12GB RAM", "512GB", "Jetblack", "Plegable", "Z Flip 7"],
    stock: 4,
    rating: 5,
    isFeatured: true,
    isNew: true
  },
  {
    id: "samsung-s25-ultra-grey",
    name: "Samsung Galaxy S25 Ultra 5G Dual SIM 512 GB Gris 12 GB RAM",
    brand: "Samsung",
    category: "celular",
    price: 2300000,
    image: "https://i.postimg.cc/8kdtKzv8/Samsung-Galaxy-S25-Ultra-5G-Dual-SIM-512-GB-Gris-12-GB-RAM-2-300.png",
    specs: ["5G", "12GB RAM", "512GB", "Dual SIM", "Gris", "S25 Ultra"],
    stock: 4,
    rating: 5,
    isFeatured: true,
    isNew: true
  },
  {
    id: "samsung-s25-ultra-titanium",
    name: "Samsung Galaxy S25 Ultra 1tb Titanium Black",
    brand: "Samsung",
    category: "celular",
    price: 2500000,
    image: "https://i.postimg.cc/595n72Ch/Samsung-Galaxy-S25-Ultra-1tb-Titanium-Black-2-500.png",
    specs: ["12GB RAM", "1TB", "Titanium Black", "S25 Ultra"],
    stock: 3,
    rating: 5,
    isFeatured: true,
    isNew: true
  },
  // Apple Products
  {
    id: "iphone-13-128gb",
    name: "iPhone 13 128gb",
    brand: "Apple",
    category: "celular",
    price: 1200000,
    image: "https://i.postimg.cc/xdbPKfYD/iphone-13-128gb.png",
    specs: ["4GB RAM", "128GB", "iOS"],
    stock: 12,
    rating: 5
  },
  {
    id: "iphone-14-amarillo",
    name: "iPhone 14 128 GB Amarillo",
    brand: "Apple",
    category: "celular",
    price: 1450000,
    image: "https://i.postimg.cc/mrFSQLRW/i-Phone-14-128-GB-amarillo.png",
    specs: ["6GB RAM", "128GB", "Amarillo", "iOS"],
    stock: 10,
    rating: 5
  },
  {
    id: "iphone-15-pink",
    name: "iPhone 15 Apple 128gb Pink",
    brand: "Apple",
    category: "celular",
    price: 1600000,
    image: "https://i.postimg.cc/7LTNgHD4/Iphone-15-Apple-128gb-pink.png",
    specs: ["6GB RAM", "128GB", "Pink", "iOS"],
    stock: 9,
    rating: 5,
    isFeatured: true
  },
  {
    id: "iphone-16-ultramarino",
    name: "Apple iPhone 16 256 GB Ultramarino",
    brand: "Apple",
    category: "celular",
    price: 1700000,
    image: "https://i.postimg.cc/VJjM2NLJ/Apple-i-Phone-16-256-GB-Ultramarino.png",
    specs: ["8GB RAM", "256GB", "Ultramarino", "iOS"],
    stock: 8,
    rating: 5,
    isFeatured: true,
    isNew: true
  },
  {
    id: "iphone-15-verde",
    name: "Apple iPhone 15 256 GB Verde",
    brand: "Apple",
    category: "celular",
    price: 1780000,
    image: "https://i.postimg.cc/VJjM2NL5/Apple-i-Phone-15-256-GB-Verde-1780.png",
    specs: ["6GB RAM", "256GB", "Verde", "iOS"],
    stock: 7,
    rating: 5
  },
  {
    id: "iphone-15-negro",
    name: "Apple iPhone 15 256 GB Negro",
    brand: "Apple",
    category: "celular",
    price: 1850000,
    image: "https://i.postimg.cc/52r3YHhB/Apple-i-Phone-15-256-GB-Negro.png",
    specs: ["6GB RAM", "256GB", "Negro", "iOS"],
    stock: 8,
    rating: 5
  },
  {
    id: "iphone-15-azul",
    name: "Apple iPhone 15 256 GB Azul",
    brand: "Apple",
    category: "celular",
    price: 1990000,
    image: "https://i.postimg.cc/VJjM2NLd/Apple-i-Phone-15-256-GB-Azul-1990.png",
    specs: ["6GB RAM", "256GB", "Azul", "iOS"],
    stock: 6,
    rating: 5
  },
  {
    id: "iphone-air-black-1",
    name: "Apple iPhone Air 256gb Space Black A3260",
    brand: "Apple",
    category: "celular",
    price: 2100000,
    image: "https://i.postimg.cc/T3s9LyzB/Apple-Iphone-Air-256gb-Space-Black-A3260.png",
    specs: ["8GB RAM", "256GB", "Space Black", "iOS", "Ultra Delgado"],
    stock: 5,
    rating: 5,
    isFeatured: true,
    isNew: true
  },
  {
    id: "iphone-air-black-2",
    name: "Apple iPhone Air 256gb Space Black A3260",
    brand: "Apple",
    category: "celular",
    price: 2100000,
    image: "https://i.postimg.cc/XYP8GZRh/Apple-Iphone-Air-256gb-Space-Black-A3260-2.png",
    specs: ["8GB RAM", "256GB", "Space Black", "iOS", "Ultra Delgado"],
    stock: 5,
    rating: 5,
    isFeatured: true,
    isNew: true
  },
  {
    id: "iphone-17-pro-orange-1",
    name: "Apple iPhone 17 Pro 256 Gb Orange",
    brand: "Apple",
    category: "celular",
    price: 2300000,
    image: "https://i.postimg.cc/mPQMKr23/Apple-i-Phone-17-Pro-256-Gb-Orange.png",
    specs: ["12GB RAM", "256GB", "Orange", "iOS", "Pro"],
    stock: 4,
    rating: 5,
    isFeatured: true,
    isNew: true
  },
  {
    id: "iphone-17-pro-orange-2",
    name: "Apple iPhone 17 Pro 256 Gb Orange",
    brand: "Apple",
    category: "celular",
    price: 2300000,
    image: "https://i.postimg.cc/G4kY6phF/Apple-i-Phone-17-Pro-256-Gb-Orange-2.png",
    specs: ["12GB RAM", "256GB", "Orange", "iOS", "Pro"],
    stock: 4,
    rating: 5,
    isFeatured: true,
    isNew: true
  }
];

const brands = [
  { name: "Apple", logo: "https://i.postimg.cc/fyz1btdC/Apple-logo-black-svg.png" },
  { name: "Motorola", logo: "https://i.postimg.cc/D0vRzJGR/Motorola-Logo-PNG-Isolated-HD.png" },
  { name: "Samsung", logo: "https://i.postimg.cc/Znw2vbPV/samsung-logo-0.png" }
];

const features = [
  { icon: Truck, title: "Envío Gratis", description: "En compras mayores a $50.000", color: "from-blue-500 to-cyan-500" },
  { icon: Shield, title: "Garantía Oficial", description: "12 meses de cobertura total", color: "from-purple-500 to-pink-500" },
  { icon: Zap, title: "Entrega Rápida", description: "Recibí en 24-48hs", color: "from-orange-500 to-red-500" },
  { icon: Award, title: "Calidad Premium", description: "Productos certificados", color: "from-green-500 to-emerald-500" }
];

export function Shop({ onViewProduct = () => {} }: ShopProps = {}) {
  const [shopView, setShopView] = useState<"categories" | "products">("categories");
  const [selectedCategory, setSelectedCategory] = useState<"celular" | "notebook">("celular");
  const [selectedBrand, setSelectedBrand] = useState<string | null>("Motorola");
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState<"all" | "low" | "medium" | "high" | "custom">("all");
  const [customPriceMin, setCustomPriceMin] = useState("");
  const [customPriceMax, setCustomPriceMax] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredProducts = products.filter(product => {
    const matchesCategory = product.category === selectedCategory;
    const matchesBrand = !selectedBrand || product.brand === selectedBrand;
    const matchesSearch = !searchQuery || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Price filtering
    let matchesPrice = true;
    if (priceRange === "low") {
      matchesPrice = product.price >= 100000 && product.price <= 250000;
    } else if (priceRange === "medium") {
      matchesPrice = product.price > 250000 && product.price <= 500000;
    } else if (priceRange === "high") {
      matchesPrice = product.price > 500000;
    } else if (priceRange === "custom") {
      const min = customPriceMin ? parseFloat(customPriceMin) : 0;
      const max = customPriceMax ? parseFloat(customPriceMax) : Infinity;
      matchesPrice = product.price >= min && product.price <= max;
    }
    
    return matchesCategory && matchesBrand && matchesSearch && matchesPrice;
  }).sort((a, b) => a.price - b.price); // Sort by price (low to high)

  const handleBuyNow = (product: Product) => {
    const message = encodeURIComponent(
      `¡Hola! Me interesa comprar:\n\n` +
      `📱 Producto: ${product.name}\n` +
      `🏷️ Marca: ${product.brand}\n` +
      `💰 Precio: $${product.price.toLocaleString('es-AR')}\n\n` +
      `¿Está disponible?`
    );
    window.open(`https://wa.me/5493455497336?text=${message}`, '_blank');
  };

  const handleSelectCategory = (category: "celular" | "notebook") => {
    setSelectedCategory(category);
    setShopView("products");
    // Reset filters when changing category
    setPriceRange("all");
    setCustomPriceMin("");
    setCustomPriceMax("");
    setSearchQuery("");
    // Set default brand based on category
    if (category === "celular") {
      setSelectedBrand("Motorola");
    } else {
      setSelectedBrand(null);
    }
  };

  const handleBackToCategories = () => {
    setShopView("categories");
  };

  // If showing categories view, render ShopCategories component
  if (shopView === "categories") {
    return <ShopCategories onSelectCategory={handleSelectCategory} />;
  }

  // Otherwise, render products view
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F7FA] via-[#E8EEF4] to-[#D1DCE8]">
      {/* Hero Section de Tienda */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#001F3F]/5 via-transparent to-[#007ACC]/5" />
          <motion.div 
            className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-[#007ACC]/10 to-transparent rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tl from-[#00A8E8]/10 to-transparent rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>

        <div className="relative z-10 max-w-[1320px] mx-auto px-6">
          {/* Back Button and Breadcrumb */}
          <div className="flex items-center gap-6 mb-8">
            <motion.button
              onClick={handleBackToCategories}
              className="flex items-center gap-2 text-[#007ACC] hover:text-[#00A8E8] transition-colors font-medium px-4 py-2 rounded-lg hover:bg-white/50"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ x: -5 }}
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Volver</span>
            </motion.button>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex-1"
            >
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink 
                      onClick={handleBackToCategories}
                      className="flex items-center gap-2 text-[#007ACC] hover:text-[#00A8E8] font-medium cursor-pointer"
                    >
                      <Home className="w-4 h-4" />
                      Inicio
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#" className="text-[#007ACC] hover:text-[#00A8E8] font-medium">
                      {selectedCategory === "celular" ? "Celulares" : "Notebooks"}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  {selectedBrand && (
                    <>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbPage className="text-[#0A4D68] font-semibold">
                          {selectedBrand}
                        </BreadcrumbPage>
                      </BreadcrumbItem>
                    </>
                  )}
                </BreadcrumbList>
              </Breadcrumb>
            </motion.div>
          </div>

          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#007ACC] to-[#00A8E8] text-white px-6 py-3 rounded-full mb-6 shadow-lg"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-5 h-5" />
              <span className="font-semibold">Tienda Oficial AMR WEBS</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-['Poppins'] mb-4">
              <span className="bg-gradient-to-r from-[#001F3F] via-[#007ACC] to-[#00A8E8] bg-[length:200%_auto] text-transparent bg-clip-text animate-crystal-shine">
                {selectedCategory === "celular" ? "Explora nuestros Celulares" : "Explora nuestras Notebooks"}
              </span>
            </h1>
            
            <p className="text-lg text-[#212529]/70 max-w-3xl mb-8">
              {selectedCategory === "celular" 
                ? "Descubrí la última tecnología móvil con los mejores precios y garantía oficial"
                : "Encontrá la notebook perfecta para tu trabajo o estudios"}
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#007ACC]/60 group-focus-within:text-[#007ACC] transition-colors" />
                <Input
                  type="text"
                  placeholder="Buscar productos, marcas o modelos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-6 bg-white/90 backdrop-blur-sm border-2 border-[#007ACC]/20 rounded-2xl shadow-lg focus:border-[#007ACC] focus:shadow-xl transition-all duration-300"
                />
              </div>
            </div>
          </motion.div>

          {/* Brand Tabs - Only for Celulares */}
          {selectedCategory === "celular" && (
            <motion.div
              className="flex items-center justify-center gap-4 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {brands.map((brand) => (
                <motion.button
                  key={brand.name}
                  onClick={() => setSelectedBrand(brand.name)}
                  className={`group relative px-8 py-4 rounded-2xl transition-all duration-300 ${
                    selectedBrand === brand.name
                      ? "bg-gradient-to-r from-[#007ACC] to-[#00A8E8] text-white shadow-xl scale-105"
                      : "bg-white/90 backdrop-blur-sm text-[#0A4D68] hover:shadow-lg hover:scale-102"
                  }`}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-3">
                    <img 
                      src={brand.logo} 
                      alt={brand.name}
                      className={`h-8 object-contain transition-all duration-300 ${
                        selectedBrand === brand.name ? "brightness-0 invert" : "grayscale group-hover:grayscale-0"
                      }`}
                    />
                    <span className="font-semibold">{brand.name}</span>
                  </div>
                  {selectedBrand === brand.name && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-white rounded-full"
                      layoutId="brand-indicator"
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Results Count Bar */}
      <section className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-[#007ACC]/20 shadow-lg transition-all duration-300">
        <div className="max-w-[1320px] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <SlidersHorizontal className="w-5 h-5 text-[#007ACC]" />
              <span className="font-semibold text-[#0A4D68]">
                <span className="text-[#007ACC]">{filteredProducts.length}</span> productos encontrados
              </span>
            </div>
            <div className="text-sm text-[#212529]/60">
              Ordenado por precio: menor a mayor
            </div>
          </div>
        </div>
      </section>

      {/* Products Section with Sidebar */}
      <section className="py-16">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <aside className="lg:col-span-1">
              <div className="sticky top-36 space-y-6">
                {/* Price Range Filter */}
                <motion.div
                  className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#007ACC]/10"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="font-bold text-[#0A4D68] mb-6 flex items-center gap-2">
                    <Filter className="w-5 h-5 text-[#007ACC]" />
                    Rango de Precios
                  </h3>
                  
                  <div className="space-y-3">
                    {[
                      { value: "all", label: "Todos los precios", range: "" },
                      { value: "low", label: "Precio bajo", range: "$100.000 - $250.000" },
                      { value: "medium", label: "Precio medio", range: "$250.000 - $500.000" },
                      { value: "high", label: "Precio alto", range: "+$500.000" }
                    ].map((option) => (
                      <motion.button
                        key={option.value}
                        onClick={() => {
                          setPriceRange(option.value as any);
                          setCustomPriceMin("");
                          setCustomPriceMax("");
                        }}
                        className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${
                          priceRange === option.value
                            ? "border-[#007ACC] bg-[#007ACC]/5 shadow-md"
                            : "border-gray-200 hover:border-[#007ACC]/50 hover:bg-[#F5F7FA]"
                        }`}
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className={`font-semibold ${priceRange === option.value ? "text-[#007ACC]" : "text-[#0A4D68]"}`}>
                              {option.label}
                            </p>
                            {option.range && (
                              <p className="text-sm text-[#212529]/60 mt-1">{option.range}</p>
                            )}
                          </div>
                          {priceRange === option.value && (
                            <div className="w-5 h-5 bg-gradient-to-br from-[#007ACC] to-[#00A8E8] rounded-full flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                          )}
                        </div>
                      </motion.button>
                    ))}
                  </div>

                  {/* Custom Price Range */}
                  <div className="mt-6 pt-6 border-t border-[#007ACC]/10">
                    <p className="font-semibold text-[#0A4D68] mb-4">Precio Personalizado</p>
                    <div className="space-y-3">
                      <div>
                        <label className="text-sm text-[#212529]/70 mb-2 block">Mínimo</label>
                        <Input
                          type="number"
                          placeholder="$ 0"
                          value={customPriceMin}
                          onChange={(e) => setCustomPriceMin(e.target.value)}
                          className="bg-white border-[#007ACC]/20 focus:border-[#007ACC]"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-[#212529]/70 mb-2 block">Máximo</label>
                        <Input
                          type="number"
                          placeholder="$ 999.999"
                          value={customPriceMax}
                          onChange={(e) => setCustomPriceMax(e.target.value)}
                          className="bg-white border-[#007ACC]/20 focus:border-[#007ACC]"
                        />
                      </div>
                      <Button
                        className="w-full bg-gradient-to-r from-[#007ACC] to-[#00A8E8] hover:from-[#0A4D68] hover:to-[#007ACC] text-white border-0"
                        onClick={() => {
                          if (customPriceMin || customPriceMax) {
                            setPriceRange("custom");
                          }
                        }}
                        disabled={!customPriceMin && !customPriceMax}
                      >
                        Aplicar Filtro
                      </Button>
                    </div>
                  </div>

                  {/* Clear Filters */}
                  {(priceRange !== "all" || searchQuery) && (
                    <Button
                      variant="outline"
                      className="w-full mt-4 border-[#007ACC]/30 text-[#007ACC] hover:bg-[#007ACC]/10"
                      onClick={() => {
                        setPriceRange("all");
                        setCustomPriceMin("");
                        setCustomPriceMax("");
                        setSearchQuery("");
                      }}
                    >
                      Limpiar Filtros
                    </Button>
                  )}
                </motion.div>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="lg:col-span-3">
            {filteredProducts.length === 0 ? (
              <motion.div
                className="text-center py-24 col-span-full"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="w-32 h-32 bg-gradient-to-br from-[#007ACC]/10 to-[#00A8E8]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-16 h-16 text-[#007ACC]/40" />
                </div>
                <h3 className="text-2xl font-bold text-[#0A4D68] mb-2">No se encontraron productos</h3>
                <p className="text-[#212529]/60 mb-8">
                  Intentá con otros filtros o limpiá los filtros actuales
                </p>
                <Button
                  className="bg-gradient-to-r from-[#007ACC] to-[#00A8E8] hover:from-[#0A4D68] hover:to-[#007ACC] text-white border-0"
                  onClick={() => {
                    setPriceRange("all");
                    setCustomPriceMin("");
                    setCustomPriceMax("");
                    setSearchQuery("");
                  }}
                >
                  Limpiar Filtros
                </Button>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Card className="group relative bg-white/95 backdrop-blur-sm border-2 border-[#007ACC]/10 hover:border-[#007ACC]/30 hover:shadow-2xl transition-all duration-500 overflow-hidden h-full flex flex-col">
                    {/* Product Image */}
                    <div className="relative overflow-hidden bg-gradient-to-br from-[#F5F7FA] to-[#E8EEF4]">
                      <div className="aspect-square relative">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        
                        {/* Overlay Effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>

                      {/* Badges */}
                      <div className="absolute top-4 left-4 flex flex-col gap-2">
                        {product.isNew && (
                          <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 shadow-lg gap-1">
                            <Sparkles className="w-3 h-3" />
                            Nuevo
                          </Badge>
                        )}
                        {product.discount && (
                          <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white border-0 shadow-lg">
                            -{product.discount}%
                          </Badge>
                        )}
                      </div>

                      <Badge className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[#007ACC] border-0 shadow-lg">
                        {product.category === "celular" ? "Celular" : "Notebook"}
                      </Badge>
                    </div>

                    {/* Product Info */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="mb-4">
                        <p className="text-sm font-semibold text-[#007ACC] mb-1">{product.brand}</p>
                        <h3 className="font-bold text-[#0A4D68] mb-2 group-hover:text-[#007ACC] transition-colors line-clamp-2">
                          {product.name}
                        </h3>
                        
                        {/* Rating */}
                        {product.rating && (
                          <div className="flex items-center gap-1 mb-3">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < product.rating!
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "fill-gray-200 text-gray-200"
                                }`}
                              />
                            ))}
                            <span className="text-sm text-[#212529]/60 ml-1">({product.rating})</span>
                          </div>
                        )}

                        {/* Specs */}
                        <div className="flex flex-wrap gap-1 mb-4">
                          {product.specs.slice(0, 3).map((spec, idx) => (
                            <Badge
                              key={idx}
                              variant="outline"
                              className="text-xs border-[#007ACC]/20 text-[#007ACC]/80 bg-[#007ACC]/5"
                            >
                              {spec}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Price and CTA */}
                      <div className="mt-auto space-y-4">
                        <div>
                          {product.originalPrice && (
                            <p className="text-sm text-[#212529]/40 line-through">
                              ${product.originalPrice.toLocaleString('es-AR')}
                            </p>
                          )}
                          <div className="flex items-baseline gap-2">
                            <p className="text-3xl font-bold bg-gradient-to-r from-[#007ACC] to-[#00A8E8] text-transparent bg-clip-text">
                              ${product.price.toLocaleString('es-AR')}
                            </p>
                          </div>
                          <p className="text-xs text-[#212529]/60 mt-1">
                            Stock: <span className={product.stock < 5 ? "text-red-500 font-semibold" : "text-green-600 font-semibold"}>
                              {product.stock} {product.stock === 1 ? "unidad" : "unidades"}
                            </span>
                          </p>
                        </div>

                        <div className="space-y-2">
                          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <Button
                              variant="outline"
                              className="w-full border-2 border-[#007ACC] text-[#007ACC] hover:bg-[#007ACC] hover:text-white transition-all duration-300"
                              onClick={() => onViewProduct(product)}
                            >
                              Ver más información
                            </Button>
                          </motion.div>
                          
                          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <Button
                              className="w-full bg-gradient-to-r from-[#007ACC] to-[#00A8E8] hover:from-[#0A4D68] hover:to-[#007ACC] text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group/btn"
                              onClick={() => handleBuyNow(product)}
                              disabled={product.stock === 0}
                            >
                              {product.stock === 0 ? (
                                "Sin Stock"
                              ) : (
                                <span className="flex items-center gap-2">
                                  Comprar por WhatsApp
                                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                </span>
                              )}
                            </Button>
                          </motion.div>
                        </div>
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#007ACC]/0 via-[#00A8E8]/0 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />
                  </Card>
                </motion.div>
              ))}
              </div>
            )}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#001F3F] via-[#003D5C] to-[#007ACC]" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.1)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-shimmer" />
        </div>
        
        <div className="relative max-w-[1320px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-semibold">Ofertas Exclusivas</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Poppins']">
              ¿Querés recibir las mejores ofertas?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Contactanos por WhatsApp y te mantendremos informado sobre lanzamientos y promociones especiales
            </p>

            <Button
              size="lg"
              className="bg-white text-[#007ACC] hover:bg-white/90 px-8 py-6 text-lg shadow-2xl hover:shadow-3xl transition-all duration-300"
              onClick={() => window.open('https://wa.me/5493455497336?text=Hola! Quiero recibir información sobre ofertas y novedades', '_blank')}
            >
              Contactar por WhatsApp
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Brands Showcase */}
      <section className="py-16 bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A4D68] mb-4 font-['Poppins']">
              Marcas que Confiamos
            </h2>
            <p className="text-[#212529]/60 max-w-2xl mx-auto">
              Trabajamos con las marcas más reconocidas del mercado tecnológico
            </p>
          </motion.div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.name}
                className="flex items-center justify-center p-6 bg-[#F5F7FA] rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-full h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
