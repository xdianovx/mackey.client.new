<script setup>
const { showCart } = cartStore();
const { cart } = storeToRefs(cartStore());

const { token } = authStore();
await showCart();
</script>

<template>
  <main class="cart">
    <section class="cart-top">
      <div class="container">
        <UiTitle tag="h1"
          >Корзина<span class="span">{{
            token ? cart.total_products_quantity : cart.length || 0
          }}</span></UiTitle
        >

        <div class="cart-wrap" v-if="!token">
          <div class="products">
            <div v-for="item in cart">
              <WidgetsCartProduct :data="item" />
              <div class="div"></div>
            </div>
          </div>
          <WidgetsCartSummary />
        </div>

        <div class="cart-wrap" v-if="cart?.products && token">
          <div class="products">
            <div :key="item?.id" v-for="item in cart?.products">
              <WidgetsCartProduct :data="item" />
              <div class="div"></div>
            </div>
          </div>
          <WidgetsCartSummary />
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.cart {
  padding-bottom: 80px;
}
.cart-top {
  margin-top: 100px;
}

.span {
  color: $textGray;
  padding-left: 16px;
  font-weight: 400;
}

.cart-wrap {
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: baseline;
  gap: 64px;
  position: relative;
  margin-top: 32px;
}
.products {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.div {
  margin-top: 32px;
  width: 100%;
  height: 1px;
  background: $bgGray200;
}

@media screen and (max-width: 1440px) {
  .cart-wrap {
    gap: 16px;
  }
}

@media screen and (max-width: 1024px) {
  .cart-wrap {
    grid-template-columns: 1fr;
  }
}
</style>
