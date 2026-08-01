// Control aislado del menú móvil y sus atributos de accesibilidad.
export function initNavbar() {
  const toggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".primary-navigation");
  if (!toggle || !navigation) return;
  toggle.addEventListener("click", () => {
    const open = navigation.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  navigation.addEventListener("click", (event) => {
    if (event.target.matches("a")) { navigation.classList.remove("is-open"); toggle.setAttribute("aria-expanded", "false"); }
  });
}
