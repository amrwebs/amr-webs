import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Phone, MapPin, Send, CheckCircle, Instagram } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function Contact() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Crear mensaje formateado con emojis para WhatsApp
    const whatsappMessage = `¡Hola AMR WEBS! 👋

Me gustaría contactarlos con la siguiente información:

👤 *Nombre:* ${formData.name}
📧 *Email:* ${formData.email}
📋 *Asunto:* ${formData.subject}

💬 *Mensaje:*
${formData.message}

---
🌐 Enviado desde amrwebs.com`;

    // Codificar el mensaje para URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Abrir WhatsApp con el mensaje pre-cargado
    window.open(`https://wa.me/message/4JYHTJHRW2NBI1?text=${encodedMessage}`, "_blank");
    
    // Limpiar formulario
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      ref={ref}
      className="py-24 px-4 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full blur-3xl opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-700 shadow-sm">
              {t("contact.badge")}
            </span>
          </div>
          <h2 className="text-gray-900 mb-4">{t("contact.title")}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-gray-900 mb-6">
                {t("contact.info.title")}
              </h3>

              <div className="space-y-4">
                <a
                  href="https://wa.me/message/4JYHTJHRW2NBI1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-xl hover:border-cyan-300 transition-colors"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200 rounded-lg flex-shrink-0">
                    <Phone className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-sm mb-1">{t("contact.info.phone")}</div>
                    <span className="text-gray-900">
                      {t("contact.info.whatsapp")}
                    </span>
                  </div>
                </a>

                <a
                  href="https://www.google.com/maps/place/Villaguay,+Entre+R%C3%ADos,+Argentina/@-31.8654,-59.0289,13z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-xl hover:border-cyan-300 transition-colors group cursor-pointer"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200 rounded-lg flex-shrink-0 group-hover:scale-105 transition-transform">
                    <MapPin className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-sm mb-1">{t("contact.info.location")}</div>
                    <p className="text-gray-900 group-hover:text-cyan-600 transition-colors">
                      Villaguay, Entre Ríos
                      <br />
                      Argentina
                      <span className="text-xs text-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity block mt-1">
                        📍 Ver en Google Maps
                      </span>
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-gray-900 mb-4">{t("contact.social")}</h4>
              <a
                href="https://www.instagram.com/amr.webs_?igsh=ejU1cWl5NTcyYjRz&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/30 hover:-translate-y-0.5"
              >
                <Instagram className="w-5 h-5" />
                <span>@amr.webs_</span>
              </a>
            </div>

            {/* Trust badge */}
            <div className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200 rounded-xl">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
                <div>
                  <div className="text-gray-900 mb-1">{t("contact.trust.title")}</div>
                  <div className="text-gray-600 text-sm">
                    {t("contact.trust.desc")}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 bg-white border border-gray-200 rounded-2xl shadow-sm"
            >
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    {t("contact.form.name")} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:bg-white transition-colors"
                    placeholder={t("contact.form.placeholder.name")}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    {t("contact.form.email")} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:bg-white transition-colors"
                    placeholder={t("contact.form.placeholder.email")}
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">
                    {t("contact.form.subject")} *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:bg-white transition-colors"
                    placeholder={t("contact.form.placeholder.subject")}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    {t("contact.form.message")} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:bg-white transition-colors resize-none"
                    placeholder={t("contact.form.placeholder.message")}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  {t("contact.form.submit")}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
