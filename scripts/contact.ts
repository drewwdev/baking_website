document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form") as HTMLFormElement;
  const responseMessage = document.getElementById(
    "form-response"
  ) as HTMLElement;

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const formData = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        });

        if (response.ok) {
          responseMessage.textContent =
            "Thank you! Your message has been sent.";
          responseMessage.style.color = "green";
          form.reset();
        } else {
          responseMessage.textContent = "Oops! Something went wrong.";
          responseMessage.style.color = "red";
        }
      } catch (error) {
        responseMessage.textContent =
          "Error sending message. Please try again.";
        responseMessage.style.color = "red";
      }
    });
  }
});
