<script setup>
import Input from "~/components/ui/Forms/Input.vue";
import Textarea from "~/components/ui/Forms/Textarea.vue";
import { API_ROUTE } from "~/lib/constants";

const { isGray } = storeToRefs(useIsPageGrayStore());
const { cart } = storeToRefs(cartStore());
const { token } = storeToRefs(authStore());
const { getAll: getAdresses } = adresesStore();
const { adreses } = storeToRefs(adresesStore());

const { data: deliveryMethods } = await useFetch(
  API_ROUTE + `/order_delivery_methods`,
  {}
);

const { data: payMethods } = await useFetch(
  API_ROUTE + `/order_payment_methods`,
  {}
);

const checkoutRef = ref({
  total_price: cart.value.total_products_price_with_discount,
  comment_order: "",
  comment_payment: "",
  promocode_id: 0,
  office_post_address: "",
  payment_method_id: 1,
  client_data: {
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
  },
  profile_client_address: {
    flat: "",
    floor: "",
    house: "",
    index: "",
    street: "",
    entrance: "",
    locality: "",
  },
  delivery_method_id: 1,
  products: cart.value.products,
});

onBeforeMount(() => {
  checkoutRef.value = {
    total_price: cart.value.total_products_price_with_discount,
    comment_order: "",
    office_post_address: "",
    comment_payment: "",
    promocode_id: 0,
    payment_method_id: 1,
    delivery_method_id: 1,
    profile_client_address_id: adreses?.value[0].id,
    client_data: {
      first_name: "",
      last_name: "",
      phone: "",
      email: "",
    },
    profile_client_address: {
      flat: "",
      floor: "",
      house: "",
      index: "",
      street: "",
      entrance: "",
      locality: "",
    },
    products: cart.value.products,
  };
});

if (token) {
  await getAdresses();
}
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
                :data="payMethods"
                v-model="checkoutRef.payment_method_id"
              />
              <WidgetsCheckoutDeliveryMethod
                :data="deliveryMethods"
                v-model="checkoutRef.delivery_method_id"
              />
            </div>

            <!-- Контакты -->
            <div class="contacts-section mt-14" v-if="!token">
              <h3 class="font-medium leading-[100%]">Контактные данные</h3>

              <p class="text-black/50 mt-2">
                Оформив заказ, вы получите доступ к личному кабинету по номеру
                телефона для управления заказом и использования персональных
                скидок
              </p>

              <div class="flex flex-col gap-4 mt-4">
                <div class="flex flex-col gap-4">
                  <Input
                    v-model="checkoutRef.client_data.first_name"
                    label="Имя"
                  />
                  <Input
                    v-model="checkoutRef.client_data.last_name"
                    label="Фамилия"
                  />
                </div>

                <div class="flex flex-col gap-4">
                  <Input
                    v-model="checkoutRef.client_data.email"
                    label="e-mail (для электронного чека)"
                  />
                  <Input
                    v-model="checkoutRef.client_data.phone"
                    v-mask="'+375 (##) ###-##-##'"
                    label="Номер телефона"
                  />
                </div>
              </div>
            </div>

            <!-- Адреса -->
            <div class="adreses-section" v-if="token">
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

            <div class="adreses-section" v-else>
              <h3 class="font-medium leading-[100%]">Адрес доставки</h3>

              <div class="flex flex-col gap-4 mt-4">
                <div class="flex flex-col gap-4">
                  <Input
                    v-model="checkoutRef.profile_client_address.locality"
                    label="Населенный пункт"
                  />
                  <Input
                    v-model="checkoutRef.profile_client_address.index"
                    label="Индекс"
                  />
                </div>

                <div class="flex flex-col gap-4">
                  <Input
                    v-model="checkoutRef.profile_client_address.street"
                    label="Улица"
                  />
                </div>
                <div class="flex flex-col gap-4">
                  <Input
                    v-model="checkoutRef.profile_client_address.house"
                    label="Дом"
                  />
                  <Input
                    v-model="checkoutRef.profile_client_address.flat"
                    label="Квартира"
                  />
                  <Input
                    v-model="checkoutRef.profile_client_address.floor"
                    label="Этаж"
                  />
                  <Input
                    v-model="checkoutRef.profile_client_address.entrance"
                    label="Подъезд"
                  />
                </div>
              </div>
            </div>

            <div
              class="my-14 max-[768px]:my-6 h-[1px] bg-black/10 w-full"
            ></div>

            <div class="">
              <h3 class="font-medium leading-[100%]">Комментарий</h3>
              <Textarea
                class="mt-2"
                v-model="checkoutRef.comment_order"
              ></Textarea>
            </div>
          </div>
        </div>
        <WidgetsCheckoutDrawer :checkoutData="checkoutRef" />
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
  .methods {
    grid-template-columns: 1fr;
  }
  .section {
    margin-top: 52px;
  }
}

@media screen and (max-width: 768px) {
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
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
}
</style>
