// Ritmo editorial de la carta: saludo escrito, pausas de lectura y cierre ceremonial.
const GREETING_SPEED_MS = 48;
const FIRST_PAUSE_MS = 850;
const PARAGRAPH_PAUSE_MS = 1150;
const FINAL_PAUSE_MS = 1400;

export function initTyping() {
  const steps = [...document.querySelectorAll("[data-letter-step]")];
  const greeting = document.querySelector("[data-letter-greeting]");
  const letter = document.querySelector(".letter-content");
  const epilogue = document.querySelector("[data-letter-epilogue]");
  if (!steps.length || !greeting || !letter) return;

  // Solo con JavaScript se activa la secuencia; sin JS el mensaje continúa visible y completo.
  letter.classList.add("is-sequenced");
  if (epilogue) epilogue.hidden = true;
  const revealEpilogue = () => {
    if (epilogue) { epilogue.hidden = false; epilogue.classList.add("is-revealed"); }
    document.dispatchEvent(new CustomEvent("letter:complete"));
  };
  const typeGreeting = (element) => new Promise((resolve) => {
    const text = element.textContent;
    let index = 0;
    element.classList.add("is-revealed");
    element.textContent = "";
    const timer = window.setInterval(() => {
      element.textContent += text[index++] || "";
      if (index > text.length) { window.clearInterval(timer); resolve(); }
    }, GREETING_SPEED_MS);
  });
  const observer = new IntersectionObserver(async ([entry]) => {
    if (!entry.isIntersecting) return;
    observer.disconnect();
    // Las personas que reducen movimiento reciben el mensaje completo sin esperas.
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) { steps.forEach((step) => step.classList.add("is-revealed")); revealEpilogue(); return; }
    await typeGreeting(greeting);
    // Primera pausa: permite recibir el saludo antes de empezar el mensaje.
    await new Promise((resolve) => window.setTimeout(resolve, FIRST_PAUSE_MS));
    // Los textos largos aparecen por ideas, dejando tiempo suficiente para leer cada una.
    for (const step of steps.slice(1)) {
      step.classList.add("is-revealed");
      await new Promise((resolve) => window.setTimeout(resolve, PARAGRAPH_PAUSE_MS));
    }
    // Pausa final: separa el homenaje escrito del video y la celebración.
    await new Promise((resolve) => window.setTimeout(resolve, FINAL_PAUSE_MS));
    revealEpilogue();
  }, { threshold: .55 });
  observer.observe(greeting);
}
