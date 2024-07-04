<script setup>
const { cart } = storeToRefs(cartStore());
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

    <div class="hr"></div>
  </div>
</template>

<style lang="scss" scoped>
.item {
  padding: 40px 48px;
  background: $bgWhite;
  max-width: 472px;
  width: 100%;
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
