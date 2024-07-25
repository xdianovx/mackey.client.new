<script setup>
const product = ref();
const route = useRoute();
const slug = route.params.slug;

import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";

const { open } = useMyProductPageDrawerStore();

const { isOpen } = storeToRefs(useMyProductPageDrawerStore());

const { addToCart } = cartStore();

const productRef = ref();

await $fetch(`http://45.135.234.37:80/api/v1/products/${slug}/show`, {}).then(
  (res) => {
    product.value = res;
  }
);
</script>

<template>
  <main>
    <UiProductPageInfoDrawer :data="product" />

    <section class="product-page">
      <ul class="breadcrumbs">
        <li></li>
      </ul>
      <div class="images-mobile">
        <Swiper
          :slides-per-view="1"
          class="mobile-slider"
          :modules="[Pagination]"
          :pagination="true"
        >
          <SwiperSlide v-for="item in product?.product_files">
            <img
              :src="item.file"
              alt=""
              v-if="useGetFileExtention(item.file) == 'webp'"
            />

            <video v-else playsinline autoplay loop muted>
              <source :src="item.file" type="video/mp4" />
            </video>
          </SwiperSlide>
        </Swiper>
      </div>

      <div class="images">
        <a
          :href="item.file"
          :key="item.id"
          data-fancybox="a"
          v-for="item in product?.product_files"
        >
          <img
            :src="item.file"
            :alt="`Фото ${product.title}`"
            v-if="useGetFileExtention(item.file) == 'webp'"
          />

          <video v-else playsinline autoplay loop muted>
            <source :src="item.file" type="video/mp4" />
          </video>
        </a>
      </div>

      <div class="info">
        <div class="info-wrap">
          <div class="title-wrap">
            <h1 class="title">{{ product.title }}</h1>
            <UiProductCardLikeBtn class="product-page-like" />
          </div>

          <div class="price">{{ product.price }} BYN</div>

          <div class="color">
            <div class="color-title">Цвета:</div>
            <div class="colors-wrap">
              <UiProductPageColorItem
                v-for="item in product?.products_from_group"
                :key="item.id"
                :data="item"
              />
            </div>
          </div>

          <div class="buttons">
            <UiButtonsBlack
              text="Добавить в корзину"
              @click="addToCart(product.id)"
            />
            <UiButtonsApple />
          </div>

          <div class="div"></div>

          <div class="links">
            <!-- <UiProductPageInfoLink text="Наличие в магазинах" /> -->
            <UiProductPageInfoLink text="Описание и детали" @click="open" />
            <!-- <UiProductPageInfoLink text="Отзывы" :count="3" /> -->
          </div>
        </div>
      </div>
    </section>

    <div class="spacer"></div>

    <!-- <WidgetsSimilarProducts /> -->
  </main>
</template>

<style lang="scss" scoped>
.spacer {
  margin-bottom: 80px;
}
.product-page {
  margin-top: 60px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  // gap: 16px;
  padding-right: 48px;
  position: relative;
}

.colors-wrap {
  display: flex;
  align-items: center;
  gap: 8px;
}

.images {
  width: 49%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  a {
    display: block;
    width: 100%;
    img {
      width: 100%;
      display: block;
    }

    video {
      width: 100%;
      display: block;
    }
  }
}

.info {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 49%;
  justify-content: center;
  height: calc(100vh - 100px);
  position: sticky;
  top: 104px;
  right: 0;
}

.info-wrap {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  max-width: 440px;
  width: 100%;
}

.title {
  font-size: 24px;
  margin-top: 6px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
}

.title-wrap {
  width: 100%;
  gap: 16px;
  justify-content: space-between;
  display: flex;
  align-items: flex-start;
}

.product-page-like {
  position: static !important;
}

.color {
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.color-title {
  font-weight: 700;
  font-size: 14px;
}

.buttons {
  margin-top: 56px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.div {
  width: 100%;
  height: 1px;
  margin: 24px 0;
  background: rgba($bgBlack, 0.2);
}

.links {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.images-mobile {
  display: none;
}

@media screen and (max-width: 1024px) {
  .title {
    font-size: 18px;
    margin-top: 8px;
  }
}

@media screen and (max-width: 768px) {
  .title {
    font-size: 18px;
    margin-top: 8px;
  }

  .product-page {
    flex-direction: column;
    padding-right: 0;
  }

  .images {
    display: none;
  }

  .info {
    width: 100%;
    height: auto;
    position: static;
    margin-top: 20px;
    padding: 0 16px;
  }

  .color {
    margin-top: 16px;
  }

  .info-wrap {
    max-width: none;
  }

  .images-mobile {
    display: block;
    overflow: hidden;
    width: 100%;
    // height: 500px;
    aspect-ratio: 5/7;

    .swiper {
      height: 100%;
    }

    img {
      height: 100%;
      width: 100%;
      display: block;
      object-fit: cover;
    }

    video {
      height: 100%;
      width: 100%;
      display: block;
      object-fit: cover;
    }
  }
}
</style>
