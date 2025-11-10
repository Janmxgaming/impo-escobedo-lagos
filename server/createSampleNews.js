require('dotenv').config();
const mongoose = require('mongoose');
const News = require('./models/News');

async function createSampleNews() {
  try {
    // Conectar a MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Conectado a MongoDB');

    // Crear noticias de ejemplo
    const sampleNews = [
      {
        title: "Tips para tu Primera Importación",
        excerpt: "Guía completa para empresarios que inician en el comercio internacional. Aprende los pasos esenciales.",
        content: "El comercio internacional puede parecer complicado al principio, pero con la guía correcta, tu primera importación puede ser un éxito. En este artículo te compartimos los tips más importantes para que inicies con el pie derecho.\n\n1. Investiga bien a tus proveedores\n2. Entiende las regulaciones aduaneras\n3. Calcula todos los costos involucrados\n4. Considera los tiempos de entrega\n5. Trabaja con un agente aduanal confiable",
        category: "Guías",
        published: true
      },
      {
        title: "Tratados Internacionales Clave para México",
        excerpt: "Conoce los acuerdos comerciales más importantes que benefician a tu negocio y cómo aprovecharlos.",
        content: "México tiene una red extensa de tratados de libre comercio que pueden beneficiar significativamente a tu empresa. Conocer estos tratados te permitirá reducir costos y acceder a nuevos mercados.\n\nLos principales tratados son:\n- T-MEC (antes TLCAN)\n- Tratados con la Unión Europea\n- Alianza del Pacífico\n- Acuerdos con países asiáticos",
        category: "Comercio",
        published: true
      },
      {
        title: "Optimiza tu Logística Aduanal",
        excerpt: "Estrategias probadas para reducir costos y tiempos en procesos aduaneros sin comprometer la calidad.",
        content: "La logística aduanal eficiente es clave para el éxito en el comercio internacional. Aquí te compartimos estrategias que han demostrado reducir costos y tiempos:\n\n- Documentación preparada con anticipación\n- Uso de tecnología para seguimiento\n- Planificación de rutas óptimas\n- Relaciones sólidas con agentes aduanales\n- Cumplimiento normativo impecable",
        category: "Logística",
        published: true
      }
    ];

    // Verificar si ya existen noticias
    const existingNews = await News.countDocuments();
    if (existingNews > 0) {
      console.log(`⚠️  Ya existen ${existingNews} noticias en la base de datos`);
      console.log('   ¿Quieres agregar las noticias de ejemplo de todas formas?');
      console.log('   Comenta esta línea y vuelve a ejecutar si quieres agregarlas');
      process.exit(0);
    }

    // Insertar noticias
    await News.insertMany(sampleNews);
    console.log('✅ Noticias de ejemplo creadas exitosamente');
    console.log(`   ${sampleNews.length} noticias agregadas a la base de datos`);
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

createSampleNews();
