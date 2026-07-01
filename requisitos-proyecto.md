# Requisitos para la entrega
1. **Estructura semantica:** header, nav, main, section, footer.
2. **Formulario de contacto:** campos para nombre, correo electrónico y mensaje, utilizando Formspree para manejar el envío de datos.
3. **Estilos básicos aplicados con css:** Archivo styles.css tiene que incluir estilos para header, footer y lista de navegación tambien tiene que incuir la fuentes de google fonts
4. **Diseño Responsivo con Flexbox y Grid**
- Sección "Productos": Organizada en cards de forma responsiva utilizando Flexbox.
- Sección "Reseñas": Organizada utilizando Grid, con una distribución lógica y estética.
- Sección "Contacto": Debe ser responsiva mediante el uso de Media Queries para adaptarse a diferentes tamaños de pantalla
5. **Multimedia**: deberá incluir archivos multimedia (imagenes, video o iframe) correctamente integrado en la página.
- Lista de navegación: Implementar una lista desordenada con enlaces que simulen una navegación interna (Inicio, Productos, Contacto, etc.).
6. **Subida del Proyecto:** El proyecto debe estar subido a un hosting gratuito (Netlify o GitHub Pages), con una URL funcional para visualizar el sitio.
7. **JavaScript:** Deberá incluir un archivo Debes crear un archivo script.js para manejar toda la interactividad de la página.
- **DOM**: Implementa funciones para validar formularios (ej., campos requeridos y formato de correo).
- **Fetch Api:**Consume datos desde una API REST usando fetch. Muestra los productos obtenidos de la API en la página en forma de tarjetas (cards).
- **Visualización de Productos:** Cada producto debe tener su imagen, título y precio, mostrando una lista atractiva para el usuario.
8. **Carrito de compras dinámico**
- **Agregar Productos al Carrito:** Implementa un carrito de compras donde los usuarios puedan añadir productos desde las tarjetas.
- **Uso de localStorage o sessionStorage:** Guarda el estado del carrito en localStorage o sessionStorage para que no se pierda al actualizar o cerrar la página.
- **Contador Dinámico:** Muestra el número total de productos en el carrito y asegúrate de actualizarlo en tiempo real.
9. **Edición y visualización del carrito**
- **Visualización de Productos en el Carrito:** Muestra una lista de productos añadidos al carrito, incluyendo cantidad, precio y total.
- **Edición de Cantidades y Eliminación de Productos:** Implementa funciones para que el usuario pueda editar la cantidad de cada producto o eliminarlo del carrito.
- **Total Dinámico:** Actualiza el total de la compra cada vez que se modifiquen los productos en el carrito.
10. **SEO & Accesibilidad**
- Usa alt en las imágenes para mejorar la accesibilidad.
- Asegúrate de que se pueda navegar fácilmente con el teclado.
- Usa metaetiquetas en el head del HTML para optimizar el SEO
