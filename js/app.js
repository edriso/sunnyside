// Variables
const menuSections = document.querySelectorAll(".menu-section");
const headerMenu = document.querySelector(".header__menu");
const footerMenu = document.querySelector(".footer__navbar");
const headerArrow = document.querySelector(".header__arrow");
const headerBurger = document.querySelector(".header__burger");

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

// Header Contact Li
const headerContact = document.createElement("li");
headerContact.classList.add("header__link-contact");
headerContact.innerText = "Contact";
headerMenu.appendChild(headerContact);

// Scroll to selected section
const scrollToSection = (e) => {
  e.preventDefault();

  const sectionId = e.target.getAttribute("href").slice(1);

  window.scrollTo({
    top: document.getElementById(sectionId).offsetTop,
    behavior: "smooth",
  });
};

// EventListeners
const headerLinks = document.querySelectorAll(".header__link");
const footerLinks = document.querySelectorAll(".footer__navbar a");

headerLinks.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});

footerLinks.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});

headerArrow.addEventListener("click", scrollToSection);

// Burger menu
headerBurger.addEventListener("click", () => {
  headerBurger.classList.toggle("opened");
});
