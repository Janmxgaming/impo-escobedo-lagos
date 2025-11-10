# Configuración de MongoDB Atlas (Base de Datos Gratuita)

## 🎯 ¿Qué es MongoDB Atlas?

Es un servicio de base de datos en la nube GRATUITO de MongoDB. Perfecto para tu proyecto.

**Plan Gratuito incluye:**
- ✅ 512 MB de almacenamiento (miles de noticias)
- ✅ Sin límite de tiempo
- ✅ Sin tarjeta de crédito requerida
- ✅ Backups automáticos

---

## 📝 Paso a Paso para Configurar

### 1️⃣ Crear Cuenta en MongoDB Atlas

1. Ve a: https://www.mongodb.com/cloud/atlas/register
2. Regístrate con tu email o Google
3. Completa el formulario

### 2️⃣ Crear un Cluster (Base de Datos)

1. Haz clic en **"Build a Database"** o **"Create"**
2. Selecciona **"M0 FREE"** (el plan gratuito)
3. Selecciona un proveedor:
   - **AWS** (recomendado)
   - Región más cercana a México: **us-east-1 (Virginia)** o **us-west-2 (Oregon)**
4. Nombre del cluster: `ImpoEscobedo` (o el que quieras)
5. Clic en **"Create Cluster"** (tarda 1-3 minutos)

### 3️⃣ Crear Usuario de Base de Datos

1. En el menú izquierdo, clic en **"Database Access"**
2. Clic en **"Add New Database User"**
3. Authentication Method: **Password**
4. Username: `admin-impo`
5. Password: Genera una segura o usa: `ImpoEscobedo2024!`
6. Database User Privileges: **Atlas admin**
7. Clic en **"Add User"**

⚠️ **GUARDA estas credenciales**, las necesitarás después.

### 4️⃣ Permitir Acceso desde Cualquier IP

1. En el menú izquierdo, clic en **"Network Access"**
2. Clic en **"Add IP Address"**
3. Clic en **"Allow Access from Anywhere"** (para desarrollo y Render.com)
4. Se agregará: `0.0.0.0/0`
5. Clic en **"Confirm"**

⚠️ Esto permite conexiones desde cualquier lugar (necesario para Render.com)

### 5️⃣ Obtener la URL de Conexión

1. Regresa a **"Database"** en el menú izquierdo
2. En tu cluster, clic en **"Connect"**
3. Selecciona **"Connect your application"**
4. Driver: **Node.js**
5. Version: **5.5 or later**
6. Copia la URL que aparece:

```
mongodb+srv://admin-impo:<password>@impoescobedo.xxxxx.mongodb.net/?retryWrites=true&w=majority
```

7. **IMPORTANTE**: Reemplaza `<password>` con la contraseña que creaste

Ejemplo:
```
mongodb+srv://admin-impo:ImpoEscobedo2024!@impoescobedo.xxxxx.mongodb.net/?retryWrites=true&w=majority
```

### 6️⃣ Configurar en tu Proyecto

Edita el archivo `server/.env` y pega tu URL:

```env
MONGODB_URI=mongodb+srv://admin-impo:ImpoEscobedo2024!@impoescobedo.xxxxx.mongodb.net/impo-escobedo-db?retryWrites=true&w=majority
```

⚠️ Agrega `/impo-escobedo-db` antes del `?` para especificar el nombre de la base de datos.

---

## 🧪 Probar la Conexión

1. Inicia el servidor:
   ```bash
   cd server
   npm run dev
   ```

2. Deberías ver:
   ```
   🚀 Servidor backend corriendo en http://localhost:5000
   📧 Configurado para enviar emails desde: impoescobedodelagos05@gmail.com
   ✅ Conectado a MongoDB
   ```

3. Si ves **"Conectado a MongoDB"**, ¡funciona! 🎉

---

## 🔐 Crear el Usuario Admin

Una vez conectado a MongoDB, crea el usuario administrador:

```bash
curl -X POST http://localhost:5000/api/auth/create-admin \
  -H "Content-Type: application/json" \
  -d '{
    "username": "admin",
    "email": "admin@impoescobedo.com",
    "password": "ImpoAdmin2024!"
  }'
```

O desde el navegador, ve a: http://localhost:3000/admin/setup (cuando lo cree en React)

**Guarda estas credenciales:**
- Usuario: `admin`
- Contraseña: `ImpoAdmin2024!` (o la que elijas)

---

## 📊 Ver tus Datos en MongoDB Atlas

1. Ve a https://cloud.mongodb.com/
2. Login con tu cuenta
3. Clic en **"Browse Collections"** en tu cluster
4. Verás las colecciones:
   - `users` - Usuarios administradores
   - `news` - Noticias del blog

Aquí puedes ver, editar y eliminar datos manualmente si es necesario.

---

## 🚨 Solución de Problemas

### Error: "MongooseServerSelectionError"
- Verifica que la IP `0.0.0.0/0` esté en Network Access
- Verifica que la contraseña en MONGODB_URI sea correcta

### Error: "Authentication failed"
- La contraseña tiene caracteres especiales
- URL-encode los caracteres: `!` = `%21`, `@` = `%40`, etc.

### Error: "connect ETIMEDOUT"
- Verifica tu conexión a internet
- El cluster puede estar iniciándose (espera 1-2 minutos)

---

## 💡 Consejos

✅ Haz backups periódicos desde el panel de Atlas

✅ Monitorea el uso de almacenamiento (máximo 512MB gratis)

✅ En producción, cambia la contraseña del admin

✅ Puedes tener múltiples clusters gratuitos (uno por proyecto)

---

## 📱 App Móvil

MongoDB Atlas tiene app móvil para iOS y Android para monitorear tu base de datos desde el celular.

---

¡Listo! Ahora tienes una base de datos profesional y gratuita 🎉
