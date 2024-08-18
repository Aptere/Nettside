function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
}
  

  document.addEventListener("DOMContentLoaded", () => {
    const hero = document.querySelector(".hero");
    const lines = hero.innerHTML.split(/<br\s*\/?>/g); // Split by lines (considering line breaks)
    
    hero.innerHTML = lines.map((line, index) => `<div class="line" style="animation-delay:${index * 0.5}s">${line}</div>`).join("");
  });

