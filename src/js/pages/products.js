// global imports
import '../toggleSidebar.js';
import '../cart/toggleCart.js';
import '../cart/setupCart.js';

//  filter imports
import setupSearch from '../filters/search.js';
import setupCompanies from '../filters/companies.js';
import setupPrice from '../filters/price.js';
import display from "../products/displayProducts";
import fetchProducts from "../products/fetchProducts";
import { setupStore, store } from "../store";
import { getElement, setStorageItem } from "../utils";

// specific imports
// import { store } from '../store.js';
// import display from '../products/displayProducts.js';
// import { getElement } from '../utils.js';
// //
// display(store, getElement(".products-container"));

const init = async () => {
  // display products
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
      setupSearch(store);
      setupCompanies(store)
      setupPrice(store);
      loading.style.display = "none";
    }
  }

  setStorageItem()
}

window.addEventListener("DOMContentLoaded", init);
