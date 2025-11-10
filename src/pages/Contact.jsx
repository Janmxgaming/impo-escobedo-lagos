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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      // URL del backend - Cambiar cuando despliegues el backend
      const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
      
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({ 
          type: 'success', 
          message: '✅ Mensaje enviado correctamente! Te contactaremos pronto.' 
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus({ 
          type: 'error', 
          message: '❌ ' + data.message 
        });
      }
    } catch (error) {
      console.error('Error al enviar:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: '❌ Error al enviar el mensaje. Verifica que el servidor esté funcionando.' 
      });
    } finally {
      setIsSubmitting(false);
    }
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
      <section className="bg-gradient-to-br from-cyan-500 to-blue-500 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-bold mb-6">Contacto</h1>
            <p className="text-xl text-cyan-50 max-w-3xl mx-auto">
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
              <h2 className="text-4xl font-bold text-cyan-600 mb-6">
                Hablemos de tu Proyecto
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Nuestro equipo de expertos está listo para asesorarte en todas tus necesidades 
                de comercio internacional. Contáctanos y descubre cómo podemos ayudarte.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-500 text-white p-3 rounded-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Teléfono</h3>
                    <p className="text-gray-600">+52 (333) 060-4534</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-500 text-white p-3 rounded-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">juriesco2013@hotmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-500 text-white p-3 rounded-lg">
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-cyan-500"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-cyan-500"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-cyan-500"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-cyan-500"
                      placeholder="Cuéntanos sobre tu proyecto..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="outline" 
                    className="w-full flex items-center justify-center space-x-2"
                    disabled={isSubmitting}
                  >
                    <span>{isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}</span>
                    <Send className="w-4 h-4" />
                  </Button>

                  {/* Mensaje de estado */}
                  {submitStatus.message && (
                    <div className={`
                      p-4 rounded-lg text-center font-medium
                      ${submitStatus.type === 'success' 
                        ? 'bg-green-100 text-green-800 border border-green-300' 
                        : 'bg-red-100 text-red-800 border border-red-300'
                      }
                    `}>
                      {submitStatus.message}
                    </div>
                  )}
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