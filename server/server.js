const express = require('express');
const mongoose = require('mongoose');
const sgMail = require('@sendgrid/mail');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

// Configurar SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware CORS - permitir peticiones desde GitHub Pages
app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://janmxgaming.github.io'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Conectar a MongoDB
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('✅ Conectado a MongoDB'))
.catch((err) => console.error('❌ Error conectando a MongoDB:', err));

// Importar rutas
const authRoutes = require('./routes/auth');
const newsRoutes = require('./routes/news');

// Usar rutas
app.use('/api/auth', authRoutes);
app.use('/api/news', newsRoutes);

// Ruta para verificar que el servidor está funcionando
app.get('/', (req, res) => {
  res.send('Backend de Impo Escobedo de Lagos funcionando correctamente ✅');
});

// Ruta para enviar email de contacto con SendGrid
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message } = req.body;

  // Validación básica
  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      message: 'Por favor completa todos los campos requeridos' 
    });
  }

  // Configurar el email con SendGrid
  const msg = {
    to: process.env.EMAIL_RECEIVER, // Email del licenciado
    from: process.env.EMAIL_USER, // Tu email verificado en SendGrid
    replyTo: email, // Email del cliente para poder responder
    subject: `Nuevo mensaje de contacto - ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
        <h2 style="color: #0891b2; text-align: center;">Nuevo Mensaje de Contacto</h2>
        <h3 style="color: #0e7490;">Impo Escobedo de Lagos</h3>
        <hr style="border: 1px solid #e0e0e0;">
        
        <div style="margin: 20px 0;">
          <p style="margin: 10px 0;"><strong style="color: #0891b2;">Nombre:</strong> ${name}</p>
          <p style="margin: 10px 0;"><strong style="color: #0891b2;">Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p style="margin: 10px 0;"><strong style="color: #0891b2;">Teléfono:</strong> ${phone || 'No proporcionado'}</p>
        </div>
        
        <hr style="border: 1px solid #e0e0e0;">
        
        <div style="background-color: #f0f9ff; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <p style="margin: 0;"><strong style="color: #0891b2;">Mensaje:</strong></p>
          <p style="margin: 10px 0; line-height: 1.6;">${message}</p>
        </div>
        
        <hr style="border: 1px solid #e0e0e0;">
        
        <p style="text-align: center; color: #666; font-size: 12px; margin-top: 20px;">
          Este mensaje fue enviado desde el formulario de contacto de la página web de Impo Escobedo de Lagos
        </p>
      </div>
    `
  };

  try {
    // Enviar el email con SendGrid
    await sgMail.send(msg);
    
    res.status(200).json({ 
      success: true, 
      message: 'Mensaje enviado correctamente. Te contactaremos pronto.' 
    });
    
    console.log(`✅ Email enviado desde: ${email}`);
  } catch (error) {
    console.error('❌ Error al enviar email:', error);
    
    res.status(500).json({ 
      success: false, 
      message: 'Error al enviar el mensaje. Por favor intenta más tarde.' 
    });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor backend corriendo en http://localhost:${PORT}`);
  console.log(`📧 Configurado para enviar emails desde: ${process.env.EMAIL_USER}`);
});
