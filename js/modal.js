const modal = document.querySelector("#project-modal");
const modalContent = document.querySelector("#modal-content");

function openProjectModal(projectId) {
  const project = PROJECTS.find(
    (item) => item.id === projectId
  );

  if (!project || !modal || !modalContent) return;

  APP_STATE.modalProjectId = projectId;

  modalContent.innerHTML = `
    <p class="section-label">\${project.id}</p>
    <h2 id="modal-title">\${project.title}</h2>
    <p class="accent-text">\${project.category}</p>
    <p>\${project.description}</p>

    <div class="modal-specs">
      <div>
        <span>Status</span>
        <strong>\${project.status}</strong>
      </div>

      <div>
        <span>Metric</span>
        <strong>\${project.metric}</strong>
      </div>

      <div>
        <span>Coordinates</span>
        <strong>\${project.coordinates}</strong>
      </div>
    </div>

    <div class="chips">
      \${project.stack
        .map((item) => `<span class="chip">\${item}</span>`)
        .join("")}
    </div>

    <a
      class="button button-primary"
      href="\${project.github}"
      target="_blank"
      rel="noreferrer"
    >
      Open GitHub Expedition
    </a>
  `;

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  modal.querySelector("[data-modal-close]")?.focus();
}

function closeProjectModal() {
  if (!modal) return;

  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  APP_STATE.modalProjectId = null;
}

document.addEventListener("click", (event) => {
  if (event.target.closest("[data-modal-close]")) {
    closeProjectModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeProjectModal();
  }
});
