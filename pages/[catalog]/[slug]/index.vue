<script setup>
const route = useRoute();
const catalog = route.params.catalog;
const categorySlug = route.params.slug;

const { getAll } = useMyProductsStore();
const { getAll: getAllCategories } = useMyCategoriesStore();

const { products } = storeToRefs(useMyProductsStore());
const { categories } = storeToRefs(useMyCategoriesStore());

await getAllCategories();

const params = ref({
  is_man: null,
  is_woman: null,
  categories: 0,
});

const activeCategory = categories.value.find((x) => x.slug === categorySlug);

if (catalog === "men") params.value.is_man = 1;
if (catalog === "women") params.value.is_woman = 1;
if (activeCategory) params.value.categories = activeCategory.id;

getAll(params.value);
</script>

<template>
  <main>
    <WidgetsFilterSection :title="catalog" />

    <section class="products-section">
      <div class="container">
        <div class="wrap" v-if="products.data?.length > 0">
          <WidgetsProductCard
            v-for="product in products.data"
            :key="product.id"
            :data="product"
          />
        </div>
      </div>
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

@media screen and (max-width: 1200px) {
  .wrap {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px 16px;
  }

  .not-found {
  }
}

@media screen and (max-width: 768px) {
  .wrap {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px 8px;
  }

  .products-section {
    margin-top: 60px;
  }
}
</style>
