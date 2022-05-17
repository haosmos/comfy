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
import displayProductData from "../pages/product.js";

const init = async () => {
  // display products
  const products = await fetchProducts();

  if (products) {
    // add products to store
    setupStore(products);

    // display featured products
    if (getElement(".featured-center")) {
      const featured = store.filter((product) => product.featured === true);
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

    if (getElement(".single-product")) {
      await displayProductData();
    }
  }
}

window.addEventListener("DOMContentLoaded", init);
