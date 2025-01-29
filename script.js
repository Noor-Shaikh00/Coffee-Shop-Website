const navLinks = document.querySelectorAll(" .nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    //Toggle Mobile Menu Visibility
    document.body.classList.toggle("show-mobile-menu");
});

//Close Menu When The Close Button Is Clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click())

//Close Menu When The nav Link Is Clicked
navLinks.forEach((link) => {
    link.addEventListener("click", () => 
        menuOpenButton.click());
});

// Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Responsive BreakPoints
    breakpoints: {
        0: {
            slidersPerView: 1,
        },
        768: {
            slidersPerView: 2,
        },
        1024: {
            slidersPerView: 3,
        },
    }
  });