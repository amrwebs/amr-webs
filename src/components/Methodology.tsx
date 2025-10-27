import { Compass, Palette, Code, Rocket, TrendingUp, CheckCircle2 } from "lucide-react";

export function Methodology() {
  const steps = [
    {
      icon: Compass,
      number: "01",
      title: "Descubrimiento y Estrategia",
      description: "Analizamos en profundidad tus objetivos de negocio, audiencia objetivo y competencia. Definimos el alcance técnico y creamos un roadmap estratégico personalizado.",
      highlights: ["Análisis de Mercado", "Definición de Objetivos", "Roadmap Técnico"],
      color: "from-[#007ACC] to-[#00A8E8]"
    },
    {
      icon: Palette,
      number: "02",
      title: "Diseño UX/UI y Prototipado",
      description: "Diseñamos interfaces intuitivas y atractivas centradas en la experiencia del usuario. Creamos prototipos interactivos que validan la funcionalidad antes del desarrollo.",
      highlights: ["Wireframes", "Diseño UI", "Prototipos Interactivos"],
      color: "from-[#00A8E8] to-[#007ACC]"
    },
    {
      icon: Code,
      number: "03",
      title: "Desarrollo Ágil y QA",
      description: "Implementamos soluciones con código limpio y escalable usando metodologías ágiles. Testing riguroso de calidad en cada sprint para garantizar la excelencia técnica.",
      highlights: ["Código Limpio", "Testing QA", "Sprints Ágiles"],
      color: "from-[#007ACC] to-[#003D5C]"
    },
    {
      icon: Rocket,
      number: "04",
      title: "Lanzamiento y Crecimiento",
      description: "Desplegamos tu producto en producción con estrategias de optimización continua. Monitoreo constante, actualizaciones y soporte técnico 24/7 para asegurar el éxito sostenible.",
      highlights: ["Deploy Seguro", "Monitoreo 24/7", "Optimización Continua"],
      color: "from-[#00A8E8] to-[#001F3F]"
    },
  ];

  return (
    <section id="methodology" className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-[#001F3F] via-[#0A2540] to-[#001F3F]">
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
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#00A8E8]/8 rounded-full blur-[80px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-white/4 rounded-full blur-[70px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative max-w-[1320px] mx-auto px-4 sm:px-6">
        {/* Simple Badge - Responsive Position */}
        <div className="hidden md:block absolute -top-4 right-4 lg:right-8 z-20">
          <div className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-gradient-to-r from-[#003D5C]/95 to-[#001F3F]/95 backdrop-blur-xl border-2 border-[#00A8E8]/50 shadow-[0_0_20px_rgba(0,168,232,0.4)]">
            <TrendingUp className="w-3 md:w-4 h-3 md:h-4 text-[#00A8E8]" />
            <span className="text-xs md:text-sm font-bold text-white tracking-wider uppercase">
              Metodología Probada
            </span>
            <CheckCircle2 className="w-3 md:w-4 h-3 md:h-4 text-[#00A8E8]" />
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-12 md:mb-20 lg:mb-24 pt-8 md:pt-12 lg:pt-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-['Poppins'] mb-4 md:mb-6 px-4">
            <span className="bg-gradient-to-r from-white via-[#00A8E8] to-white bg-clip-text text-transparent">
              Nuestro Proceso
            </span>
          </h2>
          
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-['Poppins'] mb-4 md:mb-6 bg-gradient-to-r from-[#00A8E8] via-white to-[#00A8E8] bg-clip-text text-transparent">
            Hacia el Éxito
          </h3>

          <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed px-4">
            Metodología ágil y probada que garantiza <span className="text-[#00A8E8] font-semibold">resultados excepcionales</span> en cada proyecto.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative mb-12 md:mb-16 lg:mb-20">
          {/* Simple Connection Line - Desktop Only */}
          <div className="hidden lg:block absolute top-32 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

          {/* Steps Grid - Mobile Optimized */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-6 pt-16 sm:pt-20 lg:pt-24">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative flex flex-col items-center group"
                >
                  {/* Card Container */}
                  <div className="relative w-full max-w-sm sm:max-w-none mx-auto">
                    {/* Main Card */}
                    <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/20 hover:border-[#00A8E8]/50 transition-all duration-300 hover:bg-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                      
                      {/* Simple Corner Accent */}
                      <div className="absolute top-0 left-0 w-10 h-10 sm:w-12 sm:h-12 border-t-2 border-l-2 border-[#00A8E8]/30 rounded-tl-2xl" />

                      {/* Icon Container - Responsive Size */}
                      <div className="relative mb-6 sm:mb-8 flex items-center justify-center -mt-14 sm:-mt-16 lg:-mt-20">
                        {/* Step Number Badge - Responsive */}
                        <div className="absolute -top-8 sm:-top-10 left-1/2 -translate-x-1/2 z-30">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#003D5C] to-[#001F3F] border-2 border-[#00A8E8] flex items-center justify-center shadow-[0_0_30px_rgba(0,168,232,0.5)]">
                            <span className="text-lg sm:text-xl font-bold text-white font-['Poppins']">
                              {step.number}
                            </span>
                          </div>
                        </div>

                        {/* Icon Background - Responsive Size */}
                        <div className={`relative w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-br ${step.color} p-1 shadow-[0_8px_32px_rgba(0,168,232,0.4)]`}>
                          <div className="w-full h-full bg-gradient-to-br from-[#001F3F] to-[#003D5C] rounded-2xl flex items-center justify-center border border-white/10">
                            <Icon className="w-14 h-14 sm:w-16 sm:h-16 text-white" strokeWidth={1.8} />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="relative z-10 text-center">
                        {/* Title - Responsive */}
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-['Poppins'] mb-3 sm:mb-4 text-white px-2">
                          {step.title}
                        </h3>

                        {/* Description - Responsive */}
                        <p className="text-white/70 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base px-2">
                          {step.description}
                        </p>

                        {/* Highlights - Responsive */}
                        <div className="flex flex-col gap-2">
                          {step.highlights.map((highlight, idx) => (
                            <div
                              key={idx}
                              className="px-3 py-2 rounded-lg bg-white/5 border border-[#00A8E8]/20 hover:border-[#00A8E8]/40 transition-colors duration-200"
                            >
                              <span className="text-xs sm:text-sm text-white/90 font-medium flex items-center justify-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#00A8E8] flex-shrink-0" />
                                {highlight}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Section - Mobile Optimized */}
        <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 border border-white/20 overflow-hidden shadow-[0_12px_48px_rgba(0,168,232,0.2)]">
          <div className="relative z-10 text-center">
            {/* Badge - Responsive */}
            <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/5 border border-[#00A8E8]/30">
              <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 text-[#00A8E8] flex-shrink-0" />
              <span className="text-sm sm:text-base text-white/80 font-medium">Garantía de Excelencia</span>
            </div>

            {/* Title - Responsive */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-['Poppins'] mb-3 sm:mb-4 text-white px-4">
              Enfoque Metódico y Colaborativo
            </h3>
            
            {/* Description - Responsive */}
            <p className="text-base sm:text-lg text-white/80 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4">
              Trabajamos en <span className="text-[#00A8E8] font-semibold">sprints colaborativos</span> con comunicación constante. 
              Cada proyecto se entrega <span className="text-white font-semibold">a tiempo, dentro del presupuesto</span> y superando expectativas.
            </p>

            {/* Stats - Mobile Optimized Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 sm:p-6 border border-white/20 hover:border-[#00A8E8]/40 transition-colors duration-200">
                <div className="text-3xl sm:text-4xl font-bold text-[#00A8E8] mb-2 font-['Poppins']">
                  97
                </div>
                <div className="text-white/70 text-xs sm:text-sm">Proyectos Completados</div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 sm:p-6 border border-white/20 hover:border-[#00A8E8]/40 transition-colors duration-200">
                <div className="text-3xl sm:text-4xl font-bold text-[#00A8E8] mb-2 font-['Poppins']">
                  +17
                </div>
                <div className="text-white/70 text-xs sm:text-sm">Expertos Dedicados</div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 sm:p-6 border border-white/20 hover:border-[#00A8E8]/40 transition-colors duration-200">
                <div className="text-3xl sm:text-4xl font-bold text-[#00A8E8] mb-2 font-['Poppins']">
                  4 Años
                </div>
                <div className="text-white/70 text-xs sm:text-sm">Experiencia</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
