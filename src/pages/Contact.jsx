import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '../components/common/Button';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí irá la lógica para enviar el formulario
    console.log('Form submitted:', formData);
    alert('Mensaje enviado! Te contactaremos pronto.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-bold mb-6">Contacto</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              ¿Listo para expandir tu negocio? Estamos aquí para ayudarte
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-4xl font-bold text-blue-900 mb-6">
                Hablemos de tu Proyecto
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Nuestro equipo de expertos está listo para asesorarte en todas tus necesidades 
                de comercio internacional. Contáctanos y descubre cómo podemos ayudarte.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-900 text-white p-3 rounded-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Teléfono</h3>
                    <p className="text-gray-600">+52 (333) 060-4534</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-900 text-white p-3 rounded-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">juriesco2013@hotmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-900 text-white p-3 rounded-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Ubicación</h3>
                    <p className="text-gray-600">Lagos de Moreno, Jalisco</p>
                    <p className="text-gray-600">México</p>
                  </div>
                </div>
              </div>

              {/* Horarios */}
              <div className="mt-8 bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-bold text-gray-800 mb-4">Horarios de Atención</h3>
                <div className="space-y-2 text-gray-600">
                  <p><span className="font-semibold">Lunes - Viernes:</span> 9:00 AM - 6:00 PM</p>
                  <p><span className="font-semibold">Sábado:</span> 9:00 AM - 2:00 PM</p>
                  <p><span className="font-semibold">Domingo:</span> Cerrado</p>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Envíanos un Mensaje</h3>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900"
                      placeholder="(474) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900"
                      placeholder="Cuéntanos sobre tu proyecto..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="outline" 
                    className="w-full flex items-center justify-center space-x-2"
                  >
                    <span>Enviar Mensaje</span>
                    <Send className="w-4 h-4" />
                  </Button>
                </div>

                <p className="text-sm text-gray-500 mt-4">
                  * Campos obligatorios. Tus datos están protegidos y no serán compartidos.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section (placeholder) */}
      <section className="h-96 bg-gray-300">
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-900/20 to-gray-700/20">
          <p className="text-gray-600 text-lg">[ Mapa de ubicación - Integrar Google Maps ]</p>
        </div>
      </section>
    </div>
  );
};