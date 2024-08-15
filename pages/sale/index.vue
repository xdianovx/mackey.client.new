<script setup>
import { API_ROUTE } from "~/lib/constants";

const route = useRoute();

const { getAll } = useMyProductsStore();
const { products } = storeToRefs(useMyProductsStore());

await getAll({
  is_sale: 1,
});
</script>

<template>
  <main>
    <WidgetsFilterSection title="Sale" :filter="false" />

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
  </main>
</template>

<style lang="scss" scoped>
.wrap {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px 16px;
}

.products-section {
  margin-top: 40px;
}
@media screen and (max-width: 1200px) {
  .wrap {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px 16px;
  }

  .products-section {
    margin-top: 32px;
  }
}

@media screen and (max-width: 768px) {
  .wrap {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px 8px;
  }

  .products-section {
    margin-top: 32px;
  }
}
</style>
