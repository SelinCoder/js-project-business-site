document.addEventListener("DOMContentLoaded", function () {
  
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });

 
  const form = document.getElementById("contactForm");
  if (form) {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("Email");
    const emailError = document.getElementById("emailError");

    
    const thankModal = document.getElementById("thankModal");
    const userNameSpan = document.getElementById("userName");
    const closeModalBtn = document.getElementById("closeModal");

    form.addEventListener("submit", function(event) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    
    const checkboxes = document.querySelectorAll('input[name="robot_interest"]');
    const isChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);

    
  if (!emailPattern.test(emailInput.value)) {
      event.preventDefault();
      emailError.textContent = "Var vänlig ange en giltig e-postadress.";
      emailError.style.display = "block";
      return; 
      } else {
      emailError.style.display = "none";
      }

      
  if (!isChecked) {
      event.preventDefault();
      alert("Choose one robot that you are interested in.");
      return;
      }

      
      event.preventDefault(); // Hindra standard-submit så vi kan visa modalen först
      userNameSpan.textContent = nameInput.value; // Sätt in användarens namn i modalen
      thankModal.style.display = "block";
    });

    
  if (closeModalBtn) {
     closeModalBtn.addEventListener("click", function() {
       
     thankModal.style.display = "none";
    
        
      });
    }
  }
});
