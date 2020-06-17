import autoInitWatch from "./autoInit";

if (!window.autoInitWatching) {
  autoInitWatch();
  window.autoInitWatching = true;
}