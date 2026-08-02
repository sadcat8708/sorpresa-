# 🗺️ Roadmap — Mecatronix Hub | Homenaje al Profesor

## Objetivo

Crear una experiencia web estática para el cumpleaños del profesor de Mecatrónica. El recorrido debe comenzar como una plataforma tecnológica de la Promoción 2026 y revelar gradualmente los recuerdos, agradecimientos y la carta final.

## Estado general

| Fase | Estado | Resultado esperado |
| --- | --- | --- |
| 1. Planeación | Completada | Narrativa, secciones y arquitectura definidas. |
| 2. Diseño base | Completada | Sistema visual SaaS/Dashboard, paleta y tipografías integradas. |
| 3. Estructura modular | Completada | Shell, acceso de demostración, parciales HTML, CSS y JS separados por responsabilidad. |
| 4. Contenido real | En curso | Fotografías, nombres, mensajes y carta definitiva del curso. |
| 5. Interacciones | En curso | Galería, timeline, audio y revelación final con base funcional. |
| 6. QA y entrega | Pendiente | Pruebas, accesibilidad, optimización y publicación. |

---

## Fase 1 — Planeación ✅

### Entregables completados

- [x] Definir el concepto: plataforma tecnológica que se transforma en homenaje.
- [x] Definir la secuencia de descubrimiento: Inicio → Dashboard → Profesor → Proyectos → Galería → Timeline → Mensajes → Carta.
- [x] Definir las secciones y su responsabilidad.
- [x] Elegir identidad visual inicial: azul, celeste, blanco y gris claro.
- [x] Elegir tipografías: Outfit para títulos e Inter para contenido.
- [x] Definir una arquitectura sin frameworks, con HTML, CSS y JavaScript nativos.

### Pendientes de contenido

- [ ] Confirmar el nombre completo y la fotografía autorizada del profesor.
- [ ] Recolectar fotografías con permiso de quienes aparezcan en ellas.
- [ ] Recolectar mensajes finales de los estudiantes.
- [ ] Aprobar la carta definitiva de la Promoción 2026.
- [ ] Seleccionar música opcional y comprobar que puede usarse.

---

## Fase 2 — Diseño base ✅

### Sistema visual implementado

- [x] Paleta principal: azul `#2563EB`, celeste `#38BDF8`, fondos claros y texto oscuro.
- [x] Variables CSS centralizadas en `css/variables.css`.
- [x] Tipografías de Google Fonts integradas en el shell.
- [x] Estética moderna de Dashboard/SaaS en tarjetas, panel de estado, grids y línea temporal.
- [x] Diseño responsive para desktop, tablet y celular.
- [x] Estados básicos de interacción para enlaces, botones y tarjetas.

### Decisiones de UX

1. El Hero presenta el hub sin revelar inmediatamente la sorpresa.
2. El Dashboard valida la identidad académica con métricas simbólicas.
3. Profesor, proyectos, galería y timeline añaden contexto emocional.
4. Los mensajes preparan el cierre.
5. La carta final revela el homenaje completo.

---

## Fase 3 — Arquitectura y desarrollo base ✅

### Shell de la aplicación

- [x] `index.html` contiene metadatos, fuentes, enlaces CSS, navegación, contenedores y el punto de entrada JavaScript.
- [x] `js/main.js` carga los fragmentos HTML en orden para preservar el recorrido narrativo.
- [x] La navegación usa enlaces internos accesibles y menú móvil.
- [x] Pantalla de autenticación local previa al dashboard, con validación, mensaje de error y estado de carga.

### Fragmentos HTML

- [x] `pages/hero.html`
- [x] `pages/dashboard.html`
- [x] `pages/professor.html`
- [x] `pages/projects.html`
- [x] `pages/gallery.html`
- [x] `pages/timeline.html`
- [x] `pages/messages.html`
- [x] `pages/letter.html`
- [x] `pages/footer.html`

### Estilos modulares

- [x] Tokens, reset, estilos globales y layout.
- [x] Un archivo CSS por componente: navbar, hero, dashboard, professor, projects, gallery, timeline, messages, letter y footer.
- [x] Archivos separados para animaciones y reglas responsive.

### JavaScript modular

- [x] `main.js`: composición de la interfaz.
- [x] `auth.js`: validación local de demostración y desbloqueo del contenido.
- [x] `navbar.js`: menú móvil accesible.
- [x] `gallery.js`, `timeline.js`, `animations.js`, `confetti.js`, `audio.js` y `typing.js`: puntos de extensión aislados.

---

## Fase 4 — Contenido definitivo 🔄

### Profesor

- [ ] Añadir su nombre, cargo y frase que haya aprobado.
- [ ] Reemplazar `img/professor/profesor-principal.jpg` por la fotografía final.
- [ ] Revisar que el texto alternativo describa correctamente la foto definitiva.

### Galería

- [ ] Crear `img/gallery/` y añadir imágenes optimizadas en WebP o AVIF.
- [ ] Reemplazar las tres imágenes de ejemplo por fotografías reales.
- [ ] Escribir pies de foto concretos y respetuosos.

### Mensajes y carta

- [ ] Reemplazar testimonios de ejemplo por mensajes aprobados de estudiantes.
- [ ] Confirmar ortografía de nombres y firmas.
- [ ] Ajustar la carta final con la versión consensuada por el curso.

### Métricas y timeline

- [ ] Verificar cifras reales antes de publicarlas.
- [ ] Ajustar hitos y fechas relevantes de la promoción.
- [ ] Incluir graduación o cumpleaños solo cuando la fecha esté confirmada.

**Criterio de cierre:** no quedan textos de ejemplo ni rutas de imágenes inexistentes.

---

## Fase 5 — Interacciones y animaciones ⏳

Implementar con mejora progresiva: el contenido debe seguir siendo legible aunque JavaScript falle o el usuario prefiera reducir movimiento.

- [x] Contadores del Dashboard con `IntersectionObserver`.
- [x] Revelado suave de secciones y mensajes al entrar al viewport.
- [x] Modal accesible para ampliar imágenes de la galería.
- [x] Revelado de cada hito de la Timeline.
- [x] Efecto de escritura progresivo para la carta.
- [x] Botón explícito de reproducción de audio; nunca inicia audio automáticamente.
- [x] Confeti y celebración al finalizar la carta.
- [x] Soporte para `prefers-reduced-motion`.

**Criterio de cierre:** las animaciones aportan significado, no bloquean navegación y no reducen accesibilidad.

---

## Fase 6 — Calidad, accesibilidad y optimización ⏳

### Accesibilidad

- [ ] Validar jerarquía de encabezados y landmarks HTML.
- [ ] Probar navegación completa con teclado.
- [ ] Revisar foco visible, contraste de color y tamaño de texto.
- [ ] Validar `alt` de todas las fotografías reales.
- [ ] Comprobar el menú móvil con lector de pantalla.

### Rendimiento

- [ ] Convertir imágenes a WebP/AVIF y definir dimensiones.
- [ ] Aplicar carga diferida a la galería.
- [ ] Comprimir audio y vídeo antes de añadirlos.
- [ ] Medir rendimiento en móvil con Lighthouse.

### Pruebas y entrega

- [ ] Probar Chrome, Edge, Firefox y Safari si es posible.
- [ ] Probar resoluciones móvil, tablet y escritorio.
- [ ] Comprobar que el proyecto se abre desde un servidor local estático.
- [ ] Revisar enlaces internos, imágenes y consola sin errores.
- [ ] Preparar una copia de respaldo antes de la presentación.

**Criterio de cierre:** experiencia funcional, accesible y verificada en los dispositivos disponibles.

---

## Orden recomendado de trabajo

```text
Contenido definitivo
        ↓
Recursos optimizados
        ↓
Interacciones accesibles
        ↓
Pruebas responsive y de accesibilidad
        ↓
Ensayo de la presentación
        ↓
Entrega al profesor 🎂
```

## Guía de uso local

Como `js/main.js` carga los fragmentos desde `pages/`, el proyecto debe abrirse con un servidor local estático (por ejemplo, Live Server en VS Code). Abrir `index.html` directamente mediante `file://` impide que el navegador cargue esos fragmentos.

> “Las máquinas pueden construir el futuro, pero son los profesores quienes construyen a quienes las crean.”
