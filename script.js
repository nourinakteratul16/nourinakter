const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuIcon.innerHTML = navLinks.classList.contains("active") ? "✖" : "☰";
});

// Smooth scroll & menu close
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", function (e) {
    const target = this.getAttribute("href");
    if (target.startsWith("#")) {
      e.preventDefault();
      document.querySelector(target).scrollIntoView({ behavior: "smooth" });
      navLinks.classList.remove("active");
      menuIcon.innerHTML = "☰";
    }
  });
});
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  themeToggle.textContent = isDark ? "☀️" : "🌙";
});

