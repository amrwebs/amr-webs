import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, User, Briefcase } from "lucide-react";
import { toast } from "sonner@2.0.3";

export function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    celular: "",
    email: "",
    proyecto: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validación básica
    if (!formData.nombre || !formData.apellido || !formData.celular || !formData.email || !formData.proyecto) {
      toast.error('Por favor completa todos los campos');
      return;
    }

    const message = encodeURIComponent(
      `¡Hola! Me gustaría contactar con AMR WEBS COMPANY.\n\n` +
      `📋 Mis datos:\n` +
      `• Nombre: ${formData.nombre} ${formData.apellido}\n` +
      `• Teléfono: ${formData.celular}\n` +
      `• Correo: ${formData.email}\n` +
      `• Idea/Proyecto: ${formData.proyecto}\n\n` +
      `Gracias. Espero su respuesta en menos de 24 hs.`
    );
    
    toast.success('¡Redirigiendo a WhatsApp!', {
      description: 'En un momento se abrirá WhatsApp con tu mensaje prellenado.'
    });
    
    window.open(`https://wa.me/5493455497336?text=${message}`, '_blank');
    
    // Limpiar formulario después de enviar
    setTimeout(() => {
      setFormData({
        nombre: "",
        apellido: "",
        celular: "",
        email: "",
        proyecto: "",
      });
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#001F3F] via-[#003D5C] to-[#0A4D68] relative overflow-hidden">
      {/* Efectos de fondo cristalinos */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,168,232,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,122,204,0.08),transparent_50%)]" />
      
      <div className="max-w-[1320px] mx-auto px-6 relative z-10">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h2 className="text-white mb-6 text-4xl md:text-5xl font-bold font-['Poppins']">
            ¿Listo para escalar su negocio?
          </h2>
          <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Hablemos de cómo nuestro equipo de <span className="font-semibold text-[#00A8E8]">+17 expertos</span> puede 
            ayudarlo a alcanzar sus objetivos. Complete el formulario y nos comunicaremos en menos de 24 horas.
          </p>
        </div>

        {/* Formulario con efecto glassmorphism */}
        <div className="max-w-2xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden">
            {/* Overlay cristalino */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-md border border-white/10" />
            
            {/* Brillo animado */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00A8E8]/15 to-transparent animate-shimmer" style={{ willChange: 'transform' }} />
            </div>

            {/* Contenido del formulario */}
            <div className="relative p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nombre y Apellido */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="nombre" className="text-white/90 flex items-center gap-2">
                      <User className="w-4 h-4 text-[#00A8E8]" />
                      Nombre
                    </Label>
                    <Input
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      placeholder="Juan"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-[#007ACC] focus:ring-[#007ACC]/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="apellido" className="text-white/90 flex items-center gap-2">
                      <User className="w-4 h-4 text-[#00A8E8]" />
                      Apellido
                    </Label>
                    <Input
                      id="apellido"
                      name="apellido"
                      value={formData.apellido}
                      onChange={handleChange}
                      required
                      placeholder="Pérez"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-[#007ACC] focus:ring-[#007ACC]/20"
                    />
                  </div>
                </div>

                {/* Número Celular */}
                <div className="space-y-2">
                  <Label htmlFor="celular" className="text-white/90 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#00A8E8]" />
                    Número Celular
                  </Label>
                  <Input
                    id="celular"
                    name="celular"
                    type="tel"
                    value={formData.celular}
                    onChange={handleChange}
                    required
                    placeholder="+54 9 11 1234-5678"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-[#007ACC] focus:ring-[#007ACC]/20"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white/90 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#00A8E8]" />
                    Email / Gmail
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="juan.perez@gmail.com"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-[#007ACC] focus:ring-[#007ACC]/20"
                  />
                </div>

                {/* Idea del Proyecto */}
                <div className="space-y-2">
                  <Label htmlFor="proyecto" className="text-white/90 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-[#00A8E8]" />
                    Idea del Proyecto
                  </Label>
                  <Textarea
                    id="proyecto"
                    name="proyecto"
                    value={formData.proyecto}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Cuéntenos sobre su proyecto o idea..."
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-[#007ACC] focus:ring-[#007ACC]/20 resize-none"
                  />
                </div>

                {/* Botón Submit */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-[#007ACC] to-[#00A8E8] hover:from-[#0A4D68] hover:to-[#007ACC] text-white py-6 rounded-xl shadow-2xl hover:shadow-[#00A8E8]/50 transition-all duration-300 border-0"
                >
                  Enviar Consulta por WhatsApp
                </Button>

                {/* Trust Indicators */}
                <div className="flex flex-wrap justify-center gap-6 text-white/70 text-sm pt-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#00A8E8]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Sin compromiso</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#00A8E8]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Respuesta en 24 horas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#00A8E8]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Confidencialidad garantizada</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
