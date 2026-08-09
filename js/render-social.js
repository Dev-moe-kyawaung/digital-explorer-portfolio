function renderSocial() {
  const root = document.querySelector("#social-root");

  if (!root) return;

  root.innerHTML = SOCIAL_LINKS
    .map(
      (social, index) => `
        <a
          class="social-card satellite-card reveal"
          href="\${social.url}"
          target="_blank"
          rel="noreferrer"
        >
          <span class="social-icon">\${social.icon}</span>

          <span class="module-number">
            CHANNEL \${String(index + 1).padStart(2, "0")}
          </span>

          <h3>\${social.label}</h3>

          <p>Open social satellite ↗</p>
        </a>
      `
    )
    .join("");
}
