<script setup>
const { removeFormCart, editProductCount } = cartStore();
const props = defineProps(["data"]);
import { useDebounceFn } from "@vueuse/core";

const quantityRef = ref();

quantityRef.value = props.data?.quantity;

const increment = useDebounceFn(() => {
  editProductCount(props.data.id, quantityRef.value);
}, 200);

function incrDebounce() {
  quantityRef.value += 1;
  increment();
}

function decrDebounce() {
  if (quantityRef.value > 1) {
    quantityRef.value -= 1;
  }
  increment();
}
</script>

<template>
  <div class="item">
    <div class="image">
      <img :src="data?.product_files[0].file" :alt="data?.title" />
    </div>

    <div class="info">
      <div class="top">
        <h3 class="title">{{ data.title }}</h3>
        <NuxtLink :to="`/product/${data.slug}`" class="product-link">
          Страница товара
        </NuxtLink>
      </div>

      <div class="sku">{{ data.vendor_code }}</div>

      <div class="color">
        <div
          class="color-circle"
          style="display: block"
          :style="[`background: ${data.colors[0]?.code}`]"
        ></div>

        <div>{{ data.colors[0]?.title }}</div>
      </div>

      <div class="counter">
        <p>Количество</p>
        <div class="counter-wrap">
          <div class="counter-btn decr" @click="decrDebounce">-</div>
          <div class="hr"></div>
          <div>{{ quantityRef }}</div>
          <div class="hr"></div>
          <div class="counter-btn incr" @click="incrDebounce">+</div>
        </div>
      </div>

      <div class="bottom">
        <div class="price">{{ data.price }} BYN</div>
        <div class="delete" @click="removeFormCart(data.id)">Удалить</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.image {
  width: 100%;
  aspect-ratio: 5/6;
  border-radius: 12px;
  flex-shrink: 0;
  overflow: hidden;

  img {
    width: 100%;
    object-fit: cover;
    display: block;
    height: 100%;
  }
}

.title {
  font-size: 16px;
  font-weight: 600;
}
.item {
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 100%;
  align-items: stretch;
  gap: 24px;
  transition: opacity 0.3s ease-in-out;
  &.loading {
    opacity: 0.2;
  }
}

.product-link {
  color: $textGray;
  text-decoration: underline;
}

.top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
}

.info {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.sku {
  margin-top: 8px;
  color: $textGray;
}

.bottom {
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.delete {
  cursor: pointer;
  color: $textRed;
}

.color {
  margin-top: 32px;
  display: flex;
  align-items: center;
  gap: 4px;
  line-height: 100%;
  font-weight: 600;
}

.color-circle {
  width: 10px;
  height: 10px;
  border-radius: 100%;
}

.counter {
  margin-top: 48px;

  .hr {
    width: 1px;
    height: 20px;
    background: rgba(#000, 0.1);
  }
}

.counter-wrap {
  margin-top: 8px;
  justify-content: space-between;
  display: flex;
  padding: 10px 8px;
  border-radius: 8px;
  align-items: center;
  background: #f5f5f5;
  gap: 10px;
}

.counter-btn {
  cursor: pointer;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media screen and (max-width: 1440px) {
}

@media screen and (max-width: 1024px) {
  .item {
    gap: 16px;
  }
}

@media screen and (max-width: 768px) {
  .product-link {
    display: none;
  }
  .item {
    gap: 16px;
    grid-template-columns: 1fr 1fr;
  }

  .top {
    flex-direction: column;
    gap: 8px;
  }

  .color {
    margin-top: 12px;
  }

  .bottom {
    margin-top: 16px;
  }

  .counter {
    margin-top: 24px;
  }
}
</style>
