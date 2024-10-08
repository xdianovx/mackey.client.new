<script setup>
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

const prev = ref(null);
const next = ref(null);
const bannerPrev = ref(null);
const bannerNext = ref(null);

const props = defineProps(["data", "category"]);
const route = useRoute();
const path = route.path;

const gender = ref([]);
onMounted(async () => {
  if (path === "/men") gender.value.is_man = 1;
  if (path === "/women") gender.value.is_woman = 1;
});
</script>

<template>
  <!-- {{ category.products }} -->
  <ClientOnly>
    <section class="product-slider" v-if="category.products.length > 0">
      <div class="banner" v-if="category?.category_banners.length > 0">
        <Swiper
          class="swiper"
          :pagination="true"
          :modules="[Pagination, Navigation]"
          :navigation="{
            prevEl: bannerPrev,
            nextEl: bannerNext,
          }"
        >
          <SwiperSlide
            v-for="item in category?.category_banners"
            :key="item.id"
          >
            <div class="banner-desk">
              <NuxtImg :src="item.image" alt="" />
            </div>

            <div class="banner-mob">
              <img :src="item.image_mob" alt="" />
            </div>
          </SwiperSlide>
        </Swiper>

        <div ref="bannerPrev" class="banner-arrow-prev">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.69997 8.00105L10.6 12.9011C10.7666 13.0677 10.8472 13.2622 10.8416 13.4844C10.8361 13.7066 10.75 13.9011 10.5833 14.0677C10.4166 14.2344 10.2222 14.3177 9.99997 14.3177C9.77774 14.3177 9.5833 14.2344 9.41663 14.0677L4.2833 8.95105C4.14997 8.81772 4.04997 8.66772 3.9833 8.50105C3.91663 8.33438 3.8833 8.16772 3.8833 8.00105C3.8833 7.83438 3.91663 7.66772 3.9833 7.50105C4.04997 7.33438 4.14997 7.18438 4.2833 7.05105L9.41663 1.91772C9.5833 1.75105 9.78052 1.67049 10.0083 1.67605C10.2361 1.68161 10.4333 1.76772 10.6 1.93438C10.7666 2.10105 10.85 2.29549 10.85 2.51772C10.85 2.73994 10.7666 2.93438 10.6 3.10105L5.69997 8.00105Z"
            />
          </svg>
        </div>

        <div ref="bannerNext" class="banner-arrow-next">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.3167 8.0013L5.41674 3.1013C5.25007 2.93464 5.16952 2.73741 5.17507 2.50964C5.18063 2.28186 5.26674 2.08464 5.43341 1.91797C5.60007 1.7513 5.7973 1.66797 6.02507 1.66797C6.25285 1.66797 6.45007 1.7513 6.61674 1.91797L11.7334 7.0513C11.8667 7.18464 11.9667 7.33464 12.0334 7.5013C12.1001 7.66797 12.1334 7.83464 12.1334 8.0013C12.1334 8.16797 12.1001 8.33463 12.0334 8.5013C11.9667 8.66797 11.8667 8.81797 11.7334 8.9513L6.60007 14.0846C6.43341 14.2513 6.23896 14.3319 6.01674 14.3263C5.79452 14.3207 5.60007 14.2346 5.43341 14.068C5.26674 13.9013 5.18341 13.7041 5.18341 13.4763C5.18341 13.2485 5.26674 13.0513 5.43341 12.8846L10.3167 8.0013Z"
            />
          </svg>
        </div>
      </div>

      <div class="container">
        <div class="product-slider__top">
          <h2 class="product-slider__title">{{ category.title }}</h2>
          <NuxtLink
            :to="`${path}/${category.slug}`"
            class="product-slider__link"
          >
            Смотреть все
          </NuxtLink>
        </div>

        <div class="product-slider__wrap">
          <Swiper
            class="swiper"
            :breakpoints="{
              '320': {
                slidesPerView: 2,
                spaceBetween: 8,
              },
              '768': {
                slidesPerView: 3,
                spaceBetween: 8,
              },
              '1024': {
                slidesPerView: 4,
                spaceBetween: 16,
              },
            }"
            :modules="[Navigation]"
            :speed="400"
            :navigation="{
              prevEl: prev,
              nextEl: next,
            }"
          >
            <SwiperSlide
              v-for="(product, index) in category.products.slice(0, 4)"
              :key="product.id"
            >
              <WidgetsProductCard :key="product.id" :data="product" />
            </SwiperSlide>
          </Swiper>
        </div>

        <div class="product-wrap-mobile">
          <WidgetsProductCard
            :key="product.id"
            v-for="product in category.products.slice(0, 4)"
            :data="product"
          />
        </div>
      </div>
    </section>
  </ClientOnly>
</template>

<style lang="scss" scoped>
.product-slider__top {
  display: flex;
  align-items: flex-end;
  gap: 16px;
  margin-top: 40px;
}

.product-slider__wrap {
  margin-top: 32px;
  overflow: hidden;
  position: relative;
}

.banner {
  overflow: hidden;
  position: relative;
  img {
    object-fit: cover;
    width: 100%;
    display: block;
    height: 100%;
  }
}

.banner-desk {
  aspect-ratio: 16/9;
}

.banner-mob {
  display: none;
}
.swiper {
  width: 100%;
}

.product-slider__title {
  font-size: 20px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
}

.product-slider__link {
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: $textGray;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: $textGray;
  }
}

.slider-arrow-next {
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  padding: 16px;
  height: calc(100% - 58px);
  cursor: pointer;
  display: flex;
  align-items: center;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 100%
  );

  svg {
    width: 24px;
    height: 24px;
    margin-bottom: 6px;
  }

  &.swiper-button-disabled {
    display: none;
  }
}

.slider-arrow-prev {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  padding: 16px;
  height: calc(100% - 58px);
  cursor: pointer;
  display: flex;
  align-items: center;
  background: linear-gradient(
    270deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 100%
  );

  svg {
    width: 24px;
    height: 24px;
    margin-bottom: 6px;
  }

  &.swiper-button-disabled {
    display: none;
  }
}

//
.product-slider-banners {
  aspect-ratio: 2 / 1;
  background: $textGray;
}

.product-wrap-mobile {
  display: none;
}

@media screen and (max-width: 1024px) {
  .product-slider__wrap {
    display: none;
  }

  .product-wrap-mobile {
    display: grid;
    margin-top: 24px;
    gap: 16px;
    grid-template-columns: repeat(4, 1fr);
  }
}
@media screen and (max-width: 768px) {
  .product-wrap-mobile {
    display: grid;
    margin-top: 24px;
    gap: 16px;
    grid-template-columns: repeat(2, 1fr);
  }
  .product-slider-section {
    margin-top: 16px;
  }
  .product-slider__top {
    justify-content: space-between;
    margin-top: 24px;
  }

  .product-slider__wrap {
    // margin-top: 0;
    margin-top: 16px;
  }

  .banner-desk {
    display: none;
  }
  .banner-mob {
    display: block;
    aspect-ratio: 9 / 16;
  }
}
</style>
