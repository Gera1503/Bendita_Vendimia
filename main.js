document.addEventListener("DOMContentLoaded", () => {
  // --- Lógica del Menú Móvil ---
  const btnOpenMenu = document.querySelector(".header__mobile-menu-btn");
  const btnCloseMenu = document.querySelector(".mobile-menu__close-btn");
  const mobileMenu = document.getElementById("mobile-navigation");
  const menuLinks = document.querySelectorAll(
    ".mobile-menu__link, .mobile-menu__cta",
  );

  const openMenu = () => {
    mobileMenu.classList.add("mobile-menu--is-open");
    mobileMenu.setAttribute("aria-hidden", "false");
    btnOpenMenu.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    mobileMenu.classList.remove("mobile-menu--is-open");
    mobileMenu.setAttribute("aria-hidden", "true");
    btnOpenMenu.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };

  btnOpenMenu.addEventListener("click", openMenu);
  btnCloseMenu.addEventListener("click", closeMenu);

  menuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // --- Lógica de Tabs del Menú Interactivo ---
  const tabs = document.querySelectorAll(".menu__tab");
  const panels = document.querySelectorAll(".menu__panel");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => {
        t.classList.remove("menu__tab--active");
        t.setAttribute("aria-selected", "false");
      });

      tab.classList.add("menu__tab--active");
      tab.setAttribute("aria-selected", "true");

      panels.forEach((panel) => {
        panel.classList.remove("menu__panel--active");
      });

      const targetPanelId = tab.getAttribute("aria-controls");
      const targetPanel = document.getElementById(targetPanelId);

      if (targetPanel) {
        targetPanel.classList.add("menu__panel--active");
      }
    });
  });
});

document
  .getElementById("formReserva")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que la página se recargue

    // 1. Capturar los datos del formulario
    const nombre = document.getElementById("nombre").value;
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;
    const personas = document.getElementById("personas").value;

    // 2. Tu número de teléfono (debe incluir el código de país, sin el símbolo +)
    // Ejemplo para México: 52 seguido de los 10 dígitos (525512345678)
    const telefonoRestaurante = "524411193502";

    // 3. Crear el mensaje
    const mensaje =
      `¡Hola! Me gustaría hacer una reserva en Bendita Vendimia.%0A%0A` +
      `*Nombre:* ${nombre}%0A` +
      `*Fecha:* ${fecha}%0A` +
      `*Hora:* ${hora}%0A` +
      `*Personas:* ${personas}%0A%0A` +
      `¿Tienen disponibilidad?`;

    // 4. Crear la URL de WhatsApp y redirigir al usuario
    const urlWhatsApp = `https://wa.me/${telefonoRestaurante}?text=${mensaje}`;
    window.open(urlWhatsApp, "_blank");
  });
