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

const popupOverlay = document.getElementById("popupOverlay");
const leaderCards = document.querySelectorAll(".leader-card[data-popup-id]");
const popups = document.querySelectorAll(".leader-popup");
const closeButtons = document.querySelectorAll(".popup-close");

const closeAllPopups = () => {
  popups.forEach((popup) => popup.setAttribute("hidden", ""));
  if (popupOverlay) popupOverlay.setAttribute("hidden", "");
  document.body.style.overflow = "";
};

const openPopup = (popupId) => {
  const popup = document.getElementById(popupId);
  if (!popup || !popupOverlay) return;
  closeAllPopups();
  popup.removeAttribute("hidden");
  popupOverlay.removeAttribute("hidden");
  document.body.style.overflow = "hidden";
};

leaderCards.forEach((card) => {
  card.addEventListener("click", () => {
    const popupId = card.getAttribute("data-popup-id");
    if (popupId) openPopup(popupId);
  });

  card.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    const popupId = card.getAttribute("data-popup-id");
    if (popupId) openPopup(popupId);
  });
});

if (popupOverlay) popupOverlay.addEventListener("click", closeAllPopups);
closeButtons.forEach((button) => button.addEventListener("click", closeAllPopups));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeAllPopups();
});
