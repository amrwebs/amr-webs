import { motion } from "motion/react";
import { Zap } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 py-8 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4 text-center"
        >
          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            © {currentYear} AMR WEBS. Todos los derechos reservados.
          </div>

          {/* Links no interactivos */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>Privacidad</span>
            <span>•</span>
            <span>Términos</span>
            <span>•</span>
            <span>Cookies</span>
          </div>

          {/* Powered by */}
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span>Powered by AMR Technology</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
