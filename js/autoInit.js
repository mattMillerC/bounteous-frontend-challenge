import tileInit from "./components/tile";

const AUTO_INIT_PROP = "auto-init"

/**
 * Registry of component functionality. Maps the auto-init key
 * to the functionality to be initialized in the component.
 * Add new component definitions here!
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
function initializeComponents(root) {
  const autoInitComps = Array.from(root.querySelectorAll(`[${AUTO_INIT_PROP}]`));

  // We also want to check the root element itself
  if (root.hasAttribute(AUTO_INIT_PROP)) {
    autoInitComps.push(root);
  }

  for (const initComp of autoInitComps) {
    // Make sure we haven't already intialized this component
    if (!initComp.hasInit) {
      const compKey = initComp.getAttribute(AUTO_INIT_PROP);
      if (compKey && componentRegistry[compKey]) {
        const initFunc = componentRegistry[compKey];
        initComp.hasInit = true;
        initFunc(initComp);
      } else {
        console.error("Component definition not found for auto-init: " + compKey);
      }
    }
  }
}

/**
 * Performs initial check for component auto-init and sets up
 * a MutationObserver to intialize future components added to the DOM.
 */
function setupAutoInit() {
  initializeComponents(document.body);

  // Observe changes to the DOM and initialize any components that are added
  const MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      for (const addedNode of mutation.addedNodes) {
        // Checking that addedNode is an element and not a textNode
        if (addedNode.querySelectorAll) {
          initializeComponents(addedNode);
        }
      }
    })
  });
  observer.observe(document.body, {
    subtree: true,
    childList:true
  });
}

/**
 * Waits for the DOM to load before setting up DOM watch logic for
 * auto-init components.
 */
export default function autoInitWatch() {
  // Only setup the autoInit watch once in case this gets called twice.
  if (!window.autoInitWatching) {
    window.autoInitWatching = true;
    // Check if DOM is already ready. If so initialize components
    if (document.readyState !== "loading") {
      setupAutoInit();

    // Otherwise, initialize components when ready
    } else {
      document.addEventListener("DOMContentLoaded", setupAutoInit);
    }
  }
}