initNavMenu();

function initNavMenu() {
  console.log("Nav Menu");

  // Mobile
  if (navigator.userAgent.includes("Mobile")) {
    console.log("mobile")
    // Menu
    let menuToggle = $(".nav_mobile-btn");
    let menu = $(".nav_links");

    menuToggle.click(function () {
        console.log("click")
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
    console.log("Not 480")
  }
}

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.nav_btn-row'); // Adjust selector if needed
  const navLinks = document.querySelector('.nav_links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('is-open');
    });
  }
});
