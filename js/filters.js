const projectFilter = document.querySelector("#project-filter");

projectFilter?.addEventListener("change", (event) => {
  APP_STATE.projectCategory = event.target.value;
  renderProjects();
});
