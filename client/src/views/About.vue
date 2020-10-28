<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ul>
      <li v-for="product in filteredProducts.slice(0, 3)" :key="product.id">
        {{ product.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    filteredProducts() {
      return this.$store.getters["products/products"];
    }
  },
};
</script>
