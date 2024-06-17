<script setup>
const registerData = ref({
  first_name: "",
  last_name: "",
  gender: "",
  phone: "",
  password: "",
});

const currentStep = ref(1);

// const handleSubmit = () => {
//   $fetch("http://45.135.234.37:80/api/v1/register_step_one", {
//     method: "POST",
//     body: registerData.value,
//   }).then((res) => console.log(res));
// };

const checkSteps = () => {
  if (registerData.value.first_name.length > 0) {
    currentStep.value = 2;
  } else if (registerData.value.phone.length > 0) {
    currentStep.value = 2;
  }
};
</script>

<template>
  <main>
    <section class="section-top">
      <div class="container">
        <div class="login-wrap">
          <div class="login-left">
            <UiTitle tag="h2">Войти в профиль</UiTitle>

            <div class="form-wrap">
              <pre>

                {{ registerData }}
              </pre>

              <form action="" class="login-form" @submit.prevent="handleSubmit">
                <div class="step-1 form-step" v-if="currentStep == 1">
                  <input
                    type="text"
                    placeholder="Имя"
                    v-model="registerData.first_name"
                  />
                  <input
                    type="text"
                    placeholder="Фамилия"
                    v-model="registerData.last_name"
                  />

                  <input
                    type="text"
                    placeholder="Пол"
                    v-model="registerData.gender"
                  />
                  <UiButtonsBlack text="Продолжить" @click="checkSteps" />
                </div>

                <div class="step-2 form-step" v-if="currentStep == 2">
                  <input
                    type="text"
                    placeholder="Телефон"
                    v-model="registerData.phone"
                  />

                  <button>Подтвердить телефон</button>
                  <UiButtonsBlack text="Продолжить" @click="checkSteps" />
                </div>

                <div class="step-3 form-step" v-if="currentStep == 3">
                  <input
                    type="text"
                    placeholder="Пароль"
                    v-model="registerData.phone"
                  />

                  <button>Подтвердить телефон</button>
                  <UiButtonsBlack text="Продолжить" @click="checkSteps" />
                </div>
              </form>
            </div>
          </div>
          <div class="login-right">asd</div>
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
  max-width: 420px;
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
</style>
