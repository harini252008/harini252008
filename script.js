const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav-links");
const topBtn = document.querySelector(".top-btn");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
  menuBtn.textContent = nav.classList.contains("open") ? "✕" : "☰";
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.textContent = "☰";
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 500 ? "block" : "none";
});

topBtn.addEventListener("click", () => window.scrollTo({top: 0, behavior: "smooth"}));

document.getElementById("year").textContent = new Date().getFullYear();
