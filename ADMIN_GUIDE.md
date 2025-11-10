# 📊 Sistema de Gestión de Noticias - Impo Escobedo de Lagos

## ✅ ¡Sistema Completo y Funcional!

### 🔐 Acceso al Panel de Administración

**URL:** `http://localhost:3000/impo-escobedo-lagos/admin/login`

**Credenciales de Administrador:**
- **Usuario:** `admin`
- **Contraseña:** `Licesco2024!`

---

## 🚀 Cómo Usar el Sistema

### 1️⃣ Iniciar los Servidores

#### Backend (Puerto 5000)
```bash
cd server
npm run dev
```

#### Frontend (Puerto 3000)
```bash
npm start
```

---

### 2️⃣ Panel de Administración

1. Abre: `http://localhost:3000/impo-escobedo-lagos/admin/login`
2. Inicia sesión con las credenciales de arriba
3. Serás redirigido al **Dashboard**

#### Funciones del Dashboard:

✨ **Crear Nueva Noticia**
- Clic en el botón "Nueva Noticia"
- Completa el formulario:
  - Título
  - Categoría (Guías, Comercio, Logística, Tendencias, Noticias, General)
  - Extracto (descripción breve)
  - Contenido (texto completo)
  - Marcar "Publicar inmediatamente" para hacerla visible

✏️ **Editar Noticia**
- Clic en el ícono de lápiz (✏️)
- Modifica los campos necesarios
- Guarda los cambios

👁️ **Publicar/Ocultar**
- Clic en el ícono de ojo (👁️ / 👁️‍🗨️)
- Alterna entre "Publicado" y "Borrador"
- Solo las noticias "Publicadas" aparecen en el blog público

🗑️ **Eliminar Noticia**
- Clic en el ícono de basura (🗑️)
- Confirma la eliminación

---

### 3️⃣ Blog Público

**URL:** `http://localhost:3000/impo-escobedo-lagos/blog`

- Muestra SOLO las noticias publicadas
- Se actualiza automáticamente desde MongoDB
- Ordenadas por fecha de creación

---

## 🎨 Características del Sistema

### 🔒 Seguridad
- ✅ Autenticación con JWT (JSON Web Tokens)
- ✅ Contraseñas encriptadas con bcrypt
- ✅ Sesión persistente en localStorage
- ✅ Protección de rutas administrativas
- ✅ Tokens con expiración de 24 horas

### 💾 Base de Datos
- ✅ MongoDB Atlas (nube gratuita)
- ✅ Modelos con Mongoose
- ✅ Validación de datos
- ✅ Timestamps automáticos

### 🎯 API Backend
- ✅ `POST /api/auth/login` - Iniciar sesión
- ✅ `GET /api/auth/verify` - Verificar token
- ✅ `GET /api/news` - Obtener noticias publicadas (público)
- ✅ `GET /api/news/admin/all` - Obtener todas las noticias (admin)
- ✅ `POST /api/news` - Crear noticia (admin)
- ✅ `PUT /api/news/:id` - Editar noticia (admin)
- ✅ `DELETE /api/news/:id` - Eliminar noticia (admin)
- ✅ `POST /api/contact` - Enviar email de contacto

### 🎨 Interfaz
- ✅ Diseño moderno con Tailwind CSS
- ✅ Colores cyan/aqua como solicitado
- ✅ Animaciones con Framer Motion
- ✅ Responsive (móvil, tablet, desktop)
- ✅ Estados de carga y error

---

## 📝 Flujo de Trabajo Recomendado

1. **Iniciar sesión** en `/admin/login`
2. **Crear noticias** en modo borrador
3. **Revisar y editar** antes de publicar
4. **Publicar** cuando estén listas
5. **Verificar** en el blog público `/blog`
6. **Cerrar sesión** al terminar

---

## 🌐 Variables de Entorno

### Backend (server/.env)
```env
MONGODB_URI=mongodb+srv://impoescobedodelagos05_db_user:...
JWT_SECRET=impo-escobedo-secret-key-2024-super-seguro
EMAIL_USER=impoescobedodelagos05@gmail.com
EMAIL_PASS=acgpniyssgontsdh
PORT=5000
```

### Frontend (.env)
```env
REACT_APP_API_URL=http://localhost:5000
```

---

## 🔄 Próximos Pasos (Opcional)

- [ ] Agregar editor WYSIWYG para contenido
- [ ] Subir imágenes para las noticias
- [ ] Sistema de categorías personalizado
- [ ] Paginación en el blog
- [ ] Búsqueda de noticias
- [ ] Estadísticas del dashboard

---

## 🆘 Solución de Problemas

### ❌ "Error de conexión con el servidor"
- Verifica que el backend esté corriendo en puerto 5000
- Revisa que MongoDB Atlas esté accesible

### ❌ "Usuario o contraseña incorrectos"
- Usa exactamente: `admin` / `Licesco2024!`
- Verifica que el usuario se haya creado (`node createAdmin.js`)

### ❌ "No se pudieron cargar las noticias"
- Revisa que el backend esté corriendo
- Verifica la conexión a MongoDB

---

## 👨‍💻 Soporte

Para cualquier duda o problema, revisa:
1. La consola del navegador (F12)
2. Los logs del servidor backend
3. La conexión a MongoDB Atlas

---

¡Sistema listo para usar! 🚀✨
