const NAV_ITEMS = [
  ["Mission", "#mission"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Expeditions", "#expeditions"],
  ["Apps", "#apps"],
  ["Coordinates", "#coordinates"],
  ["Social", "#social"],
  ["Contact", "#contact"]
];

const navigationRoot = document.querySelector("#main-navigation");
const menuToggle = document.querySelector("#menu-toggle");

navigationRoot.innerHTML = NAV_ITEMS
  .map(
    ([label, href]) => `
      <a class="nav-link" href="\${href}">
        \${label}
      </a>
    `
  )
  .join("");

menuToggle?.addEventListener("click", () => {
  const isOpen = navigationRoot.classList.toggle("is-open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navigationRoot.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    navigationRoot.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  }
});
