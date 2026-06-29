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
