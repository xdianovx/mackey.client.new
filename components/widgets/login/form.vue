<script setup>
import { Form } from "vee-validate";
import * as Yup from "yup";

import { useAuth } from "~/composables/useAuth";
const { login } = authStore();

// const { login, fetchUser } = useAuth();
const { user } = storeToRefs(useAuth());
const schema = Yup.object().shape({
  phone: Yup.string()
    .transform((value) => value.replace(/[^\d+]/g, ""))
    .required("Обязательное поле"),
  password: Yup.string().required("Обязательное поле"),
});
</script>

<template>
  <div>
    <UiTitle tag="h2">Войти</UiTitle>

    <Form @submit="login" :validation-schema="schema" class="login-form">
      <UiFormsInput
        type="tel"
        name="phone"
        label="Телефон"
      />
      <UiFormsInput type="password" name="password" label="Пароль" />
      <!-- <UiFormsRememberMe /> -->
      <UiButtonsWhite text="Войти" />
    </Form>
    <!-- 
    <UiFormsErrorItem v-if="loginError"
    >
      >Неверный логин или пароль</UiFormsErrorItem  -->

    {{ user }}
  </div>
</template>

<style lang="scss" scoped>
.login-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 32px;
}

.error-msg {
  border: 1px solid #ff3b30;
  background: white;
  padding: 8px 12px;
  color: #ff3b30;
  border-radius: 8px;
  margin-top: 16px;
}
</style>
