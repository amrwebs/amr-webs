import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import { Globe } from "lucide-react";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-6 right-6 z-50"
    >
      <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md border border-gray-200 rounded-full px-4 py-2 shadow-lg">
        <Globe className="w-4 h-4 text-gray-600" />
        <button
          onClick={() => setLanguage("es")}
          className={`px-3 py-1 rounded-full transition-all duration-300 text-sm ${
            language === "es"
              ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-sm"
              : "text-gray-600 hover:text-cyan-600 hover:bg-gray-100"
          }`}
        >
          ES
        </button>
        <button
          onClick={() => setLanguage("en")}
          className={`px-3 py-1 rounded-full transition-all duration-300 text-sm ${
            language === "en"
              ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-sm"
              : "text-gray-600 hover:text-cyan-600 hover:bg-gray-100"
          }`}
        >
          EN
        </button>
      </div>
    </motion.div>
  );
}
