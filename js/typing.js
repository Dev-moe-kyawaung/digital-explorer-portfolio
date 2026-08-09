(function initTyping() {
  const target = document.querySelector("#typing-target");

  if (!target) return;

  const phrases = [
    "Senior Android Developer",
    "Jetpack Compose Engineer",
    "Full-Stack Web Builder",
    "AI / ML Explorer",
    "Cybersecurity Enthusiast"
  ];

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (reducedMotion) {
    target.textContent = phrases[^3_0];
    return;
  }

  let phraseIndex = 0;
  let characterIndex = 0;
  let deleting = false;

  function tick() {
    const phrase = phrases[phraseIndex];

    if (!deleting) {
      characterIndex += 1;
      target.textContent = phrase.slice(0, characterIndex);

      if (characterIndex === phrase.length) {
        deleting = true;
        setTimeout(tick, 1600);
        return;
      }
    } else {
      characterIndex -= 1;
      target.textContent = phrase.slice(0, characterIndex);

      if (characterIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
    }

    setTimeout(tick, deleting ? 42 : 78);
  }

  tick();
})();
