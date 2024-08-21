<script setup>
import Input from "~/components/ui/Forms/Input.vue";
import Textarea from "~/components/ui/Forms/Textarea.vue";
import { Form } from "vee-validate";
import * as Yup from "yup";

const config = useRuntimeConfig();
const { isGray } = storeToRefs(useIsPageGrayStore());
const { cart, thanksData, checkoutErrors } = storeToRefs(cartStore());
const { token } = storeToRefs(authStore());
const { getAll: getAdresses } = adresesStore();
const { adreses } = storeToRefs(adresesStore());
const { createOrder } = cartStore();
const deliveryMethodsRef = ref({});
const deliveryMethodCheck = ref(0);
const paymentMethodsRef = ref({});

await $fetch(config.public.API_URL + `/order_delivery_methods`).then((res) => {
  deliveryMethodsRef.value = res;
});

await $fetch(config.public.API_URL + `/order_payment_methods`).then((res) => {
  paymentMethodsRef.value = res;
});

const closeModalHandler = () => {
  thanksData.value = "";
  navigateTo("/", { external: true });
};

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

onMounted(() => {
  checkoutRef.value = {
    total_price: cart.value.total_products_price_with_discount,
    comment_order: "",
    cart_id: cart.value.id,
    comment_payment: "",
    promocode_id: 0,
    office_post_address: "",
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
    payment_method_id: 1,
    products: cart.value.products,
  };
});

const checkedDelivery = computed(() => {
  let item = deliveryMethodsRef.value.find(
    (item) => item.id == checkoutRef.value.delivery_method_id
  );

  if (item.id === 2 && checkoutRef.value.total_price > 60) {
    deliveryMethodCheck.value = item.price;
    checkoutRef.value.total_price =
      cart.value.total_products_price_with_discount;
  } else {
    deliveryMethodCheck.value = item.price;
    checkoutRef.value.total_price =
      +deliveryMethodCheck.value +
      cart.value.total_products_price_with_discount;
  }
  return item;
});

const checkedPayment = computed(() => {
  return paymentMethodsRef.value.find(
    (item) => item.id == checkoutRef.value.payment_method_id
  );
});

if (token) {
  await getAdresses();
}

if (cart.value.products.length > 0) {
} else {
  navigateTo("/cart", { external: true });
}

const schema = Yup.object().shape({
  first_name: Yup.string().required("Обязательное поле"),
  last_name: Yup.string().required("Обязательное поле"),
  email: Yup.string().required("Обязательное поле"),
  phone: Yup.string().required("Обязательное поле"),
  flat: Yup.string().required("Обязательное поле"),
  // floor: Yup.string().required("Обязательное поле"),
  house: Yup.string().required("Обязательное поле"),
  index: Yup.string().required("Обязательное поле"),
  street: Yup.string().required("Обязательное поле"),
  // entrance: Yup.string().required("Обязательное поле"),
  locality: Yup.string().required("Обязательное поле"),
  comment_payment: Yup.string().max(30, "Максимум 30 символов"),
});

const createNewOrder = (fromData) => {
  createOrder(checkoutRef.value);
};
</script>

<template>
  <main :class="{ gray: isGray }">
    <!-- Модал -->
    <div
      v-if="thanksData"
      class="w-full h-screen absolute top-0 flex items-center justify-center left-0 z-[20] bg-black/40"
    >
      <div class="bg-white p-4 max-w-[440px] w-full rounded-xl">
        <div class="flex items-start gap-2">
          <svg
            width="24"
            height="24"
            class="shrink-0"
            viewBox="0 0 24 24"
            fill="#34C759"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.6 13.8L8.45 11.65C8.26667 11.4667 8.03333 11.375 7.75 11.375C7.46667 11.375 7.23333 11.4667 7.05 11.65C6.86667 11.8333 6.775 12.0667 6.775 12.35C6.775 12.6333 6.86667 12.8667 7.05 13.05L9.9 15.9C10.1 16.1 10.3333 16.2 10.6 16.2C10.8667 16.2 11.1 16.1 11.3 15.9L16.95 10.25C17.1333 10.0667 17.225 9.83333 17.225 9.55C17.225 9.26667 17.1333 9.03333 16.95 8.85C16.7667 8.66667 16.5333 8.575 16.25 8.575C15.9667 8.575 15.7333 8.66667 15.55 8.85L10.6 13.8ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
            />
          </svg>
          <h5 class="font-medium">{{ thanksData?.message }}</h5>
        </div>

        <UiButtonsBlack
          text="Закрыть"
          class="w-full mt-4"
          @click="closeModalHandler"
        />
      </div>
    </div>

    <section class="section">
      <Form
        class="checkout-wrap"
        @submit="createNewOrder"
        :validation-schema="schema"
      >
        <div class="left">
          <div class="container">
            <div class="top-title">
              <UiTitle tag="h1">Оформление заказа</UiTitle>

              <NuxtLink to="/cart" class="cart-btn">Назад в корзину</NuxtLink>
            </div>

            <div class="methods">
              <WidgetsCheckoutPayMethod
                :data="paymentMethodsRef"
                v-model="checkoutRef.payment_method_id"
              />
              <WidgetsCheckoutDeliveryMethod
                :data="deliveryMethodsRef"
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
                    name="first_name"
                  />

                  <Input
                    v-model="checkoutRef.client_data.last_name"
                    label="Фамилия"
                    name="last_name"
                  />
                </div>

                <div class="flex flex-col gap-4">
                  <Input
                    v-model="checkoutRef.client_data.email"
                    label="e-mail (для электронного чека)"
                    name="email"
                  />
                  <Input
                    v-model="checkoutRef.client_data.phone"
                    v-mask="'+375 (##) ###-##-##'"
                    label="Номер телефона"
                    name="phone"
                  />
                </div>
              </div>
            </div>

            <!-- Адреса -->
            <div class="adreses-section" v-if="token && adreses.length > 0">
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

            <div class="adreses-section" v-else>
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

            <div class="">
              <h3 class="font-medium leading-[100%]">Комментарий</h3>
              <Textarea
                class="mt-2"
                v-model="checkoutRef.comment_order"
              ></Textarea>
            </div>

            <div class="mt-6">
              <Input
                v-model="checkoutRef.comment_payment"
                label="Комментарий коплате"
                name="comment_payment"
              />
            </div>
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
