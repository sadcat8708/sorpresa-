// Punto de entrada: compone la interfaz desde los fragmentos HTML independientes.
import { initNavbar } from "./navbar.js";
import { initGallery } from "./gallery.js";
import { initAnimations } from "./animations.js";
import { initTimeline } from "./timeline.js";
import { initConfetti } from "./confetti.js";
import { initTyping } from "./typing.js";
import { initAuth } from "./auth.js";
import { initSplash } from "./splash.js";

const sectionFiles = ["hero", "dashboard", "professor", "projects", "gallery", "timeline", "messages", "letter"];

async function loadFragment(name, target) {
  const response = await fetch(`pages/${name}.html`);
  if (!response.ok) throw new Error(`No se pudo cargar pages/${name}.html`);
  target.insertAdjacentHTML("beforeend", await response.text());
}

async function bootstrap() {
  const content = document.querySelector("#app-content");
  const footer = document.querySelector("#footer-slot");
  try {
    content.innerHTML = "";
    // La carga es secuencial para conservar el orden narrativo del recorrido.
    for (const file of sectionFiles) await loadFragment(file, content);
    await loadFragment("footer", footer);
    [initNavbar, initGallery, initAnimations, initTimeline, initConfetti, initTyping].forEach((init) => init());
  } catch (error) {
    console.error(error);
    content.innerHTML = "<p class=\"loading-message\">No fue posible cargar el contenido. Abre el proyecto mediante un servidor local.</p>";
  }
}

// La secuencia es Splash → Login → Dashboard; cada pantalla libera la siguiente.
initSplash(() => initAuth(bootstrap));
