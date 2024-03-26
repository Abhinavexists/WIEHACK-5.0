// Initialize AOS

AOS.init({
    delay: 1000,
});

document.addEventListener("DOMContentLoaded", function() {
    var imageContainer = document.getElementById("image-container");
  
    // Add AOS attributes on hover
    imageContainer.addEventListener("mouseenter", function() {
      imageContainer.setAttribute("data-aos", "fade");
      imageContainer.setAttribute("data-aos-once", "true");
      AOS.init(); // Initialize AOS
    });
  
    // Remove AOS attributes when mouse leaves
    imageContainer.addEventListener("mouseleave", function() {
      imageContainer.removeAttribute("data-aos");
      imageContainer.removeAttribute("data-aos-once");
      AOS.refresh(); // Refresh AOS to remove animations
    });
});
  