# 🗺️ Roadmap — PROM 2026 Hub | Homenaje al Profesor

## Estado general

| Fase | Estado | Resultado actual |
| --- | --- | --- |
| 1. Planeación | Completada | Concepto, narrativa y arquitectura definidos. |
| 2. Diseño | Completada | Sistema visual Dashboard/SaaS, responsive y accesible. |
| 3. Desarrollo modular | Completada | HTML por fragmentos, CSS por componente y JS por función. |
| 4. Contenido real | Completada | Foto del profesor, 17 recuerdos, carta, créditos y video integrados. |
| 5. Interacciones | Completada | Splash, acceso, galería, timeline, carta, celebración y progreso. |
| 6. QA y entrega | En curso | Correcciones funcionales aplicadas; faltan pruebas manuales finales. |

---

## Fases completadas

### 1. Planeación ✅

- [x] Definir una experiencia que inicia como plataforma tecnológica y termina como homenaje.
- [x] Establecer el recorrido: Hero → Dashboard → Profesor → Proyectos → Galería → Timeline → Mensajes → Carta → Créditos.
- [x] Elegir HTML, CSS y JavaScript nativos sin frameworks.

### 2. Diseño y accesibilidad ✅

- [x] Integrar paleta azul/celeste, superficies claras y tipografías Outfit e Inter.
- [x] Crear componentes de navegación, tarjetas, grids, línea temporal y carta.
- [x] Implementar diseño responsive, foco visible, landmarks, encabezados y textos alternativos.
- [x] Respetar `prefers-reduced-motion`.

### 3. Arquitectura y contenido ✅

- [x] Usar `index.html` como shell y `pages/` como fragmentos independientes.
- [x] Cargar las secciones en orden desde `js/main.js`.
- [x] Incorporar pantalla splash y acceso de demostración.
- [x] Integrar una fotografía del profesor, 17 recuerdos, SVG del Hero y video MP4/H.264.
- [x] Mantener el video original como respaldo en `video/original/`.

### 4. Experiencia e interacciones ✅

- [x] Añadir navegación fija, menú móvil y barra de progreso.
- [x] Crear galería con lightbox accesible.
- [x] Animar tarjetas, métricas y elementos de la timeline.
- [x] Revelar la carta final progresivamente.
- [x] Activar la celebración desde el video o un botón, sin reproducción automática.
- [x] Eliminar el sistema de música.
- [x] Corregir el enlace del footer para regresar al Hero (`#home`).

---

## QA y entrega 🔄

### Pendientes antes de presentar

- [ ] Abrir desde un servidor local y comprobar que no haya errores en consola.
- [ ] Realizar el recorrido completo y confirmar navegación, galería, carta, video y celebración.
- [ ] Probar teclado, menú móvil, lightbox, video, botón de celebración y footer.
- [ ] Probar en las resoluciones móvil, tablet y escritorio disponibles.
- [ ] Confirmar métricas, nombres de créditos, textos y fotografías con la promoción.
- [ ] Preparar una copia de respaldo del proyecto antes de la presentación.

### Criterio de entrega

La entrega estará lista cuando el sitio se abra desde un servidor local, complete el recorrido sin errores, muestre la celebración y el contenido final esté aprobado por la Promoción 2026.

## Referencias

- [PRD vigente](PRD.md)
- [Guía de ejecución y arquitectura](../README.md)
