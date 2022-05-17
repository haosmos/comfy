// global imports
import '../toggleSidebar.js';
import '../cart/toggleCart.js';
import '../cart/setupCart.js';
// import fetchProducts from "../products/fetchProducts";
// specific
import { addToCart } from '../cart/setupCart.js';
import { store } from "../store";
import { singleProductUrl, getElement, formatPrice } from '../utils.js';

// selections
const loading = getElement('.page-loading');
const centerDOM = getElement('.single-product-center');
const pageTitleDOM = getElement('.page-hero-title');
const imgDOM = getElement('.single-product-img');
const titleDOM = getElement('.single-product-title');
const companyDOM = getElement('.single-product-company');
const priceDOM = getElement('.single-product-price');
const colorsDOM = getElement('.single-product-colors');
const descDOM = getElement('.single-product-desc');
const cartBtn = getElement('.addToCartBtn');

// cart product
let productID;

export default async function displayProductData() {
  const urlID = window.location.search;

  try {
    const response = await fetch(`${singleProductUrl}${urlID}`);

    if (response.status >= 200 && response.status <= 299) {
      const product = await response.json();
      // grab data
      const { id, fields } = product;
      productID = id;

      const { name, company, price, colors, description } = fields;
      const image = fields.image[0].thumbnails.large.url;
      // set values

      document.title = `${name.toUpperCase()} | Comfy`;
      pageTitleDOM.textContent = `Home / ${name}`;
      imgDOM.src = image;
      titleDOM.textContent = name;
      companyDOM.textContent = `by ${company}`;
      priceDOM.textContent = formatPrice(price);
      descDOM.textContent = description;
      colors.forEach((color) => {
        const span = document.createElement('span');
        span.classList.add('product-color');
        span.style.backgroundColor = `${color}`;
        colorsDOM.appendChild(span);
      });
    } else {
      console.log(response.status, response.statusText);
      centerDOM.innerHTML = `
        <div>
          <h3 class="error">sorry, something went wrong</h3>
          <a href="/index.html" class="btn">back home</a>
        </div> 
      `;
    }
  } catch (error) {
    console.log(error);
  }

  loading.style.display = 'none';

  cartBtn.addEventListener('click', () => {
    addToCart(productID);
  });

}


// window.addEventListener('load', async () => {
//   console.log("store from product", store);
//   // const urlID = window.location.search;
//
//   // get product id from url
//   // const response = await fetch(`${singleProductUrl}`);
//   loading.style.display = 'none';
//   // console.log(response);
// });


