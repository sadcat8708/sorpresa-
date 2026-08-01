// Punto de extensión para el visor modal o carrusel de la galería.
export function initGallery() {
  document.querySelectorAll(".gallery-item img").forEach((image) => image.loading = "lazy");
}
