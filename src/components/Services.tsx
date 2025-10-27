import { Smartphone, Code2, TrendingUp, ShoppingCart, Headphones, Lightbulb, Zap, Shield, Cpu } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Aplicaciones Móviles",
    description: "Desarrollamos apps nativas e híbridas para iOS y Android. Transformamos tu idea en una aplicación profesional y escalable con tecnología de punta.",
    features: ["iOS & Android", "UI/UX Premium", "Optimización", "Cloud Ready"],
    color: "from-[#007ACC] to-[#00A8E8]",
  },
  {
    icon: Code2,
    title: "Software a Medida",
    description: "Soluciones personalizadas que se adaptan a las necesidades específicas de tu negocio. Desarrollo web, sistemas ERP, CRM y más con arquitectura moderna.",
    features: ["100% Personalizado", "Escalable", "Seguro", "API First"],
    color: "from-[#003D5C] to-[#007ACC]",
  },
  {
    icon: TrendingUp,
    title: "Marketing Digital",
    description: "Estrategias de marketing que generan resultados medibles. SEO, SEM, redes sociales y publicidad digital gestionadas por expertos certificados.",
    features: ["ROI Comprobado", "SEO/SEM", "Analytics", "Automation"],
    color: "from-[#00A8E8] to-[#007ACC]",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Tiendas online completas y optimizadas para vender más. Integración con medios de pago, gestión de inventario y diseño profesional que convierte.",
    features: ["Pagos Seguros", "Gestión Stock", "Responsive", "Analytics"],
    color: "from-[#001F3F] to-[#003D5C]",
  },
  {
    icon: Lightbulb,
    title: "Consultoría IT",
    description: "Transformación digital y asesoramiento tecnológico estratégico. Te ayudamos a tomar las mejores decisiones para tu infraestructura tecnológica.",
    features: ["Análisis Profundo", "Roadmap", "Estrategia", "Innovation"],
    color: "from-[#007ACC] to-[#003D5C]",
  },
  {
    icon: Headphones,
    title: "Soporte 24/7",
    description: "Mantenimiento continuo y soporte técnico profesional. Nuestro equipo está disponible para mantener tu sistema funcionando perfectamente sin interrupciones.",
    features: ["Respuesta Rápida", "Actualizaciones", "Monitoreo", "SLA 99.9%"],
    color: "from-[#00A8E8] to-[#001F3F]",
  }
];

export function Services() {
  return (
    <section id="services" className="relative py-32 overflow-hidden bg-gradient-to-br from-[#001F3F] via-[#0A2540] to-[#001F3F]">
      {/* Metallic Blue Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 168, 232, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 168, 232, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Electric Particles - Reduced for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-60">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full animate-float ${i % 2 === 0 ? 'bg-white' : 'bg-[#00A8E8]'}`}
            style={{
              left: `${(i * 8.33) + Math.random() * 8}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: '6s',
              opacity: i % 2 === 0 ? 0.7 : 0.5,
              willChange: 'transform',
              transform: 'translate3d(0, 0, 0)'
            }}
          />
        ))}
      </div>

      {/* Large Glow Orbs - Optimized blur */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#00A8E8]/12 rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 left-1/4 w-[450px] h-[450px] bg-white/8 rounded-full blur-[80px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative max-w-[1320px] mx-auto px-6">
        {/* Floating Electric Badge - Top Left */}
        <div className="absolute -top-4 left-8 z-20">
          <div className="relative group">
            {/* Electric Glow Effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#007ACC] via-[#00A8E8] to-[#007ACC] rounded-full blur-xl opacity-70 group-hover:opacity-100 animate-pulse-glow" />
            
            {/* Badge Container */}
            <div className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#003D5C]/95 via-[#001F3F]/95 to-[#003D5C]/95 backdrop-blur-xl border-2 border-[#00A8E8]/60 shadow-[0_0_30px_rgba(0,168,232,0.7)]">
              {/* Electric Spark Left */}
              <Zap className="w-4 h-4 text-[#00A8E8] animate-pulse" style={{ 
                filter: 'drop-shadow(0 0 8px rgba(0,168,232,0.9))',
                animation: 'pulse 1s ease-in-out infinite'
              }} />
              
              {/* Text with Electric Effect */}
              <span className="text-sm font-bold text-white tracking-wider uppercase" style={{
                textShadow: '0 0 10px rgba(0,168,232,0.9), 0 0 20px rgba(0,168,232,0.5), 0 0 30px rgba(255,255,255,0.3)'
              }}>
                Servicios Tecnológicos Premium
              </span>
              
              {/* Electric Spark Right */}
              <Cpu className="w-4 h-4 text-[#00A8E8] animate-pulse" style={{ 
                filter: 'drop-shadow(0 0 8px rgba(0,168,232,0.9))',
                animationDelay: '0.5s'
              }} />

              {/* Electric Border Animation */}
              <div className="absolute inset-0 rounded-full">
                <div className="absolute inset-0 rounded-full border-2 border-[#00A8E8]/0 group-hover:border-white/80 transition-all duration-300 animate-pulse-border" />
              </div>

              {/* Electric Shimmer */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </div>
          </div>
        </div>

        {/* Section Header - Metallic White on Dark */}
        <div className="text-center mb-20 pt-16">
          {/* Main Title with Metallic White Effect */}
          <h2 className="text-5xl md:text-7xl font-bold font-['Poppins'] mb-8 relative inline-block">
            <span className="relative bg-gradient-to-r from-white via-[#00A8E8] to-white bg-clip-text text-transparent animate-gradient-shift" style={{
              textShadow: '0 0 40px rgba(255,255,255,0.3)'
            }}>
              Soluciones Digitales
            </span>
            <div className="absolute -inset-2 bg-gradient-to-r from-white/20 via-[#00A8E8]/30 to-white/20 blur-3xl -z-10 animate-pulse-glow" />
          </h2>
          
          <h3 className="text-3xl md:text-4xl font-bold font-['Poppins'] mb-6 bg-gradient-to-r from-[#00A8E8] via-white to-[#00A8E8] bg-clip-text text-transparent animate-gradient-shift">
            de Nueva Generación
          </h3>
          
          <p className="text-lg md:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Transformamos ideas en <span className="text-[#00A8E8] font-semibold" style={{ textShadow: '0 0 10px rgba(0,168,232,0.6)' }}>experiencias digitales extraordinarias</span>. 
            Tecnología de punta, diseño innovador y resultados que superan expectativas.
          </p>

          {/* Decorative Line with Metallic Effect */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/60 to-[#00A8E8]/50" />
            <Shield className="w-6 h-6 text-[#00A8E8]" style={{ filter: 'drop-shadow(0 0 8px rgba(0,168,232,0.7))' }} />
            <div className="h-px w-24 bg-gradient-to-l from-transparent via-white/60 to-[#00A8E8]/50" />
          </div>
        </div>

        {/* Services Grid - Simple 3D Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20" style={{ perspective: '1000px' }}>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative animate-scale-in"
                style={{
                  animationDelay: `${index * 100}ms`,
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Simple Outer Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00A8E8]/0 via-[#00A8E8]/40 to-[#00A8E8]/0 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300" />
                
                {/* Main Card with 3D Effect */}
                <div 
                  className="relative h-full bg-gradient-to-br from-white/10 via-[#003D5C]/20 to-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20 group-hover:border-[#00A8E8]/60 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.3)] group-hover:shadow-[0_20px_60px_rgba(0,168,232,0.5)]"
                  style={{
                    transform: 'translateZ(0)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    willChange: 'transform'
                  }}
                  onMouseEnter={(e) => {
                    const card = e.currentTarget;
                    card.style.transform = 'translateY(-12px) rotateX(5deg) translateZ(20px)';
                  }}
                  onMouseLeave={(e) => {
                    const card = e.currentTarget;
                    card.style.transform = 'translateY(0) rotateX(0deg) translateZ(0)';
                  }}
                >
                  {/* Simple Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-[#00A8E8]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                  {/* Icon Container - Simplified */}
                  <div className="relative mb-6 flex items-center justify-center">
                    {/* Icon Background with simple glow */}
                    <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} p-1 group-hover:scale-110 transition-transform duration-300 shadow-[0_8px_24px_rgba(0,168,232,0.4)]`}>
                      <div className="w-full h-full bg-gradient-to-br from-[#001F3F] via-[#003D5C] to-[#001F3F] rounded-xl flex items-center justify-center">
                        <Icon className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" strokeWidth={2} style={{ filter: 'drop-shadow(0 0 8px rgba(0,168,232,0.7))' }} />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold font-['Poppins'] mb-4 text-white group-hover:text-[#00A8E8] transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Simple Divider */}
                    <div className="h-0.5 w-16 group-hover:w-full bg-gradient-to-r from-[#00A8E8] to-transparent mb-4 transition-all duration-300" />

                    {/* Description */}
                    <p className="text-white/70 mb-6 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                      {service.description}
                    </p>

                    {/* Features Grid - Simplified */}
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="px-3 py-2 rounded-lg bg-white/5 border border-[#00A8E8]/30 group-hover:border-[#00A8E8]/60 group-hover:bg-white/10 transition-all duration-200"
                        >
                          <span className="text-sm text-white font-medium flex items-center gap-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#00A8E8]" />
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA - Premium Glass */}
        <div className="relative">
          {/* Glow Background */}
          <div className="absolute -inset-8 bg-gradient-to-r from-white/10 via-[#00A8E8]/20 to-white/10 blur-3xl rounded-full" />
          
          <div className="relative text-center bg-gradient-to-br from-white/10 via-[#003D5C]/20 to-white/10 backdrop-blur-xl rounded-3xl p-12 border-2 border-white/30 overflow-hidden shadow-[0_12px_48px_rgba(0,168,232,0.3)]">
            {/* Animated Border */}
            <div className="absolute inset-0 rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-[#00A8E8]/40 to-white/20 opacity-30 animate-gradient-shift" style={{ backgroundSize: '200% 200%' }} />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold font-['Poppins'] mb-4 bg-gradient-to-r from-white via-[#00A8E8] to-white bg-clip-text text-transparent animate-gradient-shift">
                ¿Listo para Transformar tu Negocio?
              </h3>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                ¿No encuentras lo que buscas? <span className="text-[#00A8E8] font-semibold" style={{ textShadow: '0 0 10px rgba(0,168,232,0.6)' }}>Creamos soluciones 100% personalizadas</span> adaptadas a tu visión.
              </p>
              
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group/btn inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#007ACC] to-[#00A8E8] text-white rounded-xl font-semibold text-lg relative overflow-hidden shadow-[0_0_40px_rgba(0,168,232,0.6)] hover:shadow-[0_0_60px_rgba(0,168,232,0.9)] transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                {/* Shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                
                {/* Border Glow */}
                <div className="absolute inset-0 rounded-xl border-2 border-white/40 group-hover/btn:border-white/70 transition-colors duration-300" />
                
                <Zap className="w-6 h-6 relative z-10 group-hover/btn:rotate-12 transition-transform duration-300" style={{ filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.7))' }} />
                <span className="relative z-10">Solicitar Consulta Gratuita</span>
                <svg 
                  className="w-6 h-6 relative z-10 group-hover/btn:translate-x-2 transition-transform duration-300" 
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

              {/* Trust Indicators */}
              <div className="mt-8 flex items-center justify-center gap-8 text-white/70">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#00A8E8]" style={{ filter: 'drop-shadow(0 0 6px rgba(0,168,232,0.6))' }} />
                  <span className="text-sm font-medium">Soporte 24/7</span>
                </div>
                <div className="h-4 w-px bg-white/30" />
                <div className="flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-[#00A8E8]" style={{ filter: 'drop-shadow(0 0 6px rgba(0,168,232,0.6))' }} />
                  <span className="text-sm font-medium">Tecnología Premium</span>
                </div>
                <div className="h-4 w-px bg-white/30" />
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-[#00A8E8]" style={{ filter: 'drop-shadow(0 0 6px rgba(0,168,232,0.6))' }} />
                  <span className="text-sm font-medium">Resultados Garantizados</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
