const DRONE_MESSAGES = [
  "Welcome, explorer. Your developer journey starts here.",
  "Scanning Android, web, AI and enterprise expeditions.",
  "Recommended route: Kotlin → Compose → Clean Architecture.",
  "Project metrics detected. Opening expedition archive.",
  "Social satellite network is available.",
  "Mission complete. Contact base when you are ready."
];

const droneMessage = document.querySelector("#drone-message");
const droneNext = document.querySelector("#drone-next");

function updateDrone(message) {
  if (!droneMessage) return;

  droneMessage.classList.add("is-changing");

  window.setTimeout(() => {
    droneMessage.textContent = message;
    droneMessage.classList.remove("is-changing");
  }, 160);
}

droneNext?.addEventListener("click", () => {
  APP_STATE.droneIndex =
    (APP_STATE.droneIndex + 1) % DRONE_MESSAGES.length;

  updateDrone(DRONE_MESSAGES[APP_STATE.droneIndex]);
});
