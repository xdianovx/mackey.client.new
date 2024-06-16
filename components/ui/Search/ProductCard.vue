<script setup>
const props = defineProps(["data"]);

const { close } = useIsSearchBar();
</script>

<template>
  <NuxtLink :to="`/product/${data.slug}`" class="card" @click="close">
    <div class="card-image">
      <img :src="data.product_files[0].file" :alt="data.title" />
    </div>
    <!-- {{ data }} -->
    <div class="card-info">
      <h4 class="card-title">{{ data.title }}</h4>
      <p class="card-sku">{{ data.vendor_code }}</p>
    </div>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  align-items: center;
  gap: 12px;
}

.card-image {
  width: 48px;
  height: 48px;
  border-radius: 8px;
  overflow: hidden;
  flex-shrink: 0;

  img {
    display: block;
    width: 100%;
    height: 100%;
  }
}

.card-title {
  margin-top: 2px;
  font-size: 16px;
  line-height: 150%;
}

.card-sku {
  font-size: 14px;
  line-height: 150%;
  color: $textGray;
}
</style>
