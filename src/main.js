import "./style.css";

// Select the main header by ID and log it.
const header = document.getElementById("main-header");
console.info(header);

// Select all links inside .navbar using querySelectorAll and log how many there are.
const navLinks = document.querySelectorAll(".navbar a");
console.info(`Number of navigation links: ${navLinks.length}`);

//  Select internal links (those starting with /) and append " [internal]" to their text.
const internalLinks = document.querySelectorAll('a[href^="/"]');
internalLinks.forEach((link) => {
  if (link.getAttribute("href").startsWith("/")) {
    link.textContent += " [internal]";
  }
});

// Select all required inputs and add a yellow outline (style.outline = "2px solid gold").
const requiredInputs = document.querySelectorAll("input[required]");
requiredInputs.forEach((input) => {
  input.style.outline = "2px solid gold";
});

// Select all .card elements, loop through them, and add a data-viewed="true" attribute to each.
const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.setAttribute("data-viewed", "true");
});

// Select the product with data-product-id="2" and change its price to "$24.99".
const product2 = document.querySelector('[data-product-id="2"]');
if (product2) {
  const priceElement = product2.querySelector(".price");
  if (priceElement) {
    priceElement.textContent = "$24.99";
  } else {
    console.warn("Price element not found for product with ID 2.");
  }
}

// You have this brittle selector: Refactor it to use a data attribute instead.
// const title = document.querySelector("main .card .card-title");
// const title = document.querySelector('[data-title-id="1"]');
