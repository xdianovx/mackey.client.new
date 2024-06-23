<script setup>
import { Form } from "vee-validate";
import * as Yup from "yup";
</script>

<template>
  <div class="nopropfile">
    <UiTitle tag="h2">Нет профиля?</UiTitle>

    <p class="noprofile__description">
      Пройдите быструю регистрацию и получите доступ к персональной скидке и
      скидке ко дню рождения
    </p>

    <div class="tags">
      <UiProfileTag text="Персональная скидка" />
      <UiProfileTag text="Скидка ко дню рождения " />
      <UiProfileTag text="Промокоды " />
      <UiProfileTag text="Отслеживание заказов " />
      <UiProfileTag text="Сохранённые адреса " />
    </div>

    <UiButtonsBlack
      text="Создать аккаунт"
      class="register-link"
      link="/register"
    />
  </div>
</template>

<style lang="scss" scoped>
.nopropfile {
}

.noprofile__description {
  margin-top: 32px;
  color: rgba($bgBlack, 0.5);
  font-size: 20px;
  font-weight: 600;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  margin-top: 24px;
  gap: 8px;
}

.register-link {
  margin-top: 48px;
  max-width: 440px;
  width: 100%;
}
</style>
