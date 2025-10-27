import { Button } from "./ui/button";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Fallback gradient background (shown while video loads) */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A4D68] via-[#003D5C] to-[#007ACC]" />
        
        {/* Video Container */}
        <div className="absolute inset-0 w-full h-full">
          <iframe
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] pointer-events-none"
            src="https://www.youtube.com/embed/d1abGnc7RF8?autoplay=1&mute=1&controls=0&loop=1&playlist=d1abGnc7RF8&showinfo=0&modestbranding=1&rel=0&iv_load_policy=3&enablejsapi=1&playsinline=1&disablekb=1&fs=0&start=0"
            title="Background video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            loading="eager"
          />
        </div>
        
        {/* Overlay oscuro para mejorar legibilidad del contenido */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A4D68]/60 via-[#001F3F]/50 to-[#007ACC]/60" />
        
        {/* Overlay con gradiente metálico para efecto profesional */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0A4D68]/40 via-transparent to-[#00A8E8]/30" />
        
        {/* Efecto de viñeta sutil en los bordes */}
        <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.3)]" />
        
        {/* Subtle animated overlay for extra depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent animate-shimmer" style={{ willChange: 'transform' }} />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1320px] mx-auto px-6 py-24 pt-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title - Clean White Metallic */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-['Poppins'] leading-tight text-white mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            AMR WEBS, SOLUCIONES RÁPIDAS Y PROFESIONALES
          </h1>

          {/* Subtitle with Team Size Highlight */}
          <p className="text-white mb-10 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto font-light leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.6)' }}>
            Somos <span className="font-semibold text-[#00A8E8] drop-shadow-[0_0_20px_rgba(0,168,232,0.8)]">AMR WEBS COMPANY</span>. Con un equipo de{" "}
            <span className="font-semibold text-[#00A8E8] drop-shadow-[0_0_20px_rgba(0,168,232,0.8)]">+17 expertos</span>, impulsamos su negocio creando 
            aplicaciones móviles, software a medida y estrategias de marketing digital de alto impacto.
          </p>

          {/* Call-to-Action Button */}
          <div className="flex justify-center">
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#00A8E8] to-[#007ACC] hover:from-[#FFFFFF] hover:to-[#00A8E8] hover:text-[#0A4D68] text-white px-8 py-6 rounded-xl shadow-[0_0_40px_rgba(0,168,232,0.6)] hover:shadow-[0_0_60px_rgba(255,255,255,0.8)] transition-all duration-300 border-0 font-semibold text-lg hover:scale-105"
              >
                Agendar Consulta Gratuita
              </Button>
            </a>
          </div>

          {/* Trust Indicator - Optional Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_48px_rgba(0,168,232,0.6)] transition-all duration-200 border border-white/30 hover:bg-white/30 hover:scale-105" style={{ willChange: 'transform' }}>
              <div className="text-3xl md:text-4xl font-bold text-white font-['Poppins'] drop-shadow-[0_0_20px_rgba(0,168,232,0.8)]">+17</div>
              <div className="text-white/90 mt-1 font-medium">Expertos</div>
            </div>
            <div className="text-center bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_48px_rgba(0,168,232,0.6)] transition-all duration-200 border border-white/30 hover:bg-white/30 hover:scale-105" style={{ willChange: 'transform' }}>
              <div className="text-3xl md:text-4xl font-bold text-white font-['Poppins'] drop-shadow-[0_0_20px_rgba(0,168,232,0.8)]">97</div>
              <div className="text-white/90 mt-1 font-medium">Proyectos</div>
            </div>
            <div className="text-center bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_48px_rgba(0,168,232,0.6)] transition-all duration-200 border border-white/30 hover:bg-white/30 hover:scale-105" style={{ willChange: 'transform' }}>
              <div className="text-3xl md:text-4xl font-bold text-white font-['Poppins'] drop-shadow-[0_0_20px_rgba(0,168,232,0.8)]">4 Años</div>
              <div className="text-white/90 mt-1 font-medium">Experiencia</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg
          className="w-6 h-6 text-white/80 drop-shadow-[0_0_10px_rgba(0,168,232,0.8)]"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
