import { Linkedin, Github, Twitter, Mail, Phone, MapPin } from "lucide-react";
import logoImage from "figma:asset/4953ef6b7b318699124215051c875ce707422bfc.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Apps Móviles", href: "#services" },
      { name: "Páginas Web", href: "#services" },
      { name: "Software a Medida", href: "#services" },
      { name: "Marketing Digital", href: "#services" },
    ],
    company: [
      { name: "Nosotros", href: "#about" },
      { name: "Proceso", href: "#methodology" },
      { name: "Contacto", href: "#contact" },
      { name: "Inicio", href: "#hero" },
    ],
    contact: [
      {
        icon: MapPin,
        text: "Argentina",
      },
      {
        icon: Mail,
        text: "amrwebscompany@gmail.com",
        href: "mailto:amrwebscompany@gmail.com",
      },
      {
        icon: Phone,
        text: "+54 9 3455 497336",
        href: "https://wa.me/5493455497336",
      },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/company/amr-webs-company", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/amrwebscompany", label: "GitHub" },
    { icon: Twitter, href: "https://twitter.com/amrwebscompany", label: "Twitter" },
  ];

  return (
    <footer className="bg-[#0A4D68] text-white">
      <div className="max-w-[1320px] mx-auto px-6 py-16">
        {/* Grid de 4 Columnas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Columna 1: Logo e Info */}
          <div>
            {/* Logo Metálico */}
            <div className="mb-4">
              <img 
                src={logoImage} 
                alt="AMR Logo" 
                className="h-20 w-20 drop-shadow-lg"
              />
            </div>
            <h3 className="text-2xl font-bold font-['Poppins'] mb-4">AMR WEBS</h3>
            <p className="text-white/80 mb-6 leading-relaxed text-sm">
              Transformamos ideas en soluciones digitales escalables con un equipo de +17 expertos.
            </p>
            {/* Redes Sociales */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#007ACC] flex items-center justify-center transition-all duration-300"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Columna 2: Servicios */}
          <div>
            <h4 className="text-lg font-semibold font-['Poppins'] mb-4">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const targetId = link.href.replace('#', '');
                      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-white/80 hover:text-[#00A8E8] transition-colors duration-300 text-sm cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Compañía */}
          <div>
            <h4 className="text-lg font-semibold font-['Poppins'] mb-4">Compañía</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const targetId = link.href.replace('#', '');
                      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-white/80 hover:text-[#00A8E8] transition-colors duration-300 text-sm cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h4 className="text-lg font-semibold font-['Poppins'] mb-4">Contacto</h4>
            <ul className="space-y-4">
              {footerLinks.contact.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <li key={index} className="flex items-start gap-3">
                    <IconComponent className="w-5 h-5 text-[#00A8E8] flex-shrink-0 mt-0.5" />
                    {contact.href ? (
                      <a
                        href={contact.href}
                        className="text-white/80 hover:text-[#00A8E8] transition-colors duration-300 text-sm"
                      >
                        {contact.text}
                      </a>
                    ) : (
                      <span className="text-white/80 text-sm">{contact.text}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Sub-Footer */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>© {currentYear} AMR WEBS COMPANY. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="hover:text-[#00A8E8] transition-colors duration-300"
              >
                Política de Privacidad
              </a>
              <a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="hover:text-[#00A8E8] transition-colors duration-300"
              >
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
