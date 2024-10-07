function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
}
  



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


document.addEventListener("DOMContentLoaded", function() {
  const videoElements = document.querySelectorAll('video[loading="lazy"]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const video = entry.target;
        video.play(); // Start playing the video when in view
        observer.unobserve(video); // Stop observing the video
      }
    });
  });

  videoElements.forEach(video => {
    observer.observe(video); // Start observing the video
  });
});
