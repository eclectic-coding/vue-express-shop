<template>
  <div class="home">
    <div class="card" v-for="prod in products" :key="prod.id">
      <img :src="prod.image" alt="" style="width: 300px" />
      <div class="card__container">
        <h4>
          <strong>{{ prod.title }}</strong>
        </h4>
        <p>{{ prod.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import ProductService from "@/services/ProductService";

export default {
  data() {
    return {
      products: []
    };
  },
  created() {
    // fetch("http://localhost:5000/api/v1/products")
    //   .then(res => res.json())
    //   .then(data => {
    //     this.products = data.products;
    //   });
    ProductService.getProducts().then(data => {
      this.products = data.products;
    });
  }
};
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}
</style>
