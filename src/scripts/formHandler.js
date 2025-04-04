window.onload = () => {
  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Correo enviado correctamente");
        form.reset();
      } else {
        alert("Hubo un error al enviar el correo");
      }
    });
  }
};
