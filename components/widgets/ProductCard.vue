<script setup>
const props = defineProps(["data"]);
</script>

<template>
  <div class="card">
    <UiProductCardLikeBtn />
    <UiProductCardNewLabel v-if="data.is_new" />
    <NuxtLink :to="`/product/${data.slug}`" class="image">
      <NuxtImg
        :src="data.product_files[0].file"
        :alt="`фотография ${data.title}`"
        v-if="useGetFileExtention(data.product_files[0].file) == 'webp'"
      />

      <video v-else playsinline autoplay loop muted>
        <source :src="data.product_files[0].file" type="video/mp4" />
      </video>
    </NuxtLink>

    <div class="info">
      <h3 class="title">{{ data?.title }}</h3>
      <div class="price">{{ data.price }} BYN</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow: auto;
  position: relative;

  &:hover {
    .image img {
      transform: scale(1.05);
    }

    .colors {
      bottom: 10px;
    }

    .btn-prev {
      left: 0;
    }

    .btn-next {
      right: 0;
    }
  }
}

.footer-buttons {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.swiper {
  width: 100%;
  height: 100%;
}

.image {
  position: relative;
  aspect-ratio: 6/7;
  background: #f2f2f2;
  border-radius: 12px;
  overflow: hidden;
  width: 100%;

  img {
    transition: all 0.3s ease-in-out;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  video {
    width: 100%;
    object-fit: cover;
    height: 100%;
  }
}

.title {
  font-size: 16px;
  line-height: 150%;
  font-weight: 400;
}

.price {
  font-size: 14px;
  line-height: 150%;
  margin-top: 8px;
}

.btn-prev {
  position: absolute;
  width: 32px;
  height: 100%;
  display: flex;
  left: -32px;
  top: 0;
  align-items: center;
  justify-content: center;
  z-index: 1;
  transition: all 0.2s ease-in-out;
}

.btn-next {
  position: absolute;
  width: 32px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  top: 0;
  right: -32px;
  transition: all 0.2s ease-in-out;
}

@media screen and (max-width: 1200px) {
  .btn-prev {
    display: none;
  }

  .btn-next {
    display: none;
  }
}
</style>
