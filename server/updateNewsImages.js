require('dotenv').config();
const mongoose = require('mongoose');
const News = require('./models/News');

async function updateNewsImages() {
  try {
    // Conectar a MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Conectado a MongoDB');

    // Imágenes de ejemplo (puedes reemplazarlas con URLs reales)
    const sampleImages = [
      'https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?w=800&h=400&fit=crop', // Importación/Exportación
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=400&fit=crop', // Comercio internacional
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=400&fit=crop', // Logística
    ];

    // Obtener todas las noticias
    const allNews = await News.find();
    
    if (allNews.length === 0) {
      console.log('⚠️  No hay noticias en la base de datos');
      process.exit(0);
    }

    console.log(`📰 Actualizando ${allNews.length} noticias con imágenes...`);

    // Actualizar cada noticia con una imagen
    for (let i = 0; i < allNews.length; i++) {
      const newsItem = allNews[i];
      const imageUrl = sampleImages[i % sampleImages.length];
      
      newsItem.imageUrl = imageUrl;
      await newsItem.save();
      
      console.log(`   ✓ Actualizada: ${newsItem.title}`);
    }

    console.log('✅ Todas las noticias actualizadas con imágenes');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

updateNewsImages();
