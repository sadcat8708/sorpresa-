// Revelado compartido para secciones y tarjetas al hacer scroll.
export function initAnimations() {
  document.documentElement.classList.add("js-ready");
  const elements = document.querySelectorAll(".section-shell, .message-card");
  const observer = new IntersectionObserver((entries) => entries.forEach(({ isIntersecting, target }) => { if (isIntersecting) { target.classList.add("is-visible"); observer.unobserve(target); } }), { threshold: .12 });
  elements.forEach((element) => observer.observe(element));
  // Cuenta métricas numéricas una sola vez al entrar al Dashboard.
  const metrics = document.querySelectorAll(".metric-value[data-count]");
  const counterObserver = new IntersectionObserver((entries) => entries.forEach(({ isIntersecting, target }) => { if (!isIntersecting) return; const total = Number(target.dataset.count); const suffix = target.textContent.includes("+") ? "+" : ""; const start = performance.now(); const update = (now) => { const progress = Math.min((now - start) / 700, 1); target.textContent = `${Math.round(total * progress)}${suffix}`; if (progress < 1) requestAnimationFrame(update); }; requestAnimationFrame(update); counterObserver.unobserve(target); }), { threshold: .8 });
  metrics.forEach((metric) => counterObserver.observe(metric));
}
