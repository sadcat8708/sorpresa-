// Crea una celebración por capas: confeti ligero, destellos y mensaje final.
const CONFETTI_COUNT = 54;
const FIREWORK_COUNT = 5;

function createConfettiPiece() {
  const piece = document.createElement("i");
  piece.className = "confetti-piece";
  piece.style.setProperty("--x", `${Math.random() * 100}%`);
  piece.style.setProperty("--drift", `${(Math.random() - .5) * 16}rem`);
  piece.style.setProperty("--spin", `${360 + Math.random() * 540}deg`);
  piece.style.setProperty("--delay", `${Math.random() * .8}s`);
  piece.style.setProperty("--duration", `${1.8 + Math.random() * 1.3}s`);
  return piece;
}

function createFirework(index) {
  const burst = document.createElement("i");
  burst.className = "firework-burst";
  burst.style.setProperty("--x", `${12 + index * 19}%`);
  burst.style.setProperty("--y", `${12 + (index % 2) * 17}%`);
  burst.style.setProperty("--delay", `${.35 + index * .3}s`);
  return burst;
}

export function initConfetti() {
  const celebration = document.querySelector("#birthday-celebration");
  const effects = celebration?.querySelector(".celebration-effects");
  const video = document.querySelector(".surprise-video video");
  const trigger = document.querySelector(".celebration-trigger");
  let hasCelebrated = false;

  const celebrate = () => {
    // Evita repetir los efectos si se pulsa el botón después de que termina el video.
    if (hasCelebrated || !celebration || !effects) return;
    hasCelebrated = true;
    celebration.hidden = false;
    celebration.classList.add("is-celebrating");
    // Se reducen los elementos decorativos cuando el usuario solicita menos movimiento.
    const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const effectsFragment = document.createDocumentFragment();
    for (let index = 0; index < (reduceMotion ? 12 : CONFETTI_COUNT); index += 1) effectsFragment.append(createConfettiPiece());
    if (!reduceMotion) for (let index = 0; index < FIREWORK_COUNT; index += 1) effectsFragment.append(createFirework(index));
    effects.append(effectsFragment);
    trigger?.setAttribute("hidden", "");
    window.setTimeout(() => celebration.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" }), 80);
  };

  // Ruta principal: se celebra automáticamente al terminar el video.
  video?.addEventListener("ended", celebrate, { once: true });
  // Ruta opcional: permite continuar sin forzar a ver el video completo.
  trigger?.addEventListener("click", celebrate, { once: true });
}
