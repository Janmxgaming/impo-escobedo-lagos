import { motion } from 'framer-motion';
import { Target, Eye, Award } from 'lucide-react';

export const About = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-bold mb-6">Nosotros</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Somos tu socio estratégico en comercio internacional
            </p>
          </motion.div>
        </div>
      </section>

      {/* Historia */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Nuestra Historia</h2>
              <p className="text-gray-600 text-lg mb-4">
                Impo Escobedo de Lagos nace de la visión de conectar negocios locales con mercados globales, 
                facilitando el comercio internacional a través de servicios especializados.
              </p>
              <p className="text-gray-600 text-lg">
                Con años de experiencia en el sector, nos hemos consolidado como líderes en asesoría 
                logística y aduanal, ayudando a empresas a expandir sus horizontes comerciales.
              </p>
            </motion.div>
            <motion.div
              className="bg-gradient-to-br from-blue-900 to-gray-700 h-96 rounded-2xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            />
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-16">Nuestros Valores</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Target />, title: "Misión", text: "Facilitar el comercio internacional de nuestros clientes con soluciones eficientes y confiables." },
              { icon: <Eye />, title: "Visión", text: "Ser la empresa líder en servicios de comercio exterior en la región." },
              { icon: <Award />, title: "Compromiso", text: "Excelencia en cada operación, cumplimiento y satisfacción total del cliente." }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white p-8 rounded-xl shadow-lg text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="text-blue-900 flex justify-center mb-4 scale-125">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};