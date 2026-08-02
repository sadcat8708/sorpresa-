// Revela cada hito al entrar al viewport, sin afectar el contenido base.
export function initTimeline() {
  const items = document.querySelectorAll(".timeline-list li");
  const observer = new IntersectionObserver((entries) => entries.forEach(({ isIntersecting, target }) => { if (isIntersecting) { target.classList.add("is-visible"); observer.unobserve(target); } }), { threshold: .2 });
  items.forEach((item) => observer.observe(item));
}
