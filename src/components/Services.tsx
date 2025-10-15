import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import {
  Code,
  Smartphone,
  Cloud,
  Shield,
  Zap,
  Database,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

interface Service {
  icon: any;
  titleKey: string;
  descKey: string;
  featuresKeys: string[];
  gradient: string;
  iconColor: string;
}

export function Services() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services: Service[] = [
    {
      icon: Code,
      titleKey: "services.web.title",
      descKey: "services.web.desc",
      featuresKeys: [
        "services.web.feature1",
        "services.web.feature2",
        "services.web.feature3",
        "services.web.feature4",
      ],
      gradient: "from-cyan-500 to-blue-500",
      iconColor: "text-cyan-600",
    },
    {
      icon: Smartphone,
      titleKey: "services.mobile.title",
      descKey: "services.mobile.desc",
      featuresKeys: [
        "services.mobile.feature1",
        "services.mobile.feature2",
        "services.mobile.feature3",
        "services.mobile.feature4",
      ],
      gradient: "from-purple-500 to-pink-500",
      iconColor: "text-purple-600",
    },
    {
      icon: Cloud,
      titleKey: "services.cloud.title",
      descKey: "services.cloud.desc",
      featuresKeys: [
        "services.cloud.feature1",
        "services.cloud.feature2",
        "services.cloud.feature3",
        "services.cloud.feature4",
      ],
      gradient: "from-blue-500 to-indigo-500",
      iconColor: "text-blue-600",
    },
    {
      icon: Shield,
      titleKey: "services.security.title",
      descKey: "services.security.desc",
      featuresKeys: [
        "services.security.feature1",
        "services.security.feature2",
        "services.security.feature3",
        "services.security.feature4",
      ],
      gradient: "from-green-500 to-emerald-500",
      iconColor: "text-green-600",
    },
    {
      icon: Zap,
      titleKey: "services.performance.title",
      descKey: "services.performance.desc",
      featuresKeys: [
        "services.performance.feature1",
        "services.performance.feature2",
        "services.performance.feature3",
        "services.performance.feature4",
      ],
      gradient: "from-amber-500 to-orange-500",
      iconColor: "text-amber-600",
    },
    {
      icon: Database,
      titleKey: "services.database.title",
      descKey: "services.database.desc",
      featuresKeys: [
        "services.database.feature1",
        "services.database.feature2",
        "services.database.feature3",
        "services.database.feature4",
      ],
      gradient: "from-rose-500 to-pink-500",
      iconColor: "text-rose-600",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full mb-4 shadow-sm">
            <span className="text-sm text-gray-700">{t("services.badge")}</span>
          </div>
          <h2 className="text-gray-900 mb-4">{t("services.title")}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {t("services.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const { t } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div className="relative h-full p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        {/* Icon */}
        <motion.div
          animate={{
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.2 }}
          className={`w-12 h-12 mb-4 flex items-center justify-center bg-gradient-to-br ${service.gradient} bg-opacity-10 rounded-xl`}
        >
          <Icon className={`w-6 h-6 ${service.iconColor}`} />
        </motion.div>

        {/* Title */}
        <h3 className="text-gray-900 mb-2">{t(service.titleKey)}</h3>

        {/* Description */}
        <p className="text-gray-600 mb-4 text-sm">{t(service.descKey)}</p>

        {/* Features */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isHovered ? "auto" : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="pt-4 border-t border-gray-100">
            <div className="space-y-2">
              {service.featuresKeys.map((featureKey, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                  <span>{t(featureKey)}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Hover indicator */}
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          animate={{
            x: isHovered ? 5 : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
          className={`mt-4 flex items-center gap-2 text-sm ${service.iconColor}`}
        >
          <span>{t("services.more")}</span>
          <span>→</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
