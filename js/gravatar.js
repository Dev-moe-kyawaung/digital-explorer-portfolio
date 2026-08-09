async function loadGravatarProfile() {
  const profileUrl = SITE_CONFIG.gravatarProfile;

  const image = document.querySelector(".profile-image");

  if (!image) return;

  image.addEventListener("error", () => {
    image.src = SITE_CONFIG.socialFallbackAvatar;
  });

  image.alt = `\${SITE_CONFIG.name} profile image`;

  const gravatarLink = document.querySelector(
    `[href="\${profileUrl}"]`
  );

  gravatarLink?.setAttribute("aria-label", "Open Gravatar profile");
}
