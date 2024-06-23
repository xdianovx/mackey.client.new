<script setup>
import { Form } from "vee-validate";
import * as Yup from "yup";

const { registerStepOne, registerStepTwo } = authStore();
const { userData } = storeToRefs(authStore());

function onSubmitPasswords(values) {
  $fetch(
    `http://45.135.234.37:80/api/v1/register_step_two/users/${responce.value.profile?.id}`,
    {
      method: "POST",
      body: values,
    }
  ).then((res) => {
    responce.value = res;
    // const token = useCookie("auth-token", registerData.access_token);
  });
}

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
        <pre
          >{{ userData }}
</pre
        >
        <div class="stepper">
          <div class="title">
            <UiTitle tag="h2" class="step-title"
              >Создание нового профиля</UiTitle
            >
          </div>

          <div class="step-1" v-if="!userData.profile?.id">
            <Form
              @submit="registerStepOne"
              :validation-schema="schema"
              class="form"
            >
              <UiFormsInput name="first_name" label="Имя" />
              <UiFormsInput label="Фамилия" name="last_name" />
              <UiFormsInput label="Номер телефона" name="phone" />
              <UiButtonsBlack
                type="submit"
                class="form-btn"
                text="Продолжить"
              />
            </Form>
          </div>

          <div class="step-2" v-else>
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
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.step {
  margin-top: 150px;
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
}

.form-btn {
  width: 100%;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 16px;
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
