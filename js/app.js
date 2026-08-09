const app = document.querySelector("#app");

function renderProjectCard(project) {
  return `
    <article class="expedition-card reveal">
      <div class="card-topline">
        <span>\${project.id}</span>
        <span class="status">\${project.status}</span>
      </div>

      <div class="project-icon">⌁</div>

      <p class="card-category">
        \${project.category}
      </p>

      <h3>\${project.title}</h3>

      <p class="card-description">
        \${project.description}
      </p>

      <div class="project-metric">
        <span>METRIC</span>
        <strong>\${project.metric}</strong>
      </div>

      <div class="coordinates">
        <span>COORDINATES</span>
        <strong>\${project.coordinates}</strong>
      </div>

      <div class="chips">
        \${project.stack
          .map((item) => `<span class="chip">\${item}</span>`)
          .join("")}
      </div>

      <a
        class="text-link"
        href="\${project.github}"
        target="_blank"
        rel="noreferrer"
      >
        OPEN EXPEDITION LOG ↗
      </a>
    </article>
  `;
}

function renderAppCard(item, index) {
  return `
    <article class="app-card reveal">
      <span class="module-number">
        MODULE \${String(index + 1).padStart(2, "0")}
      </span>

      <div class="app-icon">\${item[^2_1]}</div>

      <h3>\${item[^2_0]}</h3>

      <p>
        Application module in the developer expedition archive.
      </p>

      <span class="module-status">
        READY TO EXPLORE
      </span>
    </article>
  `;
}

function renderLinkCard(item, index, label) {
  return `
    <a
      class="satellite-card reveal"
      href="\${item[^2_1] || item}"
      target="_blank"
      rel="noreferrer"
    >
      <span class="module-number">
        \${label} \${String(index + 1).padStart(2, "0")}
      </span>

      <h3>\${item[^2_0] || item}</h3>

      <p>
        Open coordinate ↗
      </p>
    </a>
  `;
}

function renderHero() {
  return `
    <section class="hero-section" id="mission">
      <div class="hero-content">
        <p class="eyebrow">
          DIGITAL EXPLORER / NAVIGATION DRONE ONLINE
        </p>

        <h1>
          MOE<br />
          <span>KYAW AUNG</span>
        </h1>

        <p class="hero-description">
          \${SITE_CONFIG.role}. Mapping ideas into useful digital
          experiences with Kotlin, Jetpack Compose, modern web systems,
          AI and cybersecurity.
        </p>

        <p class="hero-location">
          \${SITE_CONFIG.location}
        </p>

        <div class="hero-actions">
          <a class="primary-button" href="#expeditions">
            START EXPLORATION
          </a>

          <a
            class="secondary-button"
            href="\${SITE_CONFIG.github}"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB BASE
          </a>
        </div>
      </div>

      <div class="compass-orbit" aria-hidden="true">
        <span class="north">N</span>
        <span class="east">E</span>
        <span class="south">S</span>
        <span class="west">W</span>
        <div class="compass-needle"></div>
      </div>
    </section>
  `;
}

function renderAbout() {
  return `
    <section class="page-section" id="about">
      <div class="section-heading">
        <div>
          <p class="section-label">
            01 / EXPLORER PROFILE
          </p>

          <h2>
            Built with<br />
            purpose.
          </h2>
        </div>

        <p>
          A senior-level engineering profile shaped by mobile systems,
          full-stack interfaces, AI experiments and continuous learning.
        </p>
      </div>

      <div class="profile-panel">
        <img
          class="profile-image"
          src="\${SITE_CONFIG.profileImage}"
          alt="Moe Kyaw Aung"
        />

        <div>
          <h3>\${SITE_CONFIG.name}</h3>

          <p class="accent-text">
            \${SITE_CONFIG.role}
          </p>

          <p class="muted-text">
            \${SITE_CONFIG.location}
          </p>

          <p>
            Focused on Kotlin, Jetpack Compose, MVVM, MVI,
            Clean Architecture, Firebase, REST APIs, Python,
            ethical hacking, Claude API and on-device machine learning.
          </p>

          <a
            class="text-link"
            href="\${SITE_CONFIG.gravatar}"
            target="_blank"
            rel="noreferrer"
          >
            VIEW GRAVATAR PROFILE ↗
          </a>
        </div>
      </div>
    </section>
  `;
}

function renderTechStack() {
  return `
    <section class="page-section" id="skills">
      <div class="section-heading">
        <div>
          <p class="section-label">
            02 / TERRAIN SYSTEMS
          </p>

          <h2>
            Technical<br />
            terrain.
          </h2>
        </div>
      </div>

      <div class="chips large-chips">
        \${TECH_STACK
          .map((item) => `<span class="chip">\${item}</span>`)
          .join("")}
      </div>
    </section>
  `;
}

function renderExpeditions() {
  return `
    <section class="page-section" id="expeditions">
      <div class="section-heading">
        <div>
          <p class="section-label">
            03 / EXPEDITION ARCHIVE
          </p>

          <h2>
            Project<br />
            logs.
          </h2>
        </div>

        <p>
          Every build is a route: a problem, a terrain,
          a technical metric and a deployable outcome.
        </p>
      </div>

      <div class="expedition-grid">
        \${PROJECTS.map(renderProjectCard).join("")}
      </div>
    </section>
  `;
}

function renderApps() {
  return `
    <section class="page-section" id="apps">
      <div class="section-heading">
        <div>
          <p class="section-label">
            04 / APP COLLECTION
          </p>

          <h2>
            Mission<br />
            modules.
          </h2>
        </div>
      </div>

      <div class="app-grid">
        \${APP_COLLECTION.map(renderAppCard).join("")}
      </div>
    </section>
  `;
}

function renderCoordinates() {
  return `
    <section class="page-section" id="coordinates">
      <div class="section-heading">
        <div>
          <p class="section-label">
            05 / COORDINATE NETWORK
          </p>

          <h2>
            GitHub<br />
            satellites.
          </h2>
        </div>
      </div>

      <div class="satellite-grid">
        \${GITHUB_SATELLITES
          .map((item, index) =>
            renderLinkCard(item, index, "SATELLITE")
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderSocial() {
  return `
    <section class="page-section" id="social">
      <div class="section-heading">
        <div>
          <p class="section-label">
            06 / SOCIAL SATELLITE
          </p>

          <h2>
            Find the<br />
            explorer.
          </h2>
        </div>
      </div>

      <div class="satellite-grid">
        \${SOCIAL_LINKS
          .map((item, index) =>
            renderLinkCard(item, index, "CHANNEL")
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderContact() {
  return `
    <section class="page-section" id="contact">
      <div class="section-heading">
        <div>
          <p class="section-label">
            07 / CONTACT BASE
          </p>

          <h2>
            Open a<br />
            channel.
          </h2>
        </div>
      </div>

      <div class="contact-panel">
        <h3>\${SITE_CONFIG.name}</h3>

        <p>\${SITE_CONFIG.role}</p>

        <p class="accent-text">
          \${SITE_CONFIG.phone.join("<br />")}
        </p>

        <p>
          \${SITE_CONFIG.email}
        </p>

        <a
          class="primary-button"
          href="mailto:\${SITE_CONFIG.email}"
        >
          SEND TRANSMISSION
        </a>
      </div>
    </section>
  `;
}

function renderPage() {
  app.innerHTML = [
    renderHero(),
    renderAbout(),
    renderTechStack(),
    renderExpeditions(),
    renderApps(),
    renderCoordinates(),
    renderSocial(),
    renderContact()
  ].join("");
}

renderPage();
