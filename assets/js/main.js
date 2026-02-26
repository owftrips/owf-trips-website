const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

const revealEls = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("in-view");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.12 }
);

revealEls.forEach((el) => observer.observe(el));

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("site-nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const scrollButtons = document.querySelectorAll(".scroll-arrow[data-scroll-target]");
scrollButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-scroll-target");
    const direction = Number(button.getAttribute("data-direction")) || 0;
    if (!targetId || direction === 0) return;
    const container = document.getElementById(targetId);
    if (!container) return;
    container.scrollBy({ left: direction, behavior: "smooth" });
  });
});
