// Escribe los párrafos de la carta solo cuando sean visibles; respeta movimiento reducido.
export function initTyping() {
  const paragraphs = [...document.querySelectorAll("[data-typing]")];
  if (!paragraphs.length || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const type = (element) => new Promise((resolve) => { const text = element.textContent; let index = 0; element.textContent = ""; const timer = setInterval(() => { element.textContent += text[index++] || ""; if (index > text.length) { clearInterval(timer); resolve(); } }, 16); });
  const observer = new IntersectionObserver(async ([entry]) => { if (!entry.isIntersecting) return; observer.disconnect(); for (const paragraph of paragraphs) await type(paragraph); document.dispatchEvent(new CustomEvent("letter:complete")); }, { threshold: .4 });
  observer.observe(paragraphs[0]);
}
