import { allProductsUrl } from '../utils.js';

const fetchProducts = async () => {
  const response = await fetch(allProductsUrl)
    .catch(error => console.log(error));

  if (!response) {
    return response;
  }

  return response.json();
};

export default fetchProducts;
