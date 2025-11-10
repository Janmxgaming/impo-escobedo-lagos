import { motion } from 'framer-motion';
import { Ship, Anchor, TrendingUp, Globe, FileCheck, Clock } from 'lucide-react';
import { Card } from '../components/common/Card';

export const ServicesPage = () => {
  const mainServices = [
    {
      icon: <Ship className="w-16 h-16" />,
      title: "Importaciones y Exportaciones",
      description: "Gestionamos todo el proceso de comercio internacional, desde la documentación hasta la entrega final de tu mercancía.",
      features: [
        "Gestión de documentación aduanal",
        "Coordinación de transporte internacional",
        "Seguimiento en tiempo real",
        "Optimización de costos logísticos"
      ]
    },
    {
      icon: <Anchor className="w-16 h-16" />,
      title: "Asesoría Logística",
      description: "Te acompañamos en cada etapa del proceso logístico con soluciones personalizadas para tu negocio.",
      features: [
        "Análisis de rutas óptimas",
        "Selección de transportistas",
        "Gestión de almacenamiento",
        "Control de inventarios"
      ]
    },
    {
      icon: <TrendingUp className="w-16 h-16" />,
      title: "Asesoría Aduanal",
      description: "Expertos en regulaciones aduaneras nacionales e internacionales para facilitar tus operaciones.",
      features: [
        "Clasificación arancelaria",
        "Cumplimiento normativo",
        "Despacho aduanero express",
        "Resolución de contingencias"
      ]
    }
  ];

  const benefits = [
    { icon: <Globe />, text: "Cobertura internacional" },
    { icon: <FileCheck />, text: "100% cumplimiento legal" },
    { icon: <Clock />, text: "Entregas a tiempo" }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-500 to-blue-500 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-bold mb-6">Nuestros Servicios</h1>
            <p className="text-xl text-cyan-50 max-w-3xl mx-auto">
              Soluciones integrales de comercio exterior diseñadas para impulsar tu negocio a nivel internacional
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                  <div>
                    <div className="text-cyan-600 mb-6">{service.icon}</div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{service.title}</h2>
                    <p className="text-gray-600 text-lg mb-6">{service.description}</p>
                  </div>
                  <div className="flex items-center">
                    <ul className="space-y-4">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-cyan-600 mr-3 text-xl">✓</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-cyan-600 mb-12">¿Por qué elegirnos?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} delay={index * 0.1} className="text-center">
                <div className="text-cyan-600 flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <p className="text-lg font-semibold text-gray-800">{benefit.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};