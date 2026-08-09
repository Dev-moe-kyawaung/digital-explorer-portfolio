function renderProfile() {
  const root = document.querySelector("#profile-root");
  const skillsRoot = document.querySelector("#skills-root");

  if (!root || !skillsRoot) return;

  root.innerHTML = `
    <div class="profile-layout reveal">
      <img
        class="profile-image"
        src="\${SITE_CONFIG.profileImage}"
        alt="Portrait of \${SITE_CONFIG.name}"
        loading="lazy"
      >

      <div class="profile-content">
        <p class="profile-burmese">
          \${SITE_CONFIG.burmeseName} · \${SITE_CONFIG.name}
        </p>

        <h3>\${SITE_CONFIG.role}</h3>

        <p class="accent-text">
          \${SITE_CONFIG.location}
        </p>

        <p>
          \${PROFILE_DATA.summary}
        </p>

        <p>
          Currently building:
          <strong>\${PROFILE_DATA.currentlyBuilding}</strong>
        </p>

        <div class="profile-actions">
          <a
            class="button button-primary"
            href="\${SITE_CONFIG.gravatarProfile}"
            target="_blank"
            rel="noreferrer"
          >
            View Gravatar
          </a>

          <a
            class="button button-secondary"
            href="\${SITE_CONFIG.resume}"
            download
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>

    <div class="focus-grid">
      \${PROFILE_DATA.focus
        .map(
          (item) => `
            <article class="focus-card reveal">
              <span>\${item.name}</span>
              <strong>\${item.value}</strong>
            </article>
          `
        )
        .join("")}
    </div>
  `;

  skillsRoot.innerHTML = `
    <div class="chips large-chips reveal">
      \${PROFILE_DATA.skills
        .map((skill) => `<span class="chip">\${skill}</span>`)
        .join("")}
    </div>
  `;
}
