const express = require('express');
const router = express.Router();
const News = require('../models/News');
const authMiddleware = require('../middleware/auth');

// Obtener todas las noticias publicadas (público)
router.get('/', async (req, res) => {
  try {
    const news = await News.find({ published: true })
      .sort({ createdAt: -1 })
      .select('-__v');
    
    res.json(news);
  } catch (error) {
    console.error('Error al obtener noticias:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error al obtener noticias' 
    });
  }
});

// Obtener una noticia por ID (público)
router.get('/:id', async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    
    if (!news) {
      return res.status(404).json({ 
        success: false, 
        message: 'Noticia no encontrada' 
      });
    }

    res.json(news);
  } catch (error) {
    console.error('Error al obtener noticia:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error al obtener noticia' 
    });
  }
});

// Obtener todas las noticias (incluyendo no publicadas) - ADMIN
router.get('/admin/all', authMiddleware, async (req, res) => {
  try {
    const news = await News.find()
      .sort({ createdAt: -1 })
      .select('-__v');
    
    res.json(news);
  } catch (error) {
    console.error('Error al obtener noticias:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error al obtener noticias' 
    });
  }
});

// Crear noticia - ADMIN
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { title, excerpt, content, category, author, imageUrl, published } = req.body;

    // Validar datos requeridos
    if (!title || !excerpt || !content) {
      return res.status(400).json({ 
        success: false, 
        message: 'Título, extracto y contenido son requeridos' 
      });
    }

    const news = new News({
      title,
      excerpt,
      content,
      category: category || 'General',
      author: author || 'Equipo Impo Escobedo',
      imageUrl: imageUrl || '',
      published: published !== undefined ? published : true
    });

    await news.save();

    res.status(201).json({
      success: true,
      message: 'Noticia creada exitosamente',
      news
    });
  } catch (error) {
    console.error('Error al crear noticia:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error al crear noticia' 
    });
  }
});

// Actualizar noticia - ADMIN
router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const { title, excerpt, content, category, author, imageUrl, published } = req.body;

    const news = await News.findByIdAndUpdate(
      req.params.id,
      {
        title,
        excerpt,
        content,
        category,
        author,
        imageUrl,
        published,
        updatedAt: Date.now()
      },
      { new: true, runValidators: true }
    );

    if (!news) {
      return res.status(404).json({ 
        success: false, 
        message: 'Noticia no encontrada' 
      });
    }

    res.json({
      success: true,
      message: 'Noticia actualizada exitosamente',
      news
    });
  } catch (error) {
    console.error('Error al actualizar noticia:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error al actualizar noticia' 
    });
  }
});

// Eliminar noticia - ADMIN
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const news = await News.findByIdAndDelete(req.params.id);

    if (!news) {
      return res.status(404).json({ 
        success: false, 
        message: 'Noticia no encontrada' 
      });
    }

    res.json({
      success: true,
      message: 'Noticia eliminada exitosamente'
    });
  } catch (error) {
    console.error('Error al eliminar noticia:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error al eliminar noticia' 
    });
  }
});

module.exports = router;
