<script setup>
const registerData = ref({
  first_name: "",
  last_name: "",
  gender: "",
  phone: "",
  password: "",
});

const currentStep = ref(1);

import CakeSvg from "@/assets/icons/tag/cake.svg";
import DeliverSvg from "@/assets/icons/tag/deliver.svg";
import PercentSvg from "@/assets/icons/tag/percent.svg";
import PinSvg from "@/assets/icons/tag/pin.svg";
import PromoSvg from "@/assets/icons/tag/promo.svg";
</script>

<template>
  <main>
    <section class="section-top">
      <div class="container">
        <div class="login-wrap">
          <div class="item-wrap">
            <!-- left -->
            <div class="item-left">
              <UiTitle tag="h2">Войти в профиль</UiTitle>
              <!-- <WidgetsLoginForm /> -->
            </div>

            <div class="div"></div>

            <div class="create-profile">
              <UiTitle tag="h2">Нет профиля?</UiTitle>
              <p class="subtitle">
                Пройдите быструю регистрацию и получите доступ к персональной
                скидке и скидке ко дню рождения
              </p>

              <div class="tag-wrap">
                <UiProfileTag :icon="PercentSvg" text="Персональная скидка" />
                <UiProfileTag :icon="CakeSvg" text="Скидка ко дню рождения" />
                <UiProfileTag :icon="PromoSvg" text="Промокоды" />
                <UiProfileTag :icon="DeliverSvg" text="Отслеживание заказов" />
                <UiProfileTag :icon="PinSvg" text="Сохранённые адреса" />
              </div>

              <UiButtonsBlack
                link="/register"
                text="Создать аккаунт"
                class="create-account-btn"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.section-top {
  margin-top: 100px;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 40px;
  input {
    border: 1px solid rgba($bgBlack, 0.3);
    padding: 14px 20px;
  }
}

.form-wrap {
  margin: 0 auto;
  width: 100%;
}

.form-step {
  display: flex;
  flex-direction: column;
  gap: 12px;
  input {
    border-radius: 12px;
  }
}

.tag-wrap {
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  gap: 4px;
}

.item-wrap {
  display: flex;
  .div {
    height: 484px;
    width: 1px;
    background: rgba($bgBlack, 0.2);
    margin: 0 auto;
  }
}

.item-left {
  max-width: 484px;
  width: 100%;
}

.create-profile {
  max-width: 664px;
  width: 100%;
}
.subtitle {
  margin-top: 32px;
  font-size: 20px;
  font-style: normal;
  color: $textGray;
  font-weight: 600;
  line-height: 150%; /* 30px */
}

.create-account-btn {
  margin-top: 32px;
  max-width: 400px;
  width: 100%;
}
</style>
