<script setup>
const { cart } = storeToRefs(cartStore());
const props = defineProps(["checkoutData", "delivery", "payment", "valid"]);
</script>

<template>
  <div class="item">
    <div class="item-top">
      <h3 class="title font-bold">Ваш заказ</h3>

      <p class="count">Товаров: {{ cart.total_products_quantity }}</p>
    </div>

    <div class="products">
      <WidgetsCheckoutProduct :data="item" v-for="item in cart?.products" />
    </div>

    <div class="mt-auto">
      <div class="hr"></div>

      <div class="py-4 px-10 max-[768px]:px-4 max-[768px]:py-6">
        <div class="flex items-center justify-between mb-4">
          <p>{{ payment?.title }}</p>
        </div>

        <div class="flex items-center justify-between mb-4">
          <p>{{ delivery?.title }}</p>
          <p class="text-gray-400">{{ delivery?.price }} BYN</p>
        </div>

        <div class="flex items-center justify-between">
          <p>Итого:</p>
          <div class="ml-auto flex items-end gap-3 leading-[100%]">
            <p
              class="line-through text-gray-500 mt-[1px]"
              v-if="
                cart.total_products_price !==
                cart.total_products_price_with_discount
              "
            >
              {{ cart.total_products_price }} BYN
            </p>
            <p class="font-bold text-[18px]">
              {{ checkoutData.total_price }}
              BYN
            </p>
          </div>
        </div>

        <div
          class="mt-4"
          :class="{
            'opacity-50 pointer-events-none cursor-not-allowed': !valid,
          }"
        >
          <UiButtonsBlack class="w-full" text="Оформить заказ" type="submit" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.item {
  background: $bgWhite;
  padding: 40px 0;
  max-width: 472px;
  width: 100%;
  height: calc(100vh - 57px);
  top: 57px;
  position: sticky;
  display: flex;
  flex-direction: column;
}

.item-top {
  padding: 0 48px;
}

.products {
  padding: 0 48px;
}
.hr {
  margin-top: 24px;
  width: 100%;
  height: 1px;
  background: rgba($color: #000000, $alpha: 0.1);
}

.item-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 100%;
}

.title {
  font-size: 16px;
}

.count {
  font-size: 14px;
}

.products {
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  gap: 12px;
}

@media screen and (max-width: 1280px) {
  .item {
    top: 52px;
    max-width: 430px;
    gap: 8px;
  }
}

@media screen and (max-width: 768px) {
  .item {
    position: static;
    max-width: none;
    height: auto;
  }

  .item-top {
    padding: 0 16px;
  }

  .products {
    padding: 0 16px;
  }
}
</style>
