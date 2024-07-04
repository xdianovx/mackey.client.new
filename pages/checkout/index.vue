<script setup>
const { isGray } = storeToRefs(useIsPageGrayStore());
const { createOrder } = cartStore();
const { cart } = storeToRefs(cartStore());

const { getAll: getAdresses } = adresesStore();
const { adreses } = storeToRefs(adresesStore());

const checkoutRef = ref({
  total_price: cart.value.total_products_price_with_discount,
  comment_order: "",
  comment_payment: "",
  promocode_id: 2,
  payment_method_id: 2,
  profile_client_address_id: 1,
  delivery_method_id: 2,
  products: cart.value.products,
});

onMounted(() => {
  checkoutRef.value = {
    total_price: cart.value.total_products_price_with_discount,
    comment_order: "",
    comment_payment: "",
    promocode_id: 2,
    payment_method_id: 2,
    profile_client_address_id: adreses.value[0].id,
    delivery_method_id: 2,
    products: cart.value.products,
  };
});

const createNewOrder = () => {
  createOrder(checkoutRef.value);
};

await getAdresses();
</script>

<template>
  <main :class="{ gray: isGray }">
    <section class="section">
      <div class="checkout-wrap">
        <div class="left">
          <div class="container">
            <div class="top-title">
              <UiTitle tag="h1">Оформление заказа</UiTitle>
              <NuxtLink to="/cart" class="cart-btn">Назад в корзину</NuxtLink>
            </div>

            <div class="methods">
              <WidgetsCheckoutPayMethod
                :data="checkoutRef.delivery_method_id"
              />
              <WidgetsCheckoutDeliveryMethod />
            </div>

            <div class="adreses-section">
              <h4 class="title">Адрес доставки</h4>

              <div class="adress-wrap">
                <label
                  class="adress-item"
                  v-for="item in adreses"
                  :key="item.id"
                >
                  <div class="circle"></div>
                  <input
                    type="radio"
                    name="adress"
                    :value="item.id"
                    v-model="checkoutRef.profile_client_address_id"
                  />

                  {{ item.locality }}, {{ item.index }}, {{ item.street }}
                  {{ item.house }}, кв. {{ item.flat }}
                </label>
              </div>
            </div>

            <UiButtonsBlack
              text="Оплатить"
              @click="createNewOrder"
              class="pay-btn"
            />
          </div>
        </div>
        <WidgetsCheckoutDrawer />
      </div>
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

.adress-item {
  background: $bgWhite;
  padding: 24px;
  display: flex;
  align-items: flex-start;
  gap: 8px;
  border-radius: 12px;

  .circle {
    margin-top: 2px;
    flex-shrink: 0;
    width: 16px;
    height: 16px;
    border-radius: 100%;
    border: 1px solid $bgBlack;
  }
  input {
    position: absolute;
    -webkit-appearance: none;
    -moz-appearance: none;
    &:before {
      content: "";
      position: absolute;
      width: 12px;
      height: 12px;
      background: #000;
      border-radius: 100%;
      top: 4px;
      left: 2px;
      opacity: 0;
      transition: opacity 0.2s ease-in-out;
    }

    &:checked {
      &:before {
        opacity: 1;
      }
    }
  }
}

@media screen and (max-width: 1280px) {
  .section {
    margin-top: 52px;
  }
}
</style>
