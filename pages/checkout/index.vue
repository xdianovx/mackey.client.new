<script setup>
import FormRegister from "~/components/widgets/checkout/FormRegister.vue";
import FormUnregister from "~/components/widgets/checkout/FormUnregister.vue";

const { isGray } = storeToRefs(useIsPageGrayStore());
const { cart, checkoutResponce, checkoutErrors, loading } = storeToRefs(
  cartStore()
);
const { token } = storeToRefs(authStore());

if (cart.value.products.length <= 0) {
  navigateTo("/cart");
}
</script>

<template>
  <main :class="{ gray: isGray }">
    <WidgetsPreLoader v-if="loading" :is-loading="loading" />
    <section class="section">
      <FormRegister v-if="token" />
      <FormUnregister v-else />
    </section>
  </main>
</template>

<style lang="scss" scoped>
.gray {
  background: #f5f5f5;
}

.section {
  height: 100%;
  margin-top: 58px;
}

.left {
  margin-top: 40px;
  width: 100%;
  padding-bottom: 60px;
}

.top-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.pay-btn {
  width: 100%;
  margin-top: 16px;
}

.cart-btn {
  padding: 12px 24px 11px;
  border: 1px solid #000;
  border-radius: 12px;
  font-weight: normal;
}

.checkout-wrap {
  display: flex;
  min-height: calc(100vh - 58px - 336px);
}

.methods {
  margin-top: 40px;
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(2, 1fr);
}

.adreses-section {
  margin-top: 56px;
}

.adress-wrap {
  display: flex;
  margin-top: 16px;
  flex-direction: column;
  gap: 8px;
}

@media screen and (max-width: 1280px) {
  .methods {
    grid-template-columns: 1fr;
  }
  .section {
    margin-top: 52px;
  }
}

@media screen and (max-width: 768px) {
  .left {
    margin-top: 100px;
    width: 100%;
    padding-bottom: 60px;
  }

  .methods {
    margin-top: 24px;
    gap: 32px;
  }

  .checkout-wrap {
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 58px - 336px);
  }

  .adreses-section {
    margin-top: 32px;
  }

  .cart-btn {
    border: none;
    padding: 0;
  }
}

@media screen and (max-width: 550px) {
  .top-title {
    // flex-direction: column;
    align-items: center;
    gap: 16px;
  }
}
</style>
