// Notificaciones transitorias que reconocen el avance del visitante sin detenerlo.
const MILESTONES = {
  dashboard:["📊","Dashboard desbloqueado"],
  professor:["👨‍🏫","Profesor descubierto"],
  gallery:["📸","Galería desbloqueada"],
  messages:["💬","Mensajes encontrados"],
  letter:["📜","Carta abierta"],
  credits:["🎉","Homenaje completado"],
};

function showToast(icon, text) {
  const feed = document.querySelector("#achievement-feed");
  if (!feed) return;
  const toast = document.createElement("p");
  toast.className = "achievement-toast";
  toast.innerHTML = `<span aria-hidden="true">${icon}</span>${text}`;
  feed.append(toast);
  window.setTimeout(() => toast.remove(), 4100);
}

export function initAchievements() {
  // El acceso se confirma inmediatamente; los demás logros dependen de cada capítulo visible.
  showToast("🏅", "Acceso autorizado");
  const observer = new IntersectionObserver((entries) => entries.forEach(({ isIntersecting, target }) => {
    if (!isIntersecting || !MILESTONES[target.id]) return;
    showToast(...MILESTONES[target.id]);
    // Deja de observar la sección para que su logro solo pueda aparecer una vez.
    observer.unobserve(target);
  }), { rootMargin:"0px 0px -35% 0px", threshold:.1 });
  Object.keys(MILESTONES).forEach((id) => { const section = document.querySelector(`#${id}`); if (section) observer.observe(section); });
}
