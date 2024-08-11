<script setup>
const { cart } = storeToRefs(cartStore());
const { createOrder } = cartStore();
const props = defineProps(["checkoutData"]);

const createNewOrder = () => {
  createOrder(props.checkoutData);
};
</script>

<template>
  <div class="item">
    <div class="item-top">
      <h3 class="title">Ваш заказ</h3>
      <p class="count">Товаров: {{ cart.total_products_quantity }}</p>
    </div>

    <div class="products">
      <WidgetsCheckoutProduct :data="item" v-for="item in cart?.products" />
    </div>

    <div class="mt-auto">
      <div class="hr"></div>
      <div class="py-4 px-10">
        <div class="flex items-center justify-between">
          <p>Итого:</p>
          <div class="ml-auto flex items-center gap-4">
            <!-- <p>{{ cart.total_products_price }} BYN</p> -->
            <p class="font-medium">
              {{ cart.total_products_price_with_discount }} BYN
            </p>
          </div>
        </div>

        <div class="mt-4">
          <UiButtonsBlack
            class="w-full"
            text="Оформить заказ"
            @click="createNewOrder"
          />
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
</style>
