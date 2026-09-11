# 🎓 PROM 2026  Hub — Promoción 2026

Experiencia web estática creada por la Promoción 2026 de Mecatrónica como homenaje de cumpleaños y agradecimiento al profesor Henry. Inicia como una plataforma tecnológica y revela progresivamente recuerdos, mensajes y una carta final.

## Características actuales

- Splash screen y acceso local de demostración antes de mostrar el contenido.
- Navegación fija, responsive y con progreso del recorrido.
- Dashboard con métricas de la promoción, claramente marcadas como datos o indicadores simbólicos.
- Perfil del profesor, proyectos, galería con visor de imágenes, timeline y mensajes.
- Carta final con revelado gradual, video y celebración opcional con confeti y destellos.
- Soporte para `prefers-reduced-motion`, foco visible, landmarks semánticos y textos alternativos.

## Tecnologías

- HTML5 semántico
- CSS3 modular
- JavaScript nativo con módulos ES

No utiliza frameworks, base de datos ni servicios de terceros. El acceso es solamente visual: la contraseña está declarada en `js/auth.js` y no ofrece seguridad real.

## Acceso de demostración

Usa cualquier nombre de usuario y la contraseña `123`.

## Estructura

```text
sorpresa-/
├── index.html                 # Shell, splash, acceso y contenedores de la app
├── pages/                     # Fragmentos HTML cargados por main.js
│   ├── hero.html
│   ├── dashboard.html
│   ├── professor.html
│   ├── projects.html
│   ├── gallery.html
│   ├── timeline.html
│   ├── messages.html
│   ├── letter.html
│   ├── credits.html
│   └── footer.html
├── css/                       # Tokens, layout, componentes, animaciones y responsive
├── js/                        # Módulos de acceso, navegación e interacciones
├── img/                       # Ilustración, foto del profesor y recuerdos originales
├── video/
│   ├── original/              # Video fuente conservado como respaldo
│   └── optimized/             # MP4/H.264 usado por la página
├── docs/
│   ├── PRD.md                 # Requisitos y alcance vigente
│   └── ROADMAP.md             # Estado y pendientes de entrega
└── README.md
```

## Ejecución local

El proyecto debe ejecutarse desde un servidor estático, porque `js/main.js` carga los fragmentos de `pages/` mediante `fetch`.

Puedes usar Live Server en VS Code o ejecutar:

```powershell
py -m http.server 4173
```

Después abre `http://localhost:4173` en el navegador. No abras `index.html` directamente con `file://`.

## Recorrido

```text
Splash → Login → Hero → Dashboard → Profesor → Proyectos → Galería
      → Timeline → Mensajes → Carta → Video/Celebración → Créditos
```

## Recursos

- Las fotografías de la página usan los archivos JPG originales ubicados en `img/profe/` e `img/recuerdos/`.
- El video activo es `video/optimized/sorpresa-optimized.mp4`; el original permanece en `video/original/`.
- No hay reproducción automática ni módulo de música.

## Verificaciones recomendadas antes de presentar

- Abrir desde un servidor local y revisar la consola del navegador.
- Probar el menú y el botón “Volver al inicio” en móvil y escritorio.
- Confirmar el contenido, las métricas y las fotografías con la promoción.

## Créditos

Desarrollado con gratitud por la Promoción 2026 de Mecatrónica.
