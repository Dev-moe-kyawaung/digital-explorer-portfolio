const projectSearch = document.querySelector("#project-search");

projectSearch?.addEventListener("input", (event) => {
  APP_STATE.projectQuery = event.target.value.trim();
  renderProjects();
});
