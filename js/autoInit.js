import tileInit from "./components/tile";

const AUTO_INIT_PROP = "auto-init"

/**
 * Registry of component functionality. Maps the auto-init key
 * to the functionality to be initialized in the component.
 */
const componentRegistry = {
  "tile": tileInit
}

/**
 * Finds all sub-elements of root element marked with the "auto-init"
 * attribute and initializes them with the corresponding functionality
 * found in the componentRegistry defined above.
 * @param {Element} root - The root HTML Element under which components will be found and initalized.
 */
export default function autoInitializeComponents(root) {
  const autoInitComps = root.querySelectorAll(`[${AUTO_INIT_PROP}]`);

  for (const initComp of Array.from(autoInitComps)) {
    const compKey = initComp.getAttribute(AUTO_INIT_PROP);
    if (compKey && componentRegistry[compKey]) {
      const initFunc = componentRegistry[compKey]
      initFunc(initComp);
    } else {
      console.error("Component definition not found for auto-init: " + compKey);
    }
  }
}