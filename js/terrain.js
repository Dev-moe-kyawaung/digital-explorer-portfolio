(function initTerrainParallax() {
  const layers = document.querySelectorAll("[data-depth]");

  if (!layers.length) return;

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (reducedMotion) return;

  window.addEventListener(
    "scroll",
    () => {
      const scrollY = window.scrollY;

      layers.forEach((layer) => {
        const depth = Number(layer.dataset.depth || 0);
        layer.style.transform =
          `translate3d(0, \${scrollY * depth}px, 0)`;
      });
    },
    { passive: true }
  );
})();
