const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

menuBtn.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
  menuBtn.textContent = isOpen ? "✕" : "☰";
});

navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.textContent = "☰";
  });
});

window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 20) {
    header.style.boxShadow = "0 10px 40px rgba(0,0,0,0.25)";
  } else {
    header.style.boxShadow = "none";
  }
});
