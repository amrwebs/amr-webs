import { motion } from "motion/react";
import { ChevronDown, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
}

export function Hero() {
  const { t } = useLanguage();
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < 20; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 20 + 10,
      });
    }
    setParticles(newParticles);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background - YouTube Embed */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* YouTube iframe */}
        <iframe
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            width: '100vw',
            height: '100vh',
            minWidth: '100vw',
            minHeight: '100vh',
          }}
          src="https://www.youtube.com/embed/RzyNv4WpSHc?autoplay=1&mute=1&loop=1&playlist=RzyNv4WpSHc&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&vq=hd1080"
          title="Background video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-slate-900/40 to-blue-900/50 pointer-events-none" />
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-slate-950/20 pointer-events-none" />
        
        {/* Note: YouTube videos have limitations as backgrounds. For best results, download and host the video as MP4 */}
      </div>

      {/* Animated particles overlay */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full">
          {particles.map((p) => (
            <motion.circle
              key={p.id}
              cx={`${p.x}%`}
              cy={`${p.y}%`}
              r={p.size}
              fill="url(#particleGradient)"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
          <defs>
            <linearGradient id="particleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-cyan-400/30 rounded-full shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-white">{t("hero.badge")}</span>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl tracking-tight mb-6">
              <span className="block text-white mb-2 drop-shadow-lg">AMR WEBS</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 drop-shadow-lg">
                {t("hero.title")}
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed drop-shadow-md"
          >
            {t("hero.subtitle")}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <a
              href="https://wa.me/message/4JYHTJHRW2NBI1"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/60 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
            >
              {t("hero.cta.start")}
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </a>
            <button
              onClick={scrollToPortfolio}
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-lg border-2 border-white/30 hover:border-cyan-400 hover:bg-white/20 transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
            >
              {t("hero.cta.portfolio")}
            </button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap justify-center gap-8 pt-12 text-sm"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50" />
              <span className="text-white">{t("hero.security")}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <span className="text-cyan-400">✓</span>
              <span className="text-white">SSL Encryption</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <span className="text-cyan-400">✓</span>
              <span className="text-white">24/7 Support</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToContent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white hover:text-cyan-400 transition-colors"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-wider opacity-80">Scroll</span>
          <ChevronDown size={32} strokeWidth={2} />
        </motion.div>
      </motion.button>
    </section>
  );
}
