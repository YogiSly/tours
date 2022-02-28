<template>
  <div class="wrapper mt-5">
    <div class="container">
      <div class="grid d-flex justify-content-between flex-wrap">
        <product-card
          v-for="card in cards.tours"
          :key="card.id"
          :img="card.img"
          :title="card.title"
          :descr="card.description"
          :id="card.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard";
export default {
  components: {
    ProductCard,
  },
  computed: {
    cards() {
      return this.$store.getters["getCard"];
    },
  },
};
</script>