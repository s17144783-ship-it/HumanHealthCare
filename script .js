/* ===========================
   HumanHealthCare Scripts
   =========================== */

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Simple visitor counter placeholder
// ⚡ Later you can connect this with Firebase, API, or Google Analytics
let visits = localStorage.getItem("visits") || 0;
visits++;
localStorage.setItem("visits", visits);
console.log("Visitor count (local):", visits);