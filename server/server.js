const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
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

// Configuración de Nodemailer para Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS // Contraseña de aplicación de Gmail
  }
});

// Ruta para verificar que el servidor está funcionando
app.get('/', (req, res) => {
  res.send('Backend de Impo Escobedo de Lagos funcionando correctamente ✅');
});

// Ruta para enviar email de contacto
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message } = req.body;

  // Validación básica
  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      message: 'Por favor completa todos los campos requeridos' 
    });
  }

  // Configurar el contenido del email
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_RECEIVER, // Email del licenciado donde llegará el mensaje
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
    `,
    replyTo: email // Permite responder directamente al cliente
  };

  try {
    // Enviar el email
    await transporter.sendMail(mailOptions);
    
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
