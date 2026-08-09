function renderApps() {
  const root = document.querySelector("#apps-root");

  if (!root) return;

  root.innerHTML = APP_COLLECTION
    .map(
      ([title, icon, description], index) => `
        <article class="app-card reveal">
          <span class="module-number">
            MODULE \${String(index + 1).padStart(2, "0")}
          </span>

          <span class="app-icon" aria-hidden="true">
            \${icon}
          </span>

          <h3>\${title}</h3>

          <p>\${description}</p>

          <span class="module-status">
            READY TO EXPLORE
          </span>
        </article>
      `
    )
    .join("");
}
