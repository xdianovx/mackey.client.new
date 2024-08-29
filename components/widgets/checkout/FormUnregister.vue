<script setup>
import Input from "~/components/ui/Forms/Input.vue";
import Textarea from "~/components/ui/Forms/Textarea.vue";
import Title from "~/components/ui/Title.vue";
import {
  checkoutScheme,
  checkoutSchemePickup,
} from "~/components/widgets/checkout/checkoutYupScheme";
import Modal from "../Modal.vue";
import FormPickup from "./FormPickup.vue";

const props = defineProps(["data"]);
const { cart, checkoutResponce, checkoutErrors, loading } = storeToRefs(
  cartStore()
);
// const { getAll: getAdresses } = adresesStore();
// const { adreses } = storeToRefs(adresesStore());
const { createOrder } = cartStore();
const deliveryMethodsRef = ref({});
const paymentMethodsRef = ref({});

const config = useRuntimeConfig();

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
  profile_client_address_id: "",
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

const isModalSuccessOpen = ref(false);
const isModalErrorOpen = ref(false);

const openModal = () => {
  isModalSuccessOpen.value = true;
};

const closeModal = () => {
  isModalSuccessOpen.value = false;
};

const openErrorModal = () => {
  isModalErrorOpen.value = true;
};

const closeErrorModal = () => {
  isModalErrorOpen.value = false;
};

const getObjectFromRefById = (ref, id) => {
  return ref.value.find((item) => item.id == id);
};

const computedDeliveryMethod = computed(() => {
  return getObjectFromRefById(
    deliveryMethodsRef,
    checkoutRef.value.delivery_method_id
  );
});

const computedPaymentMethod = computed(() => {
  return getObjectFromRefById(
    paymentMethodsRef,
    checkoutRef.value.payment_method_id
  );
});

if (cart.value.total_products_price_with_discount > 60) {
  deliveryMethodsRef.value.map((item) => {
    item.price = 0;
  });
}

const validationMethod = computed(() => {
  return checkoutRef.value.delivery_method_id == 1
    ? checkoutSchemePickup
    : checkoutScheme;
});

watch(
  () => computedDeliveryMethod.value,
  (newVal) => {
    checkoutRef.value.total_price =
      +cart.value.total_products_price_with_discount + +newVal.price;
  },
  { deep: true }
);

const createNewOrder = (fromData) => {
  createOrder(
    checkoutRef.value,
    checkoutRef.value.payment_method_id,
    checkoutRef.value.delivery_method_id
  ).then(() => {
    if (checkoutResponce.value.status === "success") {
      openModal();
    } else {
      openErrorModal();
    }
  });
};
</script>

<template>
  <Modal
    v-model:isOpen="isModalSuccessOpen"
    title="Заказ успешно создан"
    type="success"
  >
    <p class="mt-4">
      Спасибо за заказа! Наш администратор свяжется с Вами в ближайшее время!
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

  <Form
    class="checkout-wrap"
    @submit="createNewOrder"
    :validation-schema="validationMethod"
  >
    <div class="left">
      <div class="container">
        <div class="top-title">
          <Title tag="h1">Оформление заказа </Title>
          <NuxtLink to="/cart" class="cart-btn">Назад</NuxtLink>
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

        <!-- Контакты -->
        <div class="contacts-section mt-14">
          <Title tag="form">Контактные данные</Title>

          <p class="text-black/50 mt-2">
            Оформив заказ, вы получите доступ к личному кабинету по номеру
            телефона для управления заказом и использования персональных скидок
          </p>

          <FormPickup :data="checkoutRef" />
        </div>

        <div class="adreses-section" v-if="checkoutRef.delivery_method_id != 1">
          <Title tag="form">Адрес доставки</Title>

          <div class="flex flex-col gap-4 mt-4">
            <div class="flex flex-col gap-4">
              <Input
                v-model="checkoutRef.profile_client_address.locality"
                label="Область и населенный пункт"
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

        <div class="my-14 max-[768px]:my-6 h-[1px] bg-black/10 w-full"></div>

        <Title tag="form">Комментарий</Title>
        <Textarea class="mt-2" v-model="checkoutRef.comment_order"> </Textarea>

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
      :delivery="computedDeliveryMethod"
      :payment="computedPaymentMethod"
      :valid="true"
    />
  </Form>
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
