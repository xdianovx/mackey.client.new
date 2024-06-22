<script setup></script>

<template>
  <div>
    <!-- <pre>
      {{ form }}
    </pre> -->
    <form
      @submit="onSubmit"
      :validation-schema="schema"
      @invalid-submit="onInvalidSubmit"
      class="login-form"
    >
      <div class="form">
        <UiFormsInput v-model="form.phone" type="number" label="Телефон" />
        <UiFormsInput v-model="form.password" type="password" label="Пароль" />
        <UiFormsRememberMe />
        <UiButtonsWhite text="Войти" />
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 32px;
}
</style>
