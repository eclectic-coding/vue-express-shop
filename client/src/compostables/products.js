import { ref } from 'vue';

export default function productsObject() {
  let products = ref([]);

  function fetchProducts() {
    fetch('http://localhost:5000/api/v1/products')
      .then((response) => response.json())
      .then(data => {
        products.value = data;
      });
  }

  return { fetchProducts, products };
}
