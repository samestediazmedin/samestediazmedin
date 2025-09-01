# Tipos de Diseño de Páginas Web

Este repositorio contiene ejemplos y explicaciones de los principales tipos de diseño de páginas web, junto con ejercicios de JavaScript para práctica de programación.

## 📋 Contenido

### Ejercicios de JavaScript
- `ejercicios.js` - Filtrado de estudiantes aprobados
- `ejercicio2.js` - Operaciones con números pares
- `ejercicio3.js` - Cálculo de descuentos en precios
- `ejercicio4.js` - Manipulación de matrices

### Tipos de Diseño Web

## 1. Diseño Fijo (Fixed Layout)

El diseño fijo utiliza dimensiones específicas en píxeles que no cambian independientemente del tamaño de la pantalla del usuario.

**Características:**
- Ancho fijo en píxeles (ej: 960px, 1200px)
- No se adapta a diferentes tamaños de pantalla
- Control preciso sobre la disposición de elementos
- Puede causar problemas en dispositivos móviles

**Cuándo usar:**
- Sitios web que requieren control preciso del diseño
- Aplicaciones web complejas con interfaces específicas
- Cuando el público objetivo usa principalmente computadoras de escritorio

## 2. Diseño Fluido/Líquido (Fluid Layout)

El diseño fluido utiliza porcentajes en lugar de píxeles fijos, permitiendo que el contenido se expanda y contraiga con el navegador.

**Características:**
- Usa porcentajes para anchos de elementos
- Se adapta al ancho del navegador
- Mejor aprovechamiento del espacio disponible
- Puede causar problemas de legibilidad en pantallas muy anchas o estrechas

**Cuándo usar:**
- Sitios web que necesitan aprovechar todo el espacio disponible
- Cuando se quiere evitar barras de desplazamiento horizontal
- Diseños simples con contenido textual

## 3. Diseño Adaptativo (Adaptive Layout)

El diseño adaptativo utiliza diferentes diseños fijos para diferentes rangos de tamaño de pantalla mediante media queries.

**Características:**
- Múltiples versiones fijas del diseño
- Cambia abruptamente entre diseños en puntos específicos
- Control preciso para cada tamaño de pantalla
- Requiere más trabajo de desarrollo

**Cuándo usar:**
- Cuando se necesita control específico para diferentes dispositivos
- Sitios web complejos con diferentes funcionalidades por dispositivo
- Cuando se tiene presupuesto para desarrollar múltiples versiones

## 4. Diseño Responsivo (Responsive Layout)

El diseño responsivo combina elementos fluidos con media queries para crear una experiencia que se adapta suavemente a cualquier pantalla.

**Características:**
- Usa unidades flexibles (%, em, rem, vw, vh)
- Media queries para ajustes específicos
- Imágenes flexibles y escalables
- Navegación adaptativa

**Cuándo usar:**
- La mayoría de sitios web modernos
- Cuando se quiere una sola versión que funcione en todos los dispositivos
- Sitios web con presupuesto limitado para múltiples versiones

## 5. Diseño de Una Sola Página (Single Page Layout)

Todo el contenido se presenta en una sola página larga, frecuentemente con navegación por anclas.

**Características:**
- Todo el contenido en una página
- Navegación por secciones (scroll suave)
- Carga inicial más lenta, navegación más rápida
- Ideal para sitios con contenido lineal

**Cuándo usar:**
- Portafolios personales
- Páginas de aterrizaje (landing pages)
- Sitios web de presentación de productos
- Presentaciones narrativas

## 6. Diseño en Rejilla/Grid (Grid Layout)

Utiliza un sistema de rejilla para organizar el contenido en filas y columnas estructuradas.

**Características:**
- Estructura organizada en filas y columnas
- Alineación consistente de elementos
- Facilita el diseño responsivo
- CSS Grid y Flexbox modernos

**Cuándo usar:**
- Sitios web con mucho contenido visual
- Galerías de imágenes
- Layouts complejos con múltiples secciones
- Dashboards y aplicaciones de datos

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos y diseño responsivo
- **JavaScript** - Interactividad y lógica
- **CSS Grid** - Layouts modernos
- **Flexbox** - Alineación flexible

## 📁 Estructura del Proyecto

```
├── README.md
├── ejercicios.js
├── ejercicio2.js
├── ejercicio3.js
├── ejercicio4.js
├── ejemplos/
│   ├── fijo.html
│   ├── fluido.html
│   ├── adaptativo.html
│   ├── responsivo.html
│   ├── single-page.html
│   └── grid.html
└── estilos/
    ├── fijo.css
    ├── fluido.css
    ├── adaptativo.css
    ├── responsivo.css
    ├── single-page.css
    └── grid.css
```

## 🚀 Cómo Usar

1. **Ejercicios JavaScript**: Ejecuta cualquier archivo .js con Node.js
   ```bash
   node ejercicios.js
   ```

2. **Ejemplos de Diseño**: Abre los archivos HTML en tu navegador para ver los diferentes tipos de diseño en acción.

## 📚 Recursos Adicionales

- [MDN Web Docs - Responsive Design](https://developer.mozilla.org/es/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [CSS-Tricks - A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [CSS-Tricks - A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/complete-guide-flexbox/)

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.