<script setup>
const { confirmPhone } = authStore();
const { userData, phoneConfirmationError } = storeToRefs(authStore());
const confirmationRef = ref({
  message_code: "",
});
</script>

<template>
  <div class="item">
    <UiFormsInput
      v-model="confirmationRef.message_code"
      placeholder="Код из смс"
    />
    <UiButtonsBlack
      text="Подтвердить"
      @click="confirmPhone(userData?.id, confirmationRef)"
    />
  </div>

  <div v-if="phoneConfirmationError" class="error">Неверный код</div>
</template>

<style lang="scss" scoped>
.item {
  margin-top: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.error {
  color: $textRed;
}
</style>
