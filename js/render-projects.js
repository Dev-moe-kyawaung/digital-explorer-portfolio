const projectsRoot = document.querySelector("#projects-root");

function safeText(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderProjectCard(project) {
  return `
    <article
      class="expedition-card reveal"
      data-project-id="\${safeText(project.id)}"
    >
      <div class="card-image-wrap">
        <img
          class="card-image"
          src="\${project.image}"
          alt="\${safeText(project.title)} preview"
          loading="lazy"
        >

        <span class="card-status">
          \${safeText(project.status)}
        </span>
      </div>

      <div class="card-body">
        <div class="card-topline">
          <span>\${safeText(project.id)}</span>
          <span>\${safeText(project.area)}</span>
        </div>

        <p class="card-category">
          \${safeText(project.category)}
        </p>

        <h3>\${safeText(project.title)}</h3>

        <p class="card-description">
          \${safeText(project.description)}
        </p>

        <div class="metric-row">
          <span>METRIC</span>
          <strong>\${safeText(project.metric)}</strong>
        </div>

        <div class="coordinate-row">
          <span>COORDINATES</span>
          <strong>\${safeText(project.coordinates)}</strong>
        </div>

        <div class="chips">
          \${project.stack
            .map((item) => `<span class="chip">\${safeText(item)}</span>`)
            .join("")}
        </div>

        <div class="card-actions">
          <button
            class="small-button project-details-button"
            type="button"
            data-project="\${safeText(project.id)}"
          >
            Details
          </button>

          <a
            class="text-link"
            href="\${project.github}"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </article>
  `;
}

function getFilteredProjects() {
  const query = APP_STATE.projectQuery.toLowerCase();
  const category = APP_STATE.projectCategory;

  return PROJECTS.filter((project) => {
    const searchable = [
      project.title,
      project.category,
      project.description,
      project.area,
      project.stack.join(" ")
    ]
      .join(" ")
      .toLowerCase();

    const matchesQuery =
      !query || searchable.includes(query);

    const matchesCategory =
      category === "all" || project.area === category;

    return matchesQuery && matchesCategory;
  });
}

function renderProjects() {
  const projects = getFilteredProjects();

  projectsRoot.innerHTML = projects.length
    ? projects.map(renderProjectCard).join("")
    : `
      <div class="empty-state">
        No expedition logs found.
      </div>
    `;

  document
    .querySelectorAll(".project-details-button")
    .forEach((button) => {
      button.addEventListener("click", () => {
        openProjectModal(button.dataset.project);
      });
    });
}
