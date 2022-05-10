// global imports
import './toggleSidebar.js';
import './cart/toggleCart.js';
import './cart/setupCart.js';
// import './pages/products.js';
// specific imports
import fetchProducts from '/src/js/products/fetchProducts.js';
import { setupStore, store } from '/src/js/store.js';
import display from '/src/js/products/displayProducts.js';
import { getElement, setStorageItem } from '/src/js/utils.js';

const init = async () => {
  const products = await fetchProducts();

  if (products) {
    // add products to store
    setupStore(products);
    const featured = store.filter((product) => product.featured === true);

    // display featured products
    if (getElement(".featured-center")) {
      let el = getElement(".featured-center");
      display(featured, el);
    }

    if (getElement(".products-container")) {
      let el = getElement(".products-container");
      const loading = getElement(".page-loading");
      display(store, el);
      loading.style.display = "none";
    }

  }

  setStorageItem()
}

window.addEventListener("DOMContentLoaded", init);
