# 🥋 Academia de Judo - Sistema Completo de Gestión

Un sistema web completo para academias de judo con gestión de contenidos, seguimiento de estudiantes y panel de administración.

## ✨ Características

### 🌐 Sitio Web Público
- Landing page profesional con diseño inspirado en artes marciales
- Información sobre programas y horarios
- Formulario de contacto integrado
- Diseño responsive y accesible

### 🔐 Sistema de Autenticación
- Registro e inicio de sesión seguro
- Control de roles (Administrador, Instructor, Estudiante)
- Gestión de sesiones y permisos
- Recuperación de contraseña

### 👨‍💼 Panel de Administración
- Dashboard con estadísticas en tiempo real
- Gestión completa de contenidos (CRUD)
- Sistema de carga de archivos con drag-and-drop
- Gestión de usuarios y permisos
- Analíticas detalladas con gráficos
- Configuración del sistema

### 📚 Portal de Usuario
- Dashboard personal con progreso
- Biblioteca de contenidos filtrable
- Sistema de marcadores y favoritos
- Seguimiento de progreso de aprendizaje
- Sistema de logros y gamificación
- Calendario de clases

### 🗄️ Backend con Supabase
- Base de datos PostgreSQL con seguridad RLS
- Autenticación y autorización integradas
- Almacenamiento de archivos en la nube
- API RESTful generada automáticamente
- Suscripciones en tiempo real

## 🚀 Tecnologías Utilizadas

### Frontend
- **HTML5** - Estructura semántica
- **CSS3** - Estilos modernos con Tailwind CSS
- **JavaScript ES6+** - Funcionalidad dinámica
- **Tailwind CSS** - Framework de utilidades

### Librerías de Animación
- **Anime.js** - Animaciones suaves
- **Splitting.js** - Animaciones de texto
- **ECharts.js** - Gráficos y visualizaciones
- **Splide.js** - Carruseles responsivos
- **p5.js** - Efectos visuales creativos
- **Pixi.js** - Gráficos WebGL
- **Matter.js** - Física para animaciones

### Backend
- **Supabase** - Backend como servicio
- **PostgreSQL** - Base de datos relacional
- **Row Level Security** - Seguridad a nivel de fila
- **Storage API** - Gestión de archivos

## 📁 Estructura del Proyecto

```
judo-academy/
├── index.html              # Landing page principal
├── admin.html              # Panel de administración
├── user-portal.html        # Portal de usuario
├── login.html              # Página de autenticación
├── main.js                 # JavaScript principal
├── admin.js                # JavaScript del panel admin
├── user-portal.js          # JavaScript del portal usuario
├── supabase.js             # Cliente de Supabase
├── init-admin.js           # Script de inicialización
├── resources/              # Recursos e imágenes
│   ├── hero-dojo.png
│   └── judo-logo.png
├── supabase-schema.sql     # Esquema de base de datos
├── design.md               # Guía de diseño
├── interaction.md          # Diseño de interacciones
├── outline.md              # Estructura del proyecto
├── DEPLOYMENT.md           # Guía de despliegue
├── ADMIN_SETUP.md          # Configuración de administrador
├── package.json            # Dependencias del proyecto
├── vite.config.js          # Configuración de Vite
└── .env.example            # Ejemplo de variables de entorno
```

## 🎨 Diseño y Experiencia

### Paleta de Colores
- **Dojo Charcoal** (#2C2C2C) - Principal y texto
- **Dojo Cream** (#F5F3F0) - Fondo y áreas claras
- **Dojo Gold** (#B8860B) - Acentos y CTAs
- **Dojo Sage** (#9CAF88) - Secundario y naturaleza

### Tipografía
- **Playfair Display** - Títulos y encabezados
- **Inter** - Cuerpo de texto y UI
- **Noto Sans JP** - Términos japoneses

### Principios de Diseño
- Diseño limpio y minimalista
- Enfoque en la legibilidad y accesibilidad
- Animaciones sutiles y significativas
- Experiencia de usuario intuitiva

## 🚀 Instalación y Configuración

### Requisitos Previos
- Node.js 16+
- Cuenta en Supabase
- Cuenta en Vercel (para despliegue)

### Paso 1: Clonar el Repositorio
```bash
git clone https://github.com/yourusername/judo-academy.git
cd judo-academy
```

### Paso 2: Instalar Dependencias
```bash
npm install
```

### Paso 3: Configurar Variables de Entorno
1. Copia `.env.example` a `.env.local`
2. Agrega tus credenciales de Supabase:
```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

### Paso 4: Configurar Supabase
1. Crea un proyecto en [Supabase](https://supabase.com)
2. Ejecuta el esquema SQL en `supabase-schema.sql`
3. Configura los buckets de almacenamiento
4. Establece las políticas de seguridad

### Paso 5: Iniciar el Servidor de Desarrollo
```bash
npm run dev
```

## 🔐 Crear Primer Administrador

### Método 1: URL Parameter (Recomendado)
1. Abre tu sitio web
2. Agrega `?init=admin` a la URL
3. Ejemplo: `http://localhost:5173/?init=admin`
4. Esto creará y logueará como administrador automáticamente

**Credenciales por Defecto:**
- Email: `admin@academiajudo.com`
- Password: `AdminJudo2024!`

### Método 2: Consola JavaScript
1. Abre tu sitio web
2. Presiona F12 para abrir la consola
3. Ejecuta el código de inicialización

Para más métodos y solución de problemas, consulta `ADMIN_SETUP.md`.

## 🌐 Despliegue

### Opción 1: Vercel (Recomendado)
1. Conecta tu repositorio GitHub a Vercel
2. Configura las variables de entorno
3. ¡Despliega!

### Opción 2: Otros Servicios
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

Para instrucciones detalladas, consulta `DEPLOYMENT.md`.

## 📊 Funcionalidades Principales

### Gestión de Contenidos
- ✅ CRUD completo de contenidos
- ✅ Carga de archivos multimedia
- ✅ Filtrado y búsqueda avanzada
- ✅ Categorización por niveles de cinturón
- ✅ Sistema de aprobación de contenidos

### Seguimiento de Estudiantes
- ✅ Progreso personalizado por usuario
- ✅ Sistema de logros y gamificación
- ✅ Estadísticas de aprendizaje
- ✅ Marcadores y favoritos
- ✅ Historial de actividad

### Panel de Administración
- ✅ Dashboard con métricas clave
- ✅ Gestión de usuarios y roles
- ✅ Analíticas detalladas
- ✅ Configuración del sistema
- ✅ Monitoreo de actividad

### Seguridad
- ✅ Autenticación segura con JWT
- ✅ Control de acceso basado en roles
- ✅ Seguridad a nivel de base de datos
- ✅ Validación de datos
- ✅ Protección contra acceso no autorizado

## 🔧 Desarrollo

### Scripts Disponibles
```bash
# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de producción
npm run preview

# Inicializar administrador
npm run init-admin
```

### Estructura del Código
- **HTML**: Estructura semántica y accesible
- **CSS**: Utilidades de Tailwind CSS
- **JavaScript**: Módulos ES6+ con funciones separadas
- **Supabase**: Cliente modular con operaciones separadas

## 🎨 Personalización

### Colores
Modifica la configuración de Tailwind CSS en cada archivo HTML para cambiar la paleta de colores.

### Contenido
- Actualiza la información en `index.html`
- Modifica las imágenes en la carpeta `resources/`
- Personaliza el logo y branding

### Funcionalidades
- Extiende el esquema de base de datos
- Agrega nuevas características en los archivos JavaScript
- Personaliza las reglas de negocio

## 📱 Responsive Design

El sitio está completamente optimizado para:
- 📱 Dispositivos móviles
- 📱 Tablets
- 💻 Escritorio
- 🖥️ Pantallas grandes

## ♿ Accesibilidad

- ✅ Navegación por teclado
- ✅ Etiquetas ARIA apropiadas
- ✅ Contraste de color WCAG AA
- ✅ Textos alternativos en imágenes
- ✅ Estructura semántica HTML

## 🔒 Seguridad

- Contraseñas hasheadas con bcrypt
- Tokens JWT con expiración
- Control de acceso a nivel de base de datos
- Validación de entrada de usuario
- Protección CSRF

## 📈 Rendimiento

- Optimización de imágenes
- Lazy loading implementado
- Código JavaScript minimizado
- CSS crítico inline
- Compresión de archivos

## 🌟 Características Avanzadas

### Sistema de Progreso
- Tracking de progreso por contenido
- Visualización de estadísticas
- Cálculo de tiempo de práctica
- Niveles de dificultad

### Gamificación
- Sistema de logros desbloqueables
- Progreso visual con animaciones
- Recompensas por completar contenido
- Compartir logros

### Gestión de Archivos
- Carga de imágenes y videos
- Compresión automática
- Generación de miniaturas
- Validación de tipos de archivo

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu característica (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 👥 Equipo

- **Diseño y Desarrollo**: Judo Academy Team
- **Tecnología**: Supabase, Vite, Tailwind CSS
- **Inspiración**: Artes Marciales Tradicionales

## 📞 Soporte

Para soporte técnico:
1. Revisa la documentación incluida
2. Verifica los archivos de configuración
3. Prueba en el entorno de desarrollo
4. Consulta la guía de solución de problemas
5. Crea un issue en GitHub para reportar bugs

## 🙏 Agradecimientos

- A la comunidad de Judo por la inspiración
- A Supabase por la excelente plataforma backend
- A los contribuyentes de código abierto
- A los instructores y estudiantes de judo

---

**🏫 Academia de Judo - Donde la tradición se encuentra con la tecnología moderna**