import { motion } from 'framer-motion';
import { Ship, Anchor, TrendingUp } from 'lucide-react';
import { Card } from '../common/Card';

export const Services = () => {
  const services = [
    {
      icon: <Ship className="w-12 h-12" />,
      title: "Importaciones y Exportaciones",
      description: "Gestionamos todo el proceso de comercio internacional para que tu mercancía llegue a tiempo y en perfectas condiciones."
    },
    {
      icon: <Anchor className="w-12 h-12" />,
      title: "Asesoría Logística",
      description: "Te guiamos en cada paso del proceso logístico, optimizando costos y tiempos de entrega para tu negocio."
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Asesoría Aduanal",
      description: "Expertos en regulaciones aduaneras, facilitamos el despacho de tu mercancía sin complicaciones."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Nuestros Servicios</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Soluciones integrales para todas tus necesidades de comercio exterior
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} delay={index * 0.2}>
              <div className="text-blue-900 mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};