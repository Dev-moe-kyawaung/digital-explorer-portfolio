const themeToggle = document.querySelector("#theme-toggle");

const savedTheme = localStorage.getItem("explorer-theme");

if (savedTheme === "light") {
  document.body.classList.add("light-theme");
}

themeToggle?.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");

  const activeTheme = document.body.classList.contains("light-theme")
    ? "light"
    : "dark";

  localStorage.setItem("explorer-theme", activeTheme);
});
