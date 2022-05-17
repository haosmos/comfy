import { formatPrice } from '../utils.js';
import { addToCart } from '../cart/setupCart.js';

const display = (products, element) => {
  // display products
  element.innerHTML = products.map((product) => {
    const { id, name, price, image } = product;

    return `
      <article class="product">
      
          <div class="product-container">
          
            <img src="${image}" alt="${name}" class="product-img img" 
            />
                  
            <div class="product-icons">
            
              <a href="/src/pug/pages/productPage.html?id=${id}" class="product-icon">
                <i class="fas fa-search"></i>
              </a>

              <button class="product-cart-btn product-icon" data-${id}="${id}">
                <i class="fas fa-shopping-cart"></i>
              </button>
            </div>
            
          </div>
          
          <footer>
            <p class="product-name">${name}</p>
            <h4 class="product-price">${formatPrice(price)}</h4>
          </footer>
          
      </article>  
    `;
  }).join('');

  // console.log(localStorage);

  element.addEventListener('click', (e) => {
    const parentEl = e.target.parentElement;

    if (parentEl.classList.contains('product-cart-btn')) {
      addToCart(parentEl.dataset.id);
    }
    console.log(parentEl);
  });
};

export default display;


