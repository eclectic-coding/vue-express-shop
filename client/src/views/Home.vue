<template>
  <div class="home">
    {{ products }}
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
    ProductService.getProducts()
      .then(resp => {
        this.products = resp.data.data;
      })
      .catch(err => {
        console.log("There was an error: " + err.response);
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
