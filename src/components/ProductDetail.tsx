import { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, Star, Shield, Truck, Package, CheckCircle2, ChevronDown, ChevronUp, MessageCircle, ShoppingCart, Heart, Share2, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";

interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  image: string;
  specs: string[];
  stock: number;
  rating: number;
  isFeatured?: boolean;
  isNew?: boolean;
}

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
}

export function ProductDetail({ product, onBack }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [showAllSpecs, setShowAllSpecs] = useState(false);
  const [quantity, setQuantity] = useState(1);

  // Simulated multiple images (in real scenario, product would have array of images)
  const images = [product.image, product.image, product.image, product.image];

  const handleBuyNow = () => {
    const message = encodeURIComponent(
      `¡Hola! Quiero comprar:\n\n` +
      `📱 ${product.name}\n` +
      `💰 Precio: $${product.price.toLocaleString('es-AR')}\n` +
      `📦 Cantidad: ${quantity}\n` +
      `💵 Total: $${(product.price * quantity).toLocaleString('es-AR')}\n\n` +
      `¿Está disponible?`
    );
    window.open(`https://wa.me/5493455497336?text=${message}`, '_blank');
  };

  const handleAddToCart = () => {
    const message = encodeURIComponent(
      `¡Hola! Me interesa agregar al carrito:\n\n` +
      `📱 ${product.name}\n` +
      `💰 Precio: $${product.price.toLocaleString('es-AR')}\n` +
      `📦 Cantidad: ${quantity}\n\n` +
      `¿Pueden reservarlo?`
    );
    window.open(`https://wa.me/5493455497336?text=${message}`, '_blank');
  };

  // Generate detailed specs based on product specs
  const detailedSpecs = [
    { label: "Marca", value: product.brand },
    { label: "Modelo", value: product.name.split(' ').slice(0, 3).join(' ') },
    ...product.specs.map((spec, index) => ({
      label: spec.includes('RAM') ? 'Memoria RAM' : 
             spec.includes('GB') && !spec.includes('RAM') ? 'Almacenamiento' :
             spec.includes('5G') ? 'Conectividad' :
             spec.includes('Plegable') ? 'Tipo' :
             `Característica ${index + 1}`,
      value: spec
    })),
    { label: "Garantía", value: "12 meses oficial" },
    { label: "Estado", value: "Nuevo" }
  ];

  // Generate description based on product
  const generateDescription = () => {
    return `Descubrí el ${product.name}, un dispositivo de última generación diseñado para ofrecerte el máximo rendimiento y calidad.

**Tecnología de punta**
${product.brand} es reconocida mundialmente por su innovación y calidad. Este modelo cuenta con ${product.specs[0]} y ${product.specs[1]}, garantizando un rendimiento excepcional para todas tus necesidades.

**Rendimiento superior**
Con especificaciones de alta gama, este dispositivo te permitirá disfrutar de una experiencia fluida y sin interrupciones. Ya sea que lo uses para trabajo, entretenimiento o comunicación, tendrás la potencia que necesitas.

**Diseño premium**
Cada detalle ha sido cuidadosamente pensado para brindarte no solo funcionalidad, sino también elegancia y estilo. Su diseño moderno se adapta perfectamente a tu vida diaria.

**Garantía oficial**
Todos nuestros productos cuentan con garantía oficial de fábrica de 12 meses, respaldada por nuestro equipo de +17 expertos técnicos que te asistirán en todo momento.`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F7FA] via-[#E8EEF4] to-[#D1DCE8]">
      {/* Back Button */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#007ACC]/20 shadow-sm">
        <div className="max-w-[1320px] mx-auto px-6 py-4">
          <motion.button
            onClick={onBack}
            className="flex items-center gap-2 text-[#007ACC] hover:text-[#00A8E8] transition-colors font-medium"
            whileHover={{ x: -5 }}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver a la tienda</span>
          </motion.button>
        </div>
      </div>

      <div className="max-w-[1320px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Left Column - Images */}
          <div className="space-y-6">
            {/* Main Image */}
            <motion.div 
              className="bg-white rounded-3xl p-8 shadow-2xl border border-[#007ACC]/10"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="aspect-square relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#F5F7FA] to-white flex items-center justify-center">
                <motion.img
                  key={selectedImage}
                  src={images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-contain"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <Badge className="bg-gradient-to-r from-[#007ACC] to-[#00A8E8] text-white border-none shadow-lg">
                      Nuevo
                    </Badge>
                  )}
                  {product.isFeatured && (
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-none shadow-lg">
                      Destacado
                    </Badge>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-4">
              {images.map((img, index) => (
                <motion.button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                    selectedImage === index 
                      ? 'border-[#007ACC] shadow-lg scale-105' 
                      : 'border-gray-200 hover:border-[#007ACC]/50'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img
                    src={img}
                    alt={`Vista ${index + 1}`}
                    className="w-full h-full object-contain bg-white p-2"
                  />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Right Column - Product Info */}
          <div className="space-y-6">
            {/* Brand Link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <a href="#" className="text-[#007ACC] hover:text-[#00A8E8] transition-colors inline-flex items-center gap-2">
                Ver más productos marca {product.brand}
              </a>
            </motion.div>

            {/* Product Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold text-[#0A4D68] mb-2 font-['Poppins']">
                {product.name}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < product.rating
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'fill-gray-200 text-gray-200'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-[#212529]/60">
                  {product.rating}.0 ({Math.floor(Math.random() * 300 + 100)} valoraciones)
                </span>
              </div>
            </motion.div>

            {/* Price */}
            <motion.div 
              className="bg-gradient-to-br from-[#F5F7FA] to-white rounded-2xl p-6 border border-[#007ACC]/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-[#0A4D68] mb-2">
                ${product.price.toLocaleString('es-AR')}
              </div>
              <div className="text-sm text-[#212529]/60 mb-4">
                6 cuotas de ${(product.price / 6).toLocaleString('es-AR')}
              </div>
              <div className="text-sm text-[#212529]/60">
                Precio sin impuestos nacionales • ${(product.price * 1.21).toLocaleString('es-AR')}
              </div>
            </motion.div>

            {/* Shipping Info */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-xl">
                <Truck className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-green-700">Llega gratis</div>
                  <div className="text-sm text-green-600">
                    entre el martes y el miércoles
                  </div>
                  <a href="#" className="text-sm text-[#007ACC] hover:text-[#00A8E8] inline-flex items-center gap-1 mt-1">
                    <MapPin className="w-4 h-4" />
                    Más detalles y formas de entrega
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                <Package className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-blue-700">Retira gratis</div>
                  <div className="text-sm text-blue-600">
                    entre el miércoles y el jueves en nuestro showroom
                  </div>
                  <a href="#" className="text-sm text-[#007ACC] hover:text-[#00A8E8] mt-1 inline-block">
                    Ver en el mapa
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Stock */}
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span className="font-semibold text-[#0A4D68]">Stock disponible</span>
              <span className="text-sm text-[#212529]/60">
                Cantidad: <span className="font-semibold">{product.stock} unidades</span> (+10 disponibles)
              </span>
            </motion.div>

            {/* Quantity Selector */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <span className="text-[#0A4D68] font-semibold">Cantidad:</span>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-lg border-[#007ACC]/20"
                >
                  -
                </Button>
                <span className="w-12 text-center font-semibold text-[#0A4D68]">{quantity}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  className="w-10 h-10 rounded-lg border-[#007ACC]/20"
                >
                  +
                </Button>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button
                onClick={handleBuyNow}
                className="w-full h-14 bg-gradient-to-r from-[#007ACC] to-[#00A8E8] hover:from-[#005A99] hover:to-[#007ACC] text-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="font-semibold">Comprar por WhatsApp</span>
              </Button>

              <Button
                onClick={handleAddToCart}
                variant="outline"
                className="w-full h-14 border-2 border-[#007ACC] text-[#007ACC] hover:bg-[#007ACC] hover:text-white rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                <span className="font-semibold">Consultar disponibilidad</span>
              </Button>

              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  className="h-12 border-[#007ACC]/20 hover:border-[#007ACC] text-[#007ACC] rounded-xl flex items-center justify-center gap-2"
                >
                  <Heart className="w-5 h-5" />
                  Favoritos
                </Button>
                <Button
                  variant="outline"
                  className="h-12 border-[#007ACC]/20 hover:border-[#007ACC] text-[#007ACC] rounded-xl flex items-center justify-center gap-2"
                >
                  <Share2 className="w-5 h-5" />
                  Compartir
                </Button>
              </div>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              className="grid grid-cols-2 gap-4 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[#007ACC]/10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-[#0A4D68] text-sm">Compra Protegida</div>
                  <div className="text-xs text-[#212529]/60">Recibí el producto que esperabas o te devolvemos tu dinero.</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[#007ACC]/10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-[#0A4D68] text-sm">Garantía Oficial</div>
                  <div className="text-xs text-[#212529]/60">12 meses de cobertura total respaldada por +17 expertos.</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Product Details Sections */}
        <div className="grid grid-cols-1 gap-8">
          {/* What you need to know */}
          <motion.div
            className="bg-white rounded-3xl p-8 shadow-xl border border-[#007ACC]/10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-[#0A4D68] mb-6 font-['Poppins']">
              Lo que tenés que saber de este producto
            </h2>
            
            <ul className="space-y-3">
              {product.specs.slice(0, showAllSpecs ? undefined : 6).map((spec, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3 text-[#212529]"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#007ACC] mt-2 flex-shrink-0" />
                  <span>{spec}</span>
                </motion.li>
              ))}
              {[
                `Pantalla: ${product.category === 'celular' ? '6.5"' : '15.6"'} Full HD+`,
                `Cámara: ${product.category === 'celular' ? '50MP + 8MP' : 'Webcam HD 720p'}`,
                `Batería: ${product.category === 'celular' ? '5000mAh' : 'Hasta 8 horas'}`,
                "Puerto USB-C para carga rápida",
                "Resistencia al agua IP52",
                "Lector de huellas digital"
              ].slice(0, showAllSpecs ? undefined : 6 - product.specs.length).map((spec, index) => (
                <motion.li
                  key={`extra-${index}`}
                  className="flex items-start gap-3 text-[#212529]"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 + (product.specs.length + index) * 0.05 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#007ACC] mt-2 flex-shrink-0" />
                  <span>{spec}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Characteristics */}
          <motion.div
            className="bg-white rounded-3xl p-8 shadow-xl border border-[#007ACC]/10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <h2 className="text-2xl font-bold text-[#0A4D68] mb-6 font-['Poppins']">
              Características del producto
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {detailedSpecs.map((spec, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.9 + index * 0.05 }}
                >
                  <CheckCircle2 className="w-5 h-5 text-[#007ACC] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-[#0A4D68]">{spec.label}:</div>
                    <div className="text-[#212529]/70">{spec.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button
              onClick={() => setShowAllSpecs(!showAllSpecs)}
              variant="ghost"
              className="w-full mt-6 text-[#007ACC] hover:text-[#00A8E8] hover:bg-[#007ACC]/5 flex items-center justify-center gap-2"
            >
              <span>{showAllSpecs ? 'Ver menos' : 'Ver todas las características'}</span>
              {showAllSpecs ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </Button>
          </motion.div>

          {/* Description */}
          <motion.div
            className="bg-white rounded-3xl p-8 shadow-xl border border-[#007ACC]/10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <h2 className="text-2xl font-bold text-[#0A4D68] mb-6 font-['Poppins']">
              Descripción
            </h2>
            
            <div className="prose max-w-none text-[#212529]/80 space-y-4 whitespace-pre-line">
              {generateDescription()}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
