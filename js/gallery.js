// Lightbox accesible: una sola instancia de diálogo para todas las fotografías.
export function initGallery() {
  const images = document.querySelectorAll(".gallery-item img");
  if (!images.length) return;
  const dialog = document.createElement("dialog");
  dialog.className = "gallery-lightbox";
  dialog.innerHTML = '<button class="lightbox-close" type="button" aria-label="Cerrar imagen">×</button><img alt="" />';
  document.body.append(dialog);
  const preview = dialog.querySelector("img");
  images.forEach((image) => {
    image.loading = "lazy";
    image.closest("button")?.addEventListener("click", () => { preview.src = image.src; preview.alt = image.alt; dialog.showModal(); });
  });
  dialog.querySelector(".lightbox-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });
}
