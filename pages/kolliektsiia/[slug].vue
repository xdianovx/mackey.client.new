<script setup>
import { API_ROUTE } from "~/lib/constants";

const route = useRoute();
const slug = route.params.slug;

const collection = ref();

const getColletion = async (params) => {
  $fetch(API_ROUTE + `/collections/${slug}/show`, {}).then(
    (res) => (collection.value = res.data)
  );
};

getColletion();
</script>

<template>
  <main>
    <WidgetsFilter />
    <section class="section">
      <div class="container">
        <UiTitle tag="h1">{{ collection?.title }}</UiTitle>
      </div>
    </section>

    <!-- <WidgetsFilterSection :title="collection?.title" /> -->
    <section>
      <div class="container"></div>
    </section>

    <section class="coll-banner">
      <div class="image">
        <img
          class="image-desk"
          :src="collection?.collection_banners[0]?.image"
          alt=""
        />
        <img
          class="image-mob"
          :src="collection?.collection_banners[0]?.image_mob"
          alt=""
        />
        <div class="overflow"></div>
      </div>
      <div class="banner">
        <div class="container">
          <div class="banner-info">
            <h2 class="banner-title">{{ collection?.title }}</h2>
            <p class="banner-description">{{ collection?.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="products-section pb-20">
      <div class="container">
        <div class="products-wrap">
          <WidgetsProductCard
            v-for="product in collection?.products"
            :key="product.id"
            :data="product"
          />
        </div>
      </div>
    </section>

    <!-- <WidgetsSeoText /> -->
  </main>
</template>

<style lang="scss" scoped>
.section {
  margin-top: 100px;
}
.coll-banner {
  margin-top: 32px;
  position: relative;
}

.banner {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: black;
}

.banner-info {
  position: absolute;
  bottom: 48px;
}

.banner-title {
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  color: $textWhite;
}

.banner-description {
  color: $textWhite;
  max-width: 524px;
  width: 100%;
  margin-top: 16px;
}

.products-section {
  margin-top: 48px;
}

.products-wrap {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px 16px;
  height: auto;
}

.image {
  height: calc(100vh - 160px);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .overflow {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, #fff0 50%, #000);
    top: 0;
    left: 0;
  }
}

.image-desk {
  display: block;
}

.image-mob {
  display: none;
}
@media screen and (max-width: 1200px) {
  .products-wrap {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px 16px;
  }
}

@media screen and (max-width: 768px) {
  .section {
    margin-top: 120px;
  }

  .image-desk {
    display: none;
  }

  .image-mob {
    display: block;
  }

  .banner-description {
    max-width: none;
  }
  .products-wrap {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px 8px;
  }
}
</style>
