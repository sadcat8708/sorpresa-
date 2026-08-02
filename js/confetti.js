// Activa una celebración ligera al terminar la carta, sin bibliotecas externas.
export function initConfetti() {
  document.addEventListener("letter:complete", () => {
    const celebration = document.querySelector("#birthday-celebration");
    if (!celebration) return;
    celebration.hidden = false;
    const pieces = document.createDocumentFragment();
    for (let index = 0; index < 34; index += 1) { const piece = document.createElement("i"); piece.style.setProperty("--x", `${Math.random() * 100}%`); piece.style.setProperty("--delay", `${Math.random() * .7}s`); pieces.append(piece); }
    celebration.append(pieces);
  }, { once: true });
}
