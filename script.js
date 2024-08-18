function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
}
  

  document.addEventListener("DOMContentLoaded", () => {
    const hero = document.querySelector(".hero");
    const lines = hero.innerHTML.split(/<br\s*\/?>/g); // Split by lines (considering line breaks)
    
    hero.innerHTML = lines.map((line, index) => `<div class="line" style="animation-delay:${index * 0.5}s">${line}</div>`).join("");
  });

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Select all elements that should fade in (excluding the header)
  const fadeElements = document.querySelectorAll('.fade-in');

  // Set up the Intersection Observer
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add the 'visible' class when the element enters the viewport
        entry.target.classList.add('visible');
        // Stop observing the element after it's visible (to improve performance)
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1 // Trigger when 10% of the element is in view
  });

  // Observe each fade-in element
  fadeElements.forEach(element => observer.observe(element));
});
