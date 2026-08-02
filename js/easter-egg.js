// Easter Egg: cinco clics seguidos en la marca revelan un mensaje de gratitud.
const REQUIRED_CLICKS = 5;
const CLICK_WINDOW_MS = 2200;

export function initEasterEgg() {
  const logo = document.querySelector(".brand");
  const modal = document.querySelector("#developer-modal");
  if (!logo || !modal) return;
  let clicks = 0;
  let resetTimer;
  logo.addEventListener("click", () => {
    clicks += 1;
    window.clearTimeout(resetTimer);
    resetTimer = window.setTimeout(() => { clicks = 0; }, CLICK_WINDOW_MS);
    if (clicks === REQUIRED_CLICKS) { clicks = 0; modal.showModal(); }
  });
  modal.querySelector(".modal-close")?.addEventListener("click", () => modal.close());
  modal.addEventListener("click", (event) => { if (event.target === modal) modal.close(); });
}
