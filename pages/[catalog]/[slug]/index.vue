<script setup>
import { seoData } from "~/lib/seo";

const route = useRoute();
const catalog = route.params.catalog;
const categorySlug = route.params.slug;

const { getAll } = useMyProductsStore();
const { getAll: getAllCategories } = useMyCategoriesStore();

const { products } = storeToRefs(useMyProductsStore());
const { categories } = storeToRefs(useMyCategoriesStore());

await getAllCategories(catalog);

const params = ref({
  is_man: null,
  is_woman: null,
  categories: 0,
  limit: 10,
});
const seo = seoData[categorySlug];

useSeoMeta({
  title: seo?.title || "Makey.by",
  description: seo?.description || "Makey.by",
});

const activeCategory = categories.value.find((x) => x.slug === categorySlug);

if (catalog === "men") params.value.is_man = 1;
if (catalog === "women") params.value.is_woman = 1;
if (activeCategory) params.value.categories = activeCategory.slug;

await getAll(params.value);

const page = ref(1);

const loadMore = async () => {
  params.value.limit += 10;
  await getAll(params.value);
  console.log(params.value);
};
</script>

<template>
  <main>
    <WidgetsFilter :catId="params?.categories" />
    <WidgetsFilterSection :title="catalog" />

    <section class="products-section">
      <div class="container">
        <div class="" v-if="products.data?.length > 0">
          <div class="wrap">
            <WidgetsProductCard
              v-for="product in products.data"
              :key="product.id"
              :data="product"
            />
          </div>
          <div class="flex justify-center mt-[64px]">
            <div
              class="flex flex-col items-center justify-center gap-3 max-[550px]:w-full"
            >
              <div class="flex text-black/50 gap-1 leading-[100%]">
                <p>{{ products.data.length }}</p>
                <p>из</p>
                <p>{{ products.meta?.all_products_count }}</p>
              </div>

              <UiButtonsWhite
                text="Показать еще"
                class="bg-white max-[550px]:w-full"
                @click="loadMore"
              />
            </div>
          </div>
        </div>

        <div class="not-found" v-else>
          <UiTitle tag="h2">Товаров по выбранным фильтрам нет</UiTitle>
        </div>
      </div>
    </section>

    <WidgetsSeoText
      :title="seo?.text?.title || 'Заголовок'"
      :text="seo?.text?.content || 'Текст'"
    />

    <WidgetsFilter :catId="params?.categories" />
  </main>
</template>

<style lang="scss" scoped>
.products-section {
  margin-top: 40px;
  flex-grow: 1;
  height: 100%;
}

.wrap {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px 16px;
}

.not-found {
  margin-bottom: 120px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
