const navigationItems = [
  ["MISSION", "#mission"],
  ["ABOUT", "#about"],
  ["SKILLS", "#skills"],
  ["EXPEDITIONS", "#expeditions"],
  ["APPS", "#apps"],
  ["COORDINATES", "#coordinates"],
  ["SOCIAL", "#social"],
  ["CONTACT", "#contact"]
];

const navigation = document.querySelector("#main-navigation");

navigation.innerHTML = navigationItems
  .map(
    ([label, href]) => `
      <a href="\${href}" class="nav-link">
        \${label}
      </a>
    `
  )
  .join("");
