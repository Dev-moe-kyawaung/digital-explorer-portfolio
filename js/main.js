document.addEventListener("DOMContentLoaded", () => {
  renderProfile();
  renderProjects();
  renderApps();
  renderSites();
  renderSocial();
  loadGravatarProfile();

  document.querySelectorAll("img").forEach((image) => {
    image.loading = image.loading || "lazy";
    image.decoding = "async";
  });
});
