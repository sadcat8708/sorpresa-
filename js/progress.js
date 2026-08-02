// Progreso del relato: actualiza la barra y el capítulo según la sección visible.
const CHAPTERS = [
  ["home", "Capítulo 1 de 7"], ["dashboard", "Capítulo 2 de 7"], ["professor", "Capítulo 3 de 7"],
  ["gallery", "Capítulo 4 de 7"], ["messages", "Capítulo 5 de 7"], ["letter", "Capítulo 6 de 7"], ["credits", "Capítulo final"],
];

export function initProgress() {
  const label = document.querySelector("#journey-label");
  const fill = document.querySelector("#journey-fill");
  if (!label || !fill) return;
  const update = (id) => { const index = CHAPTERS.findIndex(([chapter]) => chapter === id); if (index < 0) return; label.textContent = CHAPTERS[index][1]; fill.style.width = `${((index + 1) / CHAPTERS.length) * 100}%`; };
  const observer = new IntersectionObserver((entries) => entries.forEach(({ isIntersecting, target }) => { if (isIntersecting) update(target.id); }), { rootMargin:"-42% 0px -48%", threshold:0 });
  CHAPTERS.forEach(([id]) => { const section = document.querySelector(`#${id}`); if (section) observer.observe(section); });
}
