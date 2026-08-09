function getHostName(url) {
  try {
    return new URL(url).hostname;
  } catch {
    return url;
  }
}

function renderSites() {
  const root = document.querySelector("#sites-root");

  if (!root) return;

  const combined = [
    ...GITHUB_SITES.map((url) => ({
      label: getHostName(url),
      url,
      type: "GitHub Satellite"
    })),
    ...LOVABLE_SITES.map((url) => ({
      label: getHostName(url),
      url,
      type: "Lovable Station"
    }))
  ];

  root.innerHTML = combined
    .map(
      (site, index) => `
        <a
          class="satellite-card reveal"
          href="\${site.url}"
          target="_blank"
          rel="noreferrer"
        >
          <span class="module-number">
            \${site.type} \${String(index + 1).padStart(2, "0")}
          </span>

          <h3>\${site.label}</h3>

          <p>Open coordinate ↗</p>
        </a>
      `
    )
    .join("");
}
