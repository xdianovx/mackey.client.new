<script setup>
import { Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/vue";

const prev = ref(null);
const next = ref(null);

const { getAll } = useMyProductsStore();
const { products } = storeToRefs(useMyProductsStore());

await getAll();
</script>

<template>
  <section v-bind="$attrs" class="similar-section">
    <div class="div"></div>
    <div class="container">
      <h2 class="title">Смотрите также</h2>
      <div class="similar-slider-wrap">
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
          <SwiperSlide v-for="product in products">
            <WidgetsProductCard :key="product.id" :data="product" />
          </SwiperSlide>
        </Swiper>

        <div ref="prev" class="slider-arrow-prev">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="black"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.69997 8.00105L10.6 12.9011C10.7666 13.0677 10.8472 13.2622 10.8416 13.4844C10.8361 13.7066 10.75 13.9011 10.5833 14.0677C10.4166 14.2344 10.2222 14.3177 9.99997 14.3177C9.77774 14.3177 9.5833 14.2344 9.41663 14.0677L4.2833 8.95105C4.14997 8.81772 4.04997 8.66772 3.9833 8.50105C3.91663 8.33438 3.8833 8.16772 3.8833 8.00105C3.8833 7.83438 3.91663 7.66772 3.9833 7.50105C4.04997 7.33438 4.14997 7.18438 4.2833 7.05105L9.41663 1.91772C9.5833 1.75105 9.78052 1.67049 10.0083 1.67605C10.2361 1.68161 10.4333 1.76772 10.6 1.93438C10.7666 2.10105 10.85 2.29549 10.85 2.51772C10.85 2.73994 10.7666 2.93438 10.6 3.10105L5.69997 8.00105Z"
            />
          </svg>
        </div>

        <div ref="next" class="slider-arrow-next">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="black"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.3167 8.0013L5.41674 3.1013C5.25007 2.93464 5.16952 2.73741 5.17507 2.50964C5.18063 2.28186 5.26674 2.08464 5.43341 1.91797C5.60007 1.7513 5.7973 1.66797 6.02507 1.66797C6.25285 1.66797 6.45007 1.7513 6.61674 1.91797L11.7334 7.0513C11.8667 7.18464 11.9667 7.33464 12.0334 7.5013C12.1001 7.66797 12.1334 7.83464 12.1334 8.0013C12.1334 8.16797 12.1001 8.33463 12.0334 8.5013C11.9667 8.66797 11.8667 8.81797 11.7334 8.9513L6.60007 14.0846C6.43341 14.2513 6.23896 14.3319 6.01674 14.3263C5.79452 14.3207 5.60007 14.2346 5.43341 14.068C5.26674 13.9013 5.18341 13.7041 5.18341 13.4763C5.18341 13.2485 5.26674 13.0513 5.43341 12.8846L10.3167 8.0013Z"
            />
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.swiper {
  margin-top: 16px;
  width: 100%;
}

.similar-section {
  margin-top: 100px;
  margin-bottom: 80px;
}

.similar-slider-wrap {
  position: relative;
}

.div {
  height: 1px;
  background: #f5f5f5;
}

.title {
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  margin-top: 80px;
}

.slider-arrow-next {
  position: absolute;
  z-index: 3;
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
</style>
