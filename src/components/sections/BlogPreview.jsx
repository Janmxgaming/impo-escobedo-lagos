import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';

export const BlogPreview = () => {
  const posts = [
    {
      id: 1,
      title: "Tips para tu Primera Importación",
      excerpt: "Guía completa para empresarios que inician en el comercio internacional.",
      date: "15 Oct 2024"
    },
    {
      id: 2,
      title: "Tratados Internacionales Clave",
      excerpt: "Conoce los acuerdos comerciales que benefician a tu negocio.",
      date: "10 Oct 2024"
    },
    {
      id: 3,
      title: "Optimiza tu Logística Aduanal",
      excerpt: "Estrategias para reducir costos y tiempos en aduana.",
      date: "5 Oct 2024"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-cyan-600 mb-4">Noticias</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mantente actualizado sobre comercio exterior y tendencias internacionales
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              className="border border-gray-200 rounded-xl p-6 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20 transition-all cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <FileText className="w-4 h-4 mr-2" />
                {post.date}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link to={`/blog/${post.id}`} className="text-cyan-600 font-semibold hover:underline">
                Leer más →
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};