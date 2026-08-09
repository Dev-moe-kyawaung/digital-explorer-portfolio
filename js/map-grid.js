(function initMapGrid() {
  const grid = document.querySelector(".map-grid");

  if (!grid) return;

  let animationFrame = null;
  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;

  window.addEventListener("pointermove", (event) => {
    targetX = (event.clientX / window.innerWidth - 0.5) * 20;
    targetY = (event.clientY / window.innerHeight - 0.5) * 20;

    if (!animationFrame) {
      animationFrame = requestAnimationFrame(updateGrid);
    }
  });

  function updateGrid() {
    currentX += (targetX - currentX) * 0.08;
    currentY += (targetY - currentY) * 0.08;

    grid.style.transform =
      `translate3d(\${currentX}px, \${currentY}px, 0)`;

    animationFrame = requestAnimationFrame(updateGrid);
  }
})();
