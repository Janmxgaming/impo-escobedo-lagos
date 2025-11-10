# 📧 Sistema de Contacto con Backend

## ✅ Backend Completado

El backend ya está configurado en la carpeta `server/`. Ahora sigue estos pasos:

---

## 🔧 Configuración Paso a Paso

### 1️⃣ Configurar las Credenciales de Email

#### Opción A: Usar Gmail (Recomendado)

1. **Ir a tu cuenta de Google**: https://myaccount.google.com/

2. **Activar verificación en 2 pasos**:
   - Ve a "Seguridad"
   - Busca "Verificación en dos pasos"
   - Actívala si no está activa

3. **Crear contraseña de aplicación**:
   - Ve a: https://myaccount.google.com/apppasswords
   - Selecciona "Correo" como app
   - Selecciona "Otro" como dispositivo (escribe "Impo Escobedo")
   - Copia la contraseña de 16 caracteres

4. **Editar el archivo `server/.env`**:
   ```env
   EMAIL_USER=tu-email@gmail.com
   EMAIL_PASS=xxxx xxxx xxxx xxxx  # Pega aquí la contraseña de aplicación
   EMAIL_RECEIVER=juriesco2013@hotmail.com
   ```

#### Opción B: Usar Hotmail/Outlook

Edita `server/server.js` línea 15:
```javascript
service: 'hotmail', // Cambiar de 'gmail' a 'hotmail'
```

Luego en `server/.env`:
```env
EMAIL_USER=tu-email@hotmail.com
EMAIL_PASS=tu-contraseña-normal
EMAIL_RECEIVER=juriesco2013@hotmail.com
```

---

### 2️⃣ Iniciar el Backend

Abre una **nueva terminal** y ejecuta:

```bash
cd server
npm run dev
```

Deberías ver:
```
🚀 Servidor backend corriendo en http://localhost:5000
📧 Configurado para enviar emails desde: tu-email@gmail.com
```

---

### 3️⃣ Iniciar el Frontend

En **otra terminal** (deja el backend corriendo):

```bash
npm start
```

---

### 4️⃣ Probar el Formulario

1. Ve a: http://localhost:3000/contacto
2. Llena el formulario con datos de prueba:
   - Nombre: Angel
   - Email: angel@example.com
   - Teléfono: +52 1234567890
   - Mensaje: Quiero importar 5 chocolates por contenedor
3. Haz clic en "Enviar Mensaje"
4. Deberías ver un mensaje verde "✅ Mensaje enviado correctamente!"
5. Revisa el email `juriesco2013@hotmail.com` - debería llegar un correo

---

## 🌐 Despliegue en Producción

### Backend (Render - GRATIS)

1. **Crear cuenta en Render**: https://render.com
2. Haz clic en "New +" → "Web Service"
3. Conecta tu repositorio de GitHub
4. Configuración:
   - **Name**: impo-escobedo-backend
   - **Root Directory**: `server`
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Agrega las **variables de entorno**:
   - `EMAIL_USER`: tu-email@gmail.com
   - `EMAIL_PASS`: tu-contraseña-de-aplicacion
   - `EMAIL_RECEIVER`: juriesco2013@hotmail.com
6. Haz clic en "Create Web Service"
7. Copia la URL que te dan (ej: `https://impo-escobedo-backend.onrender.com`)

### Frontend (actualizar URL del backend)

1. Crea un archivo `.env.production` en la raíz del proyecto:
   ```env
   REACT_APP_API_URL=https://impo-escobedo-backend.onrender.com
   ```

2. Reconstruye el frontend:
   ```bash
   npm run build
   ```

3. Despliega en GitHub Pages como siempre

---

## 🧪 Verificar que Funciona

### Backend está corriendo:
```bash
curl http://localhost:5000
```
Debería responder: "Backend de Impo Escobedo de Lagos funcionando correctamente ✅"

### Enviar email de prueba:
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+52 1234567890",
    "message": "Mensaje de prueba"
  }'
```

---

## 🔒 Seguridad

✅ El archivo `.env` NO se sube a GitHub (está en `.gitignore`)
✅ Nunca compartas tu contraseña de aplicación
✅ CORS está configurado para aceptar peticiones del frontend
✅ Los emails tienen formato HTML profesional

---

## 📱 Formato del Email que Llegará

```
De: tu-email@gmail.com
Para: juriesco2013@hotmail.com
Asunto: Nuevo mensaje de contacto - Angel

┌─────────────────────────────────────────┐
│ Nuevo Mensaje de Contacto               │
│ Impo Escobedo de Lagos                  │
├─────────────────────────────────────────┤
│ Nombre: Angel                           │
│ Email: angel@example.com                │
│ Teléfono: +52 1234567890                │
├─────────────────────────────────────────┤
│ Mensaje:                                │
│ Quiero importar 5 chocolates por        │
│ contenedor                              │
└─────────────────────────────────────────┘
```

---

## ❓ Problemas Comunes

### Error: "Invalid login"
- Verifica que usaste la **contraseña de aplicación**, no tu contraseña normal
- Asegúrate de que la verificación en 2 pasos esté activa

### Error: "CORS policy"
- El backend ya tiene CORS configurado
- Verifica que ambos servidores estén corriendo

### No llega el email
- Revisa la carpeta de SPAM
- Verifica que `EMAIL_RECEIVER` esté bien escrito
- Revisa los logs del servidor backend

---

## 🎉 ¡Listo!

Ahora tienes un sistema completo de contacto que envía emails automáticamente al licenciado.
