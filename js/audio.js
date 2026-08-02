// Control opt-in: el audio solo se crea y reproduce después de una acción del usuario.
export function initAudio() {
  const button = document.querySelector(".audio-toggle");
  if (!button) return;
  const music = new Audio("audio/homenaje.mp3");
  button.addEventListener("click", async () => {
    if (music.paused) { try { await music.play(); button.textContent = "❚❚ Pausar música"; button.setAttribute("aria-pressed", "true"); } catch { button.textContent = "Música no disponible"; } }
    else { music.pause(); button.textContent = "♫ Música"; button.setAttribute("aria-pressed", "false"); }
  });
}
