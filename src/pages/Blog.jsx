import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, AlertCircle } from 'lucide-react';

export const Blog = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(`${API_URL}/api/news`);
        
        if (response.ok) {
          const data = await response.json();
          // Asegurar que data es un array
          setPosts(Array.isArray(data) ? data : []);
        } else {
          setError('No se pudieron cargar las noticias');
          setPosts([]);
        }
      } catch (error) {
        console.error('Error al cargar noticias:', error);
        setError('Error de conexión con el servidor');
        setPosts([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, [API_URL]);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-cyan-500 to-blue-500 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-bold mb-6">Noticias</h1>
            <p className="text-xl text-cyan-50 max-w-3xl mx-auto">
              Mantente actualizado con las últimas tendencias, tips y noticias del comercio internacional
            </p>
          </motion.div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          {isLoading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Cargando noticias...</p>
            </div>
          ) : error ? (
            <div className="max-w-md mx-auto bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
              <div className="flex items-center">
                <AlertCircle className="h-6 w-6 text-red-500 mr-3" />
                <p className="text-red-700">{error}</p>
              </div>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No hay noticias publicadas aún.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <motion.article
                  key={post._id}
                  onClick={() => navigate(`/blog/${post._id}`)}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  {/* Imagen de la noticia */}
                  {post.imageUrl ? (
                    <div className="h-48 overflow-hidden">
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.parentElement.innerHTML = '<div class="h-48 bg-gradient-to-br from-cyan-500 to-blue-500"></div>';
                        }}
                      />
                    </div>
                  ) : (
                    <div className="h-48 bg-gradient-to-br from-cyan-500 to-blue-500"></div>
                  )}
                  
                  <div className="p-6">
                    <span className="text-xs font-semibold text-cyan-700 bg-cyan-50 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-bold text-gray-800 mt-4 mb-3">{post.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 border-t pt-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.createdAt).toLocaleDateString('es-MX', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </div>
                      <span className="text-cyan-600 font-semibold hover:underline">
                        Leer más →
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};