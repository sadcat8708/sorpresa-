// Autenticación de demostración: esta clave es visible en el navegador y no protege datos reales.
const DEMO_PASSWORD = "Mecatronix2026";
const LOADING_DELAY_MS = 1100;

// Conecta el formulario de acceso y ejecuta onAuthorized solo tras validar la clave.
export function initAuth(onAuthorized) {
  const form = document.querySelector("#auth-form");
  const password = document.querySelector("#password");
  const username = document.querySelector("#username");
  const feedback = document.querySelector("#auth-feedback");
  const loading = document.querySelector("#auth-loading");
  const screen = document.querySelector("#auth-screen");
  const app = document.querySelector("#protected-app");
  if (!form || !password || !username || !feedback || !loading || !screen || !app) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    feedback.textContent = "";
    if (!username.value.trim() || !password.value) { feedback.textContent = "Completa el usuario y la contraseña para continuar."; return; }
    if (password.value !== DEMO_PASSWORD) { feedback.textContent = "La contraseña no es correcta. Inténtalo nuevamente."; password.focus(); return; }

    // Paso 1: se reemplaza el formulario por un estado de carga sin recargar la página.
    form.hidden = true;
    loading.hidden = false;
    window.setTimeout(() => {
      // Paso 2: se muestra el dashboard y se inicia su transición de entrada.
      app.hidden = false;
      onAuthorized();
      window.requestAnimationFrame(() => app.classList.add("app-visible"));

      // Paso 3: el Login se desvanece. Al terminar, remove() lo elimina por completo del DOM.
      screen.classList.add("is-exiting");
      screen.addEventListener("animationend", () => screen.remove(), { once: true });

      // Paso 4: el foco llega al contenido principal; ya no existe una ruta normal al Login.
      document.querySelector("#top")?.focus();
    }, LOADING_DELAY_MS);
  });
}
