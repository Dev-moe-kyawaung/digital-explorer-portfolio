(function initCursor() {
  const dot = document.querySelector("#cursor-dot");
  const ring = document.querySelector("#cursor-ring");

  if (!dot || !ring) return;

  const supportsFinePointer = window.matchMedia(
    "(pointer: fine)"
  ).matches;

  if (!supportsFinePointer) {
    dot.remove();
    ring.remove();
    return;
  }

  window.addEventListener("pointermove", (event) => {
    dot.style.transform =
      `translate3d(\${event.clientX}px, \${event.clientY}px, 0)`;

    ring.animate(
      {
        transform:
          `translate3d(\${event.clientX - 18}px, \${event.clientY - 18}px, 0)`
      },
      {
        duration: 180,
        fill: "forwards"
      }
    );
  });

  document.addEventListener("pointerover", (event) => {
    if (event.target.closest("a, button, input, textarea, select")) {
      document.body.classList.add("cursor-active");
    }
  });

  document.addEventListener("pointerout", (event) => {
    if (event.target.closest("a, button, input, textarea, select")) {
      document.body.classList.remove("cursor-active");
    }
  });
})();
