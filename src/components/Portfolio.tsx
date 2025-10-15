import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ExternalLink, Code2 } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import aurumImage from "figma:asset/2e202b759f1c98aa3cfa7c8aca4f608c04fc2f68.png";
import pixelImage from "figma:asset/34f3f5ae2c1296928a4459ddc20de53b3d519acc.png";
import gustoImage from "figma:asset/71585fd5fde66374a5b630c45d6e41736caefa19.png";
import inmobiliariaImage from "figma:asset/de52962b8752bb362a4849eeab78fc2934d78bbc.png";
import constructoraImage from "figma:asset/b82bdb962d03eab4dc0fa7a370b8ca5b00d6907c.png";
import clinicaImage from "figma:asset/de967edead888fdbb7817d4232f0a937f6f1d595.png";

interface Project {
  titleKey: string;
  descKey: string;
  categoryKey: string;
  image: string;
  technologies: string[];
  stats: { label: string; value: string }[];
}

export function Portfolio() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects: Project[] = [
    {
      titleKey: "portfolio.project1.title",
      descKey: "portfolio.project1.desc",
      categoryKey: "portfolio.project1.category",
      image: aurumImage,
      technologies: ["React", "TypeScript", "Charts.js", "Tailwind"],
      stats: [
        { label: "Clients", value: "500+" },
        { label: "AUM", value: "$50M+" },
        { label: "ROI Avg", value: "+12%" },
      ],
    },
    {
      titleKey: "portfolio.project2.title",
      descKey: "portfolio.project2.desc",
      categoryKey: "portfolio.project2.category",
      image: pixelImage,
      technologies: ["Next.js", "Framer Motion", "GSAP", "Tailwind"],
      stats: [
        { label: "Projects", value: "200+" },
        { label: "Clients", value: "80+" },
        { label: "Rating", value: "5.0/5" },
      ],
    },
    {
      titleKey: "portfolio.project3.title",
      descKey: "portfolio.project3.desc",
      categoryKey: "portfolio.project3.category",
      image: gustoImage,
      technologies: ["React", "Node.js", "Reservations", "Stripe"],
      stats: [
        { label: "Bookings", value: "1K+/mo" },
        { label: "Reviews", value: "4.9/5" },
        { label: "Tables", value: "50" },
      ],
    },
    {
      titleKey: "portfolio.project4.title",
      descKey: "portfolio.project4.desc",
      categoryKey: "portfolio.project4.category",
      image: inmobiliariaImage,
      technologies: ["React", "Maps API", "PostgreSQL", "Filters"],
      stats: [
        { label: "Properties", value: "1.5K+" },
        { label: "Sales/mo", value: "120+" },
        { label: "Rating", value: "4.8/5" },
      ],
    },
    {
      titleKey: "portfolio.project5.title",
      descKey: "portfolio.project5.desc",
      categoryKey: "portfolio.project5.category",
      image: constructoraImage,
      technologies: ["Next.js", "Gallery", "Testimonials", "CMS"],
      stats: [
        { label: "Projects", value: "80+" },
        { label: "Years", value: "15+" },
        { label: "Clients", value: "300+" },
      ],
    },
    {
      titleKey: "portfolio.project6.title",
      descKey: "portfolio.project6.desc",
      categoryKey: "portfolio.project6.category",
      image: clinicaImage,
      technologies: ["React", "Scheduling", "Patient Portal", "CRM"],
      stats: [
        { label: "Patients", value: "2K+" },
        { label: "Appointments", value: "500/mo" },
        { label: "Rating", value: "4.9/5" },
      ],
    },
  ];

  return (
    <section
      id="portfolio"
      ref={ref}
      className="py-24 px-4 bg-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-full mb-4">
            <span className="text-sm text-cyan-700">{t("portfolio.badge")}</span>
          </div>
          <h2 className="text-gray-900 mb-4">{t("portfolio.title")}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {t("portfolio.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6">{t("portfolio.cta.text")}</p>
          <a
            href="https://wa.me/message/4JYHTJHRW2NBI1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300 hover:-translate-y-0.5"
          >
            {t("portfolio.cta.button")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { t } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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
      <div className="relative overflow-hidden rounded-2xl bg-white border border-gray-200 hover:border-cyan-300 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
        {/* Image */}
        <div className="relative h-64 overflow-hidden bg-gray-100">
          <motion.div
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={project.image}
              alt={t(project.titleKey)}
              className="w-full h-64 object-cover"
            />
          </motion.div>

          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent flex items-center justify-center"
          >
            <div className="flex gap-3">
              <a
                href="https://wa.me/message/4JYHTJHRW2NBI1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white text-cyan-600 rounded-full hover:bg-cyan-50 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/message/4JYHTJHRW2NBI1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white text-gray-700 rounded-full hover:bg-gray-100 transition-colors"
              >
                <Code2 className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Category badge */}
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full text-cyan-700 text-xs shadow-sm">
              {t(project.categoryKey)}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-gray-900 mb-2">{t(project.titleKey)}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
            {t(project.descKey)}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mb-4 pb-4 border-b border-gray-100">
            {project.stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-cyan-600 text-sm mb-1">{stat.value}</div>
                <div className="text-gray-500 text-xs">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
