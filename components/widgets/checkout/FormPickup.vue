<script setup>
import Input from "~/components/ui/Forms/Input.vue";

const props = defineProps(["data"]);
</script>

<template>
  <div class="flex flex-col gap-4 mt-4">
    <div class="flex flex-col gap-4">
      <Input
        v-model="data.client_data.first_name"
        label="Имя"
        name="first_name"
      />
      <Input
        v-model="data.client_data.patronymic_name"
        label="Отчество"
        name="patronymic_name"
      />

      <Input
        v-model="data.client_data.last_name"
        label="Фамилия"
        name="last_name"
      />
    </div>

    <div class="flex flex-col gap-4">
      <Input
        v-model="data.client_data.email"
        label="e-mail (для электронного чека)"
        name="email"
      />
      <Input
        v-model="data.client_data.phone"
        label="Номер телефона"
        name="phone"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
