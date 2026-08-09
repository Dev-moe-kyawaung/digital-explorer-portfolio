const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const message = String(formData.get("message") || "").trim();

  if (name.length < 2) {
    formStatus.textContent = "Please enter a valid name.";
    return;
  }

  if (!email.includes("@")) {
    formStatus.textContent = "Please enter a valid email address.";
    return;
  }

  if (message.length < 10) {
    formStatus.textContent = "Message must contain at least 10 characters.";
    return;
  }

  const subject = encodeURIComponent(
    `Portfolio transmission from \${name}`
  );

  const body = encodeURIComponent(
    `\${message}\n\nReply to: \${email}`
  );

  window.location.href =
    `mailto:\${SITE_CONFIG.email}?subject=\${subject}&body=\${body}`;

  formStatus.textContent =
    "Opening your email client...";
});
