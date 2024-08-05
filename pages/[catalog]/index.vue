<script setup>
const route = useRoute();
const slug = route.params.catalog;

const products = ref([]);
const pageCategory = ref({
  is_man: 0,
  is_woman: 0,
});

if (slug == "man") pageCategory.value = "man";
if (slug == "woman") pageCategory.value = "woman";

const getProducts = async () => {
  await $fetch(`http://45.135.234.37:80/api/v1/categories/${slug}`).then(
    (res) => (products.value = res)
  );
};

await getProducts();
</script>

<template>
  <main>
    <WidgetsFilterSection :title="slug" :filter="false" />

    <section class="product-slider-section">
      <WidgetsProductSlider
        :data="item"
        v-for="item in products"
        :key="item.id"
        :category="item"
        :products="item.products"
      />
    </section>

    <WidgetsSeoText />
  </main>
</template>

<style lang="scss" scoped>
.products-section {
  margin-top: 120px;
}

.wrap {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px 16px;
}

.product-slider-section {
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 100px;
}
</style>
