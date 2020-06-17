/**
 * Initialization logic for the Tile component. Finds all buttons
 * and adds click handlers to each that toggles the active class on the tile.
 * @param {Element} tileRoot - Root Node of the Tile component to be initialized.
 */
export default function initializeTileComponent(tileRoot) {
  const buttons = tileRoot.querySelectorAll(".tile__button");

  if (tileRoot.classList.contains("tile")) {
    for (const button of Array.from(buttons)) {
      button.addEventListener("click", () => {
        tileRoot.classList.toggle("tile--active");
      });
    }
  } else {
    console.error("Unable to initialize tile-button handlers. Improper component structure.")
  }
}