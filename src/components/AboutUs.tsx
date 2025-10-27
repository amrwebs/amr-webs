import { Users, TrendingUp, Award, Shield, Zap, Target } from "lucide-react";

export function AboutUs() {
  const stats = [
    { number: "+17", label: "Expertos Dedicados", icon: Users },
    { number: "97", label: "Proyectos Completados", icon: Award },
    { number: "4", label: "Años de Experiencia", icon: TrendingUp },
  ];

  const values = [
    {
      icon: Shield,
      title: "Experiencia Comprobada",
      description: "4 años desarrollando soluciones digitales exitosas para empresas de diversos sectores con 97 proyectos completados."
    },
    {
      icon: Target,
      title: "Enfoque en Resultados",
      description: "Cada proyecto está orientado a generar valor real y crecimiento sostenible para nuestros clientes."
    },
    {
      icon: Zap,
      title: "Tecnología de Punta",
      description: "Utilizamos las últimas tecnologías y mejores prácticas de la industria en cada desarrollo."
    }
  ];

  return (
    <section id="about" className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-[#001F3F] via-[#0A2540] to-[#001F3F]">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 168, 232, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 168, 232, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Subtle Glow Orbs - Optimized */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-[#00A8E8]/8 rounded-full blur-[80px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 left-1/4 w-[450px] h-[450px] bg-white/4 rounded-full blur-[70px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative max-w-[1320px] mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Logo & Visual */}
          <div className="relative order-2 lg:order-1">
            {/* Main Logo Container */}
            <div className="relative group">
              {/* Glow Background */}
              <div className="absolute -inset-8 bg-gradient-to-r from-[#007ACC]/15 via-[#00A8E8]/25 to-[#007ACC]/15 rounded-full blur-2xl opacity-50 group-hover:opacity-90 transition-opacity duration-300" style={{ willChange: 'opacity' }} />
              
              {/* Logo Container with Glass Effect */}
              <div className="relative bg-white/5 backdrop-blur-md rounded-3xl p-12 sm:p-16 border border-white/20 hover:border-[#00A8E8]/50 transition-all duration-200 shadow-[0_8px_32px_rgba(0,0,0,0.3)]" style={{ willChange: 'border-color' }}>
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#00A8E8]/40 rounded-tl-3xl" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-white/30 rounded-br-3xl" />
                
                {/* Logo Image */}
                <div className="relative flex items-center justify-center">
                  <img
                    src="https://i.postimg.cc/7LL2Fc4q/AMR-LOGO-METALICO-PNG.png"
                    alt="AMR WEBS COMPANY - Logo Metálico"
                    className="w-full max-w-md h-auto relative z-10"
                  />
                  
                  {/* Logo Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00A8E8]/20 to-transparent blur-2xl" />
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20">
                  <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#003D5C]/95 to-[#001F3F]/95 backdrop-blur-xl border-2 border-[#00A8E8]/50 shadow-[0_0_30px_rgba(0,168,232,0.5)]">
                    <Users className="w-5 h-5 text-[#00A8E8]" />
                    <span className="text-white font-bold">+17 Profesionales</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Cards - Mobile Below Logo */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-12">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={index} 
                    className="relative group text-center bg-white/5 backdrop-blur-xl rounded-xl p-4 sm:p-6 border border-white/20 hover:border-[#00A8E8]/50 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
                  >
                    {/* Icon */}
                    <div className="flex justify-center mb-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-[#007ACC] to-[#00A8E8] p-0.5">
                        <div className="w-full h-full bg-gradient-to-br from-[#001F3F] to-[#003D5C] rounded-lg flex items-center justify-center">
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={2} />
                        </div>
                      </div>
                    </div>
                    
                    {/* Number */}
                    <div className="text-3xl sm:text-4xl font-bold text-[#00A8E8] font-['Poppins'] mb-2">
                      {stat.number}
                    </div>
                    
                    {/* Label */}
                    <div className="text-white/70 text-xs sm:text-sm font-medium">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="relative order-1 lg:order-2">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/5 border border-[#00A8E8]/30">
              <Target className="w-4 h-4 text-[#00A8E8]" />
              <span className="text-white/80 text-sm font-medium">Sobre Nosotros</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-['Poppins'] mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-[#00A8E8] to-white bg-clip-text text-transparent">
                Nuestro Mayor Activo:
              </span>
              <br />
              <span className="text-white">
                Un Equipo de +17 Profesionales
              </span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-white/80 mb-6 leading-relaxed">
              En <span className="text-[#00A8E8] font-semibold">AMR WEBS COMPANY</span>, no solo creamos software; construimos relaciones. 
              Nuestro equipo interno de desarrolladores senior, diseñadores UX/UI, ingenieros y estrategas de marketing 
              combina experiencia para entregar productos robustos y a la medida.
            </p>

            <p className="text-base sm:text-lg text-white/80 mb-8 leading-relaxed">
              Cada proyecto es tratado con <span className="text-white font-semibold">dedicación absoluta</span>, aplicando las mejores prácticas de 
              la industria y metodologías ágiles que garantizan entregas puntuales y de alta calidad.
            </p>

            {/* Values Grid */}
            <div className="space-y-4">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div 
                    key={index}
                    className="relative group bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-[#00A8E8]/40 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-[#007ACC] to-[#00A8E8] p-0.5">
                        <div className="w-full h-full bg-gradient-to-br from-[#001F3F] to-[#003D5C] rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-2 font-['Poppins']">
                          {value.title}
                        </h3>
                        <p className="text-sm text-white/70 leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>

                    {/* Hover Effect Line */}
                    <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-[#007ACC] to-[#00A8E8] transition-all duration-300" />
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#007ACC] to-[#00A8E8] text-white rounded-xl font-semibold hover:from-[#003D5C] hover:to-[#007ACC] transition-all duration-300 shadow-[0_0_30px_rgba(0,168,232,0.4)] hover:shadow-[0_0_40px_rgba(0,168,232,0.6)] hover:scale-105"
              >
                <span>Contáctanos Ahora</span>
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
