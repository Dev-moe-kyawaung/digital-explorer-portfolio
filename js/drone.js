const droneMessages = [
  "Welcome, explorer. Your developer journey starts here.",
  "I found Android, web, AI and enterprise expeditions.",
  "Recommended route: Kotlin → Compose → Clean Architecture.",
  "Scanning project coordinates and technical metrics.",
  "Social satellite network is now available.",
  "Mission complete. Contact base when you are ready."
];

let droneIndex = 0;

function setDroneMessage(message) {
  const element = document.querySelector("#drone-message");

  if (!element) return;

  element.classList.add("drone-message-out");

  setTimeout(() => {
    element.textContent = message;
    element.classList.remove("drone-message-out");
  }, 180);
}

document
  .querySelector("#drone-next")
  ?.addEventListener("click", () => {
    droneIndex = (droneIndex + 1) % droneMessages.length;
    setDroneMessage(droneMessages[droneIndex]);
  });

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const title = entry.target.querySelector("h2");

      if (title) {
        setDroneMessage(
          `Navigation update: \${title.textContent.replace(/\s+/g, " ").trim()}`
        );
      }
    });
  },
  { threshold: 0.35 }
);

sections.forEach((section) => observer.observe(section));
