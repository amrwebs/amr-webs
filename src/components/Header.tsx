import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

interface HeaderProps {
  onNavigateToShop?: () => void;
  onNavigateToHome?: () => void;
  currentView?: 'home' | 'shop' | 'product';
}

export function Header({ onNavigateToShop, onNavigateToHome, currentView = 'home' }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Inicio", href: "#hero" },
    { name: "Nosotros", href: "#about" },
    { name: "Servicios", href: "#services" },
    { name: "Proceso", href: "#methodology" },
    { name: "Contacto", href: "#contact" },
  ];

  const whatsappMessage = encodeURIComponent(
    "¡Hola! Me gustaría contactar con AMR WEBS COMPANY.\n\n" +
    "📋 Mis datos:\n" +
    "• Nombre: \n" +
    "• Teléfono: \n" +
    "• Correo: \n" +
    "• Idea/Proyecto: \n\n" +
    "Gracias. Espero su respuesta en menos de 24 hs."
  );
  
  const whatsappUrl = `https://wa.me/5493455497336?text=${whatsappMessage}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#001F3F]/98 via-[#003D5C]/98 to-[#007ACC]/98 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,122,204,0.4)] border-b border-[#00A8E8]/30">
      {/* Animated metallic shine effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent -translate-x-full animate-shimmer" style={{ willChange: 'transform' }} />
      </div>

      {/* Futuristic scan line effect */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00A8E8] to-transparent">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00A8E8] to-transparent blur-sm animate-pulse" />
      </div>

      <div className="relative max-w-[1320px] mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <a 
            href="#hero" 
            onClick={(e) => {
              if (currentView === 'home') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else {
                onNavigateToHome?.();
              }
            }}
            className="flex items-center gap-4 group relative z-10 cursor-pointer"
          >
            <div className="relative">
              <img 
                src="https://i.postimg.cc/7LL2Fc4q/AMR-LOGO-METALICO-PNG.png" 
                alt="AMR Logo" 
                className="relative h-16 w-auto"
              />
            </div>
            <div className="hidden sm:block">
              <div className="font-['Poppins'] font-bold text-xl text-white">
                AMR WEBS
              </div>
              <div className="text-xs text-[#00A8E8]">
                Digital Solutions
              </div>
            </div>
          </a>

          {/* Desktop Navigation - Futuristic Style */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  if (currentView === 'home') {
                    e.preventDefault();
                    const targetId = link.href.replace('#', '');
                    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group relative px-5 py-2 font-medium transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background glow effect */}
                <div className="absolute inset-0 rounded-lg bg-white/5 group-hover:bg-white/10 transition-all duration-300" />
                
                {/* Metallic border */}
                <div className="absolute inset-0 rounded-lg border border-[#00A8E8]/0 group-hover:border-[#00A8E8]/50 transition-all duration-300" />
                
                {/* Hover scan line */}
                <div className="absolute inset-0 rounded-lg overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" style={{ willChange: 'transform' }} />
                </div>
                
                {/* Text */}
                <span className="relative text-white/90 group-hover:text-[#00A8E8] transition-colors duration-300">
                  {link.name}
                </span>
                
                {/* Active indicator line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-transparent via-[#00A8E8] to-transparent transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* CTA Button - Desktop - Futuristic Style */}
          {/* TIENDA EN CONSTRUCCIÓN - Temporalmente oculto */}
          {/* <div className="hidden lg:block relative z-10">
            {currentView === 'home' ? (
              <Button 
                className="relative overflow-hidden px-6 py-2 transition-all duration-300 border bg-gradient-to-r from-[#00A8E8] to-[#007ACC] hover:from-[#FFFFFF] hover:to-[#00A8E8] text-white hover:text-[#001F3F] border-[#00A8E8]/50 hover:border-white shadow-[0_0_20px_rgba(0,168,232,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] hover:scale-105"
                onClick={onNavigateToShop}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative">Tienda Online</span>
              </Button>
            ) : currentView === 'shop' ? (
              <Button 
                className="relative overflow-hidden px-6 py-2 transition-all duration-300 border bg-gradient-to-r from-[#00A8E8] to-[#007ACC] hover:from-[#FFFFFF] hover:to-[#00A8E8] text-white hover:text-[#001F3F] border-[#00A8E8]/50 hover:border-white shadow-[0_0_20px_rgba(0,168,232,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] hover:scale-105"
                onClick={onNavigateToHome}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative">Volver a Inicio</span>
              </Button>
            ) : (
              <Button 
                className="relative overflow-hidden px-6 py-2 transition-all duration-300 border bg-gradient-to-r from-[#00A8E8] to-[#007ACC] hover:from-[#FFFFFF] hover:to-[#00A8E8] text-white hover:text-[#001F3F] border-[#00A8E8]/50 hover:border-white shadow-[0_0_20px_rgba(0,168,232,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] hover:scale-105"
                onClick={onNavigateToShop}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative">Volver a Tienda</span>
              </Button>
            )}
          </div> */}

          {/* Mobile Menu Button - Futuristic Style */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative p-2 rounded-lg transition-all duration-300 text-white hover:bg-white/10 border border-[#00A8E8]/30"
            aria-label="Toggle menu"
          >
            <div className={`absolute inset-0 rounded-lg transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 bg-[#00A8E8]/20' : 'opacity-0'}`} />
            {isMenuOpen ? <X className="relative w-6 h-6" /> : <Menu className="relative w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation - Futuristic Style */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-[#00A8E8]/30 bg-gradient-to-b from-[#001F3F]/50 to-transparent backdrop-blur-md animate-slide-up">
            <div className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    setIsMenuOpen(false);
                    if (currentView === 'home') {
                      e.preventDefault();
                      const targetId = link.href.replace('#', '');
                      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="group relative px-4 py-3 rounded-lg font-medium text-white/90 hover:text-[#00A8E8] hover:bg-white/5 transition-all duration-300"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Mobile item glow effect */}
                  <div className="absolute inset-0 rounded-lg border border-[#00A8E8]/50 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                  
                  <span className="relative">{link.name}</span>
                  
                  {/* Animated line */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 h-0 w-1 group-hover:h-full bg-[#00A8E8] transition-all duration-300 rounded-full" />
                </a>
              ))}
              {/* TIENDA EN CONSTRUCCIÓN - Temporalmente oculto */}
              {/* {currentView === 'home' ? (
                <Button 
                  className="relative overflow-hidden w-full mt-4 transition-all duration-300 bg-gradient-to-r from-[#00A8E8] to-[#007ACC] hover:from-[#FFFFFF] hover:to-[#00A8E8] text-white hover:text-[#001F3F] shadow-[0_0_20px_rgba(0,168,232,0.4)]"
                  onClick={() => {
                    onNavigateToShop?.();
                    setIsMenuOpen(false);
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <span className="relative">Tienda Online</span>
                </Button>
              ) : currentView === 'shop' ? (
                <Button 
                  className="relative overflow-hidden w-full mt-4 transition-all duration-300 bg-gradient-to-r from-[#00A8E8] to-[#007ACC] hover:from-[#FFFFFF] hover:to-[#00A8E8] text-white hover:text-[#001F3F] shadow-[0_0_20px_rgba(0,168,232,0.4)]"
                  onClick={() => {
                    onNavigateToHome?.();
                    setIsMenuOpen(false);
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <span className="relative">Volver a Inicio</span>
                </Button>
              ) : (
                <Button 
                  className="relative overflow-hidden w-full mt-4 transition-all duration-300 bg-gradient-to-r from-[#00A8E8] to-[#007ACC] hover:from-[#FFFFFF] hover:to-[#00A8E8] text-white hover:text-[#001F3F] shadow-[0_0_20px_rgba(0,168,232,0.4)]"
                  onClick={() => {
                    onNavigateToShop?.();
                    setIsMenuOpen(false);
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <span className="relative">Volver a Tienda</span>
                </Button>
              )} */}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
