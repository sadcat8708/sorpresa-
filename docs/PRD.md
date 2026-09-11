# PRD — Mecatronix Hub | Homenaje al Profesor

## 1. Resumen del producto

**PROM 2026 Hub** es una experiencia web estática de la Promoción 2026 de Mecatrónica. Su objetivo es sorprender al profesor Henry durante su cumpleaños mediante una interfaz inspirada en un dashboard tecnológico que, a lo largo del recorrido, revela recuerdos, agradecimientos y una carta colectiva.

## 2. Objetivo

Crear un recuerdo digital elegante, emotivo y navegable que se perciba inicialmente como una plataforma académica real y termine como un homenaje personal de la promoción.

## 3. Usuarios y contexto

| Usuario | Necesidad |
| --- | --- |
| Profesor homenajeado | Recorrer una experiencia clara, emotiva y fácil de usar. |
| Promoción 2026 | Presentar fotos, mensajes y recuerdos en una pieza cuidada. |
| Equipo organizador | Poder actualizar textos, fotos y métricas sin modificar toda la página. |

## 4. Alcance implementado

### Acceso y narrativa

- Splash screen de aproximadamente 2.4 segundos.
- Pantalla de acceso local sin base de datos.
- Contraseña de demostración declarada en `js/auth.js`.
- Al autorizar el acceso, el login se elimina del DOM y el recorrido inicia desde el Hero.

### Secciones

1. Hero de presentación.
2. Dashboard con cuatro métricas: tres de la promoción y una simbólica.
3. Perfil y homenaje al profesor.
4. Proyectos y aprendizajes.
5. Galería de recuerdos con lightbox.
6. Timeline de momentos relevantes.
7. Mensajes de estudiantes.
8. Carta final con revelado gradual.
9. Video, celebración con confeti/destellos y créditos.
10. Footer con retorno al Hero (`#home`).

### Interacciones

- Navegación fija, menú móvil y enlace para saltar al contenido.
- Barra de progreso del recorrido.
- Animaciones de entrada, hover y contadores del Dashboard.
- Lightbox accesible para fotografías.
- Carta con saludo escrito y revelado por bloques.
- Celebración activada al finalizar el video o pulsar su botón.
- Easter egg al hacer cinco clics en el logo.

## 5. Requisitos funcionales

| ID | Requisito | Estado |
| --- | --- | --- |
| RF-01 | El contenido principal debe permanecer oculto antes del acceso. | Implementado |
| RF-02 | El acceso válido debe mostrar carga, retirar el login del DOM e iniciar en el Hero. | Implementado |
| RF-03 | Las secciones deben cargarse desde fragmentos independientes en `pages/`. | Implementado |
| RF-04 | La galería debe abrir cada fotografía en un visor modal. | Implementado |
| RF-05 | El video y la celebración no deben reproducirse automáticamente. | Implementado |
| RF-06 | El enlace del footer debe regresar al Hero. | Implementado |

## 6. Requisitos no funcionales

- HTML semántico, encabezados jerárquicos, `alt` en imágenes y foco visible.
- Diseño responsive para escritorio, tablet y móvil.
- Compatibilidad con `prefers-reduced-motion`.
- Sin frameworks, base de datos, backend ni reproductor de música.
- Carga diferida en las fotos no críticas y dimensiones declaradas para reducir cambios de diseño.
- El sitio debe abrirse desde un servidor estático local; no es compatible con `file://` debido a la carga de fragmentos.

## 7. Arquitectura vigente

| Área | Responsabilidad |
| --- | --- |
| `index.html` | Shell de la aplicación, splash, login, navegación y contenedores. |
| `pages/` | Fragmentos HTML independientes para cada capítulo. |
| `css/` | Tokens, reset, layout y estilos aislados por componente. |
| `js/main.js` | Carga de fragmentos e inicialización de módulos. |
| `js/auth.js` y `js/splash.js` | Secuencia Splash → Login → contenido. |
| `js/gallery.js`, `typing.js`, `confetti.js` | Experiencia visual de galería y cierre. |
| `img/` y `video/` | Recursos reales; los JPG se conservan y los WebP optimizados son los activos. |

## 8. Recursos actuales

- 1 fotografía principal y 17 recuerdos conservados en JPG original.
- 18 versiones WebP activas, con las mismas dimensiones de sus archivos fuente.
- 1 video original de respaldo y 1 MP4/H.264 optimizado para la página.
- Ilustración SVG para el Hero.

## 9. Fuera de alcance

- Autenticación real, cuentas de usuario o base de datos.
- Música, reproductor de audio o reproducción automática.
- Panel administrativo, edición en línea o envío de mensajes.
- Procesamiento de imágenes o video en el navegador.

## 10. Pendientes previos a la presentación

- Confirmar las métricas `26`, `2` y `24` con la promoción.
- Completar o aprobar los nombres del bloque de créditos.
- Probar en los navegadores y dispositivos disponibles.
- Verificar la consola y la navegación por teclado desde el servidor de presentación.
