// Manejo del menú de navegación responsive (hamburguesa)
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  if (!navToggle || !navLinks) return;

  // Alternar apertura y cierre del menú
  navToggle.addEventListener("click", () => {
    const abierto = navLinks.classList.toggle("activo");
    navToggle.setAttribute("aria-expanded", String(abierto));

    const icono = navToggle.querySelector("i");
    if (icono) {
      if (abierto) {
        icono.classList.remove("fa-bars");
        icono.classList.add("fa-xmark");
      } else {
        icono.classList.remove("fa-xmark");
        icono.classList.add("fa-bars");
      }
    }
  });

  // Cerrar menú al hacer clic en cualquier enlace
  navLinks.querySelectorAll("a").forEach((enlace) => {
    enlace.addEventListener("click", () => {
      navLinks.classList.remove("activo");
      navToggle.setAttribute("aria-expanded", "false");
      const icono = navToggle.querySelector("i");
      if (icono) {
        icono.classList.remove("fa-xmark");
        icono.classList.add("fa-bars");
      }
    });
  });

  // Cerrar menú al hacer clic fuera del navbar
  document.addEventListener("click", (evento) => {
    if (
      navLinks.classList.contains("activo") &&
      !navLinks.contains(evento.target) &&
      !navToggle.contains(evento.target)
    ) {
      navLinks.classList.remove("activo");
      navToggle.setAttribute("aria-expanded", "false");
      const icono = navToggle.querySelector("i");
      if (icono) {
        icono.classList.remove("fa-xmark");
        icono.classList.add("fa-bars");
      }
    }
  });

  // Cerrar automáticamente si la pantalla se agranda a tamaño de escritorio
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768 && navLinks.classList.contains("activo")) {
      navLinks.classList.remove("activo");
      navToggle.setAttribute("aria-expanded", "false");
      const icono = navToggle.querySelector("i");
      if (icono) {
        icono.classList.remove("fa-xmark");
        icono.classList.add("fa-bars");
      }
    }
  });
});
