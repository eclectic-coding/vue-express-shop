<template>
  <div class="container">
    <p>{{ count }}</p>
    <div class="card__container">
      <div class="card" v-for="prod in products" :key="prod.id">
        <img :src="prod.image" alt="" style="width: 300px" />
        <div class="card__body">
          <h4>
            <strong>{{ prod.title }}</strong>
          </h4>
          <p>{{ prod.price }}</p>
          <p>{{ prod.category }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductService from '@/services/ProductService';

export default {
  data() {
    return {
      products: []
    };
  },
  created() {
    ProductService.getProducts().then(data => {
      this.products = data.products;
    });
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin: auto;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.card__container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.3rem;
  margin-top: 1.3rem;
}

.card {
  cursor: pointer;
  padding: 2rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}
</style>
