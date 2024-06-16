<script setup>
const route = useRoute();
const slug = route.params.catalog;

const { getAll } = useMyProductsStore();
const { products } = storeToRefs(useMyProductsStore());

const { getAll: getAllCategories } = useMyCategoriesStore();
const { categories } = storeToRefs(useMyCategoriesStore());

const gender = ref({
  is_man: 0,
  is_woman: 0,
});

await getAllCategories();

if (slug == "men") gender.value.is_man = 1;
if (slug == "women") gender.value.is_woman = 1;
await getAll(gender.value);
</script>
<template>
  <main>
    <WidgetsFilterSection :title="slug" />

    <div v-for="item in categories"></div>
    <section class="product-slider-section">
      <WidgetsProductSlider
        :data="item"
        v-for="item in categories"
        :key="item.id"
        :category="item"
        :products="item.products"
      />
    </section>

    <WidgetsSeoText />

    <WidgetsFilter />
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
