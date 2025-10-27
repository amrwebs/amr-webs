import { motion } from "motion/react";
import { Smartphone, Laptop, ChevronRight, Sparkles, Zap, Shield, Truck, Award } from "lucide-react";

interface ShopCategoriesProps {
  onSelectCategory: (category: "celular" | "notebook") => void;
}

const features = [
  { icon: Truck, title: "Envío Gratis", description: "En compras mayores a $50.000", color: "from-blue-500 to-cyan-500" },
  { icon: Shield, title: "Garantía Oficial", description: "12 meses de cobertura total", color: "from-purple-500 to-pink-500" },
  { icon: Zap, title: "Entrega Rápida", description: "Recibí en 24-48hs", color: "from-orange-500 to-red-500" },
  { icon: Award, title: "Calidad Premium", description: "Productos certificados", color: "from-green-500 to-emerald-500" }
];

export function ShopCategories({ onSelectCategory }: ShopCategoriesProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F7FA] via-[#E8EEF4] to-[#D1DCE8]">
      {/* Hero Section */}
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
          <motion.div 
            className="text-center mb-16"
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

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-['Poppins'] mb-6">
              <span className="bg-gradient-to-r from-[#001F3F] via-[#007ACC] to-[#00A8E8] bg-[length:200%_auto] text-transparent bg-clip-text animate-crystal-shine">
                Tecnología de Última Generación
              </span>
            </h1>
            
            <p className="text-xl text-[#212529]/70 max-w-3xl mx-auto mb-12">
              Descubrí las mejores marcas en tecnología con garantía oficial y envío a todo el país
            </p>

            {/* Category Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Celulares Card */}
              <motion.button
                onClick={() => onSelectCategory("celular")}
                className="group relative bg-white/95 backdrop-blur-sm rounded-3xl p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border-2 border-transparent hover:border-[#007ACC]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.02, y: -10 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#007ACC]/0 via-[#00A8E8]/0 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                
                {/* Animated Border Light */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,122,204,.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-shimmer rounded-3xl" />
                </div>

                <div className="relative">
                  {/* Icon Container */}
                  <motion.div 
                    className="w-28 h-28 mx-auto mb-6 bg-gradient-to-br from-[#007ACC] to-[#00A8E8] rounded-3xl flex items-center justify-center shadow-xl"
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Smartphone className="w-14 h-14 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h2 className="text-4xl font-bold text-[#0A4D68] group-hover:text-[#007ACC] transition-colors mb-3 font-['Poppins']">
                    Celulares
                  </h2>
                  <p className="text-lg text-[#212529]/70 mb-6">
                    Última tecnología móvil
                  </p>

                  {/* CTA with Arrow */}
                  <div className="flex items-center justify-center gap-2 text-[#007ACC] font-semibold">
                    <span>Explorar Celulares</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>

                {/* Corner Decoration */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-[#007ACC]/10 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
              </motion.button>

              {/* Notebooks Card */}
              <motion.button
                onClick={() => onSelectCategory("notebook")}
                className="group relative bg-white/95 backdrop-blur-sm rounded-3xl p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border-2 border-transparent hover:border-[#007ACC]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.02, y: -10 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#007ACC]/0 via-[#00A8E8]/0 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                
                {/* Animated Border Light */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,122,204,.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-shimmer rounded-3xl" />
                </div>

                <div className="relative">
                  {/* Icon Container */}
                  <motion.div 
                    className="w-28 h-28 mx-auto mb-6 bg-gradient-to-br from-[#007ACC] to-[#00A8E8] rounded-3xl flex items-center justify-center shadow-xl"
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Laptop className="w-14 h-14 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h2 className="text-4xl font-bold text-[#0A4D68] group-hover:text-[#007ACC] transition-colors mb-3 font-['Poppins']">
                    Notebooks
                  </h2>
                  <p className="text-lg text-[#212529]/70 mb-6">
                    Potencia para trabajar
                  </p>

                  {/* CTA with Arrow */}
                  <div className="flex items-center justify-center gap-2 text-[#007ACC] font-semibold">
                    <span>Explorar Notebooks</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>

                {/* Corner Decoration */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-[#007ACC]/10 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Banner */}
      <section className="relative py-12 bg-gradient-to-r from-[#001F3F] via-[#003D5C] to-[#001F3F] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.1)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-shimmer" />
        </div>
        
        <div className="relative max-w-[1320px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div 
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl mb-4 shadow-xl`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="font-bold text-white mb-1">{feature.title}</h3>
                <p className="text-sm text-white/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-24 bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A4D68] mb-4 font-['Poppins']">
              ¿Por qué elegir AMR WEBS?
            </h2>
            <p className="text-[#212529]/60 max-w-2xl mx-auto">
              Somos una empresa con más de <span className="font-semibold text-[#007ACC]">+17 expertos</span> comprometidos con ofrecerte la mejor experiencia en tecnología
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Atención Personalizada",
                description: "Nuestro equipo te asesora en cada compra para que elijas el producto perfecto",
                icon: "💬"
              },
              {
                title: "Productos Garantizados",
                description: "Todos nuestros productos cuentan con garantía oficial de fábrica",
                icon: "✅"
              },
              {
                title: "Envío a Todo el País",
                description: "Llegamos a todos los rincones de Argentina de forma rápida y segura",
                icon: "🚚"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="text-center p-8 bg-[#F5F7FA] rounded-2xl hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-[#0A4D68] mb-2">{item.title}</h3>
                <p className="text-[#212529]/60">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
