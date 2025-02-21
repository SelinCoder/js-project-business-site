document.addEventListener("DOMContentLoaded", function () {
  // ====== Hamburgarmeny ======
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });

  // ====== E-postvalidering + checkbox + tack-modal ======
  const form = document.getElementById("contactForm");
  if (form) {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("Email");
    const emailError = document.getElementById("emailError");

    // Modal-element
    const thankModal = document.getElementById("thankModal");
    const userNameSpan = document.getElementById("userName");
    const closeModalBtn = document.getElementById("closeModal");

    form.addEventListener("submit", function(event) {
      // Enkel regex för e-post
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // Kolla om minst en checkbox är vald
      const checkboxes = document.querySelectorAll('input[name="robot_interest"]');
      const isChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);

      // 1) Kolla e-post
      if (!emailPattern.test(emailInput.value)) {
        event.preventDefault();
        emailError.textContent = "Var vänlig ange en giltig e-postadress.";
        emailError.style.display = "block";
        return; // Avbryt
      } else {
        emailError.style.display = "none";
      }

      // 2) Kolla checkbox
      if (!isChecked) {
        event.preventDefault();
        alert("Vänligen välj minst en robot du är intresserad av.");
        return;
      }

      // 3) Allt korrekt → visa modal med GIF
      event.preventDefault(); // Hindra standard-submit så vi kan visa modalen först
      userNameSpan.textContent = nameInput.value; // Sätt in användarens namn i modalen
      thankModal.style.display = "block";
    });

    // När man klickar på "OK"-knappen i modalen
    if (closeModalBtn) {
      closeModalBtn.addEventListener("click", function() {
        // Dölj modalen
        thankModal.style.display = "none";
        // Skicka formuläret efter stängning
        
      });
    }
  }
});
