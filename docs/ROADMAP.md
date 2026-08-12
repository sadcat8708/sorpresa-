# 🗺️ Roadmap — Mecatronix Hub | Homenaje al Profesor

## Objetivo

Crear una experiencia web estática para el cumpleaños del profesor de Mecatrónica. El recorrido debe comenzar como una plataforma tecnológica de la Promoción 2026 y revelar gradualmente los recuerdos, agradecimientos y la carta final.

## Estado general

| Fase | Estado | Resultado esperado |
| --- | --- | --- |
| 1. Planeación | Completada | Narrativa, secciones y arquitectura definidas. |
| 2. Diseño base | Completada | Sistema visual SaaS/Dashboard, paleta y tipografías integradas. |
| 3. Estructura modular | Completada | Shell, acceso de demostración, parciales HTML, CSS y JS separados por responsabilidad. |
| 4. Contenido real | Completada | Fotografías, video, homenaje y carta incorporados. |
| 5. Interacciones | Completada | Galería, timeline, progreso y revelación final implementados. |
| 6. QA y entrega | En curso | Revisión estática completada; faltan pruebas manuales y publicación. |

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
- [x] `gallery.js`, `timeline.js`, `animations.js`, `confetti.js` y `typing.js`: puntos de extensión aislados.

---

## Fase 4 — Contenido definitivo ✅

### Profesor

- [x] Integrar la fotografía real del profesor Henry.
- [x] Añadir mensaje de homenaje y despedida de la Promoción 2026.
- [x] Revisar el texto alternativo de la fotografía principal.

### Galería

- [x] Incorporar tres fotografías reales en `img/recuerdos/`.
- [x] Reemplazar las imágenes de ejemplo de la galería.
- [x] Añadir pies de foto y textos alternativos descriptivos.

### Mensajes y carta

- [x] Integrar los mensajes y la carta final del homenaje.
- [ ] Añadir nombres individuales de estudiantes en créditos, si el curso decide incluirlos.

### Métricas y timeline

- [x] Definir los hitos narrativos del recorrido y la celebración de cumpleaños.
- [x] Diferenciar datos de la promoción e indicador simbólico en el Dashboard.
- [ ] Confirmar las cifras `26`, `2` y `24` antes de la presentación pública.

**Criterio de cierre:** cumplido para el contenido actual. Solo quedan firmas opcionales y validación final de cifras.

---

## Fase 5 — Interacciones y animaciones ✅

Implementar con mejora progresiva: el contenido debe seguir siendo legible aunque JavaScript falle o el usuario prefiera reducir movimiento.

- [x] Contadores del Dashboard con `IntersectionObserver`.
- [x] Revelado suave de secciones y mensajes al entrar al viewport.
- [x] Modal accesible para ampliar imágenes de la galería.
- [x] Revelado de cada hito de la Timeline.
- [x] Efecto de escritura progresivo para la carta.
- [x] Confeti y celebración al finalizar la carta.
- [x] Soporte para `prefers-reduced-motion`.
- [x] Barra de progreso, logros por capítulo y Easter Egg discreto.

**Criterio de cierre:** las animaciones aportan significado, no bloquean navegación y no reducen accesibilidad.

---

## Fase 6 — Calidad, accesibilidad y optimización 🔄

### Accesibilidad

- [x] Mantener landmarks, encabezados y HTML semántico por sección.
- [x] Añadir foco visible y enlace para saltar al contenido.
- [x] Validar textos alternativos de las fotografías actuales.
- [ ] Probar navegación completa con teclado en un navegador real.
- [ ] Comprobar el menú móvil con lector de pantalla.
- [ ] Comprobar el menú móvil con lector de pantalla.

### Rendimiento

- [ ] Convertir imágenes a WebP/AVIF y definir dimensiones.
- [x] Aplicar carga diferida a la galería.
- [ ] Comprimir el vídeo antes de añadirlo.
- [ ] Medir rendimiento en móvil con Lighthouse.

### Pruebas y entrega

- [ ] Probar Chrome, Edge, Firefox y Safari si es posible.
- [ ] Probar resoluciones móvil, tablet y escritorio.
- [ ] Comprobar que el proyecto se abre desde un servidor local estático.
- [x] Revisar rutas locales, módulos y formato mediante validación estática.
- [ ] Revisar consola sin errores en un navegador real.
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
