import autoInit from "./autoInit";

// Check if DOM is already ready, and initialize components
if (
  document.readyState === "complete" ||
  (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
  autoInit(document);

// Otherwise, initialize components when ready
} else {
  document.addEventListener("DOMContentLoaded", () => {
    autoInit(document);
  });
}