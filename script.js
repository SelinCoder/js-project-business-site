document.addEventListener("DOMContentLoaded", function () {
    // Hamburgarmeny
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
  
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("show");
    });
  });
  