// global imports
import './toggleSidebar.js';
import './cart/toggleCart.js';
import './cart/setupCart.js';
// specific imports
import fetchProducts from './products/fetchProducts.js';
import { setupStore, store } from './store.js';
import display from './products/displayProducts.js';
import { getElement, setStorageItem } from './utils.js';

const init = async () => {
  const products = await fetchProducts();
  if (products) {
    // add products to store
    setupStore(products);
    const featured = store.filter((product) => product.featured === true);
    console.log(featured);
    display(featured, getElement(".featured-center"));
  }
  // console.log(products);
  setStorageItem()
}

window.addEventListener("DOMContentLoaded", init);
