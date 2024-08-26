<script setup>
const { showCart, removeFormCart } = cartStore();
const { cart, loading } = storeToRefs(cartStore());

onMounted(() => {
  showCart();
});
</script>

<template>
  <main class="cart">
    <WidgetsPreLoader v-if="loading" :is-loading="loading" />
    <WidgetsCartEmpty v-if="cart.products?.length === 0" />

    <!-- Cart -->
    <section class="cart-top" v-else>
      <div class="container">
        <UiTitle tag="h1"
          >Корзина<span class="span">{{
            cart.total_products_quantity
          }}</span></UiTitle
        >

        <div class="cart-wrap">
          <div class="products">
            <div v-for="item in cart?.products">
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

@media screen and (max-width: 768px) {
  .cart-top {
    margin-top: 120px;
  }
}
</style>
