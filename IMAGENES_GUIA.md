# 📸 Guía para Agregar Imágenes a las Noticias

## 🎯 Opciones para Subir Imágenes

### Opción 1: Imgur (Recomendada - Más Fácil) ⭐

**Imgur es gratis y no requiere registro:**

1. Ve a https://imgur.com
2. Haz clic en "New post" o arrastra tu imagen
3. Sube la imagen
4. Haz clic derecho sobre la imagen → "Copiar dirección de imagen"
5. Pega esa URL en el campo "URL de la Imagen" en el dashboard

**Ejemplo de URL:**
```
https://i.imgur.com/AbCdEfG.jpg
```

---

### Opción 2: Google Drive (Si ya tienes las imágenes ahí)

1. Sube tu imagen a Google Drive
2. Haz clic derecho → "Compartir"
3. Cambia a "Cualquier persona con el enlace"
4. Copia el ID del enlace compartido (entre `/d/` y `/view`)
5. Usa este formato:
```
https://drive.google.com/uc?export=view&id=TU_ID_AQUI
```

**Ejemplo:**
- Enlace original: `https://drive.google.com/file/d/1ABC123xyz/view`
- URL para usar: `https://drive.google.com/uc?export=view&id=1ABC123xyz`

---

### Opción 3: Unsplash (Imágenes de Stock Gratis)

**Para usar imágenes profesionales gratis:**

1. Ve a https://unsplash.com
2. Busca la imagen que quieras (ej: "shipping", "logistics", "business")
3. Haz clic en la imagen
4. Clic derecho → "Copiar dirección de imagen"
5. Pega en el campo de URL

**Ejemplo de URL:**
```
https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?w=800&h=400&fit=crop
```

---

### Opción 4: Cloudinary (Profesional)

**Si quieres algo más profesional:**

1. Registrate gratis en https://cloudinary.com
2. Sube tus imágenes
3. Copia la URL pública
4. Úsala en el dashboard

---

## 📝 Paso a Paso en el Dashboard

1. **Inicia sesión** en `/admin/login`
2. **Crea o edita** una noticia
3. En el campo **"URL de la Imagen"**:
   - Pega la URL completa de tu imagen
   - Debe empezar con `http://` o `https://`
4. **Verás una vista previa** debajo del campo
5. Si la imagen no se ve, revisa que la URL sea pública
6. **Guarda** la noticia

---

## ✅ Formatos Soportados

- ✅ JPG / JPEG
- ✅ PNG
- ✅ WebP
- ✅ GIF

---

## 🎨 Recomendaciones de Tamaño

Para mejores resultados:
- **Ancho**: 800px - 1200px
- **Alto**: 400px - 600px
- **Aspecto**: 16:9 o 3:2 (horizontal)
- **Peso**: Menos de 500KB (para carga rápida)

---

## 🔧 Solución de Problemas

### ❌ "La imagen no se muestra"
**Causa**: URL incorrecta o imagen privada
**Solución**: 
- Verifica que la URL sea pública
- Prueba abrir la URL en una nueva pestaña
- Asegúrate de que termine en `.jpg`, `.png`, etc.

### ❌ "Imagen muy lenta"
**Causa**: Imagen muy pesada
**Solución**: 
- Usa herramientas como TinyPNG.com para comprimir
- Redimensiona a máximo 1200px de ancho

### ❌ "Error al guardar"
**Causa**: URL no válida
**Solución**: 
- Verifica que empiece con `http://` o `https://`
- No uses URLs de redes sociales directamente

---

## 🌟 Ejemplo Completo

**Crear noticia con imagen de Unsplash:**

1. Ve a https://unsplash.com/s/photos/shipping
2. Encuentra una imagen de barcos/contenedores
3. Copia la URL de la imagen
4. En el dashboard:
   ```
   Título: "Nuevas Rutas de Comercio Marítimo"
   Categoría: "Logística"
   Extracto: "Descubre las nuevas rutas..."
   URL Imagen: https://images.unsplash.com/photo-1578574577315...
   Contenido: "El comercio marítimo..."
   ✓ Publicar inmediatamente
   ```
5. Guarda y verifica en el blog público

---

## 💡 Tip Pro

**Para imágenes relacionadas con comercio internacional, busca en Unsplash:**
- "shipping containers"
- "cargo ship"
- "logistics"
- "warehouse"
- "international trade"
- "customs"
- "port"

¡Estas imágenes son gratis y profesionales! 🚀
