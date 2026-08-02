// Punto de entrada: compone la interfaz desde los fragmentos HTML independientes.
import { initNavbar } from "./navbar.js";
import { initGallery } from "./gallery.js";
import { initAnimations } from "./animations.js";
import { initTimeline } from "./timeline.js";
import { initConfetti } from "./confetti.js";
import { initTyping } from "./typing.js";
import { initAuth } from "./auth.js";
import { initSplash } from "./splash.js";
import { initProgress } from "./progress.js";
import { initAchievements } from "./achievements.js";
import { initEasterEgg } from "./easter-egg.js";

const sectionFiles = ["hero", "dashboard", "professor", "projects", "gallery", "timeline", "messages", "letter", "credits"];
let hasBootstrapped = false;

async function loadFragment(name, target) {
  const response = await fetch(`pages/${name}.html`);
  if (!response.ok) throw new Error(`No se pudo cargar pages/${name}.html`);
  target.insertAdjacentHTML("beforeend", await response.text());
}

async function bootstrap() {
  // Evita una segunda composición si el flujo de acceso se invoca accidentalmente otra vez.
  if (hasBootstrapped) return;
  hasBootstrapped = true;
  const content = document.querySelector("#app-content");
  const footer = document.querySelector("#footer-slot");
  try {
    // Ambos contenedores se limpian antes de cargar fragmentos para garantizar una única instancia.
    content.innerHTML = "";
    footer.innerHTML = "";
    // La carga es secuencial para conservar el orden narrativo del recorrido.
    for (const file of sectionFiles) await loadFragment(file, content);
    await loadFragment("footer", footer);
    [initNavbar, initGallery, initAnimations, initTimeline, initConfetti, initTyping, initProgress, initAchievements, initEasterEgg].forEach((init) => init());
  } catch (error) {
    hasBootstrapped = false;
    console.error(error);
    content.innerHTML = "<p class=\"loading-message\">No fue posible cargar el contenido. Abre el proyecto mediante un servidor local.</p>";
  }
}

// La secuencia es Splash → Login → Dashboard; cada pantalla libera la siguiente.
initSplash(() => initAuth(bootstrap));
