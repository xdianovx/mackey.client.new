<script setup>
import { Form } from "vee-validate";
import * as Yup from "yup";

definePageMeta({
  middleware: ["is-logged-in"],
});

const { registerStepOne, registerStepTwo } = authStore();
const { userData, emailError, isLoading, smsError, phoneExistError } =
  storeToRefs(authStore());

const schema = Yup.object().shape({
  first_name: Yup.string().required("Обязательное поле"),
  last_name: Yup.string().required("Обязательное поле"),
  phone: Yup.string().required("Обязательное поле"),
});

const schemaPasswords = Yup.object().shape({
  email: Yup.string().email("Непправильная почта").required(),
  password: Yup.string().min(6, "Минимум 8 символов").required(),
  password_confirmation: Yup.string()
    .required("Обязательное поле")
    .oneOf([Yup.ref("password")], "Пароли не совпадают"),
});
</script>

<template>
  <main>
    <section class="step">
      <div class="container">
        <div class="stepper" :class="{ muted: isLoading }">
          <div class="title">
            <UiTitle tag="h2" class="step-title"
              >Создание нового профиля
            </UiTitle>
          </div>

          <div class="step-1" v-if="!userData?.phone_confirmed">
            <Form
              @submit="registerStepOne"
              :validation-schema="schema"
              class="form"
            >
              <UiFormsInput name="first_name" label="Имя" />
              <UiFormsInput label="Фамилия" name="last_name" />
              <UiFormsInput
                label="Номер телефона"
                name="phone"
                v-mask="'+375 (##) ###-##-##'"
                placeholder="+375 (__) ___ __ __"
              />
              <UiButtonsBlack
                type="submit"
                class="form-btn"
                text="Продолжить"
              />
            </Form>

            <UiFormsErrorItem v-if="smsError?.messagе">
              Этот номер уже зарегестирован в системе
            </UiFormsErrorItem>

            <UiFormsErrorItem v-if="smsError?.error">
              {{ smsError?.error }}
            </UiFormsErrorItem>

            <UiRegisterPhoneConfirmation v-if="userData?.profile" />
          </div>

          <div class="step-2" v-if="userData?.phone_confirmed">
            <Form
              @submit="registerStepTwo"
              :validation-schema="schemaPasswords"
              class="form"
            >
              <UiFormsInput label="Email" type="email" name="email" />

              <UiFormsInput
                label="Придумайте пароль для входа"
                type="password"
                name="password"
              />

              <UiFormsInput
                label="Повторите пароль"
                type="password"
                name="password_confirmation"
              />

              <UiButtonsBlack
                type="submit"
                class="form-btn"
                text="Продолжить"
              />
            </Form>

            <div class="errors">
              <UiFormsErrorItem v-if="smsError?.error?.phone">
                Этот номер уже зарегестирован в системе
              </UiFormsErrorItem>
              <UiFormsErrorItem v-if="emailError?.error?.email">
                Такой e-mail уже зарегестирован
              </UiFormsErrorItem>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.step {
  margin-top: 150px;
  margin-bottom: 80px;

  .container {
    height: 100%;
  }
}

.title {
  text-align: center;
  width: 100%;
  margin-bottom: 32px;
}

.stepper {
  height: 100%;
  max-width: 440px;
  width: 100%;
  margin: 0 auto;
  transition: opacity 0.2s ease-in-out;

  &.muted {
    opacity: 0.3;
    pointer-events: none;
  }
}

.form-btn {
  width: 100%;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.error {
  margin-top: 8px;
  padding: 12px 16px 11px;
  border-radius: 8px;
  background: rgba($bgRed, 0.1);
  line-height: 100%;
  border: 1px solid $bgRed;
  color: $bgRed;
}

@media screen and (max-width: 1200px) {
  .step {
    margin-top: 80px;
  }
}

@media screen and (max-width: 768px) {
  .step {
    margin-top: 80px;
  }

  .step-title {
    font-size: 18px;
  }
}
</style>
