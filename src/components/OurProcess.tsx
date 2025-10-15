import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Lightbulb, Palette, Code, Rocket } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const processes = [
  {
    icon: Lightbulb,
    titleKey: "process.discovery.title",
    descKey: "process.discovery.desc",
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
  },
  {
    icon: Palette,
    titleKey: "process.design.title",
    descKey: "process.design.desc",
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200",
  },
  {
    icon: Code,
    titleKey: "process.development.title",
    descKey: "process.development.desc",
    color: "from-cyan-500 to-blue-500",
    bgColor: "bg-cyan-50",
    borderColor: "border-cyan-200",
  },
  {
    icon: Rocket,
    titleKey: "process.launch.title",
    descKey: "process.launch.desc",
    color: "from-purple-500 to-indigo-500",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
  },
];

export function OurProcess() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 px-4 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-100 to-pink-100 rounded-full blur-3xl opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-full mb-4">
            <span className="text-sm text-cyan-700">{t("process.badge")}</span>
          </div>
          <h2 className="text-gray-900 mb-4">{t("process.title")}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {t("process.subtitle")}
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-200 via-cyan-200 to-purple-200 -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processes.map((process, index) => {
              const Icon = process.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative"
                >
                  <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                    {/* Step number */}
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-cyan-600 to-blue-600 text-white rounded-full flex items-center justify-center shadow-lg text-sm">
                      {index + 1}
                    </div>

                    {/* Icon */}
                    <div
                      className={`w-16 h-16 ${process.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <motion.div
                        animate={{
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <Icon
                          className={`w-8 h-8 bg-gradient-to-br ${process.color} bg-clip-text text-transparent`}
                          style={{
                            filter: "drop-shadow(0 0 8px rgba(6, 182, 212, 0.3))",
                          }}
                        />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <h3 className="text-gray-900 mb-2 text-lg">
                      {t(process.titleKey)}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {t(process.descKey)}
                    </p>

                    {/* Decorative corner */}
                    <div
                      className={`absolute bottom-0 right-0 w-16 h-16 ${process.bgColor} rounded-tl-full opacity-50 -z-10`}
                    />
                  </div>

                  {/* Arrow connector (desktop only) */}
                  {index < processes.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-cyan-400"
                      >
                        →
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">{t("process.cta.text")}</p>
          <a
            href="https://wa.me/message/4JYHTJHRW2NBI1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300 hover:-translate-y-0.5"
          >
            {t("process.cta.button")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
