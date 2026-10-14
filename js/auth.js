// Autenticación de demostración: esta clave es visible en el navegador y no protege datos reales.
const DEMO_PASSWORD = "PROM2026";
const LOADING_DELAY_MS = 2500;
const ACCESS_MESSAGES = ["Verificando credenciales…", "Cargando módulos…", "Preparando experiencia…", "Acceso concedido."];

// Evita que el navegador restaure una posición anterior como #timeline al recargar.
if ("scrollRestoration" in history) history.scrollRestoration = "manual";

// Actualiza el mensaje de carga sin crear una nueva estructura visual.
function showAccessMessages(loading) {
  const message = loading.querySelector("p");
  ACCESS_MESSAGES.forEach((text, index) => window.setTimeout(() => { message.textContent = text; }, index * 600));
}

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
    showAccessMessages(loading);
    window.setTimeout(async () => {
      // Paso 2: se carga el dashboard antes de hacerlo visible para evitar un estado intermedio vacío.
      await onAuthorized();
      app.hidden = false;
      window.requestAnimationFrame(() => app.classList.add("app-visible"));

      // Paso 3: el Login se desvanece. Al terminar, remove() lo elimina por completo del DOM.
      screen.classList.add("is-exiting");
      screen.addEventListener("animationend", () => {
        // El reflujo al eliminar el Login puede alterar el scroll; se reinicia después de remove().
        screen.remove();
        window.requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "auto" }));
      }, { once: true });

      // Paso 4: se elimina cualquier ancla anterior (por ejemplo, #timeline) y se inicia el relato desde Inicio.
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
      window.scrollTo({ top: 0, behavior: "auto" });

      // Paso 5: el foco llega al contenido principal; ya no existe una ruta normal al Login.
      document.querySelector("#app-content")?.focus();
    }, LOADING_DELAY_MS);
  });
}
