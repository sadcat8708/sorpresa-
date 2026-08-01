# 🎓 Mecatronix Hub — Promoción 2026

Sitio web conmemorativo de la Promoción 2026 de Mecatrónica. El proyecto rinde homenaje a un profesor en su cumpleaños y agradece su conocimiento, paciencia y compromiso durante la formación del curso.

## Objetivo

Crear una experiencia interactiva que combine tecnología, diseño y gratitud. El sitio se presenta inicialmente como un portal académico y, durante la navegación, revela mensajes, recuerdos y una dedicatoria especial.

## Tecnologías

- HTML5
- CSS3
- JavaScript

El proyecto no usa base de datos, PHP ni frameworks. Como las secciones se cargan como fragmentos HTML, debe abrirse desde un servidor local estático (por ejemplo, Live Server), no directamente con `file://`.

## Arquitectura

`index.html` es el shell de la aplicación. `js/main.js` inserta los fragmentos de `pages/` en el orden narrativo del homenaje; los estilos y scripts se separan por responsabilidad.

```text
Mecatronix-Hub/
├── index.html
├── pages/
│   ├── hero.html
│   ├── dashboard.html
│   ├── professor.html
│   ├── projects.html
│   ├── gallery.html
│   ├── timeline.html
│   ├── messages.html
│   ├── letter.html
│   └── footer.html
├── css/
│   ├── variables.css
│   ├── global.css
│   ├── layout.css
│   ├── [component].css
│   └── responsive.css
├── js/
│   ├── main.js
│   ├── navbar.js
│   ├── gallery.js
│   └── [feature].js
├── img/
├── audio/
├── video/
└── README.md
```

## Uso local

Ejecuta el proyecto con una extensión de servidor local, como Live Server en VS Code, y abre la dirección que indique. Esto permite que el navegador cargue los archivos de `pages/` mediante `fetch`.

## Experiencia prevista

- **Inicio:** presentación con estética de dashboard académico moderno.
- **Nosotros:** información sobre la Promoción 2026 de Mecatrónica.
- **Herramientas:** anécdotas y enseñanzas del profesor presentadas como recursos académicos.
- **Calendario:** fechas importantes, como proyectos destacados, cumpleaños y graduación.
- **Dashboard:** indicadores simbólicos de proyectos, horas de aprendizaje, sonrisas compartidas y generaciones inspiradas.
- **Galería:** fotografías del curso y momentos especiales.
- **Mensajes:** agradecimientos escritos por los estudiantes.
- **Carta final:** dedicatoria colectiva de cumpleaños.

## Animaciones previstas

- Aparición suave y efecto hover en tarjetas.
- Contadores animados y efecto de máquina de escribir.
- Confeti, fuegos artificiales y corazones discretos.
- Brillo en botones.

## Compatibilidad

El diseño se preparará para computador, tablet y celular.

## Créditos

Desarrollado con cariño por la Promoción 2026 de Mecatrónica como recuerdo de una etapa inolvidable.

> “Las mejores máquinas pueden construirse con acero, pero los mejores ingenieros se forman gracias a buenos maestros.”

Muchas gracias, profesor.
