import { motion } from 'framer-motion';
import { FileText, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Tips para tu Primera Importación",
      excerpt: "Guía completa para empresarios que inician en el comercio internacional. Aprende los pasos esenciales.",
      date: "15 Oct 2024",
      author: "Equipo Impo Escobedo",
      category: "Guías"
    },
    {
      id: 2,
      title: "Tratados Internacionales Clave para México",
      excerpt: "Conoce los acuerdos comerciales más importantes que benefician a tu negocio y cómo aprovecharlos.",
      date: "10 Oct 2024",
      author: "Equipo Impo Escobedo",
      category: "Comercio"
    },
    {
      id: 3,
      title: "Optimiza tu Logística Aduanal",
      excerpt: "Estrategias probadas para reducir costos y tiempos en procesos aduaneros sin comprometer la calidad.",
      date: "5 Oct 2024",
      author: "Equipo Impo Escobedo",
      category: "Logística"
    },
    {
      id: 4,
      title: "Documentación Esencial en Exportaciones",
      excerpt: "Lista completa de documentos necesarios para exportar sin contratiempos legales o administrativos.",
      date: "28 Sep 2024",
      author: "Equipo Impo Escobedo",
      category: "Guías"
    },
    {
      id: 5,
      title: "Tendencias en Comercio Internacional 2024",
      excerpt: "Descubre las nuevas tendencias que están transformando el comercio global este año.",
      date: "20 Sep 2024",
      author: "Equipo Impo Escobedo",
      category: "Tendencias"},
    {
      id: 6,
      title: "Cómo Elegir el Mejor Incoterm para tu Operación",
      excerpt: "Guía práctica para seleccionar el término de comercio internacional más conveniente según tu negocio.",
      date: "12 Sep 2024",
      author: "Equipo Impo Escobedo",
      category: "Comercio"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-bold mb-6">Blog y Noticias</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Mantente actualizado con las últimas tendencias, tips y noticias del comercio internacional
            </p>
          </motion.div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="h-48 bg-gradient-to-br from-blue-900 to-gray-700"></div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-blue-900 bg-blue-100 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-800 mt-4 mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 border-t pt-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </div>
                    </div>
                    <Link to={`/blog/${post.id}`} className="text-blue-900 font-semibold hover:underline">
                      Leer más →
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};