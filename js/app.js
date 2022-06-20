// Variables
const menuSections = document.querySelectorAll(".menu-section");
const headerMenu = document.querySelector(".header__menu");
const footerMenu = document.querySelector(".footer__navbar");
const headerArrow = document.querySelector(".header__arrow");
const headerBurger = document.querySelector(".header__burger");
const footerTop = document.querySelector(".footer__top");

// Header & Footer navbar links
menuSections.forEach((item) => {
  const itemName = item.getAttribute("id");

  const headerLi = document.createElement("li");
  const headerLink = document.createElement("a");
  headerLink.setAttribute("href", `#${itemName}`);
  headerLink.innerText = itemName.charAt(0).toUpperCase() + itemName.slice(1);

  headerLi.appendChild(headerLink);

  const footerLink = headerLi.cloneNode(true);
  // footerLink.firstChild.classList.add("footer__link");
  footerMenu.appendChild(footerLink);

  headerLink.classList.add("header__link");
  headerMenu.appendChild(headerLi);
});

// Add/Remove active class function
const navActiveSection = (sectionId) => {
  headerLinks.forEach((link) => {
    if (sectionId === link.innerText.toLowerCase()) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
};

const headerLinks = document.querySelectorAll(".header__link");
const footerLinks = document.querySelectorAll(".footer__navbar a");

// Scroll to selected section
const scrollToSection = (e) => {
  e.preventDefault();

  const sectionId = e.target.getAttribute("href").slice(1);

  window.scrollTo({
    // 79 = the height of the navbar
    top: document.getElementById(sectionId).offsetTop - 79,
    behavior: "smooth",
  });

  console.log(document.getElementById(sectionId).offsetTop);

  // Add/Remove active class
  navActiveSection(sectionId);
};

// EventListeners
headerLinks.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});

footerLinks.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});

headerArrow.addEventListener("click", scrollToSection);

// Header Contact adding class
headerLinks[headerLinks.length - 1].classList.add("header__link-contact");

// Burger menu
headerBurger.addEventListener("click", () => {
  headerBurger.classList.toggle("opened");
});

// Go to top
footerTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });

  headerLinks.forEach((link) => {
    link.classList.remove("active");
  });
});
