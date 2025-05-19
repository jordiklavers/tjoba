initNavMenu();
initAccordionCSS();

function initNavMenu() {
  const menuToggle = document.querySelector(".nav_btn-row"); // Adjust selector if needed
  const navLinks = document.querySelector(".nav_links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("is-open");
    });
  }

  console.log("Nav Menu");

  // Mobile
  if (window.innerWidth < 480) {
    // Menu
    let menuToggle = $(".nav_mobile-btn");
    let menu = $(".mobile_nav");

    menuToggle.click(function () {
      console.log("click");
      menu.toggleClass("is-active");
    });

    // Dropdown
    let dropdowns = $(".nav_dropdown-w");
    dropdowns.each(function () {
      $(this).click(function () {
        $(this).find(".nav_dropdown").toggleClass("is-active");
      });
    });
  } else {
    console.log("Not 480");
  }
}

function initAccordionCSS() {
  document
    .querySelectorAll("[data-accordion-css-init]")
    .forEach((accordion) => {
      const closeSiblings =
        accordion.getAttribute("data-accordion-close-siblings") === "true";

      accordion.addEventListener("click", (event) => {
        const toggle = event.target.closest("[data-accordion-toggle]");
        if (!toggle) return; // Exit if the clicked element is not a toggle

        const singleAccordion = toggle.closest("[data-accordion-status]");
        if (!singleAccordion) return; // Exit if no accordion container is found

        const isActive =
          singleAccordion.getAttribute("data-accordion-status") === "active";
        singleAccordion.setAttribute(
          "data-accordion-status",
          isActive ? "not-active" : "active"
        );

        // When [data-accordion-close-siblings="true"]
        if (closeSiblings && !isActive) {
          accordion
            .querySelectorAll('[data-accordion-status="active"]')
            .forEach((sibling) => {
              if (sibling !== singleAccordion)
                sibling.setAttribute("data-accordion-status", "not-active");
            });
        }
      });
    });
}
