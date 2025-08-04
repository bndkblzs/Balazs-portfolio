function initScrollTopButton() {
  const btn = document.getElementById("scrollTopBtn");
  if (!btn) return;

  // Alapértelmezett megjelenés
  btn.style.display = "block";

  // Görgetésre ellenőrzés – ha máshoz akarod, módosítsd
  window.addEventListener("scroll", () => {
    const y = window.pageYOffset || document.documentElement.scrollTop;
    btn.style.display = y > 10 ? "block" : "none";
  });

  // Kattintás kezelése
  btn.addEventListener("click", () => {
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Azonnal fut, ha DOM készen van, vagy később, ha már teljesen betöltődött
if (document.readyState !== "loading") {
  initScrollTopButton();
} else {
  document.addEventListener("DOMContentLoaded", initScrollTopButton);
}
