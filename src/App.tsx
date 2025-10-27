import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { AboutUs } from "./components/AboutUs";
import { Methodology } from "./components/Methodology";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import { Shop } from "./components/Shop";
import { ProductDetail } from "./components/ProductDetail";
import { Toaster } from "./components/ui/sonner";

interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  image: string;
  specs: string[];
  stock: number;
  rating: number;
  isFeatured?: boolean;
  isNew?: boolean;
}

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'shop' | 'product'>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleViewProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentView('product');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToShop = () => {
    setCurrentView('shop');
    setSelectedProduct(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-right" richColors />
      <Header 
        currentView={currentView}
        onNavigateToShop={() => setCurrentView('shop')}
        onNavigateToHome={() => setCurrentView('home')}
      />
      
      {currentView === 'home' && (
        <>
          <Hero />
          <AboutUs />
          <Services />
          <Methodology />
          <ContactForm />
          <Footer />
        </>
      )}
      
      {currentView === 'shop' && (
        <>
          <Shop onViewProduct={handleViewProduct} />
          <Footer />
        </>
      )}
      
      {currentView === 'product' && selectedProduct && (
        <>
          <ProductDetail 
            product={selectedProduct}
            onBack={handleBackToShop}
          />
          <Footer />
        </>
      )}
    </div>
  );
}