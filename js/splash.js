// Splash Screen: presenta la marca y libera el Login después de la carga inicial.
const SPLASH_DURATION_MS = 2400;

export function initSplash(onComplete) {
  const splash = document.querySelector("#splash-screen");
  const login = document.querySelector("#auth-screen");
  if (!splash || !login) return;
  window.setTimeout(() => {
    splash.classList.add("is-exiting");
    splash.addEventListener("animationend", () => {
      splash.remove();
      login.hidden = false;
      document.querySelector("#username")?.focus();
      onComplete();
    }, { once: true });
  }, SPLASH_DURATION_MS);
}
