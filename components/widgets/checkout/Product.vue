<script setup>
const props = defineProps(["data"]);
</script>

<template>
  <div class="product">
    <div class="image shrink-0">
      <img :src="data.product_files[0].file" :alt="data.title" />
    </div>

    <div class="">
      <h4 class="product-title">{{ data.title }} ({{ data.quantity }})</h4>
      <p class="product-color">{{ data.colors[0]?.title }}</p>
    </div>

    <div class="product-price shrink-0">{{ data.discounted_price }} BYN</div>
  </div>
</template>

<style lang="scss" scoped>
.product {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.image {
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 4px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.product-title {
  font-size: 14px;
  font-weight: 400;
}

.product-color {
  margin-top: 4px;
  font-size: 12px;
  line-height: 100%;
}

.product-price {
  margin-left: auto;
  color: rgba(#000, 0.5);
  font-size: 14px;
  line-height: 100%;
}
</style>
