# Backend - Impo Escobedo de Lagos

Backend API para el formulario de contacto.

## 📋 Instalación

1. Navega a la carpeta del servidor:
```bash
cd server
```

2. Instala las dependencias:
```bash
npm install
```

3. Crea un archivo `.env` basado en `.env.example`:
```bash
cp .env.example .env
```

4. Configura tus variables de entorno en el archivo `.env`

## 🔑 Configuración de Gmail

Para usar Gmail necesitas una **Contraseña de Aplicación**:

1. Ve a tu cuenta de Google: https://myaccount.google.com/
2. Seguridad → Verificación en dos pasos (actívala si no está activa)
3. Contraseñas de aplicaciones: https://myaccount.google.com/apppasswords
4. Crea una nueva contraseña de aplicación para "Correo"
5. Copia la contraseña generada (16 caracteres) y pégala en `EMAIL_PASS` del archivo `.env`

## 🚀 Uso

### Modo desarrollo (con auto-reload):
```bash
npm run dev
```

### Modo producción:
```bash
npm start
```

El servidor correrá en `http://localhost:5000`

## 📡 Endpoints

### GET /
Verificar que el servidor está funcionando

### POST /api/contact
Enviar email de contacto

**Body (JSON):**
```json
{
  "name": "Juan Pérez",
  "email": "juan@example.com",
  "phone": "+52 1234567890",
  "message": "Quiero importar chocolates"
}
```

**Respuesta exitosa:**
```json
{
  "success": true,
  "message": "Mensaje enviado correctamente. Te contactaremos pronto."
}
```

## 🌐 Despliegue

### Opciones recomendadas (GRATUITAS):

#### 1. **Render** (Recomendado)
- Ve a https://render.com
- Crea una cuenta gratuita
- New → Web Service
- Conecta tu repositorio de GitHub
- Root Directory: `server`
- Build Command: `npm install`
- Start Command: `npm start`
- Agrega las variables de entorno del archivo `.env`

#### 2. **Railway**
- Ve a https://railway.app
- Crea una cuenta
- New Project → Deploy from GitHub repo
- Configura variables de entorno

#### 3. **Fly.io**
- Excelente para Node.js
- Tier gratuito generoso

## 🔒 Seguridad

- ✅ Nunca subas el archivo `.env` a GitHub
- ✅ Usa contraseñas de aplicación, NO tu contraseña real
- ✅ CORS está configurado para aceptar peticiones del frontend
- ✅ Validación básica de campos

## 📧 Servicios de Email Compatibles

Puedes usar otros servicios además de Gmail:

**Outlook/Hotmail:**
```javascript
service: 'hotmail'
```

**Yahoo:**
```javascript
service: 'yahoo'
```

**Otros servicios SMTP:**
```javascript
host: 'smtp.tuservidor.com',
port: 587,
secure: false,
auth: {
  user: 'tu-email',
  pass: 'tu-contraseña'
}
```
