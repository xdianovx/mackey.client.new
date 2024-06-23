<script setup>
const { login } = authStore();
import { Form } from "vee-validate";
import * as Yup from "yup";

const schema = Yup.object().shape({
  phone: Yup.string().required("Обязательное поле"),
  password: Yup.string().required("Обязательное поле"),
});
</script>

<template>
  <div>
    <UiTitle tag="h2">Войти</UiTitle>
    <Form @submit="login" :validation-schema="schema" class="login-form">
      <UiFormsInput type="text" name="phone" label="Телефон" />
      <UiFormsInput type="password" name="password" label="Пароль" />
      <UiFormsRememberMe />
      <UiButtonsWhite text="Войти" />
    </Form>
  </div>
</template>

<style lang="scss" scoped>
.login-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 32px;
}
</style>
