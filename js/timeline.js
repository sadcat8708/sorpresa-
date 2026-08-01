// Punto de extensión para resaltar el hito visible en la línea de tiempo.
export function initTimeline() {
  const timeline = document.querySelector(".timeline-list");
  if (timeline) timeline.setAttribute("data-enhanced", "true");
}
