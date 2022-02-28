<template>
  <div class="item-wrapper d-flex flex-column mb-4" @click="onEmmit(id)">
    <img :src="require(`@/assets/img/${img}`)" class="mb-3" alt="img" />

    <h3 class="">{{ title }}</h3>
    <div class="description">
      {{ descr | trimmer }}
      <br />
      <span>Читать далее ...</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    descr: {
      type: String,
      required: true,
    },
  },
  methods: {
    onEmmit(id) {
      this.$router.push({ path: `/tour/${id}` });
    },
  },
  filters: {
    trimmer(value) {
      return value.slice(0, 399);
    },
  },
};
</script>
