<script setup>
const {} = cartStore();
const { cart } = storeToRefs(cartStore());
</script>

<template>
  <div class="item-pin">
    <div class="item">
      <div class="item-top">
        <div class="title">Ваш заказ</div>
        <p class="item-top-count">
          Товаров: {{ cart?.total_products_quantity }}
        </p>
      </div>

      <div class="list">
        <div class="list-item" v-for="item in cart?.products">
          <div class="product-title">{{ item.title }} {{ item.quantity }}</div>
          <div class="product-price">{{ item.discounted_price }} BYN</div>
        </div>
      </div>

      <div class="summary">
        <p>Итого:</p>

        <div class="summary-price">
          {{ cart.total_products_price_with_discount }} BYN
        </div>
      </div>
    </div>
    <UiButtonsBlack
      text="Перейти к оформлению"
      link="/checkout"
      class="check-btn"
    />
  </div>
</template>

<style lang="scss" scoped>
.item-pin {
  position: sticky;
  top: 100px;
  align-self: self-start;
}
.item {
  padding: 32px 24px;
  border-radius: 12px;
  background: #f5f5f5;
}

.check-btn {
  width: 100%;
  margin-top: 8px;
}

.title {
  font-size: 16px;
  font-weight: 600;
}

.item-top {
  display: flex;
  justify-content: space-between;
}

.list {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
}
.list-item {
  display: flex;
  justify-content: space-between;
}
.product-price {
  color: rgba(#000, 0.5);
}

.summary {
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
}

.summary-price {
  font-weight: 600;
}
</style>
