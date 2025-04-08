// Application State
let state = {
  products: [],
  cart: [],
  filters: {
    searchQuery: "",
    category: "all",
  },
};

// Generates a single product card markup
function createProductCardMarkup(product) {
  return `
  <article class="product-card"> 
  <div class="product-card__header">
  <img src="${product.image}" 
  alt="${product.name}" 
  class="product-card__image"/>
  <button class="add-to-cart-btn" 
  data-product-id="${product.id}" 
  data-product-name="${product.name}"
  data-product-price="${product.price}"
  aria-label="Add ${product.name} to Cart"><img src="./assets/icons/cart.svg" alt="" aria-hidden="true"/> 
  </button>
  </div>
  <div class="product-card__footer">
  <h3>${product.name}</h3>
  <span class="fw-semi-bold" aria-label="Price: ${product.price}">${product.price}</span>
  </div> 
  </article>`;
}

// Loads product data from JSON and updates state
async function loadProducts() {
  try {
    const response = await fetch("./data/products.json");
    const data = await response.json();
    state.products = data;
    renderProducts(state.products);
  } catch (error) {
    console.error("Failed to load product data:", error);
    DOM.productGrid.innerHTML = `<p class="error-message">Something went wrong while loading products.</p>`;
  }
}

// Init
document.addEventListener("DOMContentLoaded", () => {
  loadProducts();
});
