// Remove navItem & Backdrop active Class
function remove_navItem_and_backdrop_active_class() {
  document.documentElement.style.overflow = "";
  backdrop.classList.remove("active");
  menu.classList.remove("active");
}

const imageProfile = document.querySelector(".about-me__profile");
const sections = document.querySelectorAll(".sections");
const navItems = document.querySelectorAll(".nav-items");
const imgs = document.querySelectorAll(
  ".projects__grid-images .project-details__items"
);
const projectDetailsBackdrop = document.querySelector(
  ".project-details__backdrop"
);
const projectDetailsSection = document.querySelector(
  ".project-details__section"
);
const scrollContainer = document.querySelector(".scroll");
const backdrop = document.querySelector(".backdrop");
const menu = document.querySelector(".nav-items-container");
const menuIcon = document.querySelector(".menu-icon");

// Open & Close Menu
menuIcon.addEventListener("click", () => {
  document.documentElement.style.overflow = "hidden";
  backdrop.classList.add("active");
  menu.classList.add("active");
});

backdrop.addEventListener("click", () => {
  remove_navItem_and_backdrop_active_class();
});

// Change Image Position
window.addEventListener("mousemove", (e) => {
  let { clientX, clientY } = e;
  imageProfile.style.transform = `translate(${clientX / 50}px , ${
    clientY / 50
  }px)`;
});

// Active Nav Items
window.addEventListener("scroll", (e) => {
  sections.forEach((section, index) => {
    let top = window.scrollY;
    let offset = section.offsetTop - 60;
    let height = section.offsetHeight;

    if (top >= offset && top < offset + height) {
      navItems.forEach((link) => {
        link.classList.remove("active");
        navItems[index].classList.add("active");
      });
    }
  });
});

// Scroll To Section
navItems.forEach((items, index) => {
  items.addEventListener("click", () => {
    remove_navItem_and_backdrop_active_class();
    let sectionScrollTop = sections[index].offsetTop;
    window.scrollTo(0, sectionScrollTop);
  });
});

// Open & Close Projects Details
imgs.forEach((img) => {
  img.addEventListener("click", () => {
    document.documentElement.style.overflow = "hidden";
    projectDetailsBackdrop.classList.add("active");
    projectDetailsSection.classList.add("active");
  });
});

projectDetailsBackdrop.addEventListener("click", () => {
  document.documentElement.style.overflow = "";
  projectDetailsBackdrop.classList.remove("active");
  projectDetailsSection.classList.remove("active");
});

// Scroll Line
document.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  let bodyHeight = document.documentElement.scrollHeight;
  let clientHeight = document.documentElement.clientHeight;

  scrollContainer.style.transform = `scalex(${
    (scrollTop * 100) / (bodyHeight - clientHeight)
  }%)`;
});

// Comments Slider
const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  slidesPerView: 1,

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      cssMode: true,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
      cssMode: false,
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
});
