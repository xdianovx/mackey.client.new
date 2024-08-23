<script setup>
import { Form } from "vee-validate";
import { Input, Textarea } from "~/components/ui/Forms";
import { Title } from "~/components/ui";
import FormPickup from "~/components/widgets/checkout/FormPickup.vue";

import {
  checkoutScheme,
  checkoutSchemePickup,
} from "~/components/widgets/checkout/checkoutYupScheme";
import Modal from "~/components/widgets/Modal.vue";

const config = useRuntimeConfig();
const { isGray } = storeToRefs(useIsPageGrayStore());
const { cart, checkoutResponce, checkoutErrors, loading } = storeToRefs(
  cartStore()
);
const { token } = storeToRefs(authStore());
const { getAll: getAdresses } = adresesStore();
const { adreses } = storeToRefs(adresesStore());
const { createOrder } = cartStore();
const deliveryMethodsRef = ref({});
const deliveryMethodCheck = ref(0);
const paymentMethodsRef = ref({});

if (cart.value.products.length <= 0) {
  navigateTo("/cart");
}

await $fetch(config.public.API_URL + `/order_delivery_methods`).then((res) => {
  deliveryMethodsRef.value = res;
});

await $fetch(config.public.API_URL + `/order_payment_methods`).then((res) => {
  paymentMethodsRef.value = res;
});

const checkoutRef = ref({
  total_price: cart.value.total_products_price_with_discount,
  comment_order: "",
  comment_payment: "",
  promocode_id: 0,
  office_post_address: "",
  cart_id: cart.value.id,

  client_data: {
    first_name: "",
    last_name: "",
    patronymic_name: "",
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
  payment_method_id: 1,
  products: cart.value.products,
});

if (token.value) {
  await getAdresses();
}
const isModalSuccessOpen = ref(false); // Управляем состоянием модального окна
const isModalErrorOpen = ref(false); // Управляем состоянием модального окна

const openModal = () => {
  isModalSuccessOpen.value = true; // Открываем модальное окно
};

const closeModal = () => {
  isModalSuccessOpen.value = false; // Закрываем модальное окно
};

const openErrorModal = () => {
  isModalErrorOpen.value = true; // Открываем модальное окно
};

const closeErrorModal = () => {
  isModalErrorOpen.value = false; // Закрываем модальное окно
};

if (cart.value.total_products_price_with_discount > 60) {
  deliveryMethodsRef.value.map((item) => {
    item.price = 0;
  });
}

const createNewOrder = (fromData) => {
  createOrder(checkoutRef.value).then(() => {
    if (checkoutResponce.value.status === "success") {
      openModal();
    } else {
      openErrorModal();
      // "message": "SMS.BY error: incorrect phone number",
    }
  });
};
</script>

<template>
  <main :class="{ gray: isGray }">
    <Modal
      v-model:isOpen="isModalSuccessOpen"
      title="Заказ успешно создан"
      type="success"
    >
      <p class="mt-4">
        После модерации ваш отзыв будет виден на странице товара для других
        пользователей
      </p>
      <UiButtonsBlack text="Закрыть" class="w-full mt-8" @click="closeModal" />
    </Modal>

    <Modal
      type="error"
      v-model:isOpen="isModalErrorOpen"
      title="Кажется что-то пошло не так"
    >
      <p class="mt-4">К сожалению, мы не смогли зарегестрировать ваш заказ</p>

      <p class="mt-2 bg-neutral-100 rounded-md p-2">
        {{ checkoutErrors.message }}
      </p>

      <UiButtonsBlack
        text="Закрыть"
        class="w-full mt-8"
        @click="closeErrorModal"
      />
    </Modal>

    <WidgetsPreLoader v-if="loading" :is-loading="loading" />
    <section class="section">
      <Form
        class="checkout-wrap"
        @submit="createNewOrder"
        :validation-schema="
          checkoutRef.delivery_method_id == 1
            ? checkoutSchemePickup
            : checkoutScheme
        "
      >
        <div class="left">
          <div class="container">
            <div class="top-title">
              <Title tag="h1">Оформление заказа</Title>

              <NuxtLink to="/cart" class="cart-btn">Назад в корзину</NuxtLink>
            </div>

            <div class="methods">
              <WidgetsCheckoutPayMethod
                :data="paymentMethodsRef"
                v-model="checkoutRef.payment_method_id"
              />
              <WidgetsCheckoutDeliveryMethod
                :data="deliveryMethodsRef"
                v-model:deliveryMethodData="checkoutRef.delivery_method_id"
              />
            </div>

            {{ checkoutErrors }}

            <!-- Контакты -->
            <div class="contacts-section mt-14" v-if="!token">
              <Title tag="form">Контактные данные</Title>

              <p class="text-black/50 mt-2">
                Оформив заказ, вы получите доступ к личному кабинету по номеру
                телефона для управления заказом и использования персональных
                скидок
              </p>

              <FormPickup :data="checkoutRef" />
            </div>

            <!-- Адреса -->
            <div class="adreses-section" v-if="token && adreses?.length > 0">
              <Title tag="form">Адрес доставки</Title>
              <div class="adress-wrap">
                <label
                  class="adress-item"
                  v-for="item in adreses"
                  :key="item.id"
                >
                  <div class="circle"></div>
                  <input
                    type="radio"
                    required
                    name="adress"
                    :value="item.id"
                    v-model="checkoutRef.profile_client_address_id"
                  />

                  {{ item.locality }}, {{ item.index }}, {{ item.street }}
                  {{ item.house }}, кв. {{ item.flat }}
                </label>
              </div>
            </div>

            <div
              class="adreses-section"
              v-if="!token && checkoutRef.delivery_method_id != 1"
            >
              <h3 class="font-medium leading-[100%]">Адрес доставки</h3>

              <div class="flex flex-col gap-4 mt-4">
                <div class="flex flex-col gap-4">
                  <Input
                    v-model="checkoutRef.profile_client_address.locality"
                    label="Населенный пункт"
                    name="locality"
                  />
                  <Input
                    v-model="checkoutRef.profile_client_address.index"
                    label="Индекс"
                    name="index"
                  />
                </div>

                <div class="flex flex-col gap-4">
                  <Input
                    v-model="checkoutRef.profile_client_address.street"
                    label="Улица"
                    name="street"
                  />
                </div>
                <div class="flex flex-col gap-4">
                  <Input
                    v-model="checkoutRef.profile_client_address.house"
                    label="Дом"
                    name="house"
                  />
                  <Input
                    v-model="checkoutRef.profile_client_address.flat"
                    label="Квартира"
                    name="flat"
                  />
                  <Input
                    v-model="checkoutRef.profile_client_address.floor"
                    label="Этаж"
                    name="floor"
                  />
                  <Input
                    v-model="checkoutRef.profile_client_address.entrance"
                    label="Подъезд"
                    name="entrance"
                  />
                </div>
              </div>
            </div>

            <div
              class="my-14 max-[768px]:my-6 h-[1px] bg-black/10 w-full"
            ></div>

            <Title tag="form">Комментарий</Title>
            <Textarea class="mt-2" v-model="checkoutRef.comment_order">
            </Textarea>

            <Input
              v-if="checkoutRef.delivery_method_id != 1"
              v-model="checkoutRef.comment_payment"
              label="Комментарий коплате"
              name="comment_payment"
              class="mt-6"
            />
          </div>
        </div>
        <WidgetsCheckoutDrawer
          :checkout-data="checkoutRef"
          :delivery="checkedDelivery"
          :payment="checkedPayment"
        />
      </Form>
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
